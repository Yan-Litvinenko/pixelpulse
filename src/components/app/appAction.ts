import { ActionFunctionArgs } from 'react-router-dom';
import { IAddCoinResult } from '../../interfaces/interface.loader';

const addCoin = async (): Promise<IAddCoinResult> => {
    console.log('function add coin work');
    const response: Response = await fetch('/addCoin', { method: 'POST' });
    const result: IAddCoinResult = await response.json();

    console.log('result add:', result);

    return result;
};

const appAction = async ({ request }: ActionFunctionArgs) => {
    const formData: FormData = await request.formData();
    const intent: FormDataEntryValue | null = formData.get('intent');

    if (intent === 'coin') {
        const addResult: IAddCoinResult = await addCoin();

        return addResult;
    }

    throw new Error(JSON.stringify({ message: 'Error react-routing action', status: 400 }));
};

export { appAction };
