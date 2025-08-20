import dotenv from "dotenv";

dotenv.config();

import { PrismaClient } from "../generated/prisma";

export const prismaClient = new PrismaClient();
