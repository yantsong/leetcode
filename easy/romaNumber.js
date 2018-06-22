/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    let number = 0;
    let arr = s.split('')
    for (let index = 0; index < arr.length; index++) {
        console.log(index, arr);
        const element = arr[index];
        if (map[s.substr(index, 2)]) {
            console.log(index, '111');
            number = number + map[s.substr(index, 2)]
            index++;
        } else {
            number += map[element]
        }
        console.log(number);
    }
    return number
};
romanToInt('III')