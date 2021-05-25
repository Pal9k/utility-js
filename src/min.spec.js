const minm = require('./min');

describe('Min', () => {

	it('Min of array [1,2,3,4] is 1', () => {
		expect(minm([1,2,3,4])).toEqual(1);
	});

	it('Min of array [] is +Infinity', () => {
		expect(minm([])).toEqual(+Infinity);
	});

	it('Min of array ["a","b","c"] is NaN', () => {
		expect(minm(['a','b','c'])).toEqual(NaN);
	});

	it('Min of array ["a","b",1] is NaN', () => {
		expect(minm(['a','b',1])).toEqual(NaN);
	});

})