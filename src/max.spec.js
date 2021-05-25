const maxm = require('./max');

describe('Max', () => {

	it('Max of array [1,2,3,4] is 4', () => {
		expect(maxm([1,2,3,4])).toEqual(4);
	});

	it('Max of array [] is null', () => {
		expect(maxm([])).toEqual(-Infinity);
	});

	it('Max of array ["a","b","c"] is NaN', () => {
		expect(maxm(['a','b','c'])).toEqual(NaN);
	});

	it('Max of array ["a","b",1] is NaN', () => {
		expect(maxm(['a','b',1])).toEqual(NaN);
	});

})