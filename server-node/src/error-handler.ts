import { FastifyInstance } from "fastify";

type FastifyErrorHandler = FastifyInstance["errorHandler"];

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  return reply.status(500).send({ message: "erro" });
};
