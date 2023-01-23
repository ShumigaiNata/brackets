module.exports = function check(str, bracketsConfig) {
    if(str.length % 2 !== 0) return false;
    for(let i = 0; i < str.length * 40; i++) {
        bracketsConfig.map(i => {
            const bracket = i.join('');
            if(str.includes(bracket)) str = str.replace(bracket,'');
            return bracket;
        });
    }
    return str.length ? false : true;
}