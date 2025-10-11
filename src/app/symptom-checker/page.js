"use client";
import { useState } from "react";

function UrgencyBadge({ level }) {
  const colors = {
    Mild: "bg-green-100 text-green-700",
    Moderate: "bg-yellow-100 text-yellow-800",
    Critical: "bg-red-100 text-red-700",
  };
  return (
    <span className={`px-2 py-0.5 rounded text-xs ${colors[level] || "bg-gray-100 text-gray-700"}`}>
      {level || "Unknown"}
    </span>
  );
}

export default function SymptomCheckerPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Describe your symptoms and I’ll suggest next steps." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    // Placeholder AI reply
    const aiMsg = { role: "assistant", content: "Possible: Common cold. Urgency: Mild. Related: Hydration, rest, and OTC medication." };
    setMessages((m) => [...m, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-[70vh] gap-4">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">AI Symptom Checker</h1>
        <p className="text-sm text-foreground/70">This is a UI stub. Hook up your API to power real responses.</p>
      </header>
      <div className="rounded-lg border p-4 overflow-auto space-y-3">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-lg p-3 text-sm ${m.role === "user" ? "bg-black text-white dark:bg-white dark:text-black" : "bg-gray-50 dark:bg-white/5"}`}>
              <div className="mb-1 text-foreground/60 text-xs">{m.role === "user" ? "You" : "Assistant"}</div>
              <div>{m.content}</div>
              {m.role === "assistant" && (
                <div className="mt-2">
                  <UrgencyBadge level="Mild" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your symptoms..."
          className="flex-1 rounded-md border px-3 py-2 text-sm"
        />
        <button onClick={send} className="rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-2 text-sm">Send</button>
        <button className="rounded-md border px-3 py-2 text-sm">Export PDF</button>
      </div>
    </div>
  );
}
