import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "http://192.168.251.212:5555/v1",
  apiKey: "EMPTY",
});

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  console.log("on server");
  const { messages, model } = req.body;
  console.log(messages, model);
  const completion = await openai.chat.completions.create({ messages, model });
  console.log(completion.data);
  res.status(200).send(completion);
});

app.listen(3000, () => {
  console.log("Listening on pirt 200");
});
