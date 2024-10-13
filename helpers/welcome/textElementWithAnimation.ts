export default function textWithPipeAnimated(currentText: string, condition: boolean): string {
    return `${currentText} ${condition ? '|' : ''}`;
}
