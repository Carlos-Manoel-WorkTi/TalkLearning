import { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  border-radius: 5px;
  width: 100vw;
  height: 95vh;
  margin: 0;

`;

const ErrorMessage = styled.div`
  background-color: #ffcccc;
  color: #f35252;
  padding: 10px;
  border: 1px solid #a70202;
  border-radius: 5px;
  margin-bottom: 10px;

  a{
    text-decoration: none;
    color: #0d218e;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;


interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Aqui você pode logar o erro ou realizar outras ações
    console.error('Erro capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
            <ErrorMessage>
              Algo deu errado. Por favor, recarregue a página ou entre em contato com o suporte. <a href="#">Clique aqui.</a>
            </ErrorMessage>
        </Container>
      
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
