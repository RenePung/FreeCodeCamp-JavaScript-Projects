function rot13(str) {
    let charCodeValue = 0;
    let strArray = [];
    strArray = str.split("");
    for (let i = 0; i < strArray.length; i++) {
      charCodeValue = strArray[i].charCodeAt();
      if (charCodeValue >= 65 && charCodeValue <= 90) {
        if (charCodeValue > 77) {
          charCodeValue = charCodeValue - 13;
        } else {
          charCodeValue = charCodeValue + 13;
        }
        strArray.splice(i, 1, String.fromCharCode(charCodeValue));
      }
    }
    return strArray.join("");
  }
  rot13("SERR PBQR PNZC");
  rot13("SERR PBQR PNZC");