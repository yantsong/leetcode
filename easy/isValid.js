(function isValid(str) {
    if (str.length%2) return false
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let stack= []
    let right = Object.keys(map)
    let left = Object.values(map)

   for (let index = 0; index < str.length; index++) {
       let ele = str[index]
       if (left.includes(ele)){
           stack.push(ele)
       }else{
           if (right.includes(ele)){
               if (stack[stack.length-1]==map[ele]){
                   stack.pop()
               }else{
                   return false
               }
           }
       }
   }
   return stack.length==0?true:false
})('()')
// 小结:栈的思想 先进后出 先匹配右边括号 