import { checkURL } from "../src/client/js/urlChecker"


describe('Testing urlChecker() function for legitimate urls' , () => {
    var url = "latimes.com/science/story/2019-09-05/why-people-respond-to-negative-news";
    test('It should return true', async () => {
        const response = checkURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});

describe('Testing urlChecker() function for illegitimate urls' , () => {
    var url = "asdlgkajiej093280982.clkj19a";
    test('It should return true', async () => {//make it a null one
        const response = checkURL(url);
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });
});