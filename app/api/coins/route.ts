import dataBase from '@/server/dataBase';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
    try {
        const coins: string | null = await dataBase.getDataAdminTable('coins');
        return NextResponse.json(coins);
    } catch (error) {
        return NextResponse.json(null);
    }
}
