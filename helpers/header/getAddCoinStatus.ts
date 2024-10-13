import getValueToLocalStorage from '@/helpers/getValueToLocalStorage';

export default function getAddCoinStatus(): boolean {
    const lastAdded: number = getValueToLocalStorage<number>(
        process.env.NEXT_PUBLIC_API_ADD_COINS_STATUS!,
        new Date().getTime(),
    );
    const now: Date = new Date();

    return now.getTime() - lastAdded > 86_400_000;
}
