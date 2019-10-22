function crazyCase(str) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 1) {
      
      newStr = newStr + str[i].toUpperCase();
    } else {
      newStr = newStr + str[i].toLowerCase();
    }
  }
    return newStr
  }

function ciEmailify(str) {
  let newStr = '';
 
  for (let i = 0; i < str.length; i++){
    
      if (str[i] === ' ') {
        
        newStr = newStr + '.';
      } else {
        newStr = newStr + str[i].toLowerCase();
      }
  
    }
      return newStr +'@codeimmersives.com'    
  }


function exclaim(str) {
let newStr = '';
for (let i = 0; i < str.length; i++){
  
    if (str[i] === '?' || str[i] === '.') {
      
      newStr = newStr + '!';
    } else {
      newStr = newStr + str[i];
    }

  }

  return newStr
}


function reverse(str) {
let newStr = '';
for(let i = str.length - 1; i >= 0; i --){
newStr = newStr + str[i]
}
return newStr;
}

function crazyCase2ReturnOfCrazyCase(str) {
  let newStr = '';
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' '){
    newStr = newStr + str[i].toLowerCase();
    }
    else if (count % 2 === 1) {
      
      newStr = newStr + str[i].toUpperCase();
      count ++;
    } else {
      newStr = newStr + str[i].toLowerCase();
      count ++
    }
  }
    return newStr
  }


function titleCase(str) {

  let newStr = '';
  let tracker = 0
  for (let i = 0; i < str.length; i++){
if (i === 0 || tracker === 1){
  
  newStr = newStr + str[i].toUpperCase();
  tracker = 0;
}
else if(str[i] === ' '){
  newStr = newStr + str[i].toLowerCase();
  tracker ++;
}
else {
  newStr = newStr + str[i].toLowerCase();
  tracker = 0;
}
}
return newStr;
}

function onlyVowels(str) {
  let newStr = '';
  let vowel = 'aeiouAEIOU'
  for(let i = 0; i < str.length; i++){
    if (vowel.includes(str[i])){
      newStr = newStr + str[i];
    }
  }
  return newStr
}
//arr[1] = arr[1] % 2 === 1 ? 'odd' : 'even'

function crazyCase3SonOfCrazyCase(str) {
  let newStr = '';
  let crazies = ' 1234567890!@#$%.,?/()'
  let count = 0;
  for (let i = 0; i < str.length; i++) {

    if (crazies.includes(str[i])){
    newStr = newStr + str[i].toLowerCase();
    }
    else if (count % 2 === 1) {
      
      newStr = newStr + str[i].toUpperCase();
      count ++;
    } else {
      newStr = newStr + str[i].toLowerCase();
      count ++
    }
  }
    return newStr
  }



module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}