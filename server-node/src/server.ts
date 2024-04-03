import fastify from "fastify";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import { generateSlug } from "./utils/generate-slug";

const app = fastify();

const prisma = new PrismaClient({
  log: ["query"],
});

app.post("/events", async (request, reply) => {
  const createEventSchema = z.object({
    title: z.string().min(4),
    details: z.string().nullable(),
    maximumAttendees: z.number().int().positive().nullable(),
  });

  const data = createEventSchema.parse(request.body);

  const slug = generateSlug(data.title);

  const eventWithSameSlug = await prisma.event.findUnique({
    where: {
      slug,
    },
  });

  if (eventWithSameSlug) {
    throw new Error("Another event with same title aldready exist");
  }

  const event = await prisma.event.create({
    data: {
      ...data,
      slug,
    },
  });

  return reply.status(201).send({ event });
});

app.listen({ port: 3333 }).then(() => console.log("Server running..."));
