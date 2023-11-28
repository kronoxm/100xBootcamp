// Question-1:  Create a function to perform a deep clone of an object, handling nested objects and arrays.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john.doe@example.com",
  isStudent: false,
  address: {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  },
  hobbies: ["reading", "coding", "traveling"],
  sayHello: function () {
    console.log(
      "Hello, my name is " + this.firstName + " " + this.lastName + "."
    );
  },
};

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));
const copiedPerson = deepCopy(person);

console.log(person.hobbies[1]);
console.log(copiedPerson.hobbies[1]);

// Question-2:  Write a function that takes two objects and returns an object containing the common key-value pairs.

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  genres: ["Fiction", "Classic"],
  isAvailable: true,
  details: {
    pageCount: 180,
    language: "English",
  },
};

const movie = {
  title: "The Great Gatsby",
  director: "Christopher Nolan",
  releaseYear: 2010,
  genres: ["Sci-Fi", "Action", "Thriller"],
  rating: 8.8,
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
  details: {
    duration: 148,
    language: "English",
  },
};

function commonKeyVal(obj1, obj2) {
  const commonPairs = {};
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
      commonPairs[key] = obj1[key];
    }
  }
  return commonPairs;
}

console.log(commonKeyVal(book, movie));

// Question-3:  Create a function that transforms an object by renaming its keys based on a provided mapping. The function should handle nested objects. For example:
// input: { firstName: 'John', address: { city: 'New York' } }
// mapping: { firstName: 'name', address: { city: 'location.city' } }
// output: { name: 'John', location: { city: 'New York' } }

// Question-4:  Write a function that validates an object against a provided schema. The schema should define the expected structure, data types, and optional/required fields. For example:
// object: { name: 'John', age: 25, email: 'john@example.com' }
// schema: { name: 'string', age: 'number', email: 'string', address: 'string?' }
// valid output: true

// Question-5:  Create a function that merges two objects. If there are conflicts in values, allow for custom logic to determine the merged result. For example:
// object1: { a: 1, b: 2 }
// object2: { b: 3, c: 4 }
// customMerge: (key, val1, val2) => key === 'b' ? val1 * val2 : val2
// output: { a: 1, b: 5, c: 4 }

function mergeObj(obj1, obj2) {
  const mergedObj = {};

  for (let key in obj1) {
    if (obj2.hasOwnProperty(key) && obj1.hasOwnProperty(key)) {
      mergedObj[key] = obj1[key] + obj2[key];
    } else {
      mergedObj[key] = obj1[key];
      for (let key in obj2) {
        if (!mergedObj.hasOwnProperty(key)) mergedObj[key] = obj2[key];
      }
    }
  }
  return mergedObj;
}

console.log(mergeObj({ a: 1, b: 2 }, { b: 3, c: 4 }));

const obj1 = { x: 10, y: 2, e: 4, t: 23 };
const obj2 = { b: 31, e: 14, x: 2, z: 100 };

console.log(mergeObj(obj1, obj2));
