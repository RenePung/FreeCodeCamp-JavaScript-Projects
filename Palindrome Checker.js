function palindrome(str) {
var sent = str.replace(/[\W_]/g, '');
for(var i = 0, count = sent.length - 1; i < count/2; i++) {
if(sent[i].toLowerCase() !== sent[count-i].toLowerCase()) {
return false;
  }
  }
return true;
};

palindrome("eYeye");