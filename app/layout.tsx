import FluxoraAIWidget from '@/components/FluxoraAIWidget';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <FluxoraAIWidget sessionId="global-session" />
      </body>
    </html>
  );
}
