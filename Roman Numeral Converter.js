function convertToRoman(num) {
    const TableRomanConvert = {
    M: 1000,
      CM: 900,
        D: 500,
         CD: 400,
            C: 100,
             XC: 90,
               L: 50,
                XL: 40,
                   X: 10,
                 IX: 9,
                V: 5,
              IV: 4,
            I: 1 };
    let accum = ''
    for (const key in TableRomanConvert) { 
    const numValueTable = TableRomanConvert[key]
    
    while (numValueTable <= num) {
    num -= numValueTable
    accum += key;
            }
      }
    return accum;
    }
    
    convertToRoman(36);