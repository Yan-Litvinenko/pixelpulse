export default function stopPropagation<T>(event: React.MouseEvent<T>): void {
    event.stopPropagation();
}
