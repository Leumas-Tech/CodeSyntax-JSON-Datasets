const JavaSyntax = {
    "methods": [
      {
        "name": "charAt",
        "usage": "string.charAt(index)",
        "example": "// Get the character at index 0\nString str = \"Hello\";\nchar firstChar = str.charAt(0);",
        "description": "Returns the character at the specified index in a string."
      },
      {
        "name": "concat",
        "usage": "string.concat(string)",
        "example": "// Concatenate two strings\nString str1 = \"Hello\";\nString str2 = \" World!\";\nString result = str1.concat(str2);",
        "description": "Concatenates the specified string to the end of the invoking string."
      },
      {
        "name": "equals",
        "usage": "string.equals(anotherString)",
        "example": "// Compare two strings for equality\nString str1 = \"Hello\";\nString str2 = \"Hello\";\nboolean isEqual = str1.equals(str2);",
        "description": "Compares this string to the specified object."
      },
      {
        "name": "equalsIgnoreCase",
        "usage": "string.equalsIgnoreCase(anotherString)",
        "example": "// Compare two strings for equality, ignoring case\nString str1 = \"Hello\";\nString str2 = \"hello\";\nboolean isEqual = str1.equalsIgnoreCase(str2);",
        "description": "Compares this String to another String, ignoring case considerations."
      },
      {
        "name": "indexOf",
        "usage": "string.indexOf(substring)",
        "example": "// Find the index of a substring\nString str = \"Hello World\";\nint index = str.indexOf(\"World\");",
        "description": "Returns the index within this string of the first occurrence of the specified substring."
      },
      {
        "name": "length",
        "usage": "string.length()",
        "example": "// Get the length of a string\nString str = \"Hello\";\nint length = str.length();",
        "description": "Returns the length of this string."
      },
      {
        "name": "replace",
        "usage": "string.replace(oldChar, newChar)",
        "example": "// Replace characters in a string\nString str = \"Hello World\";\nString replacedStr = str.replace(' ', '_');",
        "description": "Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar."
      },
      {
        "name": "substring",
        "usage": "string.substring(beginIndex)",
        "example": "// Get a substring from a string\nString str = \"Hello World\";\nString subStr = str.substring(6);",
        "description": "Returns a substring of this string."
      },
      {
        "name": "toLowerCase",
        "usage": "string.toLowerCase()",
        "example": "// Convert a string to lowercase\nString str = \"Hello World\";\nString lowerStr = str.toLowerCase();",
        "description": "Converts all of the characters in this String to lower case using the rules of the default locale."
      },
      {
        "name": "toUpperCase",
        "usage": "string.toUpperCase()",
        "example": "// Convert a string to uppercase\nString str = \"Hello World\";\nString upperStr = str.toUpperCase();",
        "description": "Converts all of the characters in this String to upper case using the rules of the default locale."
      },
      {
        "name": "trim",
        "usage": "string.trim()",
        "example": "// Trim whitespace from a string\nString str = \"  Hello World  \";\nString trimmedStr = str.trim();",
        "description": "Returns a copy of the string, with leading and trailing whitespace omitted."
      }
    ],
    "functions": [
      {
        "name": "parseInt",
        "usage": "Integer.parseInt(string)",
        "example": "// Parse a string to an integer\nString str = \"123\";\nint num = Integer.parseInt(str);",
        "description": "Parses the string argument as a signed decimal integer."
      },
      {
        "name": "parseFloat",
        "usage": "Float.parseFloat(string)",
        "example": "// Parse a string to a float\nString str = \"3.14\";\nfloat num = Float.parseFloat(str);",
        "description": "Parses the string argument as a float."
      },
      {
        "name": "isNaN",
        "usage": "Double.isNaN(value)",
        "example": "// Check if a value is NaN\ndouble num = Double.NaN;\nboolean isNaN = Double.isNaN(num);",
        "description": "Returns true if the specified number is NaN (not a number)."
      }
    ],
    "properties": []
  }

  module.exports = JavaSyntax;