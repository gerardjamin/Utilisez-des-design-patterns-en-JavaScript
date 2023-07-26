class OldCalculator {
    constructor() {
        this.operations = function(number1, number2, operation) {
            switch (operation) {
                case 'add':
                    return number1 + number2
                case 'sub':
                    return number1 - number2
                default:
                    return NaN
            }
        }
    }
}

class NewCalculator {
    static add(number1, number2) {
        return number1 + number2
    }

    static sub(number1, number2) {
        return number1 - number2
    }
}

class AdaptedCalculator {
    constructor() {
        this.operations = function(number1, number2, operation) {
            switch (operation) {
                case 'add':
                    return NewCalculator.add(number1, number2)
                case 'sub':
                    return NewCalculator.sub(number1, number2)
                default:
                    return NaN
            }
        }
    }
}

// Old Calc
const Calculator = new OldCalculator()
console.log(Calculator.operations(10, 5, 'add'))

// New Calc
console.log(NewCalculator.add(10, 5))
console.log(NewCalculator.sub(10, 5))

// Adapted Calc
const AdaptCalculator = new AdaptedCalculator()
console.log(AdaptCalculator.operations(10, 5, 'add'))