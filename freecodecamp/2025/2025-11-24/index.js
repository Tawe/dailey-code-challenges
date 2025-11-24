function isValidMessage(message, validator) {
  let isValid = true;
  const messageArr = message.toLowerCase().split(" ");
  const valArr = validator.split('');
  
  if(messageArr.length !== valArr.length){
    return false
  }

  for(let i = 0; i < valArr.length; i++){
    if(!messageArr[i]|| valArr[i] !== messageArr[i][0]){
      return false;
    }
  }
  return isValid;
}

const x = isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD");
x;