import dataBase from '@/server/dataBase';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown';

    try {
        let coins: number | null = Number(await dataBase.getDataAdminTable('coins'));

        coins += 5;

        const level: number = dataBase.levelUp(coins);

        await dataBase.updateDataAdminTable('coins', String(coins));
        await dataBase.updateDataAdminTable('level', String(level));

        if ([20, 40, 60, 80].includes(level)) {
            await dataBase.achievedLevelAchieve(String(level));
        }

        console.log(`User ${ip} added coins`);

        return NextResponse.json({
            level: level,
            coins: coins,
        });
    } catch (error) {
        console.log(`User ${ip} was unable to add coins`);
        return NextResponse.json(false);
    }
}
