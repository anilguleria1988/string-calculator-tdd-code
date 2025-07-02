/**
 * Test 1 : Handle empty string
 */
export class StringCalculatorTDD {
    add(numbers: string): number {
        if (numbers === '') {
            return Number(process.env.RETURN_NUMBER) || 0;
        }
        return Number(process.env.RETURN_NUMBER) || 0;
    }
}
