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
        // return parseInt(numbers);
        /* const nums = numbers.split(',');
        return nums.reduce((sum, num) => sum + parseInt(num), 0); */
        const numberArray = this.parseNumbers(numbers);
        return this.calculateSum(numberArray);
    }

    private parseNumbers(numbers: string): number[] {
        return numbers.split(CONSTANTS.DEFAULT_DELIMITER).map(num => parseInt(num));
    }

    private calculateSum(numbers: number[]): number {
        return numbers.reduce((sum, num) => sum + num, 0);
    }

    private isEmpty(numbers: string): boolean {
        return numbers === '';
    }
}
