const ArduinoSyntax = {
    "methods": [
      {
        "name": "begin",
        "usage": "Serial.begin(baudrate)",
        "example": "// Initialize serial communication with a baudrate of 9600\nSerial.begin(9600);",
        "description": "Initializes serial communication with the specified baud rate."
      },
      {
        "name": "available",
        "usage": "Serial.available()",
        "example": "// Check if there is data available to read from the serial port\nif (Serial.available()) {\n    // Read the incoming byte\n    char incomingByte = Serial.read();\n}",
        "description": "Returns the number of bytes available to read from the serial port."
      },
      {
        "name": "print",
        "usage": "Serial.print(data)",
        "example": "// Print a string to the serial port\nSerial.print(\"Hello, world!\");",
        "description": "Prints data to the serial port."
      },
      {
        "name": "println",
        "usage": "Serial.println(data)",
        "example": "// Print a string followed by a newline character to the serial port\nSerial.println(\"Hello, world!\");",
        "description": "Prints data to the serial port followed by a newline character."
      },
      {
        "name": "write",
        "usage": "Serial.write(data, length)",
        "example": "// Send data over serial port\nchar data[] = \"Hello, world!\";\nSerial.write(data, sizeof(data));",
        "description": "Writes binary data to the serial port."
      },
      {
        "name": "read",
        "usage": "Serial.read()",
        "example": "// Read a single byte from the serial port\nchar receivedByte = Serial.read();",
        "description": "Reads a byte from the serial port."
      },
      {
        "name": "press",
        "usage": "Keyboard.press(key)",
        "example": "// Press the 'a' key\nKeyboard.press('a');",
        "description": "Simulates pressing a key on a connected computer's keyboard (requires the Keyboard library)."
      },
      {
        "name": "release",
        "usage": "Keyboard.release(key)",
        "example": "// Release the 'a' key\nKeyboard.release('a');",
        "description": "Simulates releasing a key on a connected computer's keyboard (requires the Keyboard library)."
      }
    ],
    "functions": [
      {
        "name": "digitalRead",
        "usage": "digitalRead(pin)",
        "example": "// Read the state of a digital input pin\nint buttonState = digitalRead(2);",
        "description": "Reads the state of a digital input pin."
      },
      {
        "name": "digitalWrite",
        "usage": "digitalWrite(pin, value)",
        "example": "// Set the state of a digital output pin\ndigitalWrite(13, HIGH);",
        "description": "Sets the state of a digital output pin."
      },
      {
        "name": "analogRead",
        "usage": "analogRead(pin)",
        "example": "// Read the value of an analog input pin\nint sensorValue = analogRead(A0);",
        "description": "Reads the value from the specified analog pin."
      },
      {
        "name": "analogWrite",
        "usage": "analogWrite(pin, value)",
        "example": "// Set the PWM output value of a pin\nanalogWrite(9, 127);",
        "description": "Writes an analog value (PWM wave) to a pin."
      },
      {
        "name": "delay",
        "usage": "delay(milliseconds)",
        "example": "// Delay execution for 1 second\ndelay(1000);",
        "description": "Pauses the program for the specified number of milliseconds."
      },
      {
        "name": "millis",
        "usage": "millis()",
        "example": "// Get the number of milliseconds since the Arduino board began running the current program\nunsigned long currentMillis = millis();",
        "description": "Returns the number of milliseconds since the Arduino board started running the current program."
      }
    ],
    "properties": [
      {
        "name": "HIGH",
        "usage": "HIGH",
        "example": "// Set a pin to HIGH (5V)\ndigitalWrite(13, HIGH);",
        "description": "Represents the logical high value (5V or true) in digital I/O operations."
      },
      {
        "name": "LOW",
        "usage": "LOW",
        "example": "// Set a pin to LOW (0V)\ndigitalWrite(13, LOW);",
        "description": "Represents the logical low value (0V or false) in digital I/O operations."
      },
      {
        "name": "INPUT",
        "usage": "INPUT",
        "example": "// Set a pin as an input\npinMode(2, INPUT);",
        "description": "Represents the input mode for a pin in digital I/O operations."
      },
      {
        "name": "OUTPUT",
        "usage": "OUTPUT",
        "example": "// Set a pin as an output\npinMode(13, OUTPUT);",
        "description": "Represents the output mode for a pin in digital I/O operations."
      },
      {
        "name": "INPUT_PULLUP",
        "usage": "INPUT_PULLUP",
        "example": "// Set a pin as an input with a pull-up resistor enabled\npinMode(2, INPUT_PULLUP);",
        "description": "Represents the input mode for a pin with a pull-up resistor enabled in digital I/O operations."
      }
    ],
    "arduinoCodeSyntax": [
      {
        "name": "setup",
        "description": "Initializes variables, pin modes, and other settings.",
        "example": "void setup() { pinMode(LED_BUILTIN, OUTPUT); }",
        "details": {
          "how_it_works": "The 'setup' function runs once when the sketch starts. It is used to initialize settings such as pin modes or starting serial communication.",
          "use_cases": ["Initializing hardware", "Setting pin modes"],
          "additional_examples": [
            "void setup() { pinMode(13, OUTPUT); Serial.begin(9600); }",
            "void setup() { pinMode(A0, INPUT); }"
          ]
        },
        "meta": {
          "title": "Arduino setup Function",
          "description": "Learn how to use the 'setup' function in Arduino to initialize settings.",
          "keywords": "arduino, setup, initialization, pinMode"
        }
      },
      {
        "name": "loop",
        "description": "Contains the main code to be executed repeatedly.",
        "example": "void loop() { digitalWrite(LED_BUILTIN, HIGH); delay(1000); digitalWrite(LED_BUILTIN, LOW); delay(1000); }",
        "details": {
          "how_it_works": "The 'loop' function runs repeatedly after the 'setup' function has completed. It is used to implement the main logic of the program.",
          "use_cases": ["Running main program logic", "Creating loops"],
          "additional_examples": [
            "void loop() { int sensorValue = analogRead(A0); Serial.println(sensorValue); delay(500); }",
            "void loop() { digitalWrite(13, HIGH); delay(500); digitalWrite(13, LOW); delay(500); }"
          ]
        },
        "meta": {
          "title": "Arduino loop Function",
          "description": "Learn how to use the 'loop' function in Arduino to implement the main logic of your program.",
          "keywords": "arduino, loop, main program, repeated execution"
        }
      },
      {
        "name": "digitalWrite",
        "description": "Sets a digital pin to high or low.",
        "example": "digitalWrite(LED_BUILTIN, HIGH);",
        "details": {
          "how_it_works": "The 'digitalWrite' function sets a specified digital pin to either HIGH (5V) or LOW (0V).",
          "use_cases": ["Controlling LEDs", "Activating relays"],
          "additional_examples": [
            "digitalWrite(13, LOW);",
            "digitalWrite(8, HIGH);"
          ]
        },
        "meta": {
          "title": "Arduino digitalWrite Function",
          "description": "Learn how to use the 'digitalWrite' function in Arduino to set a digital pin to high or low.",
          "keywords": "arduino, digitalWrite, digital pin, HIGH, LOW"
        }
      },
      {
        "name": "digitalRead",
        "description": "Reads the value from a specified digital pin.",
        "example": "int buttonState = digitalRead(2);",
        "details": {
          "how_it_works": "The 'digitalRead' function reads the value from a specified digital pin, returning either HIGH or LOW.",
          "use_cases": ["Reading button states", "Detecting digital inputs"],
          "additional_examples": [
            "int ledState = digitalRead(13);",
            "if (digitalRead(7) == HIGH) { // Do something }"
          ]
        },
        "meta": {
          "title": "Arduino digitalRead Function",
          "description": "Learn how to use the 'digitalRead' function in Arduino to read the value from a digital pin.",
          "keywords": "arduino, digitalRead, digital pin, read value"
        }
      },
      {
        "name": "analogWrite",
        "description": "Writes an analog value (PWM wave) to a pin.",
        "example": "analogWrite(9, 128);",
        "details": {
          "how_it_works": "The 'analogWrite' function writes an analog value (PWM wave) to a specified pin. The value can range from 0 to 255.",
          "use_cases": ["Controlling LED brightness", "Driving motors"],
          "additional_examples": [
            "analogWrite(6, 255);",
            "analogWrite(3, 64);"
          ]
        },
        "meta": {
          "title": "Arduino analogWrite Function",
          "description": "Learn how to use the 'analogWrite' function in Arduino to write an analog value (PWM wave) to a pin.",
          "keywords": "arduino, analogWrite, PWM, analog value"
        }
      },
      {
        "name": "analogRead",
        "description": "Reads the value from a specified analog pin.",
        "example": "int sensorValue = analogRead(A0);",
        "details": {
          "how_it_works": "The 'analogRead' function reads the value from a specified analog pin, returning a value between 0 and 1023.",
          "use_cases": ["Reading sensor values", "Measuring voltage"],
          "additional_examples": [
            "int potValue = analogRead(A1);",
            "int lightLevel = analogRead(A2);"
          ]
        },
        "meta": {
          "title": "Arduino analogRead Function",
          "description": "Learn how to use the 'analogRead' function in Arduino to read the value from an analog pin.",
          "keywords": "arduino, analogRead, analog pin, read value"
        }
      },
      {
        "name": "pinMode",
        "description": "Configures the specified pin to behave as an input or output.",
        "example": "pinMode(LED_BUILTIN, OUTPUT);",
        "details": {
          "how_it_works": "The 'pinMode' function configures a specified pin to behave either as an input or output.",
          "use_cases": ["Setting pin modes", "Configuring hardware"],
          "additional_examples": [
            "pinMode(2, INPUT);",
            "pinMode(9, OUTPUT);"
          ]
        },
        "meta": {
          "title": "Arduino pinMode Function",
          "description": "Learn how to use the 'pinMode' function in Arduino to configure a pin as an input or output.",
          "keywords": "arduino, pinMode, pin configuration, input, output"
        }
      },
      {
        "name": "delay",
        "description": "Pauses the program for the amount of time (in milliseconds) specified as parameter.",
        "example": "delay(1000);",
        "details": {
          "how_it_works": "The 'delay' function pauses the execution of the program for a specified number of milliseconds.",
          "use_cases": ["Creating delays", "Timing control"],
          "additional_examples": [
            "delay(500);",
            "delay(2000);"
          ]
        },
        "meta": {
          "title": "Arduino delay Function",
          "description": "Learn how to use the 'delay' function in Arduino to pause the program execution.",
          "keywords": "arduino, delay, timing, pause"
        }
      },
      {
        "name": "millis",
        "description": "Returns the number of milliseconds since the Arduino board began running the current program.",
        "example": "unsigned long currentTime = millis();",
        "details": {
          "how_it_works": "The 'millis' function returns the number of milliseconds since the program started running. It can be used to keep track of time without pausing the program.",
          "use_cases": ["Timing events", "Measuring elapsed time"],
          "additional_examples": [
            "if (millis() - previousTime >= interval) { previousTime = millis(); // Do something }",
            "unsigned long startTime = millis(); while (millis() - startTime < 1000) { // Do something }"
          ]
        },
        "meta": {
          "title": "Arduino millis Function",
          "description": "Learn how to use the 'millis' function in Arduino to get the number of milliseconds since the program started running.",
          "keywords": "arduino, millis, timing, elapsed time"
        }
      },
      {
        "name": "Serial.begin",
        "description": "Sets the data rate in bits per second (baud) for serial data transmission.",
        "example": "Serial.begin(9600);",
        "details": {
          "how_it_works": "The 'Serial.begin' function initializes serial communication at the specified baud rate.",
          "use_cases": ["Starting serial communication", "Setting baud rate"],
          "additional_examples": [
            "Serial.begin(115200);",
            "Serial.begin(4800);"
          ]
        },
        "meta": {
          "title": "Arduino Serial.begin Function",
          "description": "Learn how to use the 'Serial.begin' function in Arduino to set the data rate for serial communication.",
          "keywords": "arduino, Serial.begin, serial communication, baud rate"
        }
      },
      {
        "name": "Serial.print",
        "description": "Prints data to the serial port as human-readable ASCII text.",
        "example": "Serial.print('Hello, World!');",
        "details": {
          "how_it_works": "The 'Serial.print' function sends data to the serial port as human-readable ASCII text. It can print strings, numbers, and variables.",
          "use_cases": ["Sending data over serial", "Debugging"],
          "additional_examples": [
            "Serial.print(analogRead(A0));",
            "Serial.print('Sensor value: '); Serial.print(sensorValue);"
          ]
        },
        "meta": {
          "title": "Arduino Serial.print Function",
          "description": "Learn how to use the 'Serial.print' function in Arduino to print data to the serial port.",
          "keywords": "arduino, Serial.print, serial communication, print data"
        }
      },
      {
        "name": "Serial.println",
        "description": "Prints data to the serial port followed by a newline character.",
        "example": "Serial.println('Hello, World!');",
        "details": {
          "how_it_works": "The 'Serial.println' function sends data to the serial port followed by a newline character, making it easier to read data line by line.",
          "use_cases": ["Sending data over serial", "Debugging with line breaks"],
          "additional_examples": [
            "Serial.println(analogRead(A0));",
            "Serial.println('Sensor value: '); Serial.println(sensorValue);"
          ]
        },
        "meta": {
          "title": "Arduino Serial.println Function",
          "description": "Learn how to use the 'Serial.println' function in Arduino to print data to the serial port followed by a newline character.",
          "keywords": "arduino, Serial.println, serial communication, print data, newline"
        }
      },
      {
        "name": "randomSeed",
        "description": "Initializes the pseudo-random number generator.",
        "example": "randomSeed(analogRead(0));",
        "details": {
          "how_it_works": "The 'randomSeed' function initializes the pseudo-random number generator with a seed value. Using an unconnected analog pin provides a good source of entropy.",
          "use_cases": ["Initializing random number generation", "Improving randomness"],
          "additional_examples": [
            "randomSeed(millis());",
            "randomSeed(analogRead(A0));"
          ]
        },
        "meta": {
          "title": "Arduino randomSeed Function",
          "description": "Learn how to use the 'randomSeed' function in Arduino to initialize the pseudo-random number generator.",
          "keywords": "arduino, randomSeed, random number, initialization"
        }
      },
      {
        "name": "random",
        "description": "Generates a pseudo-random number.",
        "example": "int randNumber = random(0, 100);",
        "details": {
          "how_it_works": "The 'random' function generates a pseudo-random number within a specified range. If only one argument is provided, it returns a number between 0 and that number minus one.",
          "use_cases": ["Generating random numbers", "Randomized behavior"],
          "additional_examples": [
            "int randNumber = random(50);",
            "int randNumber = random(10, 20);"
          ]
        },
        "meta": {
          "title": "Arduino random Function",
          "description": "Learn how to use the 'random' function in Arduino to generate pseudo-random numbers.",
          "keywords": "arduino, random, pseudo-random number, generate"
        }
      },
      {
        "name": "map",
        "description": "Re-maps a number from one range to another.",
        "example": "long mappedValue = map(sensorValue, 0, 1023, 0, 255);",
        "details": {
          "how_it_works": "The 'map' function re-maps a number from one range to another. This is useful for scaling sensor values to different ranges.",
          "use_cases": ["Scaling sensor values", "Re-mapping ranges"],
          "additional_examples": [
            "long scaledValue = map(potValue, 0, 1023, 0, 180);",
            "long outputValue = map(inputValue, 0, 1023, 100, 200);"
          ]
        },
        "meta": {
          "title": "Arduino map Function",
          "description": "Learn how to use the 'map' function in Arduino to re-map a number from one range to another.",
          "keywords": "arduino, map, re-map, range"
        }
      }
    ]
  }
  

  module.exports = ArduinoSyntax