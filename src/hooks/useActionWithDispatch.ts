import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

type ActionFunc<K> = (payload: K) => { type: string; payload: K };

const useActionWithDispatch = <T>(action: ActionFunc<T>) => {
    const dispatch = useDispatch<AppDispatch>();
    return (payload: T) => dispatch(action(payload));
};

export { useActionWithDispatch };
