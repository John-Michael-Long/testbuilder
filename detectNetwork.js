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
  
  if(checkPrefix(cardNumber) === 'DinerClub' && cardNumber.length === 14){
    return "Diner's Club";
  }else if(checkPrefix(cardNumber) === 'AmEx' && cardNumber.length === 15){
    return "American Express";
  }else if(checkPrefix(cardNumber) === 'visa' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    return "Visa";
  }else if(checkPrefix(cardNumber) === 'mastCard' && cardNumber.length === 16){
    return "MasterCard"
  }
};

function checkPrefix(cardNumber){
  var cardNumArray = cardNumber.split('');
  
  if (parseInt(cardNumArray[0])=== 3){
    if (parseInt(cardNumArray[1]) === 8 || parseInt(cardNumArray[1]) === 9){
      return 'DinerClub';
    }else if (parseInt(cardNumArray[1]) === 4 || parseInt(cardNumArray[1]) === 7){
      return 'AmEx';
    }else{
    	return 'other'
    }
  }else if (parseInt(cardNumArray[0]) === 4){
    return 'visa';
  }else if (parseInt(cardNumArray[0]) === 5 && parseInt(cardNumArray[1]) <= 56 && parseInt(cardNumArray[1]) >= 51){
    return 'mastCard';
  }else{	
    return 'other';
  }
  return 'other';
}


