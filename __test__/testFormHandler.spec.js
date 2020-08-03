//Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler"
//Define the input for the function.
// The describe() function takes two arguments - a string description,

describe("Testing the submit functionality", () => {
    //and a test suite as a callback function
    // The test() function has two arguments - a string description, 
    test("Testing the handleSubmit() function", () => {
           // and an actual test as a callback function.  
           // Define the input for the function, if any, in the form of variables/array
           //var input = [];
           // Define the expected output, if any, in the form of variables/array
           //const result;
           // `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(handleSubmit).toBeDefined();
})});



//Check if the function produces the expected output

