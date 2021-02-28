module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  let prev;
  let brackets = bracketsConfig.map(bracket => bracket.join(''));
  while(newStr){
    prev = newStr.length;
    brackets.forEach(bracket => {
      newStr = newStr.replace(bracket,'');
    });
    if(prev === newStr.length){
      break;
    }
  }
  if(newStr === ''){
    return true;
  }
  return false;
}
