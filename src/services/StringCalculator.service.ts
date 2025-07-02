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
        const normalizedNumbers = this.normalizeDelimiters(numbers);
        const numberArray = this.parseNumbers(normalizedNumbers);
        this.validateNumbers(numberArray);
        return this.calculateSum(numberArray);
    }

    private parseNumbers(numbers: string): number[] {
        return numbers.split(CONSTANTS.DEFAULT_DELIMITER).map(num => parseInt(num));
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

    private normalizeDelimiters(numbers: string): string {
        return numbers.replace(CONSTANTS.NEWLINE_REGEX, CONSTANTS.DEFAULT_DELIMITER);
    }
    private isEmpty(numbers: string): boolean {
        return numbers === '';
    }
}
