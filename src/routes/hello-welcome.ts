import { genAIResponse, type Message } from "../utils/ai";

export default async function generateChatSession() {
  // Step 1: User says hello
  const userMessage: Message = {
    id: "1",
    role: "user",
    content: "Hello",
  };

  // Step 2: Get chatbot reply
  const aiResponse = await genAIResponse({
    data: {
      messages: [userMessage],
    },
  });

  // Read the AI response stream and get the full reply
  let reply = "";
  if (aiResponse.body) {
    const reader = aiResponse.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      const { value, done: streamDone } = await reader.read();
      done = streamDone;
      if (value) {
        try {
          const json = JSON.parse(decoder.decode(value));
          if (json.type === "content_block_delta") {
            reply += json.delta.text;
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
    }
  }

  const aiMessage: Message = {
    id: "2",
    role: "assistant",
    content: reply || "How can I help you?",
  };

  return new Response(
    JSON.stringify({
      messages: [userMessage, aiMessage],
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
