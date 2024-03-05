function makeArray(firstArray, secondArray, maxLength){
    let mainArray = firstArray.concat(secondArray);
    const mainArrayLength = mainArray.length;
    
    
    if (mainArrayLength > maxLength){
        return mainArray.slice(0, maxLength);
    } else{
        return mainArray;
    }

    
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); 
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); 
