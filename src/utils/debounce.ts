const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    wait: number,
): T => {
    let timeout: NodeJS.Timeout | null;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);
    } as T;
};

export { debounce };
