// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  var numLength = cardNumber.length;

  if(isDinersClub(cardNumber)){
    return "Diner's Club";
  }else if(isAmEx(cardNumber)){
    return "American Express";
  }else if(isSwitch(cardNumber)){
    return "Switch";
  }else if(isVisa(cardNumber)){
    return "Visa";
  }else if(isMasterCard(cardNumber)){
    return "MasterCard";
  }else if(isDiscover(cardNumber)){
    return "Discover";
  }else if(isMaestro(cardNumber)){
    return "Maestro";
  }else if(isChinaPay(cardNumber)){
    return "China UnionPay";
  }

};


function isDinersClub(cardNumber){
  prefix = parseInt(cardNumber.slice(0,2));
  if ((prefix === 38 || prefix === 39) && cardNumber.length === 14){
    return true;
  }else{
    return false;
  }
}

function isAmEx(cardNumber){
    // The American Express network always starts with a 34 or 37 and is 15 digits long
  prefix = parseInt(cardNumber.slice(0,2));
  if ((prefix === 34 || prefix === 37) && cardNumber.length === 15){
    return true;
  }else{
    return false;
  }
}

function isVisa(cardNumber){
  if (cardNumber[0] == 4 && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    return true;
  } else {
    return false;
  }
}

function isMasterCard(cardNumber) {
  var prefix = cardNumber[0] + cardNumber[1];
  var prefixArray = ['51', '52', '53', '54', '55'];
  if (prefixArray.indexOf(prefix) > -1 && cardNumber.length === 16) {
    return true;
  } else {
    return false;
  }
}

function isDiscover(cardNumber){
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  var prefix2 = cardNumber[0] + cardNumber[1];
  var prefix3 = prefix2 + cardNumber[2];
  var prefix4 = prefix3 + cardNumber[3];
  var prefix3Array = ['644', '645', '646', '647', '648', '649'];
  var length = cardNumber.length

  if ((prefix3Array.indexOf(prefix3) > -1 || prefix2 == '65' || prefix4 === '6011') && (length === 16 || length === 19)) {
    return true;
  }else{
    return false;
  }
}

function isMaestro(cardNumber) {
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  var prefix4 = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var prefixArr = ['5018', '5020', '5038', '6304'];
  var length = cardNumber.length;

  if (prefixArr.indexOf(prefix4) > -1 && length <= 19 && length >= 12) {
    return true;
  } else {
    return false;
  }
};

function isChinaPay(cardNumber) {
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  var length = cardNumber.length;
  var prefix3 = cardNumber[0] + cardNumber[1] + cardNumber[2];
  var prefix4 = prefix3 + cardNumber[3];
  var prefix6 = prefix4 + cardNumber[4] + cardNumber[5];
  
  if(prefix3 >= 624 && prefix3 <= 626 && length >= 16 && length <= 19){
    return true;
  }else if(prefix4 >= 6282 && prefix4 <= 6288 && length >= 16 && length <= 19){
    return true;
  }else if(prefix6 >= 622126 && prefix6 <= 622925 && length >= 16 && length <= 19){
    return true;
  }else{
    return false;
  }
};

function isSwitch(cardNumber){
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var prefix4 = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var prefix6 = prefix4 + cardNumber[4] + cardNumber[5];
  var length = cardNumber.length;
  var prefix4Array = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var prefix6Array = ['564182', '633110'];
  
  if(prefix4Array.indexOf(prefix4) > -1 && (length == 16 || length == 18 || length == 19)){
    return true;
  }else if(prefix6Array.indexOf(prefix6) > -1 && (length == 16 || length == 18 || length == 19)){
    return true;
  }else{
    return false;
  }
}
  
