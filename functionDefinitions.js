require("inline-mocha")(module);
const assert = require('assert');
const mockCl = require('./mockCl.js');
const TODO = 'TODO';

// DIRECTIONS: complete the prompts below, replacing TODO with your solution to each prompt:

// Write a function called add which accepts two numbers as arguments and returns their sum.

function add(num1,num2){  // num1 & num2 are parameters in this function declaration
    return num1 + num2 ;  // This is a return statement nested in the function body.
}

// Write a function called concatenateStrings which accepts two strings, joins them together, and returns the joined string.

function concatenateStrings(str, str1){  //  str & str1 are parameters in this function declaration
    return str.concat(str1)
}
// This is a return statement nested in the function body it uses the concat method
// to combine 2 strings.


// Write a function called shorten that accepts a single string.  
// The function should remove all the spaces in the string and return the new string.
// Don't spend too much time on this problem if you get stuck.

function shorten(str) {     //this is a function called shorten is has str as an argument.
return (str.replace(/\s+/g, ' '))
}
 //this is a return statement the evaluates the argument str and replaces any spaces using.replace and the
//Regex looking for all spaces in front of char.


// write a function called greeter that does not take arguments.  
// The function should use console.log to print 'hello'.
function greeter(){
    console.log('hello')
}


// The following tests should pass when you have successfully completed the above prompts:
// There is no need to modify these tests.

describe('add', function() {
    it("Should be a function", function() {
        assert.equal(typeof(add), 'function');
    });

    it("should do addition", function() {
    	assert.equal(add(1, 1), 2);
    	assert.equal(add(2, 5), 7);
    });
});

describe('concatenateStrings', function() {
    it("Should be a function", function() {
        assert.equal(typeof(concatenateStrings), 'function');
    });

    it("should combine strings", function() {
    	assert.equal(concatenateStrings('foo', 'bar'), 'foobar');
    	assert.equal(concatenateStrings('should not', 'add spaces'), 'should notadd spaces');
    });
});

describe('shorten', function() {
    it("Should be a function", function() {
        assert.equal(typeof(shorten), 'function');
    });

    it("should remove a single space", function() {
    	assert.equal(shorten('no space'), 'nospace');
    });

    it("should remove multiple spaces", function() {
    	assert.equal(shorten('I am a sentence with six spaces'), 'Iamasentencewithsixspaces');
    });
});

describe('greeter', function() {
	it("Should be a function", function() {
        assert.equal(typeof(greeter), 'function');
    });

	it("should say hello", function() {
		mockCl.start({passThrough: false});
		try {
			greeter();
		} finally {
			mockCl.stop();
		}
		assert(mockCl.stack.includes('hello'));
	});
});
