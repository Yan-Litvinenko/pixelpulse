import dataBase from '@/server/dataBase';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
    try {
        const LEVEL: string | null = await dataBase.getDataAdminTable('level');

        return NextResponse.json(LEVEL);
    } catch (error) {
        return NextResponse.json(null);
    }
}
