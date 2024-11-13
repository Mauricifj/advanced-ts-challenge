import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export async function requestNumber(message: string): Promise<number> {
    const rl = readline.createInterface({ input, output });

    let retryCount = 3;

    let userInput: string;
    let validInput = false;
    do {
        userInput = await rl.question(message + ' (q to quit): ');

        if (doesUserWantToQuit(userInput)) {
            console.log('Exiting...');
            process.exit(0);
        }

        validInput = !isNaN(parseFloat(userInput));
        if (!validInput) {
            console.warn('Invalid input. Please enter a number.');
            retryCount--;
        }

        if (retryCount === 0) {
            console.error('Maximum number of retries reached. Exiting...');
            process.exit(1);
        }
    } while (!validInput && retryCount > 0);

    rl.close();

    return parseFloat(userInput);
}

function doesUserWantToQuit(userInput: string): boolean {
    return userInput === 'q' || userInput === 'Q';
}