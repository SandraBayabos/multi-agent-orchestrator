import {
  MultiAgentOrchestrator,
  BedrockLLMAgent,
  LexBotAgent,
} from "multi-agent-orchestrator";

const orchestrator = new MultiAgentOrchestrator();

orchestrator.addAgent(
  new BedrockLLMAgent({
    name: "Tech Agent",
    description:
      "Specializes in technology areas including software development, hardware, AI, cybersecurity, blockchain, cloud computing, emerging tech innovations, and pricing/costs related to technology products and services.",
    streaming: true,
  })
);
