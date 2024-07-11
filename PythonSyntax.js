const PythonSyntax = {
    "methods": [
      {
        "name": "append",
        "usage": "list.append(element)",
        "example": "my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)",
        "description": "Appends the specified element to the end of the list."
      },
      {
        "name": "clear",
        "usage": "list.clear()",
        "example": "my_list = [1, 2, 3]\nmy_list.clear()\nprint(my_list)",
        "description": "Removes all elements from the list."
      },
      {
        "name": "copy",
        "usage": "list.copy()",
        "example": "my_list = [1, 2, 3]\nnew_list = my_list.copy()\nprint(new_list)",
        "description": "Returns a shallow copy of the list."
      },
      {
        "name": "count",
        "usage": "list.count(element)",
        "example": "my_list = [1, 2, 2, 3, 3, 3]\ncount = my_list.count(3)\nprint(count)",
        "description": "Returns the number of occurrences of the specified element in the list."
      },
      {
        "name": "extend",
        "usage": "list.extend(iterable)",
        "example": "my_list = [1, 2, 3]\nmy_list.extend([4, 5, 6])\nprint(my_list)",
        "description": "Appends elements of the specified iterable to the end of the list."
      },
      {
        "name": "index",
        "usage": "list.index(element)",
        "example": "my_list = [1, 2, 3]\nindex = my_list.index(2)\nprint(index)",
        "description": "Returns the index of the first occurrence of the specified element in the list."
      },
      {
        "name": "insert",
        "usage": "list.insert(index, element)",
        "example": "my_list = [1, 2, 3]\nmy_list.insert(1, 4)\nprint(my_list)",
        "description": "Inserts the specified element at the specified position in the list."
      },
      {
        "name": "pop",
        "usage": "list.pop([index])",
        "example": "my_list = [1, 2, 3]\nelement = my_list.pop(1)\nprint(element)",
        "description": "Removes and returns the element at the specified index. If no index is specified, removes and returns the last element."
      },
      {
        "name": "remove",
        "usage": "list.remove(element)",
        "example": "my_list = [1, 2, 3]\nmy_list.remove(2)\nprint(my_list)",
        "description": "Removes the first occurrence of the specified element from the list."
      },
      {
        "name": "reverse",
        "usage": "list.reverse()",
        "example": "my_list = [1, 2, 3]\nmy_list.reverse()\nprint(my_list)",
        "description": "Reverses the order of the elements in the list."
      },
      {
        "name": "sort",
        "usage": "list.sort()",
        "example": "my_list = [3, 2, 1]\nmy_list.sort()\nprint(my_list)",
        "description": "Sorts the elements of the list in ascending order."
      }
    ],
    "functions": [
      {
        "name": "abs",
        "usage": "abs(number)",
        "example": "num = -10\nabs_num = abs(num)\nprint(abs_num)",
        "description": "Returns the absolute value of a number."
      },
      {
        "name": "all",
        "usage": "all(iterable)",
        "example": "my_list = [True, True, False]\nresult = all(my_list)\nprint(result)",
        "description": "Returns True if all elements of the iterable are true."
      },
      {
        "name": "any",
        "usage": "any(iterable)",
        "example": "my_list = [False, False, True]\nresult = any(my_list)\nprint(result)",
        "description": "Returns True if any element of the iterable is true."
      },
      {
        "name": "bin",
        "usage": "bin(number)",
        "example": "num = 10\nbinary = bin(num)\nprint(binary)",
        "description": "Returns the binary representation of a number as a string."
      },
      {
        "name": "bool",
        "usage": "bool(value)",
        "example": "value = 0\nis_true = bool(value)\nprint(is_true)",
        "description": "Converts a value to a Boolean, using standard truth testing procedure."
      },
      {
        "name": "callable",
        "usage": "callable(object)",
        "example": "def my_func():\n    pass\n\nis_callable = callable(my_func)\nprint(is_callable)",
        "description": "Returns True if the object appears callable, False otherwise."
      },
      {
        "name": "chr",
        "usage": "chr(unicode)",
        "example": "unicode = 65\ncharacter = chr(unicode)\nprint(character)",
        "description": "Returns a character (a string) from an integer (unicode)."
      },
      {
        "name": "classmethod",
        "usage": "classmethod(function)",
        "example": "class MyClass:\n    @classmethod\n    def my_method(cls):\n        print('Class method')\n\nMyClass.my_method()",
        "description": "Transforms a method into a class method."
      },
      {
        "name": "compile",
        "usage": "compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)",
        "example": "code = 'print(\"Hello, World!\")'\ncompiled_code = compile(code, 'example', 'exec')\nexec(compiled_code)",
        "description": "Compiles the source into a code or AST object."
      },
      {
        "name": "complex",
        "usage": "complex(real, imag)",
        "example": "real = 2\nimag = 3\ncomplex_num = complex(real, imag)\nprint(complex_num)",
        "description": "Returns a complex number with the value real + imag*1j."
      }
      // Remaining functions and properties omitted for brevity
    ],
    "properties": [
      {
        "name": "real",
        "usage": "complex.real",
        "example": "complex_num = complex(2, 3)\nreal_part = complex_num.real\nprint(real_part)",
        "description": "Returns the real part of a complex number."
      },
      {
        "name": "imag",
        "usage": "complex.imag",
        "example": "complex_num = complex(2, 3)\nimag_part = complex_num.imag\nprint(imag_part)",
        "description": "Returns the imaginary part of a complex number."
      },
      {
        "name": "conjugate",
        "usage": "complex.conjugate()",
        "example": "complex_num = complex(2, 3)\nconjugate_num = complex_num.conjugate()\nprint(conjugate_num)",
        "description": "Returns the complex conjugate of a complex number."
      },
      // Remaining properties omitted for brevity
    ]
  }
  

  module.exports = PythonSyntax;