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

    // TEST 3 : HANDLE TWO INPUT STRING NUMBERS
    test('should return sum of two comma-separated numbers', () => {
        expect(calculator.add('5,2')).toBe(7);
        expect(calculator.add('0,4')).toBe(4);
    });

    // TEST 4 : HANDLE ANY AMOUNT OF INPUT STRING NUMBERS
    test('should handle any amount of numbers', () => {
        expect(calculator.add('2,1,10,24,7')).toBe(44);
        expect(calculator.add('4,11,3,12')).toBe(30);
    });

    // TEST 5 : HANDLE NEW LINE BETWEEN NUMBERS
    test('should handle new lines between numbers', () => {
        expect(calculator.add('1\n4,15')).toBe(20);
        expect(calculator.add('11\n7\n9')).toBe(27);
    });

    // TEST 6 : HANDLE CUSTOM DELIMITERS
    /* test('should support different delimiters', () => {
        expect(calculator.add('//;\n1;2')).toBe(3);
        expect(calculator.add('//|\n1|2|3')).toBe(6);
    }); */
    test('should extract numbers regardless of delimiters', () => {
        expect(calculator.add('//;\n1;2;3')).toBe(6);
        expect(calculator.add('//|\n1|2|3')).toBe(6);
        expect(calculator.add('//[***]\n1***2***3')).toBe(6);

        // Mixed delimiters - the real test!
        expect(calculator.add('//;\n1;2;3\n4,5')).toBe(15);
        expect(calculator.add('//[***]\n1***2***3\n4,5;6')).toBe(21);
    });
});

