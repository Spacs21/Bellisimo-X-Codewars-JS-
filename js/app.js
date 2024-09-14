// Matnni so'zlar massiviga ajratish
function stringToArray(s) {
    return s.split(" ");
  }
  console.log("stringToArray:", stringToArray("Hello World"));
  
  // Matndan undov belgilarini olib tashlash
  function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }
  console.log("removeExclamationMarks:", removeExclamationMarks("Hello World!!!"));
  
  // Matndan raqam olish
  function getNumberFromString(s) {
    return parseInt(s.replace(/\D/g, ''));
  }
  console.log("getNumberFromString:", getNumberFromString("The number is 12345"));
  
  // Sonning juftligini tekshirish
  function testEven(n) {
    return n % 2 === 0 ? true : false;
  }
  console.log("testEven:", testEven(4)); 
  
  // Har bir belgini ikki baravar ko'paytirish
  function doubleChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i] + str[i];
    }
    return result;
  }
  console.log("doubleChar:", doubleChar("abc")); 
  
  // Kirish turiga qarab natija qaytarish
  function problem(x) {
    if (typeof x === 'string') {
      return "Error";
    }
    return (x * 50) + 6;
  }
  console.log("problem:", problem(10)); 
  
  // Son asosida hafta kunini qaytarish
  function whatday(num) {
    switch(num) {
      case 1:
        return "Sunday";
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 7:
        return "Saturday";
      default:
        return "Wrong, please enter a number between 1 and 7";
    }
  }
  console.log("whatday:", whatday(3));
  
  // Boolean qiymatga qarab ikkita funksiyaning birini bajarish
  function _if(bool, func1, func2) {
    if (bool == true) {
      func1();
    } else {
      func2();
    }
  }
  
  function func1() { console.log("Function 1 executed"); }
  function func2() { console.log("Function 2 executed"); }
 
  console.log("_if (true):");
  _if(true, func1, func2); 
  
  console.log("_if (false):");
  _if(false, func1, func2);
  

//   jami 8 ta vazifa