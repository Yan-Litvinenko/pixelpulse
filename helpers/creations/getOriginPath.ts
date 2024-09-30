export default function isOriginPath(path: string): boolean {
    return path.replace('/creations', '').length === 0;
}
