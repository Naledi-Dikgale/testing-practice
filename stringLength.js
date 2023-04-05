function stringLength(string) {
    return string.length;
  }

const string = "Hello, world!";
const length = stringLength(string);
console.log(length);

//one caracter long

function stringLength(string) {
    const length = string.length;
    if (length < 1) {
      throw new Error("String must be at least 1 character long.");
    } else if (length > 10) {
      throw new Error("String must not be longer than 10 characters.");
    }
    return length;
  }
  