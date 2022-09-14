// 01 : Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  
// 02 : Mutate an Array Declared with const
  const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
      s[0] = 2;
      s[1] = 5;
      s[2] = 7;
    // Only change code above this line
    console.log(s);
  }
  editInPlace();

// 03 : Prevent Object Mutation
  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
      Object.freeze(MATH_CONSTANTS);
    
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

// 04 : Use Arrow Functions to Write Concise Anonymous Functions
    // simplified version with return keyword
    const magic = () => new Date();

// 05 : Write Arrow Functions with Parameters
    // simplified version with parameters
    const myConcat = (arr1, arr2) =>
    arr1.concat(arr2);

  