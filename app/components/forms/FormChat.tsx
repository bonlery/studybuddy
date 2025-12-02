"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { UserRound, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

type FormChatProps = {
    setIsChatting: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
};

export default function FormChat({ setIsChatting, className }: FormChatProps) {
    // AI SDK
    const { messages, sendMessage } = useChat({
        onError: (error) => {
            console.log("error: ", error);
            setError(error.toString());
        },
    });

    // States
    const [error, setError] = useState("");
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Ref for auto-scrolling
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Functions
    function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            // trigger
            const form = e.currentTarget.form;
            if (form && input.trim()) {
                form.requestSubmit();
            }
        }
    }

    async function handleChat(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input) return;

        try {
            setIsChatting(true);

            setIsLoading(true);
            await sendMessage({ text: input });
            setInput("");
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log("error: ", error);
                setError(error.message);
            } else {
                setError(String(error));
            }
        } finally {
            setIsLoading(false);
        }
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className={`w-full max-w-[60.5rem] ${className}`}>
            {/* Message Display Area */}
            {messages && messages.length > 0 && (
                <div className="flex flex-col gap-1 w-full h-[60vh] overflow-y-auto custom-scroll">
                    {messages.map((message) => (
                        <div
                            data-loading={isLoading}
                            key={message.id}
                            className="flex gap-3 p-2"
                        >
                            {message.role === "user" ? (
                                <div className="flex items-center justify-center w-10 h-10 bg-[var(--default)] text-[var(--background)] border rounded-full aspect-square">
                                    <UserRound />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center w-10 h-10 bg-[var(--default)] text-[var(--background)] border rounded-full aspect-square">
                                    <Bot />
                                </div>
                            )}

                            {message.parts.map((part, i) => {
                                if (part.type === "text") {
                                    return (
                                        <div
                                            key={`${message.id}-${i}`}
                                            className="flex flex-col items-center p-3 bg-[var(--default)] rounded-md text-[var(--background)]"
                                        >
                                            <div className="[&>p]:mb-3 [&>p]:last:mb-0 [&>ul]:mb-4 [&>ul>li]:list-disc [&>ul>li]:ml-5 [&>ol>li]:list-decimal [&>ol>li]:ml-5">
                                                <ReactMarkdown>
                                                    {part.text}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            )}

            {/* Sticky Form */}
            <form
                data-loading={isLoading}
                onSubmit={(e) => handleChat(e)}
                className="sticky bottom-8 w-full bg-[var(--background)] pt-4"
            >
                <div className="form-control">
                    <textarea
                        name="message"
                        placeholder="What do you want to know?"
                        className="w-full p-2 border rounded resize-none"
                        onKeyDown={handleKeyDown}
                        value={input}
                        onChange={(e) => setInput(e.currentTarget.value)}
                    ></textarea>
                </div>

                {error && <div className="alert alert--error">{error}</div>}

                <div className="flex justify-center mt-2 w-full">
                    <button
                        type="submit"
                        className="button button--default w-full"
                    >
                        {isLoading ? "Thinking..." : "Send"}
                    </button>
                </div>
            </form>
        </div>
    );
}
