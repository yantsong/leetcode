(function () {
    if (!strs.length) return ''
    return strs.reduce(
        (str1, str2) => {
            let number = str1.length > str2.length ? str2.length : str1.length
            let newstr = ''
            let index = 0
            while (index < number) {
                if (str1[index] == str2[index]) {
                    newstr += str1[index]
                    index++
                } else {
                    break
                }
            }
            return newstr
        }, strs[0])
})(["flower", "flow", "flight"])