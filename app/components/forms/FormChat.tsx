"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function FormChat() {
  //AI SDK
  const { messages, sendMessage } = useChat({
    onError: (error) => {
      console.log("error", error);
      setError(error.toString());
    },
  });
  //States
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle Enter key
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form && input.trim()) form.requestSubmit();
    }
  }

  async function handleChat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input) return;
    try {
      setIsLoading(true);
      await sendMessage({ text: input });
    } catch (error: any) {
      console.log("error");
      setError(error.toString());
    } finally {
    }
  }

  return (
    <form
      onSubmit={(e) => handleChat(e)}
      data-loading={isLoading}
      className="flex flex-col w-full max-w-md gap-5 p-4 mx-auto border border-white rounded"
    >
      <div>
        <textarea
          name="message"
          placeholder="What do you want to know?"
          onKeyDown={handleKeyDown}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex w-full p-2 border-none rounded focus:border-none focus:outline-none"
        ></textarea>
      </div>

      {error && <div className="text-red-600">{error}</div>}

      <div className="flex self-end">
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {isLoading ? "Thinking..." : "Send"}
        </button>
      </div>
    </form>
  );
}
