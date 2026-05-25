'use client';

import { useState } from 'react';

export default function FluxoraAIWidget({
  sessionId,
}: {
  sessionId: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
      }}
    >
      <button onClick={() => setOpen(!open)}>
        IA
      </button>

      {open && (
        <div
          style={{
            width: 300,
            height: 200,
            background: '#111',
            color: '#fff',
            padding: 10,
          }}
        >
          Fluxora AI Brain
        </div>
      )}
    </div>
  );
}
