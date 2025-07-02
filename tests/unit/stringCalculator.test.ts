import { StringCalculatorTDD } from '../../src/services/StringCalculator.service';

/**
 * Test 1 : Handle empty string
 */
describe('StringCalculator', () => {
    let calculator: StringCalculatorTDD;

    beforeEach(() => {
        calculator = new StringCalculatorTDD();
    });

    test('should return 0 for empty string', () => {
        expect(calculator.add('')).toBe(0);
    });
});

