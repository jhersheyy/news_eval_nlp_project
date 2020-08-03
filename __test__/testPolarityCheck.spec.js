//Import the js file to test
import { polarityCheck} from "../src/client/js/formHandler"

describe("Testing the polarity translation functionality", () => {
    test("Testing the polarityCheck() function", () => {
           
           expect(polarityCheck("NEU")).toBe("neutral")
})});



//Check if the function produces the expected output

