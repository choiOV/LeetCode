class Calculator {
    constructor(value) {
        this.result = value;
    }

    add(value) {
        const resultCal = new Calculator(this.result);

        resultCal.result += value;
        return resultCal;
    }

    subtract(value) {
        const resultCal = new Calculator(this.result);

        resultCal.result -= value;
        return resultCal;
    }

    multiply(value) {
        const resultCal = new Calculator(this.result);

        resultCal.result *= value;
        return resultCal;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }

        const resultCal = new Calculator(this.result);

        resultCal.result /= value;
        return resultCal;
    }

    power(value) {
        const resultCal = new Calculator(this.result);

        resultCal.result **= value;
        return resultCal;
    }

    getResult() {
        return this.result;
    }
}