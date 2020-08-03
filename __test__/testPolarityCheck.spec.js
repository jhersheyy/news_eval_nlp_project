//Import the js file to test
import { polarityCheck} from "../src/client/js/formHandler"

describe("Testing the polarity translation functionality", () => {
    test("Testing the polarityCheck() function", () => {
           expect(polarityCheck("NEU")).toBe("neutral")
    })
    test("Testing the polarityCheck() function", () => {
           expect(polarityCheck("P+")).toBe("strong positive")
    })
    test("Testing the polarityCheck() function", () => {
           expect(polarityCheck("N")).toBe("negative")
    })
    test("Testing the polarityCheck() function", () => {
           expect(polarityCheck("NONE")).toBe("no sentiment")
    })
});


//Check if the function produces the expected output

