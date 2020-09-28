module.exports = function toReadable (number = 0) {
    const firstTwenty = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]
    const tenNum = [
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    let numberLength = `${number}`.length;
    const getTenth = (number) => {
        if (number >= 20) {
            let ceilPart = div(number, 10)
            let ones = number % 10
            return (number % 10 === 0) ? tenNum[ceilPart - 2] : `${tenNum[ceilPart - 2]} ${firstTwenty[ones]}`
        } 

        return `${firstTwenty[number]}`;

    }
    const getHundreds = (num) => {
        if ( num % 100 === 0) return `${firstTwenty[div(num, 100)]} hundred`
        return `${firstTwenty[div(num, 100)]} hundred ${getTenth(num % 100)}`
    } 
    const div = (val, by) => (val - val % by) / by;

    switch (numberLength) {
        case 1: {
            return firstTwenty[number];
        }
        case 2: {
            return getTenth(number)
        }
        case 3: {
            return getHundreds(number)
        }
    }
}
