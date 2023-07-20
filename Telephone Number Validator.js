function telephoneCheck(str) {
    if (str.indexOf("(") === -1 && str.indexOf(")") > -1) return false;
    if (str.indexOf(")") - str.indexOf("(") >= 5) return false;
    if (/^\d{2}\s+\d{2}-\d{2}-\d{3}-\d{1}$/.test(str)) return false; 
    if (str[0] === "-") return false;
    let phone = str.replace(/-| /g, "");
    if (phone.indexOf("(") < phone.indexOf(")")) {
        phone = phone.replace(/\(|\)/g, "");
      }
    if (phone.length === 10) {
        return true;
    
      } else if (phone.length === 11 && phone[0] === "1") {
        return true;
        
      }
      return false;
    }
    
    telephoneCheck("55 55-55-555-5");