import express from "express";
import type { Express, Request, Response } from "express";
import { connect } from "mongoose";
import { PORT, MONGO_URI } from "./constants";
import { authRouter } from "./routes/auth.router";

const connectDB = async () => {
  try {
    await connect(MONGO_URI);
    console.log("MongoDB connected successfull.");
  } catch (error) {
    //console.error('Error:', error);
    throw error;
  }
};

async function main() {
  await connectDB();

  const app: Express = express();

  app.use(express.json());
  app.use("/api/auth", authRouter);

  app.get("/", async (req: Request, res: Response) => {
    res.send("API in docker container");
  });

  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

main();
