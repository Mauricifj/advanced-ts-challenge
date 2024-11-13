export interface Investment {
    initialAmount: number;
    monthlyAmount: number;
    annualInterestRate: number;
    durationInYears: number;
}

export function investmentSummary(investment: Investment): string {
    const initialAmount = `INITIAL AMOUNT: $${investment.initialAmount.toFixed(2)}`;
    const monthlyAmount = `MONTHLY AMOUNT: $${investment.monthlyAmount.toFixed(2)}`;
    const annualInterestRate = `ANNUAL INTEREST RATE: ${investment.annualInterestRate}%`;
    const duration = `DURATION: ${investment.durationInYears} years`;

    return [initialAmount, monthlyAmount, annualInterestRate, duration].join('\n');
}


export function calculateAnnualBalance(initialAmount: number,monthlyAmount: number, annualInterestRate: number): number {
    return initialAmount + monthlyAmount * 12 * annualInterestRate / 100;
}

export function simulateInvestment(investment: Investment): number[] {
    const balanceByYear = [];
    let currentBalance = investment.initialAmount;
    for (let i = 0; i < investment.durationInYears; i++) {
        currentBalance = calculateAnnualBalance(currentBalance, investment.monthlyAmount, investment.annualInterestRate);
        balanceByYear.push(currentBalance);
    }
    return balanceByYear;
}