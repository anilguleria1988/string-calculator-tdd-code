import { StringCalculatorTDD } from '../../src/services/StringCalculator.service';

/**
 * Test 1 : Handle empty string
 */
describe('StringCalculator', () => {
    let calculator: StringCalculatorTDD;

    beforeEach(() => {
        calculator = new StringCalculatorTDD();
    });

    // TEST 1 : HANDLE EMPTY STRING
    test('should return 0 for empty string', () => {
        expect(calculator.add('')).toBe(0);
    });

    // TEST 2 : HANDLE SINGLE INPUT STRING NUMBER
    test('should return the number itself for single number', () => {
        expect(calculator.add('3')).toBe(3);
        expect(calculator.add('8')).toBe(8);
    });
});

