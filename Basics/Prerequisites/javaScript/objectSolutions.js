// Question-1:  Create a function to perform a deep clone of an object, handling nested objects and arrays.

// Question-2:  Write a function that takes two objects and returns an object containing the common key-value pairs.

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
// output: { a: 1, b: 6, c: 4 }
