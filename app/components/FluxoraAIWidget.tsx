'use client';

import { useState } from 'react';

export default function FluxoraAIWidget({
  sessionId,
}: {
  sessionId: string;
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');

  async function sendMessage() {
    const res = await fetch('/api/ai-brain/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: input,
        sessionId,
      }),
    });

    const data = await res.json();

    setMessages([
      ...messages,
      { role: 'user', text: input },
      { role: 'ai', text: data.reply },
    ]);

    setInput('');
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
      }}
    >
      {open && (
        <div
          style={{
            width: 300,
            height: 400,
            background: '#111',
            color: '#fff',
            padding: 10,
          }}
        >
          <div
            style={{
              height: 320,
              overflowY: 'auto',
            }}
          >
            {messages.map((m, i) => (
              <p key={i}>
                <b>{m.role}:</b> {m.text}
              </p>
            ))}
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              width: '100%',
            }}
          />

          <button onClick={sendMessage}>
            Enviar
          </button>
        </div>
      )}

      <button onClick={() => setOpen(!open)}>
        IA
      </button>
    </div>
  );
}
