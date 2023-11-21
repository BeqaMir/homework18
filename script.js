// 1

function aMultipeOfThree(number){
    if(number % 3 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(aMultipeOfThree(10));
console.log(aMultipeOfThree(6));


// 2

function getCurrencySymbolFromCode(currency){
    if(currency === "EUR"){
        return "€";
    }else if(currency === "USD"){
        return "$";
    }else if(currency === "GELA"){
        return "ლ";
    }else{
        return currency;
    }
}
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("GELA"));
console.log(getCurrencySymbolFromCode("GBP"));


// 3

function getUpperCase(titlle){
    return titlle.toUpperCase();
}
console.log(getUpperCase("my name is joe"));


// 4

function price(asagebi, gasayidi){
    return ((gasayidi - asagebi) / gasayidi) * 100;
}
console.log(price(25, 40));


// 5

let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
 
const evens = numbers.filter(function(number) {
      return number % 2 === 0;
});
console.log(evens);

// 7
//  დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ (MY NAME IS JOHN) და დააბრუნებს LowerCase (my name is john) სტრინგს


function convertToLowerCase(uppercaseString) {
    return uppercaseString.toLowerCase();
}

let uppercaseString = "MY NAME IS JOHN";
let lowercaseString = convertToLowerCase(uppercaseString);
console.log(lowercaseString);

// დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს გაფილტრულ მასივს .filter სადაც მხოლოდ ლუწი რიცხვები იქნება


// let numbers = [5, 7, 10, 11, 12, 20, 23, 35, 38];
 
// const evens = numbers.filter(function(number) {
//       return number % 2 === 0;
// });
// console.log(evens);