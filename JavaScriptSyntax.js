const JavaScriptSyntax = {
    "methods": [
      {
        "name": "charAt",
        "usage": "string.charAt(index)",
        "example": "let str = 'hello';\nlet char = str.charAt(0);\nconsole.log(char);",
        "description": "Returns the character at the specified index."
      },
      {
        "name": "concat",
        "usage": "string.concat(string1, string2, ...)",
        "example": "let str1 = 'hello';\nlet str2 = ' world';\nlet newStr = str1.concat(str2);\nconsole.log(newStr);",
        "description": "Joins two or more strings and returns a new string."
      },
      {
        "name": "includes",
        "usage": "string.includes(searchString, position)",
        "example": "let str = 'hello world';\nlet isIncluded = str.includes('world');\nconsole.log(isIncluded);",
        "description": "Determines whether a string contains the specified characters."
      },
      {
        "name": "indexOf",
        "usage": "string.indexOf(searchValue, fromIndex)",
        "example": "let str = 'hello world';\nlet index = str.indexOf('world');\nconsole.log(index);",
        "description": "Returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex."
      },
      {
        "name": "replace",
        "usage": "string.replace(searchValue, replaceValue)",
        "example": "let str = 'hello world';\nlet newStr = str.replace('world', 'universe');\nconsole.log(newStr);",
        "description": "Replaces some or all matches of a pattern with a replacement."
      },
      {
        "name": "slice",
        "usage": "string.slice(startIndex, endIndex)",
        "example": "let str = 'hello world';\nlet slicedStr = str.slice(6);\nconsole.log(slicedStr);",
        "description": "Extracts a section of a string and returns it as a new string."
      },
      {
        "name": "split",
        "usage": "string.split(separator, limit)",
        "example": "let str = 'hello,world';\nlet arr = str.split(',');\nconsole.log(arr);",
        "description": "Splits a string into an array of substrings."
      },
      {
        "name": "substring",
        "usage": "string.substring(indexStart, indexEnd)",
        "example": "let str = 'hello world';\nlet subStr = str.substring(6);\nconsole.log(subStr);",
        "description": "Returns the substring between indexStart and indexEnd."
      },
      {
        "name": "toLowerCase",
        "usage": "string.toLowerCase()",
        "example": "let str = 'Hello World';\nlet lowerStr = str.toLowerCase();\nconsole.log(lowerStr);",
        "description": "Returns the calling string value converted to lowercase."
      },
      {
        "name": "toUpperCase",
        "usage": "string.toUpperCase()",
        "example": "let str = 'Hello World';\nlet upperStr = str.toUpperCase();\nconsole.log(upperStr);",
        "description": "Returns the calling string value converted to uppercase."
      },
      {
        "name": "trim",
        "usage": "string.trim()",
        "example": "let str = '  hello world  ';\nlet trimmedStr = str.trim();\nconsole.log(trimmedStr);",
        "description": "Removes whitespace from both ends of a string."
      }
    ],
    "functions": [
      {
        "name": "parseInt",
        "usage": "parseInt(string, radix)",
        "example": "let str = '10';\nlet num = parseInt(str);\nconsole.log(num);",
        "description": "Parses a string argument and returns an integer."
      },
      {
        "name": "parseFloat",
        "usage": "parseFloat(string)",
        "example": "let str = '10.5';\nlet num = parseFloat(str);\nconsole.log(num);",
        "description": "Parses a string argument and returns a floating point number."
      },
      {
        "name": "isNaN",
        "usage": "isNaN(value)",
        "example": "let num = 'hello';\nlet isNan = isNaN(num);\nconsole.log(isNan);",
        "description": "Determines whether a value is NaN or not."
      },
      {
        "name": "isFinite",
        "usage": "isFinite(value)",
        "example": "let num = Infinity;\nlet isFiniteNum = isFinite(num);\nconsole.log(isFiniteNum);",
        "description": "Determines whether a value is a finite number."
      },
      {
        "name": "decodeURI",
        "usage": "decodeURI(encodedURI)",
        "example": "let uri = 'https://www.example.com?name=John%20Doe';\nlet decodedURI = decodeURI(uri);\nconsole.log(decodedURI);",
        "description": "Decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine."
      },
      {
        "name": "encodeURI",
        "usage": "encodeURI(uri)",
        "example": "let uri = 'https://www.example.com?name=John Doe';\nlet encodedURI = encodeURI(uri);\nconsole.log(encodedURI);",
        "description": "Encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character."
      },
      {
        "name": "decodeURIComponent",
        "usage": "decodeURIComponent(encodedURIComponent)",
        "example": "let uriComponent = 'John%20Doe';\nlet decodedURIComponent = decodeURIComponent(uriComponent);\nconsole.log(decodedURIComponent);",
        "description": "Decodes a component of a Uniform Resource Identifier (URI) previously created by encodeURIComponent or by a similar routine."
      },
      {
        "name": "encodeURIComponent",
        "usage": "encodeURIComponent(uriComponent)",
        "example": "let uriComponent = 'John Doe';\nlet encodedURIComponent = encodeURIComponent(uriComponent);\nconsole.log(encodedURIComponent);",
        "description": "Encodes a component of a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character."
      }
    ],
    "properties": [
      {
        "name": "length",
        "usage": "string.length",
        "example": "let str = 'hello';\nlet length = str.length;\nconsole.log(length);",
        "description": "Returns the length of a string."
      },
      {
        "name": "prototype",
        "usage": "String.prototype",
        "example": "String.prototype.customMethod = function() {\n    return this.toUpperCase();\n};\nlet str = 'hello';\nconsole.log(str.customMethod());",
        "description": "Allows addition of properties and methods to a String object."
      }
    ],
    "keywords": [
      {
        "name": "abstract",
        "description": "Reserved keyword for future use.",
        "example": "abstract class Shape {}",
        "details": {
          "how_it_works": "The 'abstract' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript abstract Keyword",
          "description": "Learn about the 'abstract' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, abstract, keyword"
        }
      },
      {
        "name": "arguments",
        "description": "An array-like object representing the arguments passed to a function.",
        "example": "function example() { console.log(arguments); }",
        "details": {
          "how_it_works": "The 'arguments' object is a local variable available within all non-arrow functions. It contains an entry for each argument passed to the function.",
          "use_cases": ["Accessing all arguments passed to a function", "Creating variadic functions"],
          "additional_examples": [
            "function sum() { let total = 0; for (let i = 0; i < arguments.length; i++) { total += arguments[i]; } return total; }",
            "function greet() { console.log('Hello ' + arguments[0] + '!'); }"
          ]
        },
        "meta": {
          "title": "JavaScript arguments Object",
          "description": "Learn about the 'arguments' object in JavaScript, which represents the arguments passed to a function.",
          "keywords": "javascript, arguments, object"
        }
      },
      {
        "name": "await",
        "description": "Pauses the execution of an async function until a Promise is settled.",
        "example": "async function fetchData() { const response = await fetch('https://api.example.com/data'); const data = await response.json(); return data; }",
        "details": {
          "how_it_works": "The 'await' keyword is used inside async functions to pause execution until the given Promise is fulfilled or rejected.",
          "use_cases": ["Handling asynchronous operations", "Waiting for Promises to settle"],
          "additional_examples": [
            "async function getUser() { const user = await getUserFromDatabase(); console.log(user); }",
            "async function main() { try { const data = await fetchData(); console.log(data); } catch (error) { console.error(error); } }"
          ]
        },
        "meta": {
          "title": "JavaScript await Keyword",
          "description": "Learn how to use the 'await' keyword in JavaScript to handle asynchronous operations inside async functions.",
          "keywords": "javascript, await, async, promise"
        }
      },
      {
        "name": "boolean",
        "description": "A primitive data type representing true or false values.",
        "example": "let isActive = true;",
        "details": {
          "how_it_works": "The 'boolean' data type in JavaScript represents logical values: true and false.",
          "use_cases": ["Storing true/false values", "Controlling program flow with conditionals"],
          "additional_examples": [
            "let isCompleted = false;",
            "const hasAccess = Boolean(user);"
          ]
        },
        "meta": {
          "title": "JavaScript boolean Data Type",
          "description": "Learn about the 'boolean' data type in JavaScript, used to represent true or false values.",
          "keywords": "javascript, boolean, data type"
        }
      },
      {
        "name": "break",
        "description": "Terminates the current loop, switch, or label statement.",
        "example": "for (let i = 0; i < 10; i++) { if (i === 5) { break; } console.log(i); }",
        "details": {
          "how_it_works": "The 'break' statement terminates the current loop, switch, or label statement and transfers control to the statement following the terminated statement.",
          "use_cases": ["Exiting loops early", "Breaking out of switch cases"],
          "additional_examples": [
            "while (true) { if (condition) { break; } }",
            "switch (key) { case 'value': break; }"
          ]
        },
        "meta": {
          "title": "JavaScript break Statement",
          "description": "Learn how to use the 'break' statement in JavaScript to terminate loops and switch statements.",
          "keywords": "javascript, break, statement, loop, switch"
        }
      },
      {
        "name": "byte",
        "description": "Reserved keyword for future use.",
        "example": "byte b = 0;",
        "details": {
          "how_it_works": "The 'byte' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript byte Keyword",
          "description": "Learn about the 'byte' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, byte, keyword"
        }
      },
      {
        "name": "case",
        "description": "Defines a case in a switch statement.",
        "example": "switch (color) { case 'red': console.log('Red'); break; case 'blue': console.log('Blue'); break; default: console.log('Unknown color'); }",
        "details": {
          "how_it_works": "The 'case' statement defines a block of code to execute in a switch statement if the specified case value matches the switch expression.",
          "use_cases": ["Handling multiple conditions", "Implementing switch statements"],
          "additional_examples": [
            "switch (day) { case 1: console.log('Monday'); break; case 2: console.log('Tuesday'); break; default: console.log('Unknown day'); }",
            "switch (status) { case 'active': doSomething(); break; case 'inactive': doSomethingElse(); break; }"
          ]
        },
        "meta": {
          "title": "JavaScript case Statement",
          "description": "Learn how to define cases in a switch statement using the 'case' keyword in JavaScript.",
          "keywords": "javascript, case, switch, statement"
        }
      },
      {
        "name": "catch",
        "description": "Defines a block of code to handle errors in a try statement.",
        "example": "try { let result = riskyOperation(); } catch (error) { console.error(error); }",
        "details": {
          "how_it_works": "The 'catch' statement defines a block of code to handle errors that occur in the associated try block.",
          "use_cases": ["Handling exceptions", "Catching errors", "Improving error handling"],
          "additional_examples": [
            "try { JSON.parse('{ malformed json }'); } catch (e) { console.error('Parsing error:', e); }",
            "try { let data = fetchData(); } catch (error) { handleFetchError(error); }"
          ]
        },
        "meta": {
          "title": "JavaScript catch Statement",
          "description": "Learn how to handle errors using the 'catch' statement in JavaScript.",
          "keywords": "javascript, catch, error, handling"
        }
      },
      {
        "name": "char",
        "description": "Reserved keyword for future use.",
        "example": "char c = 'a';",
        "details": {
          "how_it_works": "The 'char' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript char Keyword",
          "description": "Learn about the 'char' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, char, keyword"
        }
      },
      {
        "name": "class",
        "description": "Defines a class.",
        "example": "class Person { constructor(name) { this.name = name; } greet() { console.log(`Hello, ${this.name}`); } }",
        "details": {
          "how_it_works": "The 'class' keyword is used to define a class, a blueprint for creating objects with specific properties and methods.",
          "use_cases": ["Creating objects", "Defining classes", "Encapsulating data"],
          "additional_examples": [
            "class Animal { constructor(type) { this.type = type; } speak() { console.log(`${this.type} makes a sound`); } }",
            "class Dog extends Animal { constructor(name) { super('Dog'); this.name = name; } bark() { console.log(`${this.name} barks`); } }"
          ]
        },
        "meta": {
          "title": "JavaScript class Keyword",
          "description": "Learn how to define classes using the 'class' keyword in JavaScript.",
          "keywords": "javascript, class, object-oriented, programming"
        }
      },
      {
        "name": "const",
        "description": "Declares a block-scoped constant variable.",
        "example": "const pi = 3.14;",
        "details": {
          "how_it_works": "The 'const' keyword is used to declare a constant variable, which means its value cannot be reassigned once it is initialized.",
          "use_cases": ["Declaring constants", "Preventing reassignment of variables", "Improving code clarity"],
          "additional_examples": [
            "const name = 'John';",
            "const MAX_USERS = 100;"
          ]
        },
        "meta": {
          "title": "JavaScript const Keyword",
          "description": "Learn how to declare constants using the 'const' keyword in JavaScript.",
          "keywords": "javascript, const, constant, variable"
        }
      },
      {
        "name": "continue",
        "description": "Terminates the current iteration of a loop and continues with the next iteration.",
        "example": "for (let i = 0; i < 10; i++) { if (i % 2 === 0) { continue; } console.log(i); }",
        "details": {
          "how_it_works": "The 'continue' statement terminates the current iteration of a loop and continues with the next iteration.",
          "use_cases": ["Skipping iterations in loops", "Continuing to the next loop iteration"],
          "additional_examples": [
            "while (condition) { if (skipCondition) { continue; } processItem(); }",
            "for (let i = 0; i < array.length; i++) { if (!array[i].isValid) { continue; } validItems.push(array[i]); }"
          ]
        },
        "meta": {
          "title": "JavaScript continue Statement",
          "description": "Learn how to skip iterations in loops using the 'continue' statement in JavaScript.",
          "keywords": "javascript, continue, loop, iteration"
        }
      },
      {
        "name": "debugger",
        "description": "Invokes any available debugging functionality.",
        "example": "function test() { debugger; let x = 10; }",
        "details": {
          "how_it_works": "The 'debugger' statement invokes any available debugging functionality, such as setting a breakpoint in the code.",
          "use_cases": ["Debugging code", "Setting breakpoints", "Pausing execution for debugging"],
          "additional_examples": [
            "function calculate(value) { debugger; return value * 2; }",
            "debugger; // Pause execution here"
          ]
        },
        "meta": {
          "title": "JavaScript debugger Statement",
          "description": "Learn how to use the 'debugger' statement in JavaScript to invoke debugging functionality.",
          "keywords": "javascript, debugger, debugging, breakpoint"
        }
      },
      {
        "name": "default",
        "description": "Specifies the default block of code to execute in a switch statement.",
        "example": "switch (color) { case 'red': console.log('Red'); break; case 'blue': console.log('Blue'); break; default: console.log('Unknown color'); }",
        "details": {
          "how_it_works": "The 'default' statement specifies the block of code to execute if no case matches in a switch statement.",
          "use_cases": ["Handling default cases in switch statements", "Providing fallback logic"],
          "additional_examples": [
            "switch (status) { case 'active': console.log('Active'); break; case 'inactive': console.log('Inactive'); break; default: console.log('Unknown status'); }",
            "switch (day) { case 1: console.log('Monday'); break; case 2: console.log('Tuesday'); break; default: console.log('Unknown day'); }"
          ]
        },
        "meta": {
          "title": "JavaScript default Statement",
          "description": "Learn how to specify default cases in switch statements using the 'default' keyword in JavaScript.",
          "keywords": "javascript, default, switch, case"
        }
      },
      {
        "name": "delete",
        "description": "Deletes a property from an object.",
        "example": "const obj = { a: 1, b: 2 }; delete obj.a;",
        "details": {
          "how_it_works": "The 'delete' operator is used to remove a property from an object, resulting in the property being undefined.",
          "use_cases": ["Removing object properties", "Deleting array elements"],
          "additional_examples": [
            "const user = { name: 'John', age: 30 }; delete user.age;",
            "const arr = [1, 2, 3]; delete arr[1];"
          ]
        },
        "meta": {
          "title": "JavaScript delete Operator",
          "description": "Learn how to delete object properties using the 'delete' operator in JavaScript.",
          "keywords": "javascript, delete, operator, object"
        }
      },
      {
        "name": "do",
        "description": "Executes a block of code at least once, and then repeatedly executes the block while a specified condition is true.",
        "example": "let i = 0; do { console.log(i); i++; } while (i < 5);",
        "details": {
          "how_it_works": "The 'do...while' statement executes a block of code at least once, and then repeats the execution as long as the specified condition evaluates to true.",
          "use_cases": ["Running a loop at least once", "Executing code with a post-condition"],
          "additional_examples": [
            "let count = 0; do { console.log(count); count++; } while (count < 3);",
            "do { console.log('This will run once even if the condition is false'); } while (false);"
          ]
        },
        "meta": {
          "title": "JavaScript do...while Statement",
          "description": "Learn how to use the 'do...while' statement in JavaScript to execute code at least once and then repeatedly based on a condition.",
          "keywords": "javascript, do while, loop, statement"
        }
      },
      {
        "name": "double",
        "description": "Reserved keyword for future use.",
        "example": "double x = 1.0;",
        "details": {
          "how_it_works": "The 'double' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript double Keyword",
          "description": "Learn about the 'double' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, double, keyword"
        }
      },
      {
        "name": "else",
        "description": "Specifies a block of code to execute if the condition in an if statement is false.",
        "example": "if (x > 10) { console.log('x is greater than 10'); } else { console.log('x is 10 or less'); }",
        "details": {
          "how_it_works": "The 'else' statement specifies a block of code to execute if the condition in the corresponding 'if' statement evaluates to false.",
          "use_cases": ["Providing alternative logic for conditionals", "Handling false conditions"],
          "additional_examples": [
            "if (isLoggedIn) { showDashboard(); } else { showLogin(); }",
            "if (score >= 50) { console.log('Pass'); } else { console.log('Fail'); }"
          ]
        },
        "meta": {
          "title": "JavaScript else Statement",
          "description": "Learn how to provide alternative logic using the 'else' statement in JavaScript.",
          "keywords": "javascript, else, conditional, statement"
        }
      },
      {
        "name": "enum",
        "description": "Reserved keyword for future use.",
        "example": "enum Color { RED, GREEN, BLUE };",
        "details": {
          "how_it_works": "The 'enum' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript enum Keyword",
          "description": "Learn about the 'enum' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, enum, keyword"
        }
      },
      {
        "name": "eval",
        "description": "Evaluates JavaScript code represented as a string.",
        "example": "eval('console.log(\"Hello, World!\")');",
        "details": {
          "how_it_works": "The 'eval' function evaluates JavaScript code represented as a string and executes it within the current context.",
          "use_cases": ["Dynamically executing code", "Running code from strings"],
          "additional_examples": [
            "let code = '2 + 2'; console.log(eval(code));",
            "eval('var x = 10; console.log(x);');"
          ]
        },
        "meta": {
          "title": "JavaScript eval Function",
          "description": "Learn how to evaluate and execute JavaScript code represented as strings using the 'eval' function.",
          "keywords": "javascript, eval, function, execute"
        }
      },
      {
        "name": "export",
        "description": "Exports functions, objects, or primitive values from a module.",
        "example": "export const pi = 3.14; export function multiply(a, b) { return a * b; }",
        "details": {
          "how_it_works": "The 'export' statement is used to export functions, objects, or primitive values from a module so they can be imported into other modules using the 'import' statement.",
          "use_cases": ["Modularizing code", "Exporting functions", "Sharing variables between modules"],
          "additional_examples": [
            "export default class Person { constructor(name) { this.name = name; } }",
            "const PI = 3.14; export { PI };"
          ]
        },
        "meta": {
          "title": "JavaScript export Statement",
          "description": "Learn how to export functions, objects, and values from modules using the 'export' statement in JavaScript.",
          "keywords": "javascript, export, module, statement"
        }
      },
      {
        "name": "extends",
        "description": "Indicates that a class is a subclass of another class.",
        "example": "class Dog extends Animal { constructor(name) { super(name); } bark() { console.log('Woof!'); } }",
        "details": {
          "how_it_works": "The 'extends' keyword is used in class declarations or class expressions to create a class that is a child of another class.",
          "use_cases": ["Creating subclasses", "Inheriting properties and methods", "Implementing inheritance"],
          "additional_examples": [
            "class Cat extends Animal { constructor(name) { super(name); } meow() { console.log('Meow!'); } }",
            "class Rectangle extends Shape { constructor(width, height) { super(width, height); } area() { return this.width * this.height; } }"
          ]
        },
        "meta": {
          "title": "JavaScript extends Keyword",
          "description": "Learn how to create subclasses using the 'extends' keyword in JavaScript.",
          "keywords": "javascript, extends, class, inheritance"
        }
      },
      {
        "name": "false",
        "description": "A Boolean literal representing false.",
        "example": "let isAvailable = false;",
        "details": {
          "how_it_works": "The 'false' keyword is a Boolean literal that represents the false value.",
          "use_cases": ["Setting false values", "Controlling program flow with conditionals"],
          "additional_examples": [
            "let isComplete = false;",
            "const hasAccess = false;"
          ]
        },
        "meta": {
          "title": "JavaScript false Keyword",
          "description": "Learn about the 'false' Boolean literal in JavaScript, representing false values.",
          "keywords": "javascript, false, boolean, literal"
        }
      },
      {
        "name": "final",
        "description": "Reserved keyword for future use.",
        "example": "final class FinalClass {}",
        "details": {
          "how_it_works": "The 'final' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript final Keyword",
          "description": "Learn about the 'final' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, final, keyword"
        }
      },
      {
        "name": "finally",
        "description": "Specifies a block of code to execute after a try...catch block, regardless of whether an error was thrown or caught.",
        "example": "try { riskyOperation(); } catch (e) { console.error(e); } finally { cleanup(); }",
        "details": {
          "how_it_works": "The 'finally' block contains code that will be executed after the try and catch blocks, regardless of whether an exception was thrown or caught.",
          "use_cases": ["Running cleanup code", "Ensuring code execution after try...catch blocks"],
          "additional_examples": [
            "try { openFile(); } catch (e) { console.error('Error:', e); } finally { closeFile(); }",
            "try { startProcess(); } catch (e) { handleError(e); } finally { endProcess(); }"
          ]
        },
        "meta": {
          "title": "JavaScript finally Block",
          "description": "Learn how to execute code after a try...catch block using the 'finally' keyword in JavaScript.",
          "keywords": "javascript, finally, try catch, block"
        }
      },
      {
        "name": "float",
        "description": "Reserved keyword for future use.",
        "example": "float x = 1.0;",
        "details": {
          "how_it_works": "The 'float' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript float Keyword",
          "description": "Learn about the 'float' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, float, keyword"
        }
      },
      {
        "name": "for",
        "description": "Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement to be executed in the loop.",
        "example": "for (let i = 0; i < 5; i++) { console.log(i); }",
        "details": {
          "how_it_works": "The 'for' loop creates a loop with three optional expressions: initialization, condition, and final expression, followed by a statement to be executed for each iteration.",
          "use_cases": ["Iterating over arrays", "Creating loops with a specified number of iterations"],
          "additional_examples": [
            "for (let i = 0; i < array.length; i++) { console.log(array[i]); }",
            "for (let item of items) { processItem(item); }"
          ]
        },
        "meta": {
          "title": "JavaScript for Loop",
          "description": "Learn how to create loops using the 'for' keyword in JavaScript.",
          "keywords": "javascript, for, loop, iteration"
        }
      },
      {
        "name": "function",
        "description": "Declares a function with the specified parameters.",
        "example": "function greet(name) { console.log(`Hello, ${name}`); }",
        "details": {
          "how_it_works": "The 'function' keyword declares a function with the specified parameters, defining a block of code to be executed when the function is called.",
          "use_cases": ["Defining reusable code blocks", "Encapsulating functionality", "Creating functions"],
          "additional_examples": [
            "function add(a, b) { return a + b; }",
            "function multiply(a, b) { return a * b; }"
          ]
        },
        "meta": {
          "title": "JavaScript function Keyword",
          "description": "Learn how to declare functions using the 'function' keyword in JavaScript.",
          "keywords": "javascript, function, declare, keyword"
        }
      },
      {
        "name": "goto",
        "description": "Reserved keyword for future use.",
        "example": "goto label;",
        "details": {
          "how_it_works": "The 'goto' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript goto Keyword",
          "description": "Learn about the 'goto' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, goto, keyword"
        }
      },
      {
        "name": "if",
        "description": "Executes a statement if a specified condition is true.",
        "example": "if (x > 10) { console.log('x is greater than 10'); }",
        "details": {
          "how_it_works": "The 'if' statement executes a statement if a specified condition evaluates to true.",
          "use_cases": ["Controlling program flow", "Executing code conditionally"],
          "additional_examples": [
            "if (user.isLoggedIn) { showDashboard(); }",
            "if (score >= 50) { console.log('Pass'); }"
          ]
        },
        "meta": {
          "title": "JavaScript if Statement",
          "description": "Learn how to execute code conditionally using the 'if' statement in JavaScript.",
          "keywords": "javascript, if, conditional, statement"
        }
      },
      {
        "name": "implements",
        "description": "Reserved keyword for future use.",
        "example": "class MyClass implements MyInterface {}",
        "details": {
          "how_it_works": "The 'implements' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript implements Keyword",
          "description": "Learn about the 'implements' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, implements, keyword"
        }
      },
      {
        "name": "import",
        "description": "Imports functions, objects, or primitive values from another module.",
        "example": "import { pi, multiply } from './math';",
        "details": {
          "how_it_works": "The 'import' statement is used to import functions, objects, or primitive values from another module into the current module.",
          "use_cases": ["Modularizing code", "Importing functions", "Reusing code"],
          "additional_examples": [
            "import defaultExport from './module';",
            "import * as math from './math';"
          ]
        },
        "meta": {
          "title": "JavaScript import Statement",
          "description": "Learn how to import functions, objects, and values from modules using the 'import' statement in JavaScript.",
          "keywords": "javascript, import, module, statement"
        }
      },
      {
        "name": "in",
        "description": "Checks if a property exists in an object.",
        "example": "let person = { name: 'John', age: 30 }; console.log('name' in person);",
        "details": {
          "how_it_works": "The 'in' operator checks if a specified property exists in an object.",
          "use_cases": ["Checking property existence", "Validating object properties"],
          "additional_examples": [
            "const car = { make: 'Toyota', model: 'Camry' }; console.log('make' in car);",
            "let arr = [1, 2, 3]; console.log(2 in arr);"
          ]
        },
        "meta": {
          "title": "JavaScript in Operator",
          "description": "Learn how to check if a property exists in an object using the 'in' operator in JavaScript.",
          "keywords": "javascript, in, operator, object"
        }
      },
      {
        "name": "instanceof",
        "description": "Tests whether an object has in its prototype chain the prototype property of a constructor.",
        "example": "let date = new Date(); console.log(date instanceof Date);",
        "details": {
          "how_it_works": "The 'instanceof' operator tests whether an object is an instance of a specified constructor function.",
          "use_cases": ["Checking object types", "Validating instances"],
          "additional_examples": [
            "let arr = []; console.log(arr instanceof Array);",
            "function Person() {} let person = new Person(); console.log(person instanceof Person);"
          ]
        },
        "meta": {
          "title": "JavaScript instanceof Operator",
          "description": "Learn how to test object instances using the 'instanceof' operator in JavaScript.",
          "keywords": "javascript, instanceof, operator, instance"
        }
      },
      {
        "name": "int",
        "description": "Reserved keyword for future use.",
        "example": "int x = 10;",
        "details": {
          "how_it_works": "The 'int' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript int Keyword",
          "description": "Learn about the 'int' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, int, keyword"
        }
      },
      {
        "name": "interface",
        "description": "Reserved keyword for future use.",
        "example": "interface MyInterface {}",
        "details": {
          "how_it_works": "The 'interface' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript interface Keyword",
          "description": "Learn about the 'interface' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, interface, keyword"
        }
      },
      {
        "name": "let",
        "description": "Declares a block-scoped variable, optionally initializing it to a value.",
        "example": "let count = 0;",
        "details": {
          "how_it_works": "The 'let' keyword declares a block-scoped variable, which is limited to the block, statement, or expression in which it is used.",
          "use_cases": ["Declaring block-scoped variables", "Improving variable scope management"],
          "additional_examples": [
            "let userName = 'Alice';",
            "let total = 0;"
          ]
        },
        "meta": {
          "title": "JavaScript let Keyword",
          "description": "Learn how to declare block-scoped variables using the 'let' keyword in JavaScript.",
          "keywords": "javascript, let, variable, block scope"
        }
      },
      {
        "name": "long",
        "description": "Reserved keyword for future use.",
        "example": "long count = 1000000;",
        "details": {
          "how_it_works": "The 'long' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript long Keyword",
          "description": "Learn about the 'long' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, long, keyword"
        }
      },
      {
        "name": "native",
        "description": "Reserved keyword for future use.",
        "example": "native function myFunction();",
        "details": {
          "how_it_works": "The 'native' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript native Keyword",
          "description": "Learn about the 'native' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, native, keyword"
        }
      },
      {
        "name": "new",
        "description": "Creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function.",
        "example": "let obj = new Object();",
        "details": {
          "how_it_works": "The 'new' keyword is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.",
          "use_cases": ["Creating object instances", "Invoking constructor functions"],
          "additional_examples": [
            "let date = new Date();",
            "let person = new Person('John');"
          ]
        },
        "meta": {
          "title": "JavaScript new Keyword",
          "description": "Learn how to create instances of objects using the 'new' keyword in JavaScript.",
          "keywords": "javascript, new, object, instance"
        }
      },
      {
        "name": "null",
        "description": "A special value representing 'no value' or 'empty'.",
        "example": "let value = null;",
        "details": {
          "how_it_works": "The 'null' keyword is a special value representing 'no value' or 'empty'. It is often used to indicate the absence of an object or value.",
          "use_cases": ["Indicating no value", "Representing an empty state"],
          "additional_examples": [
            "let result = null;",
            "const user = null;"
          ]
        },
        "meta": {
          "title": "JavaScript null Keyword",
          "description": "Learn about the 'null' keyword in JavaScript, representing 'no value' or 'empty'.",
          "keywords": "javascript, null, keyword, value"
        }
      },
      {
        "name": "package",
        "description": "Reserved keyword for future use.",
        "example": "package myPackage;",
        "details": {
          "how_it_works": "The 'package' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript package Keyword",
          "description": "Learn about the 'package' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, package, keyword"
        }
      },
      {
        "name": "private",
        "description": "Reserved keyword for future use.",
        "example": "private x = 10;",
        "details": {
          "how_it_works": "The 'private' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript private Keyword",
          "description": "Learn about the 'private' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, private, keyword"
        }
      },
      {
        "name": "protected",
        "description": "Reserved keyword for future use.",
        "example": "protected y = 20;",
        "details": {
          "how_it_works": "The 'protected' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript protected Keyword",
          "description": "Learn about the 'protected' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, protected, keyword"
        }
      },
      {
        "name": "public",
        "description": "Reserved keyword for future use.",
        "example": "public z = 30;",
        "details": {
          "how_it_works": "The 'public' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript public Keyword",
          "description": "Learn about the 'public' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, public, keyword"
        }
      },
      {
        "name": "return",
        "description": "Exits a function and returns a value from that function.",
        "example": "function sum(a, b) { return a + b; }",
        "details": {
          "how_it_works": "The 'return' statement exits a function and returns a value from that function.",
          "use_cases": ["Returning values from functions", "Exiting functions early"],
          "additional_examples": [
            "function greet() { return 'Hello, World!'; }",
            "function multiply(a, b) { return a * b; }"
          ]
        },
        "meta": {
          "title": "JavaScript return Statement",
          "description": "Learn how to return values from functions using the 'return' statement in JavaScript.",
          "keywords": "javascript, return, function, statement"
        }
      },
      {
        "name": "short",
        "description": "Reserved keyword for future use.",
        "example": "short num = 100;",
        "details": {
          "how_it_works": "The 'short' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript short Keyword",
          "description": "Learn about the 'short' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, short, keyword"
        }
      },
      {
        "name": "static",
        "description": "Defines a static method or property in a class.",
        "example": "class MathUtil { static add(a, b) { return a + b; } }",
        "details": {
          "how_it_works": "The 'static' keyword defines a static method or property in a class, which can be accessed without creating an instance of the class.",
          "use_cases": ["Creating utility methods", "Defining class-level methods or properties"],
          "additional_examples": [
            "class Helper { static formatDate(date) { return date.toISOString(); } }",
            "class Config { static getVersion() { return '1.0.0'; } }"
          ]
        },
        "meta": {
          "title": "JavaScript static Keyword",
          "description": "Learn how to define static methods or properties in classes using the 'static' keyword in JavaScript.",
          "keywords": "javascript, static, class, method"
        }
      },
      {
        "name": "super",
        "description": "Calls the constructor or methods of a parent class.",
        "example": "class Dog extends Animal { constructor(name) { super(name); } }",
        "details": {
          "how_it_works": "The 'super' keyword is used to call the constructor or methods of a parent class from within a subclass.",
          "use_cases": ["Calling parent class constructors", "Accessing parent class methods"],
          "additional_examples": [
            "class Cat extends Animal { constructor(name) { super(name); this.sound = 'Meow'; } }",
            "class Rectangle extends Shape { constructor(width, height) { super(width, height); } area() { return this.width * this.height; } }"
          ]
        },
        "meta": {
          "title": "JavaScript super Keyword",
          "description": "Learn how to call parent class constructors and methods using the 'super' keyword in JavaScript.",
          "keywords": "javascript, super, class, parent"
        }
      },
      {
        "name": "switch",
        "description": "Evaluates an expression and executes the corresponding case block.",
        "example": "switch (color) { case 'red': console.log('Red'); break; case 'blue': console.log('Blue'); break; default: console.log('Unknown color'); }",
        "details": {
          "how_it_works": "The 'switch' statement evaluates an expression and executes the code block corresponding to the matching case.",
          "use_cases": ["Handling multiple conditions", "Creating conditional branching"],
          "additional_examples": [
            "switch (day) { case 1: console.log('Monday'); break; case 2: console.log('Tuesday'); break; default: console.log('Unknown day'); }",
            "switch (status) { case 'active': console.log('Active'); break; case 'inactive': console.log('Inactive'); break; default: console.log('Unknown status'); }"
          ]
        },
        "meta": {
          "title": "JavaScript switch Statement",
          "description": "Learn how to handle multiple conditions using the 'switch' statement in JavaScript.",
          "keywords": "javascript, switch, case, statement"
        }
      },
      {
        "name": "synchronized",
        "description": "Reserved keyword for future use.",
        "example": "synchronized function syncFunc() {}",
        "details": {
          "how_it_works": "The 'synchronized' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript synchronized Keyword",
          "description": "Learn about the 'synchronized' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, synchronized, keyword"
        }
      },
      {
        "name": "this",
        "description": "Refers to the current object.",
        "example": "class Person { constructor(name) { this.name = name; } greet() { console.log(`Hello, ${this.name}`); } }",
        "details": {
          "how_it_works": "The 'this' keyword refers to the current object, providing a way to access the object's properties and methods.",
          "use_cases": ["Accessing object properties", "Referring to the current object"],
          "additional_examples": [
            "let obj = { name: 'John', greet() { console.log(`Hello, ${this.name}`); } }; obj.greet();",
            "function showThis() { console.log(this); } showThis.call({ a: 1 });"
          ]
        },
        "meta": {
          "title": "JavaScript this Keyword",
          "description": "Learn how to refer to the current object using the 'this' keyword in JavaScript.",
          "keywords": "javascript, this, object, reference"
        }
      },
      {
        "name": "throw",
        "description": "Throws a user-defined exception.",
        "example": "throw new Error('Something went wrong');",
        "details": {
          "how_it_works": "The 'throw' statement throws a user-defined exception, which must be a value of a specified type.",
          "use_cases": ["Throwing errors", "Creating custom exceptions"],
          "additional_examples": [
            "function validateAge(age) { if (age < 18) { throw new Error('Age must be at least 18'); } }",
            "try { riskyOperation(); } catch (e) { throw new Error('Operation failed'); }"
          ]
        },
        "meta": {
          "title": "JavaScript throw Statement",
          "description": "Learn how to throw user-defined exceptions using the 'throw' statement in JavaScript.",
          "keywords": "javascript, throw, exception, error"
        }
      },
      {
        "name": "throws",
        "description": "Reserved keyword for future use.",
        "example": "throws new Error();",
        "details": {
          "how_it_works": "The 'throws' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript throws Keyword",
          "description": "Learn about the 'throws' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, throws, keyword"
        }
      },
      {
        "name": "transient",
        "description": "Reserved keyword for future use.",
        "example": "transient data;",
        "details": {
          "how_it_works": "The 'transient' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript transient Keyword",
          "description": "Learn about the 'transient' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, transient, keyword"
        }
      },
      {
        "name": "true",
        "description": "A Boolean literal representing true.",
        "example": "let isActive = true;",
        "details": {
          "how_it_works": "The 'true' keyword is a Boolean literal that represents the true value.",
          "use_cases": ["Setting true values", "Controlling program flow with conditionals"],
          "additional_examples": [
            "let isComplete = true;",
            "const hasAccess = true;"
          ]
        },
        "meta": {
          "title": "JavaScript true Keyword",
          "description": "Learn about the 'true' Boolean literal in JavaScript, representing true values.",
          "keywords": "javascript, true, boolean, literal"
        }
      },
      {
        "name": "try",
        "description": "Specifies a block of code to run that will be tested for exceptions.",
        "example": "try { riskyOperation(); } catch (e) { console.error(e); }",
        "details": {
          "how_it_works": "The 'try' statement defines a block of code to be executed and tested for exceptions.",
          "use_cases": ["Handling exceptions", "Running code that may throw errors"],
          "additional_examples": [
            "try { JSON.parse('{ malformed json }'); } catch (e) { console.error('Parsing error:', e); }",
            "try { let data = fetchData(); } catch (error) { handleFetchError(error); }"
          ]
        },
        "meta": {
          "title": "JavaScript try Statement",
          "description": "Learn how to handle exceptions using the 'try' statement in JavaScript.",
          "keywords": "javascript, try, catch, exception"
        }
      },
      {
        "name": "typeof",
        "description": "Returns a string indicating the type of the unevaluated operand.",
        "example": "console.log(typeof 123);",
        "details": {
          "how_it_works": "The 'typeof' operator returns a string indicating the type of the unevaluated operand.",
          "use_cases": ["Checking variable types", "Debugging code"],
          "additional_examples": [
            "console.log(typeof 'Hello');",
            "console.log(typeof true);"
          ]
        },
        "meta": {
          "title": "JavaScript typeof Operator",
          "description": "Learn how to check the type of variables using the 'typeof' operator in JavaScript.",
          "keywords": "javascript, typeof, operator, type"
        }
      },
      {
        "name": "var",
        "description": "Declares a variable, optionally initializing it to a value.",
        "example": "var x = 10;",
        "details": {
          "how_it_works": "The 'var' keyword declares a variable, optionally initializing it to a value. It is function-scoped or globally-scoped.",
          "use_cases": ["Declaring variables", "Initialising variables"],
          "additional_examples": [
            "var name = 'Alice';",
            "var total = 0;"
          ]
        },
        "meta": {
          "title": "JavaScript var Keyword",
          "description": "Learn how to declare variables using the 'var' keyword in JavaScript.",
          "keywords": "javascript, var, variable, declaration"
        }
      },
      {
        "name": "void",
        "description": "Specifies an expression to be evaluated without returning a value.",
        "example": "void function() { console.log('No return value'); }();",
        "details": {
          "how_it_works": "The 'void' operator specifies an expression to be evaluated without returning a value.",
          "use_cases": ["Discarding return values", "Running expressions without results"],
          "additional_examples": [
            "void console.log('Hello');",
            "void (0);"
          ]
        },
        "meta": {
          "title": "JavaScript void Operator",
          "description": "Learn how to evaluate expressions without returning values using the 'void' operator in JavaScript.",
          "keywords": "javascript, void, operator, expression"
        }
      },
      {
        "name": "volatile",
        "description": "Reserved keyword for future use.",
        "example": "volatile data;",
        "details": {
          "how_it_works": "The 'volatile' keyword is reserved for future use and currently does not have a functionality in JavaScript.",
          "use_cases": ["Reserved for future language features."],
          "additional_examples": []
        },
        "meta": {
          "title": "JavaScript volatile Keyword",
          "description": "Learn about the 'volatile' keyword in JavaScript, reserved for future use.",
          "keywords": "javascript, volatile, keyword"
        }
      },
      {
        "name": "while",
        "description": "Creates a loop that executes a specified statement as long as the test condition evaluates to true.",
        "example": "let i = 0; while (i < 5) { console.log(i); i++; }",
        "details": {
          "how_it_works": "The 'while' loop creates a loop that executes a specified statement as long as the test condition evaluates to true.",
          "use_cases": ["Creating loops with unknown iterations", "Running code while a condition is true"],
          "additional_examples": [
            "let count = 0; while (count < 3) { console.log(count); count++; }",
            "while (condition) { doSomething(); }"
          ]
        },
        "meta": {
          "title": "JavaScript while Loop",
          "description": "Learn how to create loops using the 'while' keyword in JavaScript.",
          "keywords": "javascript, while, loop, statement"
        }
      },
      {
        "name": "with",
        "description": "Extends the scope chain for a statement.",
        "example": "let obj = { a: 1, b: 2 }; with (obj) { console.log(a, b); }",
        "details": {
          "how_it_works": "The 'with' statement extends the scope chain for a statement, making it easier to access properties of an object.",
          "use_cases": ["Accessing object properties", "Simplifying scope access"],
          "additional_examples": [
            "let settings = { theme: 'dark', language: 'en' }; with (settings) { console.log(theme, language); }",
            "with (document) { console.log(title, body); }"
          ]
        },
        "meta": {
          "title": "JavaScript with Statement",
          "description": "Learn how to extend the scope chain using the 'with' statement in JavaScript.",
          "keywords": "javascript, with, scope, statement"
        }
      },
      {
        "name": "yield",
        "description": "Pauses and resumes a generator function.",
        "example": "function* generator() { yield 1; yield 2; yield 3; }",
        "details": {
          "how_it_works": "The 'yield' keyword is used to pause and resume a generator function, allowing values to be yielded from the generator.",
          "use_cases": ["Creating generator functions", "Yielding values in generators"],
          "additional_examples": [
            "function* counter() { let i = 0; while (true) { yield i++; } }",
            "function* fibonacci() { let a = 0, b = 1; while (true) { yield a; [a, b] = [b, a + b]; } }"
          ]
        },
        "meta": {
          "title": "JavaScript yield Keyword",
          "description": "Learn how to pause and resume generator functions using the 'yield' keyword in JavaScript.",
          "keywords": "javascript, yield, generator, function"
        }
      }
    ]
  }

  module.exports = JavaScriptSyntax;