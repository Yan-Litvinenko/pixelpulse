import React from 'react';
import { ErrorBoundaryPage } from '../components/errorPage/ErrorBoundaryPage';

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error): void {
        console.error('Uncaught error:', error);
        this.setState({ error });
    }

    handleReload = (): void => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <ErrorBoundaryPage
                        status={'app error'}
                        detail={'An unknown error has occurred'}
                        reset={this.handleReload}
                    />
                </>
            );
        }

        return this.props.children;
    }
}

export { ErrorBoundary };
