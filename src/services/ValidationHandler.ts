export class ValidationHandler {
    static validateNumbers(numbers: number[]): void {
        const invalidNumbers = numbers.filter(num => isNaN(num));
        if (invalidNumbers.length > 0) {
            throw new Error('Invalid numbers detected');
        }
        const negativeNumbers = numbers.filter(num => num < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
        }
    }
}