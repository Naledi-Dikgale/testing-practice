const assert = require('assert');

function testStringLength() {
  const string = "Hello, world!";
  const length = stringLength(string);
  assert.strictEqual(length, 13);
}

testStringLength();

//one caracter long

function testStringLength() {
    const string = "Hello, world!";
    const length = stringLength(string);
    assert.strictEqual(length, 13);
  }
  
  function testStringTooShort() {
    const string = "";
    assert.throws(() => {
      stringLength(string);
    }, /String must be at least 1 character long./);
  }
  
  function testStringTooLong() {
    const string = "This string is too long!";
    assert.throws(() => {
      stringLength(string);
    }, /String must not be longer than 10 characters./);
  }
  
  function testStringLengthWithinLimits() {
    const string = "Hello";
    const length = stringLength(string);
    assert.strictEqual(length, 5);
  }
  
  testStringLength();
  testStringTooShort();
  testStringTooLong();
  testStringLengthWithinLimits();
  