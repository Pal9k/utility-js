const tail = require('./tail');

describe('Tail', () => {

	it('Tail of array [1,2,3,4] is [2,3,4]', () => {
		expect(tail([1,2,3,4])).toEqual([2,3,4]);
	});

	it('Tail of array [] is []', () => {
		expect(tail([])).toEqual([]);
	});

	it('Tail of array ["Palak", "Vasara"] is ["Vasara"]', () => {
		expect(tail(["Palak", "Vasara"])).toEqual(["Vasara"]);
	});

	it('Tail of array [["Palak", "Vasara"], "Thoughtworks"] is ["Thoughtworks"]', () => {
		expect(tail([["Palak", "Vasara"], "Thoughtworks"])).toEqual(["Thoughtworks"]);
	});	

})