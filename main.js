// Write a function firstReverse that takes a single string parameter and returns 
// the string in reverse order.

function firstReverse(inputStr){

    var newStr = ''
    
    for (var i = inputStr.length - 1; i >= 0; i--){
        newStr += inputStr[i]
    }
    return newStr;
}

firstReverse('Brian') // yields 'nairB'

// Write a function swapCase that takes a single string parameter and swaps the 
// case of each character. For example: if a string is "Hello World" the output 
// should be "hELLO wORLD". Let numbers and symbols stay the way they are.

function snapCase(inputStr){
    var newStr = ''
    
    for (var i=0; i < inputStr.length; i++){
        if(inputStr.charAt[i] == inputStr.charAt[i].isUpperCase()){
            newStr += inputStr.charAt[i].isLowerCase()
        }
        else if(inputStr.charAt[i] == inputStr.charAt[i].isLowerCase()){
            newStr = inputStr.charAt[i].isUpperCase()
        }
        return newStr
    }
}

snapCase('Hello World')