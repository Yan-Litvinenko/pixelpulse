import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse<string>> {
    const serverTime = new Date();
    return NextResponse.json(serverTime.toISOString());
}
