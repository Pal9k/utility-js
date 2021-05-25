const head = require('./head');

describe('Head', () => {

	it('Head of array [1,2,3,4] is 1', () => {
		expect(head([1,2,3,4])).toEqual(1);
	});

	it('Head of array [] is null', () => {
		expect(head([])).toEqual(null);
	});

	it('Head of array ["Palak", "Vasara"] is Palak', () => {
		expect(head(["Palak", "Vasara"])).toEqual("Palak");
	});

	it('Head of array [["Palak", "Vasara"], "Thoughtworks"] is ["Palak", "Vasara"]', () => {
		expect(head([["Palak", "Vasara"], "Thoughtworks"])).toEqual(["Palak", "Vasara"]);
	});	

})