import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<string>> {
    const serverTime = new Date();
    return NextResponse.json(serverTime.toISOString());
}
