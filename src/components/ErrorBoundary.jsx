import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="section-top px-8 pb-20 text-center">
          <h1 className="text-3xl font-bold text-cream mb-4">Something went wrong</h1>
          <p className="text-muted mb-8">Please refresh the page or try again later.</p>
          <a href="/" className="btn-primary inline-block">Back to Home</a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
