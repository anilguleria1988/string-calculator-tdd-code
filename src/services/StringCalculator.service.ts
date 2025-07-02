import * as CONSTANTS from '../../common/constants';
import { DelimetersHandler } from '../../src/services/DelimetersHandler';
import { ValidationHandler } from '../../src/services/ValidationHandler';
/**
 * Test 1 : Handle empty string
 */
export class StringCalculatorTDD {
    private static readonly EMPTY_STRING_RESULT = 0;
    add(numbers: string): number {
        if (this.isEmpty(numbers)) {
            return Number(process.env.RETURN_NUMBER) || CONSTANTS.NUMBERS.ZERO;
        }

        const allNumbers = DelimetersHandler.extractAllNumbers(numbers);
        ValidationHandler.validateNumbers(allNumbers);
        return this.calculateSum(allNumbers);
    }

    private calculateSum(numbers: number[]): number {
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    private isEmpty(numbers: string): boolean {
        return numbers === '';
    }
}
