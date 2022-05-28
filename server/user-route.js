const { PrismaClient } = require("./prisma/client");
const prisma = new PrismaClient();
const sha256 = require("crypto-js/sha256");

async function routes(fastify, options) {
  fastify.post("/users/signup", async (request, reply) => {
    try {
      const user = await prisma.user.create({
        data: {
          name: request.body.name,
          username: request.body.username,
          password: sha256(request.body.password).toString(),
        },
      });
      reply.send(user);
    } catch (error) {
      if(error.code === "P2002"){
        reply.code(400);
        reply.send({
          error: "Username is already taken"
        })
      }
    }
  });

  fastify.post("/users/login", async (request, reply) => {
    const user = await prisma.user.findFirst({
      where: {
        username: request.body.username,
        password: sha256(request.body.password).toString(),
      },
    });
    if (user !== null) {
      reply.send(user);   
    } else {
      reply.code(400);
      reply.send({
        error: "Invalid Username or Password"
      })
    }
  });
}

module.exports = routes;
