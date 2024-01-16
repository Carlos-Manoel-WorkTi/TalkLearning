
import { ReactNode } from "react";
import { Container } from "./style";

interface ChatProps {
  children: ReactNode;
}

export default function Chat({ children }: ChatProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}
