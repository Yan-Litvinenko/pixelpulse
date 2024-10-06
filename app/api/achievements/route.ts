import dataBase from '@/server/dataBase';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse> {
    try {
        const achievements = await dataBase.getAchievements();
        return NextResponse.json(achievements);
    } catch (error) {
        return NextResponse.json([]);
    }
}
