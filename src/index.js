module.exports = function toReadable(number) {
    const strNumber = String(number);
    const strLenght = strNumber.length;
    let result = "";

    const objectSingle = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    const objectDecimal = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    const objectHundredths = [];

    if (strLenght === 1) {
        result = returnSingleNumber(strNumber);
    } else if (strLenght === 2) {
        result = returnDecimalNumber(strNumber);
    } else if (strLenght === 3) {
    } else {
        console.log("it is not int 1-3");
    }

    function returnSingleNumber(strNum) {
        return objectSingle[number];
    }

    function returnDecimalNumber(strNum) {
        let decimalResult;

        if (objectDecimal[number]) {
            // если есть уже готовый вариант, то возвращаем его.
            decimalResult = objectDecimal[number];
        } else if (number > 20 && number < 30) {
            decimalResult = "twenty " + objectSingle[strNumber[1]];
        } else if (number > 30 && number < 40) {
            decimalResult = "thirty " + objectSingle[strNumber[1]];
        } else if (number > 40 && number < 50) {
            decimalResult = "forty " + objectSingle[strNumber[1]];
        } else if (number > 50 && number < 60) {
            decimalResult = "fifty " + objectSingle[strNumber[1]];
        } else if (number > 60 && number < 70) {
            decimalResult = "sixty " + objectSingle[strNumber[1]];
        } else if (number > 70 && number < 80) {
            decimalResult = "seventy " + objectSingle[strNumber[1]];
        } else if (number > 80 && number < 90) {
            decimalResult = "eighty " + objectSingle[strNumber[1]];
        } else if (number > 90 && number < 100) {
            decimalResult = "ninety " + objectSingle[strNumber[1]];
        }

        return decimalResult;
    }

    return result;
};
