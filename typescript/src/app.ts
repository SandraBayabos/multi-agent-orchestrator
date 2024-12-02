import {
  MultiAgentOrchestrator,
  BedrockLLMAgent,
  LexBotAgent,
} from "multi-agent-orchestrator";

const orchestrator = new MultiAgentOrchestrator();

// Add a Bedrock LLM Agent with Converse API support
orchestrator.addAgent(
  new BedrockLLMAgent({
    name: "Tech Agent",
    description:
      "Specializes in technology areas including software development, hardware, AI, cybersecurity, blockchain, cloud computing, emerging tech innovations, and pricing/costs related to technology products and services.",
    streaming: true,
  })
);

// Add a Lex Bot Agent for handling travel-related queries
orchestrator.addAgent(
  new LexBotAgent({
    name: "Travel Agent",
    description: "Helps users book and manage their flight reservations",
    botId: "lexAgent_id",
    botAliasId: "lexAgent_alias_id",
    localeId: "en_US",
  })
);

export { orchestrator };
