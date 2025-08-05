import express, { Express } from "express";
import cors from "cors";
import { PrismaClient } from "./generated/prisma";

const app: Express = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));

const prisma = new PrismaClient();
app.get("/user", async (_, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.json({ error });
  } finally {
    await prisma.$disconnect();
  }
});


// import routes
import healthRoute from "./routes/health.route";
// use route
app.use("/health", healthRoute);
export default app;
