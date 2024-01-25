import { ReactNode, useRef, useEffect } from "react";
import { Messages } from "../Messages/style"

interface ChatProps {
  children: ReactNode;
}

export default function Message({ children }: ChatProps) {
    

  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      console.log(children);
    // Scroll para a parte inferior do container quando uma nova mensagem é adicionada
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    
  }, [children]);

  return (
    <Messages ref={chatContainerRef}>
      
      {children}
    </Messages>
  );
}
