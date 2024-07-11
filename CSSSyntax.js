const CSSSyntax ={
    "cssProperties": [
      {
        "name": "background",
        "description": "Sets all background properties in one declaration.",
        "example": "background: #ff0000 url('smiley.gif') no-repeat right top;",
        "details": {
          "how_it_works": "The 'background' property is a shorthand for setting multiple background-related properties in one declaration.",
          "use_cases": ["Setting background color and image", "Combining background properties"],
          "additional_examples": [
            "background: url('img_tree.png') no-repeat right top;",
            "background: linear-gradient(to right, red, blue);"
          ]
        },
        "meta": {
          "title": "CSS background Property",
          "description": "Learn how to use the 'background' property in CSS to set multiple background properties in one declaration.",
          "keywords": "css, background, property, shorthand"
        }
      },
      {
        "name": "background-color",
        "description": "Sets the background color of an element.",
        "example": "background-color: lightblue;",
        "details": {
          "how_it_works": "The 'background-color' property sets the background color of an element.",
          "use_cases": ["Setting element background color", "Styling backgrounds"],
          "additional_examples": [
            "background-color: #ff0000;",
            "background-color: rgba(0, 0, 0, 0.5);"
          ]
        },
        "meta": {
          "title": "CSS background-color Property",
          "description": "Learn how to use the 'background-color' property in CSS to set the background color of an element.",
          "keywords": "css, background-color, property"
        }
      },
      {
        "name": "background-image",
        "description": "Sets the background image of an element.",
        "example": "background-image: url('img_tree.png');",
        "details": {
          "how_it_works": "The 'background-image' property sets an image as the background of an element.",
          "use_cases": ["Adding background images", "Styling element backgrounds"],
          "additional_examples": [
            "background-image: linear-gradient(to right, red, blue);",
            "background-image: none;"
          ]
        },
        "meta": {
          "title": "CSS background-image Property",
          "description": "Learn how to use the 'background-image' property in CSS to set an image as the background of an element.",
          "keywords": "css, background-image, property"
        }
      },
      {
        "name": "background-position",
        "description": "Sets the starting position of a background image.",
        "example": "background-position: right top;",
        "details": {
          "how_it_works": "The 'background-position' property sets the initial position of a background image within an element.",
          "use_cases": ["Positioning background images", "Customizing background alignment"],
          "additional_examples": [
            "background-position: center center;",
            "background-position: 50% 50%;"
          ]
        },
        "meta": {
          "title": "CSS background-position Property",
          "description": "Learn how to use the 'background-position' property in CSS to set the starting position of a background image.",
          "keywords": "css, background-position, property"
        }
      },
      {
        "name": "background-repeat",
        "description": "Sets how a background image will be repeated.",
        "example": "background-repeat: no-repeat;",
        "details": {
          "how_it_works": "The 'background-repeat' property sets how a background image will be repeated within an element.",
          "use_cases": ["Controlling background image repetition", "Creating seamless backgrounds"],
          "additional_examples": [
            "background-repeat: repeat-x;",
            "background-repeat: repeat-y;"
          ]
        },
        "meta": {
          "title": "CSS background-repeat Property",
          "description": "Learn how to use the 'background-repeat' property in CSS to set how a background image will be repeated.",
          "keywords": "css, background-repeat, property"
        }
      },
      {
        "name": "border",
        "description": "Sets all border properties in one declaration.",
        "example": "border: 1px solid black;",
        "details": {
          "how_it_works": "The 'border' property is a shorthand for setting the width, style, and color of an element's border in one declaration.",
          "use_cases": ["Setting border styles", "Combining border properties"],
          "additional_examples": [
            "border: 2px dashed red;",
            "border: thick double #32a1ce;"
          ]
        },
        "meta": {
          "title": "CSS border Property",
          "description": "Learn how to use the 'border' property in CSS to set all border properties in one declaration.",
          "keywords": "css, border, property, shorthand"
        }
      },
      {
        "name": "border-color",
        "description": "Sets the color of the border.",
        "example": "border-color: red;",
        "details": {
          "how_it_works": "The 'border-color' property sets the color of an element's border.",
          "use_cases": ["Setting border color", "Styling borders"],
          "additional_examples": [
            "border-color: #ff0000;",
            "border-color: rgba(0, 0, 0, 0.5);"
          ]
        },
        "meta": {
          "title": "CSS border-color Property",
          "description": "Learn how to use the 'border-color' property in CSS to set the color of the border.",
          "keywords": "css, border-color, property"
        }
      },
      {
        "name": "border-radius",
        "description": "Sets the radius of the border's corners.",
        "example": "border-radius: 10px;",
        "details": {
          "how_it_works": "The 'border-radius' property sets the radius of an element's border corners, making them rounded.",
          "use_cases": ["Creating rounded corners", "Styling element borders"],
          "additional_examples": [
            "border-radius: 50%;",
            "border-radius: 10px 20px 30px 40px;"
          ]
        },
        "meta": {
          "title": "CSS border-radius Property",
          "description": "Learn how to use the 'border-radius' property in CSS to set the radius of the border's corners.",
          "keywords": "css, border-radius, property"
        }
      },
      {
        "name": "border-style",
        "description": "Sets the style of the border.",
        "example": "border-style: solid;",
        "details": {
          "how_it_works": "The 'border-style' property sets the style of an element's border.",
          "use_cases": ["Setting border styles", "Styling borders"],
          "additional_examples": [
            "border-style: dotted;",
            "border-style: dashed solid double;"
          ]
        },
        "meta": {
          "title": "CSS border-style Property",
          "description": "Learn how to use the 'border-style' property in CSS to set the style of the border.",
          "keywords": "css, border-style, property"
        }
      },
      {
        "name": "border-width",
        "description": "Sets the width of the border.",
        "example": "border-width: 2px;",
        "details": {
          "how_it_works": "The 'border-width' property sets the width of an element's border.",
          "use_cases": ["Setting border width", "Styling borders"],
          "additional_examples": [
            "border-width: thin;",
            "border-width: thick 2px;"
          ]
        },
        "meta": {
          "title": "CSS border-width Property",
          "description": "Learn how to use the 'border-width' property in CSS to set the width of the border.",
          "keywords": "css, border-width, property"
        }
      },
      {
        "name": "color",
        "description": "Sets the color of text.",
        "example": "color: blue;",
        "details": {
          "how_it_works": "The 'color' property sets the color of the text content of an element.",
          "use_cases": ["Setting text color", "Styling text"],
          "additional_examples": [
            "color: #ff0000;",
            "color: rgba(0, 0, 0, 0.5);"
          ]
        },
        "meta": {
          "title": "CSS color Property",
          "description": "Learn how to use the 'color' property in CSS to set the color of text.",
          "keywords": "css, color, property, text"
        }
      },
      {
        "name": "display",
        "description": "Specifies the display behavior of an element.",
        "example": "display: block;",
        "details": {
          "how_it_works": "The 'display' property specifies the display behavior of an element.",
          "use_cases": ["Setting display types", "Controlling element layout"],
          "additional_examples": [
            "display: inline;",
            "display: flex;"
          ]
        },
        "meta": {
          "title": "CSS display Property",
          "description": "Learn how to use the 'display' property in CSS to specify the display behavior of an element.",
          "keywords": "css, display, property"
        }
      },
      {
        "name": "flex",
        "description": "Specifies the flexible length of a flex item.",
        "example": "flex: 1;",
        "details": {
          "how_it_works": "The 'flex' property sets how a flex item will grow or shrink to fit the space available in its flex container.",
          "use_cases": ["Setting flex item sizes", "Creating flexible layouts"],
          "additional_examples": [
            "flex: 0 1 auto;",
            "flex: 2 1 200px;"
          ]
        },
        "meta": {
          "title": "CSS flex Property",
          "description": "Learn how to use the 'flex' property in CSS to specify the flexible length of a flex item.",
          "keywords": "css, flex, property, flexbox"
        }
      },
      {
        "name": "flex-direction",
        "description": "Specifies the direction of the flexible items.",
        "example": "flex-direction: row;",
        "details": {
          "how_it_works": "The 'flex-direction' property specifies the direction of the flexible items in a flex container.",
          "use_cases": ["Setting flex item direction", "Creating flexible layouts"],
          "additional_examples": [
            "flex-direction: column;",
            "flex-direction: row-reverse;"
          ]
        },
        "meta": {
          "title": "CSS flex-direction Property",
          "description": "Learn how to use the 'flex-direction' property in CSS to specify the direction of the flexible items.",
          "keywords": "css, flex-direction, property, flexbox"
        }
      },
      {
        "name": "font",
        "description": "Sets all font properties in one declaration.",
        "example": "font: italic small-caps bold 16px/1.5 Arial, sans-serif;",
        "details": {
          "how_it_works": "The 'font' property is a shorthand for setting multiple font-related properties in one declaration.",
          "use_cases": ["Setting font styles", "Combining font properties"],
          "additional_examples": [
            "font: 1em/1.5 'Fira Sans', sans-serif;",
            "font: bold italic 110% serif;"
          ]
        },
        "meta": {
          "title": "CSS font Property",
          "description": "Learn how to use the 'font' property in CSS to set all font properties in one declaration.",
          "keywords": "css, font, property, shorthand"
        }
      },
      {
        "name": "font-family",
        "description": "Specifies the font family for text.",
        "example": "font-family: 'Arial', sans-serif;",
        "details": {
          "how_it_works": "The 'font-family' property specifies the font family for text content of an element.",
          "use_cases": ["Setting font family", "Styling text"],
          "additional_examples": [
            "font-family: 'Courier New', monospace;",
            "font-family: 'Times New Roman', Times, serif;"
          ]
        },
        "meta": {
          "title": "CSS font-family Property",
          "description": "Learn how to use the 'font-family' property in CSS to specify the font family for text.",
          "keywords": "css, font-family, property, text"
        }
      },
      {
        "name": "font-size",
        "description": "Sets the size of the font.",
        "example": "font-size: 16px;",
        "details": {
          "how_it_works": "The 'font-size' property sets the size of the font for an element.",
          "use_cases": ["Setting font size", "Styling text"],
          "additional_examples": [
            "font-size: 1.5em;",
            "font-size: 100%;"
          ]
        },
        "meta": {
          "title": "CSS font-size Property",
          "description": "Learn how to use the 'font-size' property in CSS to set the size of the font.",
          "keywords": "css, font-size, property, text"
        }
      },
      {
        "name": "font-weight",
        "description": "Sets the weight (boldness) of the font.",
        "example": "font-weight: bold;",
        "details": {
          "how_it_works": "The 'font-weight' property sets the weight (or boldness) of the font for an element.",
          "use_cases": ["Setting font weight", "Styling text"],
          "additional_examples": [
            "font-weight: normal;",
            "font-weight: 700;"
          ]
        },
        "meta": {
          "title": "CSS font-weight Property",
          "description": "Learn how to use the 'font-weight' property in CSS to set the weight (boldness) of the font.",
          "keywords": "css, font-weight, property, text"
        }
      },
      {
        "name": "height",
        "description": "Sets the height of an element.",
        "example": "height: 100px;",
        "details": {
          "how_it_works": "The 'height' property sets the height of an element.",
          "use_cases": ["Setting element height", "Controlling layout"],
          "additional_examples": [
            "height: 50%;",
            "height: auto;"
          ]
        },
        "meta": {
          "title": "CSS height Property",
          "description": "Learn how to use the 'height' property in CSS to set the height of an element.",
          "keywords": "css, height, property"
        }
      },
      {
        "name": "margin",
        "description": "Sets all margin properties in one declaration.",
        "example": "margin: 10px 20px 30px 40px;",
        "details": {
          "how_it_works": "The 'margin' property is a shorthand for setting the margin properties in one declaration.",
          "use_cases": ["Setting margins", "Controlling layout spacing"],
          "additional_examples": [
            "margin: 0;",
            "margin: 10px auto;"
          ]
        },
        "meta": {
          "title": "CSS margin Property",
          "description": "Learn how to use the 'margin' property in CSS to set all margin properties in one declaration.",
          "keywords": "css, margin, property, shorthand"
        }
      },
      {
        "name": "margin-top",
        "description": "Sets the top margin of an element.",
        "example": "margin-top: 20px;",
        "details": {
          "how_it_works": "The 'margin-top' property sets the top margin of an element.",
          "use_cases": ["Setting top margin", "Controlling layout spacing"],
          "additional_examples": [
            "margin-top: 0;",
            "margin-top: 1em;"
          ]
        },
        "meta": {
          "title": "CSS margin-top Property",
          "description": "Learn how to use the 'margin-top' property in CSS to set the top margin of an element.",
          "keywords": "css, margin-top, property"
        }
      },
      {
        "name": "margin-right",
        "description": "Sets the right margin of an element.",
        "example": "margin-right: 15px;",
        "details": {
          "how_it_works": "The 'margin-right' property sets the right margin of an element.",
          "use_cases": ["Setting right margin", "Controlling layout spacing"],
          "additional_examples": [
            "margin-right: 5%;",
            "margin-right: auto;"
          ]
        },
        "meta": {
          "title": "CSS margin-right Property",
          "description": "Learn how to use the 'margin-right' property in CSS to set the right margin of an element.",
          "keywords": "css, margin-right, property"
        }
      },
      {
        "name": "margin-bottom",
        "description": "Sets the bottom margin of an element.",
        "example": "margin-bottom: 25px;",
        "details": {
          "how_it_works": "The 'margin-bottom' property sets the bottom margin of an element.",
          "use_cases": ["Setting bottom margin", "Controlling layout spacing"],
          "additional_examples": [
            "margin-bottom: 2em;",
            "margin-bottom: 10%;"
          ]
        },
        "meta": {
          "title": "CSS margin-bottom Property",
          "description": "Learn how to use the 'margin-bottom' property in CSS to set the bottom margin of an element.",
          "keywords": "css, margin-bottom, property"
        }
      },
      {
        "name": "margin-left",
        "description": "Sets the left margin of an element.",
        "example": "margin-left: 30px;",
        "details": {
          "how_it_works": "The 'margin-left' property sets the left margin of an element.",
          "use_cases": ["Setting left margin", "Controlling layout spacing"],
          "additional_examples": [
            "margin-left: 3em;",
            "margin-left: auto;"
          ]
        },
        "meta": {
          "title": "CSS margin-left Property",
          "description": "Learn how to use the 'margin-left' property in CSS to set the left margin of an element.",
          "keywords": "css, margin-left, property"
        }
      },
      {
        "name": "padding",
        "description": "Sets all padding properties in one declaration.",
        "example": "padding: 10px 20px 30px 40px;",
        "details": {
          "how_it_works": "The 'padding' property is a shorthand for setting the padding properties in one declaration.",
          "use_cases": ["Setting padding", "Controlling element spacing"],
          "additional_examples": [
            "padding: 0;",
            "padding: 10px 5%;"
          ]
        },
        "meta": {
          "title": "CSS padding Property",
          "description": "Learn how to use the 'padding' property in CSS to set all padding properties in one declaration.",
          "keywords": "css, padding, property, shorthand"
        }
      },
      {
        "name": "padding-top",
        "description": "Sets the top padding of an element.",
        "example": "padding-top: 20px;",
        "details": {
          "how_it_works": "The 'padding-top' property sets the top padding of an element.",
          "use_cases": ["Setting top padding", "Controlling element spacing"],
          "additional_examples": [
            "padding-top: 0;",
            "padding-top: 1em;"
          ]
        },
        "meta": {
          "title": "CSS padding-top Property",
          "description": "Learn how to use the 'padding-top' property in CSS to set the top padding of an element.",
          "keywords": "css, padding-top, property"
        }
      },
      {
        "name": "padding-right",
        "description": "Sets the right padding of an element.",
        "example": "padding-right: 15px;",
        "details": {
          "how_it_works": "The 'padding-right' property sets the right padding of an element.",
          "use_cases": ["Setting right padding", "Controlling element spacing"],
          "additional_examples": [
            "padding-right: 5%;",
            "padding-right: auto;"
          ]
        },
        "meta": {
          "title": "CSS padding-right Property",
          "description": "Learn how to use the 'padding-right' property in CSS to set the right padding of an element.",
          "keywords": "css, padding-right, property"
        }
      },
      {
        "name": "padding-bottom",
        "description": "Sets the bottom padding of an element.",
        "example": "padding-bottom: 25px;",
        "details": {
          "how_it_works": "The 'padding-bottom' property sets the bottom padding of an element.",
          "use_cases": ["Setting bottom padding", "Controlling element spacing"],
          "additional_examples": [
            "padding-bottom: 2em;",
            "padding-bottom: 10%;"
          ]
        },
        "meta": {
          "title": "CSS padding-bottom Property",
          "description": "Learn how to use the 'padding-bottom' property in CSS to set the bottom padding of an element.",
          "keywords": "css, padding-bottom, property"
        }
      },
      {
        "name": "padding-left",
        "description": "Sets the left padding of an element.",
        "example": "padding-left: 30px;",
        "details": {
          "how_it_works": "The 'padding-left' property sets the left padding of an element.",
          "use_cases": ["Setting left padding", "Controlling element spacing"],
          "additional_examples": [
            "padding-left: 3em;",
            "padding-left: auto;"
          ]
        },
        "meta": {
          "title": "CSS padding-left Property",
          "description": "Learn how to use the 'padding-left' property in CSS to set the left padding of an element.",
          "keywords": "css, padding-left, property"
        }
      },
      {
        "name": "width",
        "description": "Sets the width of an element.",
        "example": "width: 100px;",
        "details": {
          "how_it_works": "The 'width' property sets the width of an element.",
          "use_cases": ["Setting element width", "Controlling layout"],
          "additional_examples": [
            "width: 50%;",
            "width: auto;"
          ]
        },
        "meta": {
          "title": "CSS width Property",
          "description": "Learn how to use the 'width' property in CSS to set the width of an element.",
          "keywords": "css, width, property"
        }
      },
      {
        "name": "z-index",
        "description": "Sets the stack order of an element.",
        "example": "z-index: 10;",
        "details": {
          "how_it_works": "The 'z-index' property sets the stack order of an element, which defines the order in which elements are stacked (i.e., which elements appear in front of or behind others).",
          "use_cases": ["Setting stack order", "Controlling element layering"],
          "additional_examples": [
            "z-index: 1;",
            "z-index: auto;"
          ]
        },
        "meta": {
          "title": "CSS z-index Property",
          "description": "Learn how to use the 'z-index' property in CSS to set the stack order of an element.",
          "keywords": "css, z-index, property, layering"
        }
      }
    ]
  }
  
module.exports = CSSSyntax