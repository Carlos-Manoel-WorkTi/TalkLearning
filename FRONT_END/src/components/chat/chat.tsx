import { ReactNode, useRef, useEffect } from "react";
import { Container } from "./style";

interface ChatProps {
  children: ReactNode;
}

export default function Chat({ children }: ChatProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll para a parte inferior do container quando uma nova mensagem é adicionada
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <Container ref={chatContainerRef}>
      {children}
    </Container>
  );
}
