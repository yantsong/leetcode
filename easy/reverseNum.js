/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString()
    let num
    if (x.charAt(0) == '-') {
        let arr = x.split('-')[1]
        num = Number(['-'].concat(arr.split('').reverse()).join(''))
    } else {
        num = Number(x.split('').reverse().join(''))
    }
    if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
        return 0
    } else {
        return num
    }
};
reverse(345)
    //104ms
    // 思考:这个对于JS来说会比较容易,毕竟弱类型呵呵呵，可能只是split reverse 几个Api的使用吧,然鹅有人比我还快,我大概看了一下是记录一下标志位
    //就可以达到少一次math.pow的运算提高程序运行效率
    /**
    * @param {
        number
    }
    x
        *
        @return {
            number
        }
        */
var reverse = function(x) {

    let sign = (x < 0);
    x = Math.abs(x).toString().split('').reverse().join('');
    x = Number.parseInt(x);
    if (x > Math.pow(2, 31) - 1) {
        return 0;
    }
    return sign ? x * (-1) : x;
};