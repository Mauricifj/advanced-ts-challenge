import { Investment, investmentSummary, simulateInvestment } from './investment';
import { requestNumber } from './user_input_manager';

async function main() {
    const investment = await getInvestmentFromUserInput();

    console.log('INVESTMENT SUMMARY:');
    console.log(investmentSummary(investment));

    console.log('INVESTMENT SIMULATION:');
    const investmentSimulation = simulateInvestment(investment);
    console.table(
        investmentSimulation.map((balance, index) => ({ Year: index + 1, Balance: `${balance.toFixed(2)}` }))
    );
}

async function getInvestmentFromUserInput() : Promise<Investment> {
    const initialAmount = await requestNumber('Enter the initial investment amount: ');
    const monthlyAmount = await requestNumber('Enter the monthly investment amount: ');
    const annualInterestRate = await requestNumber('Enter the annual interest rate amount (in %, e.g. 5 for 5%): ');
    const durationInYears = await requestNumber('Enter the duration of the investment in years: ');

    return {
        initialAmount: initialAmount,
        monthlyAmount: monthlyAmount,
        annualInterestRate: annualInterestRate,
        durationInYears: durationInYears
    };
}

main();