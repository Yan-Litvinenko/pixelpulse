import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const TOKEN: string | undefined = process.env.REACT_APP_TELEGRAM_TOKEN;
const CHAT_ID: string | undefined = process.env.REACT_APP_TELEGRAM_CHAT;

export async function POST(req: NextRequest): Promise<
    | NextResponse<string>
    | NextResponse<{
          error: string;
      }>
> {
    const { data, windowName } = await req.json();

    const formattedMessage: string = Object.entries(data)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');

    const message: string = `${windowName}\n${formattedMessage}`;

    try {
        const response: Response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
            }),
        });

        const result: string = await response.json();

        if (response.ok) {
            return NextResponse.json(result);
        } else {
            return NextResponse.json({ error: 'Failed to send message' }, { status: 400 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
