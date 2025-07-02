import * as CONSTANTS from '../../common/constants';

export class DelimetersHandler {

    static extractAllNumbers(input: string): number[] {
        const numbersString = this.getNumbersString(input);
        return this.parseNumbersFromString(numbersString);
    }

    private static getNumbersString(input: string): string {
        if (!input.startsWith(CONSTANTS.CUSTOM_DELIMITER_PREFIX)) {
            return input;
        }

        const newlineIndex = input.indexOf('\n');
        return input.substring(newlineIndex + 1);
    }

    private static parseNumbersFromString(numbersString: string): number[] {
        // Use regex to find all numbers (including negative ones)
        const numberMatches = numbersString.match(/-?\d+/g);

        if (!numberMatches) {
            return [];
        }

        return numberMatches
            .map(match => parseInt(match))
            .filter(num => !isNaN(num));
    }
}