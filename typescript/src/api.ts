import express from "express";
import bodyParser from "body-parser";
import { orchestrator } from "./app";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/api/query", async (req, res) => {
  const { userInput, userId, sessionId } = req.body;

  try {
    const response = await orchestrator.routeRequest(
      userInput,
      userId,
      sessionId
    );
    if (response.streaming) {
      let fullResponse = "";
      for await (const chunk of response.output) {
        fullResponse += chunk;
      }
      res.send({ output: fullResponse });
    } else {
      res.send(response.streaming);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
