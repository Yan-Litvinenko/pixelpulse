export type LogsElementProps = {
    className: string;
    textContent: string;
    date: string;
};

export type UpdateItem = {
    title: 'project update' | 'challenges' | 'next steps' | 'conclusion';
    text: string;
};
