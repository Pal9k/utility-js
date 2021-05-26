const map = require('./map');

function identity(num) {
  return num;
}

function cube(num) {
  return num*num*num;
}

function addOne(someObject){
	return someObject.x + 1;
}

describe('Map', () => {

	it('Map of [] of cube function is []', () => {
        expect(map([], cube)).toEqual([]);
    });	

    it('Map of [1,2,3] of identity function is [1,2,3]', () => {
        expect(map([1,2,3], identity)).toEqual([1,2,3]);
    });

    it('Map of [1,2,3] of cube function is [1,8,27]', () => {
        expect(map([1,2,3], cube)).toEqual([1,8,27]);
    });

    it('Map of [{x:10}] of addOme function is [11]', () => {
        expect(map([{x:10}], addOne)).toEqual([11]);
    });

})

