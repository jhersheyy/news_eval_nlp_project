import { checkURL } from "../src/client/js/urlChecker"


describe('Testing url validation functionality' , () => {
    var url = "latimes.com/science/story/2019-09-05/why-people-respond-to-negative-news";
    test("Testing the checkURL() function for legit urls", async () => {
        const response = checkURL(url);
        expect(response).toBeDefined();
        expect(response).toBeTruthy();
    });
});

describe('Testing urlChecker() function for illegitimate urls' , () => {
    var url = "asdlgkajiej093280982.clkj19a";
    test('It should return true', async () => {//make it a null one
        const response = checkURL(url);
        expect(response).toBeDefined();
        expect(response).toBeFalsy();
    });
});