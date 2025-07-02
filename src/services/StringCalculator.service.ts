import * as CONSTANTS from '../../common/constants';
/**
 * Test 1 : Handle empty string
 */
export class StringCalculatorTDD {
    private static readonly EMPTY_STRING_RESULT = 0;
    add(numbers: string): number {
        if (this.isEmpty(numbers)) {
            return Number(process.env.RETURN_NUMBER) || CONSTANTS.NUMBERS.ZERO;
        }

        // TEST 5 AFTER REFACTOR
        /* const normalizedNumbers = this.normalizeDelimiters(numbers);
        const numberArray = this.parseNumbers(normalizedNumbers);
        this.validateNumbers(numberArray);
        return this.calculateSum(numberArray); */

        // TEST 6 CUSTOM DELIMETERS
        const allNumbers = this.extractAllNumbers(numbers);
        this.validateNumbers(allNumbers);
        return this.calculateSum(allNumbers);
    }

    private calculateSum(numbers: number[]): number {
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    private validateNumbers(numbers: number[]): void {
        const invalidNumbers = numbers.filter(num => isNaN(num));
        if (invalidNumbers.length > 0) {
            throw new Error('Invalid numbers detected');
        }
    }

    private isEmpty(numbers: string): boolean {
        return numbers === '';
    }

    private extractAllNumbers(input: string): number[] {
        // Step 1: Handle custom delimiter format //[delimiter]\n or //delimiter\n
        let numbersString = input;

        if (input.startsWith('//')) {
            const newlineIndex = input.indexOf('\n');
            numbersString = input.substring(newlineIndex + 1);
        }

        // Step 2: Extract all numbers using regex - this is the KEY insight!
        // Replace ALL non-digit characters (except minus for negative numbers) with spaces
        const cleanString = numbersString.replace(/[^\d-]/g, ' ');

        // Split by spaces and parse numbers
        return cleanString
            .split(/\s+/)
            .filter(str => str.trim() !== '')
            .map(str => parseInt(str))
            .filter(num => !isNaN(num));
    }
}
