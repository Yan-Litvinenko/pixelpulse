import { stopPropagation } from '../stopPropagation';

describe('stop propagation', (): void => {
    const mockStopPropagation = jest.fn();
    const mockEvent = {
        stopPropagation: mockStopPropagation,
    } as unknown as React.MouseEvent;

    test('Must be called', (): void => {
        stopPropagation(mockEvent);
        expect(mockStopPropagation).toHaveBeenCalled();
    });
});
