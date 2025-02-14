import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props,State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(): State {
    return{ hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo:
    ErrorInfo) {
      console.error('Uncaught error:' , error, errorInfo);
    }
  
    public render() {
      if (this.state.hasError) {
        return this.props.fallback || (
          <div className="p-4 text-center">
            <h2 className="text-xl text-white">Something went wrong.</h2>
          </div>

        );
      }

      return this.props.children;
    }
  }



