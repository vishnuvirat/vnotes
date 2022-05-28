const { PrismaClient } = require("./prisma/client");
const prisma = new PrismaClient();
const fastify = require("fastify");

const server = fastify({
  logger: true,
});

server.register(require("@fastify/cors"));

server.register(require("./user-route"));

server.get("/notes", async (request, reply) => {
  const notes = await prisma.note.findMany({
    where: request.query.user
      ? {
          user: {
            id: request.query.user,
          },
        }
      : undefined,
  });
  reply.send(notes);
});

server.get("/notes/:note", async (request, reply) => {
  const note = await prisma.note.findFirst({
    where: {
      id: request.params.note,
    },
  });
  reply.send(note);
});

server.post("/notes", async (request, reply) => {
  const note = await prisma.note.create({
    data: {
      title: request.body.title,
      content: request.body.content,
      user: {
        connect: {
          id: request.body.userId,
        },
      },
    },
  });
  reply.send(note);
});

server.patch("/notes/:note", async (request, reply) => {
  const note = await prisma.note.update({
    where: {
      id: request.params.note,
    },
    data: {
      title: request.body.title,
      content: request.body.content,
    },
  });

  reply.send(note);
});

server.delete("/notes/:note", async (request, reply) => {
  await prisma.note.delete({
    where: {
      id: request.params.note,
    },
  });
  reply.send();
});

module.exports = server;
