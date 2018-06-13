/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let numberArr = x.toString().split('')
    let l = numberArr.length
    let n = 0;
    console.log(is(numberArr[n], numberArr[l - 1 - n]));
    return is(numberArr[n], numberArr[l - 1 - n])

    function is(number1, number2) {
        console.log(number1, number2, n);
        if (n > l / 2) return true
        if (number1 == number2) {
            n++;
            return is(numberArr[n], numberArr[l - 1 - n])
        } else {
            return false
        }
    }


};
isPalindrome(1000021)