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

    const objectHundreds = {
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
    };

    if (strLenght === 1) {
        result = returnSingleNumber(strNumber);
    } else if (strLenght === 2) {
        result = returnDecimalNumber(strNumber);
    } else if (strLenght === 3) {
        result = returnHundredthsNumber(strNumber);
    } else {
        console.log("it is not int 1-3");
    }

    function returnSingleNumber(strNum) {
        return objectSingle[number];
    }

    function returnDecimalNumber(strNum) {
        let decimalResult;
        let numStrNum = Number(strNum);

        if (objectDecimal[numStrNum]) {
            // если есть уже готовый вариант, то возвращаем его.
            decimalResult = objectDecimal[numStrNum];
        } else if (numStrNum > 20 && numStrNum < 30) {
            decimalResult = "twenty " + objectSingle[strNum[1]];
        } else if (numStrNum > 30 && numStrNum < 40) {
            decimalResult = "thirty " + objectSingle[strNum[1]];
        } else if (numStrNum > 40 && numStrNum < 50) {
            decimalResult = "forty " + objectSingle[strNum[1]];
        } else if (numStrNum > 50 && numStrNum < 60) {
            decimalResult = "fifty " + objectSingle[strNum[1]];
        } else if (numStrNum > 60 && numStrNum < 70) {
            decimalResult = "sixty " + objectSingle[strNum[1]];
        } else if (numStrNum > 70 && numStrNum < 80) {
            decimalResult = "seventy " + objectSingle[strNum[1]];
        } else if (numStrNum > 80 && numStrNum < 90) {
            decimalResult = "eighty " + objectSingle[strNum[1]];
        } else if (numStrNum > 90 && numStrNum < 100) {
            decimalResult = "ninety " + objectSingle[strNum[1]];
        }

        /* console.log("------------");
        console.log(decimalResult); */

        return decimalResult;
    }

    function returnHundredthsNumber(strNum) {
        let hundredthsResult;

        hundredthsResult = objectSingle[strNumber[0]] + " hundred";

        if (objectHundreds[number]) {
            hundredthsResult = objectHundreds[number];
        } else if (strNumber[1] === "0") {
            hundredthsResult = hundredthsResult + " " + objectSingle[strNum[2]];
        } else if (strNumber[1] === "1") {
            hundredthsResult =
                hundredthsResult + " " + objectDecimal[strNum.slice(1, 3)];
        } else if (strNumber[1] === "2") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        } else if (strNumber[1] === "3") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        } else if (strNumber[1] === "4") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        } else if (strNumber[1] === "5") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        } else if (strNumber[1] === "6") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        } else if (strNumber[1] === "7") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        } else if (strNumber[1] === "8") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        } else if (strNumber[1] === "9") {
            hundredthsResult =
                hundredthsResult +
                " " +
                returnDecimalNumber(strNum.slice(1, 3));
        }

        return hundredthsResult;
    }

    return result;
};
