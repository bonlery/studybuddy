import { google } from "@ai-sdk/google";
import { streamText, convertToModelMessages } from "ai";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getServerSession();

  const user = session?.user;
  const name = user?.name || "Guest";

  const { messages } = await req.json();
  const lastUserMessage = messages[messages.length - 1]?.content ?? "";

  //AI
  let ragContent = "";

  if (session) {
    //nope
  }

  //default
  //create a prompt
  const systemPrompt = !session
    ? "You are StudyBuddy, a friendly virtual tutor. The user is not logged in, so politely explain that signing in will unlock - Personalised tutoring and chat experience - Answer based on their uploaded documnets -"
    : "";

  const result = streamText({
    model: google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    system: systemPrompt,
    maxOutputTokens: session ? 1000 : 300,
  });

  return result.toUIMessageStreamResponse();
}
