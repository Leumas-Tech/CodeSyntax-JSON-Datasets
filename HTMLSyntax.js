const HTMLSyntax = {
    "methods": [],
    "functions": [],
    "properties": [
      {
        "name": "id",
        "usage": "<element id=\"unique_id\">",
        "example": "<div id=\"header\">...</div>",
        "description": "Specifies a unique id for an HTML element."
      },
      {
        "name": "class",
        "usage": "<element class=\"classname\">",
        "example": "<div class=\"container\">...</div>",
        "description": "Specifies one or more classnames for an HTML element."
      },
      {
        "name": "href",
        "usage": "<a href=\"url\">",
        "example": "<a href=\"https://example.com\">Visit Example</a>",
        "description": "Specifies the URL of the page the link goes to."
      },
      {
        "name": "src",
        "usage": "<img src=\"url\">",
        "example": "<img src=\"image.jpg\" alt=\"Image\">",
        "description": "Specifies the URL of the image."
      },
      {
        "name": "alt",
        "usage": "<img alt=\"text\">",
        "example": "<img src=\"image.jpg\" alt=\"Image\">",
        "description": "Specifies an alternate text for an image."
      },
      {
        "name": "style",
        "usage": "<element style=\"style_property:value;\">",
        "example": "<p style=\"color:red;\">This is a red paragraph.</p>",
        "description": "Specifies an inline CSS style for an HTML element."
      },
      {
        "name": "onclick",
        "usage": "<element onclick=\"javascript_function\">",
        "example": "<button onclick=\"alert('Hello, world!');\">Click Me</button>",
        "description": "Specifies a JavaScript code to run when the element is clicked."
      },
      {
        "name": "onchange",
        "usage": "<element onchange=\"javascript_function\">",
        "example": "<input type=\"text\" onchange=\"alert('Input changed!');\">",
        "description": "Specifies a JavaScript code to run when the value of the element is changed."
      },
      {
        "name": "onmouseover",
        "usage": "<element onmouseover=\"javascript_function\">",
        "example": "<button onmouseover=\"alert('Mouse over!');\">Hover Me</button>",
        "description": "Specifies a JavaScript code to run when the mouse pointer moves over the element."
      },
      {
        "name": "onmouseout",
        "usage": "<element onmouseout=\"javascript_function\">",
        "example": "<button onmouseout=\"alert('Mouse out!');\">Hover Me</button>",
        "description": "Specifies a JavaScript code to run when the mouse pointer moves out of the element."
      }
    ],
    "tags": [
      {
        "name": "a",
        "description": "Defines a hyperlink.",
        "example": "<a href='https://www.example.com'>Visit Example</a>",
        "details": {
          "how_it_works": "The <a> tag creates a hyperlink to web pages, files, email addresses, locations on the same page, or anything else a URL can address.",
          "use_cases": ["Creating navigation links", "Linking to external websites", "Linking to downloadable files"],
          "additional_examples": [
            "<a href='mailto:someone@example.com'>Send Email</a>",
            "<a href='#section1'>Go to Section 1</a>"
          ]
        },
        "meta": {
          "title": "HTML a Tag - Hyperlink",
          "description": "Learn how to create hyperlinks using the HTML <a> tag, including examples and use cases.",
          "keywords": "html, a, hyperlink, tutorial"
        }
      },
      {
        "name": "abbr",
        "description": "Defines an abbreviation or an acronym.",
        "example": "<abbr title='Hypertext Markup Language'>HTML</abbr>",
        "details": {
          "how_it_works": "The <abbr> tag is used to define an abbreviation or an acronym, which can provide the full description when hovered over.",
          "use_cases": ["Providing full form of abbreviations", "Improving accessibility", "Enhancing understanding of acronyms"],
          "additional_examples": [
            "<abbr title='Cascading Style Sheets'>CSS</abbr>",
            "<abbr title='JavaScript Object Notation'>JSON</abbr>"
          ]
        },
        "meta": {
          "title": "HTML abbr Tag - Abbreviation",
          "description": "Learn how to define abbreviations using the HTML <abbr> tag, including examples and use cases.",
          "keywords": "html, abbr, abbreviation, tutorial"
        }
      },
      {
        "name": "address",
        "description": "Defines contact information for the author/owner of a document.",
        "example": "<address>1234 Street Name, City, Country</address>",
        "details": {
          "how_it_works": "The <address> tag is used to define contact information, typically presented in a specific style such as italics.",
          "use_cases": ["Providing contact details on a webpage", "Listing author or owner information", "Displaying address information"],
          "additional_examples": [
            "<address>Contact us at: support@example.com</address>",
            "<address>Visit us at: 1234 Street Name, City, Country</address>"
          ]
        },
        "meta": {
          "title": "HTML address Tag - Contact Information",
          "description": "Learn how to define contact information using the HTML <address> tag, including examples and use cases.",
          "keywords": "html, address, contact, tutorial"
        }
      },
      {
        "name": "article",
        "description": "Defines an article.",
        "example": "<article><h2>Article Title</h2><p>Article content...</p></article>",
        "details": {
          "how_it_works": "The <article> tag specifies independent, self-contained content that can be independently distributed or reused.",
          "use_cases": ["Creating blog posts", "Writing news articles", "Defining magazine articles"],
          "additional_examples": [
            "<article><h2>News</h2><p>Latest updates...</p></article>",
            "<article><h2>Blog</h2><p>Blog content...</p></article>"
          ]
        },
        "meta": {
          "title": "HTML article Tag - Article",
          "description": "Learn how to define articles using the HTML <article> tag, including examples and use cases.",
          "keywords": "html, article, content, tutorial"
        }
      },
      {
        "name": "aside",
        "description": "Defines content aside from the page content.",
        "example": "<aside><p>Related content...</p></aside>",
        "details": {
          "how_it_works": "The <aside> tag defines some content aside from the content it is placed in (like a sidebar).",
          "use_cases": ["Creating sidebars", "Adding related content", "Displaying advertisements"],
          "additional_examples": [
            "<aside><p>Sidebar content...</p></aside>",
            "<aside><p>Additional information...</p></aside>"
          ]
        },
        "meta": {
          "title": "HTML aside Tag - Aside Content",
          "description": "Learn how to define aside content using the HTML <aside> tag, including examples and use cases.",
          "keywords": "html, aside, content, tutorial"
        }
      },
      {
        "name": "audio",
        "description": "Defines embedded sound content.",
        "example": "<audio controls><source src='audio.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>",
        "details": {
          "how_it_works": "The <audio> tag is used to embed sound content in documents.",
          "use_cases": ["Embedding audio files", "Adding music or sound effects", "Including podcasts"],
          "additional_examples": [
            "<audio controls><source src='song.mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>",
            "<audio controls><source src='audio.ogg' type='audio/ogg'>Your browser does not support the audio element.</audio>"
          ]
        },
        "meta": {
          "title": "HTML audio Tag - Audio Content",
          "description": "Learn how to embed audio content using the HTML <audio> tag, including examples and use cases.",
          "keywords": "html, audio, embed, tutorial"
        }
      },
      {
        "name": "b",
        "description": "Defines bold text.",
        "example": "<b>Bold Text</b>",
        "details": {
          "how_it_works": "The <b> tag is used to draw attention to text by making it bold, but it doesn't imply any added importance.",
          "use_cases": ["Highlighting text", "Emphasizing content", "Making text bold for stylistic reasons"],
          "additional_examples": [
            "<b>Important</b> information.",
            "This is <b>bold</b> text."
          ]
        },
        "meta": {
          "title": "HTML b Tag - Bold Text",
          "description": "Learn how to make text bold using the HTML <b> tag, including examples and use cases.",
          "keywords": "html, b, bold, text, tutorial"
        }
      },
      {
        "name": "base",
        "description": "Specifies the base URL/target for all relative URLs in a document.",
        "example": "<base href='https://www.example.com/'>",
        "details": {
          "how_it_works": "The <base> tag specifies a base URL for all relative URLs in a document, affecting links, images, and other URL-based elements.",
          "use_cases": ["Setting a base URL for a document", "Ensuring relative URLs work correctly", "Changing the target of links and images"],
          "additional_examples": [
            "<base href='https://www.example.com/' target='_blank'>",
            "<base href='https://cdn.example.com/'>"
          ]
        },
        "meta": {
          "title": "HTML base Tag - Base URL",
          "description": "Learn how to set a base URL using the HTML <base> tag, including examples and use cases.",
          "keywords": "html, base, url, tutorial"
        }
      },
      {
        "name": "bdi",
        "description": "Isolates a part of text that might be formatted in a different direction from other text outside it.",
        "example": "<bdi>isolate</bdi>",
        "details": {
          "how_it_works": "The <bdi> tag isolates a part of text that might be formatted in a different direction from other text outside it, useful for embedding fragments in bidirectional text.",
          "use_cases": ["Isolating bidirectional text", "Handling text direction changes", "Embedding text fragments"],
          "additional_examples": [
            "<bdi>abc 123</bdi>",
            "<bdi>משה</bdi>"
          ]
        },
        "meta": {
          "title": "HTML bdi Tag - Bidirectional Isolation",
          "description": "Learn how to isolate bidirectional text using the HTML <bdi> tag, including examples and use cases.",
          "keywords": "html, bdi, bidirectional, text, tutorial"
        }
      },
      {
        "name": "bdo",
        "description": "Overrides the current text direction.",
        "example": "<bdo dir='rtl'>This text will be right-to-left.</bdo>",
        "details": {
          "how_it_works": "The <bdo> tag overrides the current text direction, allowing you to specify a different direction for its content.",
          "use_cases": ["Changing text direction", "Handling bidirectional text", "Overriding default text direction"],
          "additional_examples": [
            "<bdo dir='ltr'>Left to right</bdo>",
            "<bdo dir='rtl'>Right to left</bdo>"
          ]
        },
        "meta": {
          "title": "HTML bdo Tag - Bidirectional Override",
          "description": "Learn how to override text direction using the HTML <bdo> tag, including examples and use cases.",
          "keywords": "html, bdo, text direction, tutorial"
        }
      },
      {
        "name": "blockquote",
        "description": "Defines a section that is quoted from another source.",
        "example": "<blockquote cite='https://www.example.com'>Quote content here.</blockquote>",
        "details": {
          "how_it_works": "The <blockquote> tag is used for longer quotations from another source, often displayed as an indented block.",
          "use_cases": ["Quoting external content", "Highlighting long quotes", "Providing context for quotations"],
          "additional_examples": [
            "<blockquote cite='https://www.example.com'>This is a blockquote.</blockquote>",
            "<blockquote>This is a simple blockquote.</blockquote>"
          ]
        },
        "meta": {
          "title": "HTML blockquote Tag - Block Quote",
          "description": "Learn how to define block quotations using the HTML <blockquote> tag, including examples and use cases.",
          "keywords": "html, blockquote, quote, tutorial"
        }
      },
      {
        "name": "body",
        "description": "Defines the document's body.",
        "example": "<body><h1>Page Title</h1><p>Page content...</p></body>",
        "details": {
          "how_it_works": "The <body> tag contains all the contents of an HTML document, such as text, images, links, and other elements.",
          "use_cases": ["Structuring the main content of a web page", "Enclosing all visible content", "Defining the document body"],
          "additional_examples": [
            "<body><h1>Welcome</h1><p>This is the body content.</p></body>",
            "<body><nav>Navigation</nav><main>Main Content</main></body>"
          ]
        },
        "meta": {
          "title": "HTML body Tag - Document Body",
          "description": "Learn how to define the body of a document using the HTML <body> tag, including examples and use cases.",
          "keywords": "html, body, content, tutorial"
        }
      },
      {
        "name": "br",
        "description": "Defines a single line break.",
        "example": "Line 1<br>Line 2",
        "details": {
          "how_it_works": "The <br> tag inserts a single line break, useful for writing addresses or poems.",
          "use_cases": ["Inserting line breaks", "Formatting text", "Breaking lines within text"],
          "additional_examples": [
            "Address:<br>1234 Street Name<br>City, Country",
            "Roses are red<br>Violets are blue"
          ]
        },
        "meta": {
          "title": "HTML br Tag - Line Break",
          "description": "Learn how to insert line breaks using the HTML <br> tag, including examples and use cases.",
          "keywords": "html, br, line break, tutorial"
        }
      },
      {
        "name": "button",
        "description": "Defines a clickable button.",
        "example": "<button type='button'>Click Me</button>",
        "details": {
          "how_it_works": "The <button> tag creates a clickable button, which can be used to submit forms or trigger events.",
          "use_cases": ["Creating form buttons", "Triggering JavaScript functions", "Interactive elements"],
          "additional_examples": [
            "<button type='submit'>Submit</button>",
            "<button type='reset'>Reset</button>"
          ]
        },
        "meta": {
          "title": "HTML button Tag - Clickable Button",
          "description": "Learn how to create clickable buttons using the HTML <button> tag, including examples and use cases.",
          "keywords": "html, button, click, tutorial"
        }
      },
      {
        "name": "canvas",
        "description": "Used to draw graphics, on the fly, via scripting (usually JavaScript).",
        "example": "<canvas id='myCanvas' width='200' height='100'></canvas>",
        "details": {
          "how_it_works": "The <canvas> tag is used to draw graphics via JavaScript. It provides a rectangular area where you can control every pixel.",
          "use_cases": ["Creating dynamic graphics", "Rendering game graphics", "Drawing graphs and charts"],
          "additional_examples": [
            "<canvas id='myCanvas' width='500' height='400'></canvas>",
            "<canvas id='gameCanvas' width='800' height='600'></canvas>"
          ]
        },
        "meta": {
          "title": "HTML canvas Tag - Drawing Graphics",
          "description": "Learn how to draw graphics using the HTML <canvas> tag, including examples and use cases.",
          "keywords": "html, canvas, graphics, tutorial"
        }
      },
      {
        "name": "caption",
        "description": "Defines a table caption.",
        "example": "<table><caption>Table Title</caption></table>",
        "details": {
          "how_it_works": "The <caption> tag is used to specify a caption for a <table> element. It must be inserted immediately after the <table> tag.",
          "use_cases": ["Adding titles to tables", "Describing table content", "Improving table accessibility"],
          "additional_examples": [
            "<table><caption>Monthly Sales</caption><tr><th>Month</th><th>Sales</th></tr></table>",
            "<table><caption>Student Scores</caption><tr><th>Name</th><th>Score</th></tr></table>"
          ]
        },
        "meta": {
          "title": "HTML caption Tag - Table Caption",
          "description": "Learn how to define table captions using the HTML <caption> tag, including examples and use cases.",
          "keywords": "html, caption, table, tutorial"
        }
      },
      {
        "name": "cite",
        "description": "Defines the title of a work.",
        "example": "<cite>The Great Gatsby</cite>",
        "details": {
          "how_it_works": "The <cite> tag is used to define the title of a creative work (e.g., a book, a poem, a song). It usually renders text in italic.",
          "use_cases": ["Citing books", "Quoting titles", "Referencing works"],
          "additional_examples": [
            "<cite>To Kill a Mockingbird</cite>",
            "<cite>Romeo and Juliet</cite>"
          ]
        },
        "meta": {
          "title": "HTML cite Tag - Citation",
          "description": "Learn how to cite works using the HTML <cite> tag, including examples and use cases.",
          "keywords": "html, cite, citation, tutorial"
        }
      },
      {
        "name": "code",
        "description": "Defines a piece of computer code.",
        "example": "<code>console.log('Hello, World!');</code>",
        "details": {
          "how_it_works": "The <code> tag is used to define a piece of computer code. It usually renders text in a monospace font.",
          "use_cases": ["Displaying code snippets", "Highlighting programming code", "Embedding code examples"],
          "additional_examples": [
            "<code>alert('Hello!');</code>",
            "<code>document.getElementById('myElement').innerHTML = 'Content';</code>"
          ]
        },
        "meta": {
          "title": "HTML code Tag - Computer Code",
          "description": "Learn how to define computer code using the HTML <code> tag, including examples and use cases.",
          "keywords": "html, code, programming, tutorial"
        }
      },
      {
        "name": "col",
        "description": "Specifies column properties for each column within a <colgroup> element.",
        "example": "<colgroup><col style='background-color:yellow'><col style='background-color:green'></colgroup>",
        "details": {
          "how_it_works": "The <col> tag specifies column properties for each column within a <colgroup> element, allowing you to style individual columns.",
          "use_cases": ["Styling table columns", "Setting column properties", "Defining column-specific styles"],
          "additional_examples": [
            "<colgroup><col style='width:50%'><col style='width:50%'></colgroup>",
            "<colgroup><col style='border:1px solid black'><col style='border:1px solid black'></colgroup>"
          ]
        },
        "meta": {
          "title": "HTML col Tag - Table Column",
          "description": "Learn how to specify column properties using the HTML <col> tag, including examples and use cases.",
          "keywords": "html, col, column, table, tutorial"
        }
      },
      {
        "name": "colgroup",
        "description": "Specifies a group of one or more columns in a table for formatting.",
        "example": "<table><colgroup><col style='background-color:yellow'><col style='background-color:green'></colgroup></table>",
        "details": {
          "how_it_works": "The <colgroup> tag is used to group one or more columns in a table for formatting purposes.",
          "use_cases": ["Grouping table columns", "Applying styles to column groups", "Defining column group properties"],
          "additional_examples": [
            "<table><colgroup><col span='2' style='background-color:yellow'><col style='background-color:green'></colgroup></table>",
            "<table><colgroup><col style='width:50%'><col style='width:50%'></colgroup></table>"
          ]
        },
        "meta": {
          "title": "HTML colgroup Tag - Column Group",
          "description": "Learn how to group table columns using the HTML <colgroup> tag, including examples and use cases.",
          "keywords": "html, colgroup, column, table, tutorial"
        }
      },
      {
        "name": "data",
        "description": "Adds a machine-readable translation of a given content.",
        "example": "<data value='12345'>Product Number</data>",
        "details": {
          "how_it_works": "The <data> tag links content with a machine-readable value, useful for semantic data and structured information.",
          "use_cases": ["Storing machine-readable data", "Linking content with values", "Embedding semantic information"],
          "additional_examples": [
            "<data value='abc123'>Order ID</data>",
            "<data value='50'>50 items</data>"
          ]
        },
        "meta": {
          "title": "HTML data Tag - Machine-readable Content",
          "description": "Learn how to add machine-readable content using the HTML <data> tag, including examples and use cases.",
          "keywords": "html, data, machine-readable, tutorial"
        }
      },
      {
        "name": "datalist",
        "description": "Specifies a list of pre-defined options for input controls.",
        "example": "<input list='browsers'><datalist id='browsers'><option value='Chrome'><option value='Firefox'><option value='Safari'><option value='Edge'></datalist>",
        "details": {
          "how_it_works": "The <datalist> tag contains a set of <option> elements that represent the permissible or suggested options available to users.",
          "use_cases": ["Creating input suggestions", "Providing a list of options", "Enhancing user input"],
          "additional_examples": [
            "<input list='colors'><datalist id='colors'><option value='Red'><option value='Green'><option value='Blue'></datalist>",
            "<input list='countries'><datalist id='countries'><option value='USA'><option value='Canada'><option value='Mexico'></datalist>"
          ]
        },
        "meta": {
          "title": "HTML datalist Tag - Predefined Options",
          "description": "Learn how to specify predefined options for input controls using the HTML <datalist> tag, including examples and use cases.",
          "keywords": "html, datalist, input, options, tutorial"
        }
      },
      {
        "name": "dd",
        "description": "Defines a description/value of a term in a description list.",
        "example": "<dl><dt>HTML</dt><dd>Hypertext Markup Language</dd></dl>",
        "details": {
          "how_it_works": "The <dd> tag is used to describe a term/name in a description list, usually alongside <dt> tags.",
          "use_cases": ["Defining terms", "Creating description lists", "Providing detailed descriptions"],
          "additional_examples": [
            "<dl><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>",
            "<dl><dt>JavaScript</dt><dd>A high-level, dynamic programming language</dd></dl>"
          ]
        },
        "meta": {
          "title": "HTML dd Tag - Description List",
          "description": "Learn how to define descriptions in a description list using the HTML <dd> tag, including examples and use cases.",
          "keywords": "html, dd, description, list, tutorial"
        }
      },
      {
        "name": "del",
        "description": "Defines text that has been deleted from a document.",
        "example": "<del>Old text</del>",
        "details": {
          "how_it_works": "The <del> tag is used to represent text that has been deleted from a document, often displayed with a strikethrough.",
          "use_cases": ["Indicating removed content", "Highlighting changes", "Showing deletions"],
          "additional_examples": [
            "<p>This is <del>incorrect</del> correct.</p>",
            "<del>Outdated information</del>"
          ]
        },
        "meta": {
          "title": "HTML del Tag - Deleted Text",
          "description": "Learn how to represent deleted text using the HTML <del> tag, including examples and use cases.",
          "keywords": "html, del, deleted, text, tutorial"
        }
      },
      {
        "name": "details",
        "description": "Defines additional details that the user can view or hide.",
        "example": "<details><summary>More info</summary><p>Details go here...</p></details>",
        "details": {
          "how_it_works": "The <details> tag is used to create an interactive widget that the user can open and close to reveal additional information.",
          "use_cases": ["Creating expandable sections", "Hiding/showing content", "Providing more information on demand"],
          "additional_examples": [
            "<details><summary>Click to expand</summary><p>Hidden details...</p></details>",
            "<details><summary>Read more</summary><p>Additional information...</p></details>"
          ]
        },
        "meta": {
          "title": "HTML details Tag - Expandable Details",
          "description": "Learn how to create expandable sections using the HTML <details> tag, including examples and use cases.",
          "keywords": "html, details, expandable, tutorial"
        }
      },
      {
        "name": "dfn",
        "description": "Specifies a term that is going to be defined within the content.",
        "example": "<p><dfn>HTML</dfn> stands for Hypertext Markup Language.</p>",
        "details": {
          "how_it_works": "The <dfn> tag is used to highlight a term that is being defined within the content.",
          "use_cases": ["Defining terms", "Providing explanations", "Highlighting definitions"],
          "additional_examples": [
            "<p><dfn>CSS</dfn> stands for Cascading Style Sheets.</p>",
            "<p>The <dfn>JavaScript</dfn> programming language...</p>"
          ]
        },
        "meta": {
          "title": "HTML dfn Tag - Definition Term",
          "description": "Learn how to specify a term that is being defined using the HTML <dfn> tag, including examples and use cases.",
          "keywords": "html, dfn, definition, term, tutorial"
        }
      },
      {
        "name": "dialog",
        "description": "Defines a dialog box or window.",
        "example": "<dialog open>This is an open dialog</dialog>",
        "details": {
          "how_it_works": "The <dialog> tag defines a dialog box or window, which can be used to create interactive pop-ups.",
          "use_cases": ["Creating modal dialogs", "Displaying pop-up messages", "Implementing interactive forms"],
          "additional_examples": [
            "<dialog open><p>This is a dialog</p><button>Close</button></dialog>",
            "<dialog><p>Another dialog</p><button>Close</button></dialog>"
          ]
        },
        "meta": {
          "title": "HTML dialog Tag - Dialog Box",
          "description": "Learn how to define dialog boxes using the HTML <dialog> tag, including examples and use cases.",
          "keywords": "html, dialog, box, window, tutorial"
        }
      },
      {
        "name": "div",
        "description": "Defines a section in a document.",
        "example": "<div>This is a section</div>",
        "details": {
          "how_it_works": "The <div> tag is used to define a division or section in an HTML document. It is a block-level element.",
          "use_cases": ["Grouping content", "Creating layout sections", "Applying styles to sections"],
          "additional_examples": [
            "<div><h1>Title</h1><p>Paragraph</p></div>",
            "<div class='container'><div class='row'>Row content</div></div>"
          ]
        },
        "meta": {
          "title": "HTML div Tag - Section",
          "description": "Learn how to define sections using the HTML <div> tag, including examples and use cases.",
          "keywords": "html, div, section, tutorial"
        }
      },
      {
        "name": "dl",
        "description": "Defines a description list.",
        "example": "<dl><dt>HTML</dt><dd>Hypertext Markup Language</dd></dl>",
        "details": {
          "how_it_works": "The <dl> tag defines a description list. It contains <dt> elements (terms) and <dd> elements (descriptions).",
          "use_cases": ["Creating glossary lists", "Defining terms", "Listing descriptions"],
          "additional_examples": [
            "<dl><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>",
            "<dl><dt>JavaScript</dt><dd>A high-level programming language</dd></dl>"
          ]
        },
        "meta": {
          "title": "HTML dl Tag - Description List",
          "description": "Learn how to define description lists using the HTML <dl> tag, including examples and use cases.",
          "keywords": "html, dl, description, list, tutorial"
        }
      },
      {
        "name": "dt",
        "description": "Defines a term/name in a description list.",
        "example": "<dl><dt>HTML</dt><dd>Hypertext Markup Language</dd></dl>",
        "details": {
          "how_it_works": "The <dt> tag is used to define a term/name in a description list. It is used together with <dd> tags.",
          "use_cases": ["Defining terms", "Creating glossary entries", "Listing names"],
          "additional_examples": [
            "<dl><dt>CSS</dt><dd>Cascading Style Sheets</dd></dl>",
            "<dl><dt>JavaScript</dt><dd>A high-level programming language</dd></dl>"
          ]
        },
        "meta": {
          "title": "HTML dt Tag - Description Term",
          "description": "Learn how to define terms in a description list using the HTML <dt> tag, including examples and use cases.",
          "keywords": "html, dt, term, description, tutorial"
        }
      },
      {
        "name": "em",
        "description": "Defines emphasized text.",
        "example": "<em>Emphasized text</em>",
        "details": {
          "how_it_works": "The <em> tag is used to emphasize text, typically rendering it in italic.",
          "use_cases": ["Emphasizing important words", "Highlighting key phrases", "Creating italic text"],
          "additional_examples": [
            "<p>This is <em>very</em> important.</p>",
            "<em>Emphasis</em> on this word."
          ]
        },
        "meta": {
          "title": "HTML em Tag - Emphasized Text",
          "description": "Learn how to emphasize text using the HTML <em> tag, including examples and use cases.",
          "keywords": "html, em, emphasized, text, tutorial"
        }
      },
      {
        "name": "embed",
        "description": "Defines a container for an external application.",
        "example": "<embed src='video.mp4' width='300' height='200'>",
        "details": {
          "how_it_works": "The <embed> tag is used to embed an external application or interactive content, such as a video or a plugin.",
          "use_cases": ["Embedding videos", "Including interactive content", "Adding external applications"],
          "additional_examples": [
            "<embed src='movie.swf' width='400' height='300'>",
            "<embed src='audio.mp3' width='300' height='32'>"
          ]
        },
        "meta": {
          "title": "HTML embed Tag - External Application",
          "description": "Learn how to embed external applications using the HTML <embed> tag, including examples and use cases.",
          "keywords": "html, embed, external, application, tutorial"
        }
      },
      {
        "name": "fieldset",
        "description": "Groups related elements in a form.",
        "example": "<fieldset><legend>Personal Information</legend><label>Name:</label><input type='text'></fieldset>",
        "details": {
          "how_it_works": "The <fieldset> tag is used to group related elements in a form, and the <legend> tag is used to define a caption for the <fieldset>.",
          "use_cases": ["Grouping form fields", "Organizing form content", "Adding captions to form sections"],
          "additional_examples": [
            "<fieldset><legend>Account Details</legend><label>Username:</label><input type='text'></fieldset>",
            "<fieldset><legend>Preferences</legend><label>Subscribe:</label><input type='checkbox'></fieldset>"
          ]
        },
        "meta": {
          "title": "HTML fieldset Tag - Form Group",
          "description": "Learn how to group form elements using the HTML <fieldset> tag, including examples and use cases.",
          "keywords": "html, fieldset, form, group, tutorial"
        }
      },
      {
        "name": "figcaption",
        "description": "Defines a caption for a <figure> element.",
        "example": "<figure><img src='image.jpg' alt='Image'><figcaption>Image caption</figcaption></figure>",
        "details": {
          "how_it_works": "The <figcaption> tag is used to add a caption or legend to a <figure> element.",
          "use_cases": ["Adding captions to images", "Providing context for figures", "Describing multimedia content"],
          "additional_examples": [
            "<figure><img src='photo.jpg' alt='Photo'><figcaption>Photo caption</figcaption></figure>",
            "<figure><video src='movie.mp4'></video><figcaption>Video caption</figcaption></figure>"
          ]
        },
        "meta": {
          "title": "HTML figcaption Tag - Figure Caption",
          "description": "Learn how to add captions to figures using the HTML <figcaption> tag, including examples and use cases.",
          "keywords": "html, figcaption, figure, caption, tutorial"
        }
      },
      {
        "name": "figure",
        "description": "Specifies self-contained content.",
        "example": "<figure><img src='image.jpg' alt='Image'><figcaption>Image caption</figcaption></figure>",
        "details": {
          "how_it_works": "The <figure> tag is used to specify self-contained content, such as illustrations, diagrams, photos, code listings, etc.",
          "use_cases": ["Grouping multimedia content", "Creating self-contained sections", "Adding figures to articles"],
          "additional_examples": [
            "<figure><img src='graphic.png' alt='Graphic'><figcaption>Graphic caption</figcaption></figure>",
            "<figure><audio src='audio.mp3'></audio><figcaption>Audio caption</figcaption></figure>"
          ]
        },
        "meta": {
          "title": "HTML figure Tag - Self-contained Content",
          "description": "Learn how to specify self-contained content using the HTML <figure> tag, including examples and use cases.",
          "keywords": "html, figure, content, multimedia, tutorial"
        }
      },
      {
        "name": "footer",
        "description": "Defines a footer for a document or section.",
        "example": "<footer><p>Footer content here</p></footer>",
        "details": {
          "how_it_works": "The <footer> tag is used to define a footer for a document or section, typically containing metadata or navigational links.",
          "use_cases": ["Creating footers", "Adding metadata", "Including navigational links"],
          "additional_examples": [
            "<footer><p>&copy; 2024 MyWebsite</p></footer>",
            "<footer><nav><a href='#'>Home</a> | <a href='#'>Contact</a></nav></footer>"
          ]
        },
        "meta": {
          "title": "HTML footer Tag - Document Footer",
          "description": "Learn how to define footers using the HTML <footer> tag, including examples and use cases.",
          "keywords": "html, footer, document, section, tutorial"
        }
      },
      {
        "name": "form",
        "description": "Defines an HTML form for user input.",
        "example": "<form action='/submit' method='post'><label>Name:</label><input type='text' name='name'><input type='submit' value='Submit'></form>",
        "details": {
          "how_it_works": "The <form> tag is used to create an HTML form for user input, containing form elements like input fields, checkboxes, radio buttons, submit buttons, etc.",
          "use_cases": ["Creating user input forms", "Submitting data to a server", "Building interactive web forms"],
          "additional_examples": [
            "<form action='/search' method='get'><input type='text' name='query'><input type='submit' value='Search'></form>",
            "<form action='/signup' method='post'><label>Email:</label><input type='email' name='email'><input type='submit' value='Sign Up'></form>"
          ]
        },
        "meta": {
          "title": "HTML form Tag - User Input Form",
          "description": "Learn how to create user input forms using the HTML <form> tag, including examples and use cases.",
          "keywords": "html, form, user input, tutorial"
        }
      },
      {
        "name": "h1",
        "description": "Defines HTML heading level 1.",
        "example": "<h1>Main Heading</h1>",
        "details": {
          "how_it_works": "The <h1> tag defines the highest level heading in an HTML document, usually the main title.",
          "use_cases": ["Creating main headings", "Defining page titles", "Organizing content structure"],
          "additional_examples": [
            "<h1>Welcome to My Website</h1>",
            "<h1>Chapter 1: Introduction</h1>"
          ]
        },
        "meta": {
          "title": "HTML h1 Tag - Heading Level 1",
          "description": "Learn how to define main headings using the HTML <h1> tag, including examples and use cases.",
          "keywords": "html, h1, heading, title, tutorial"
        }
      },
      {
        "name": "h2",
        "description": "Defines HTML heading level 2.",
        "example": "<h2>Subheading</h2>",
        "details": {
          "how_it_works": "The <h2> tag defines the second highest level heading in an HTML document, usually a subheading.",
          "use_cases": ["Creating subheadings", "Organizing content sections", "Structuring document hierarchy"],
          "additional_examples": [
            "<h2>Features</h2>",
            "<h2>Chapter 2: Getting Started</h2>"
          ]
        },
        "meta": {
          "title": "HTML h2 Tag - Heading Level 2",
          "description": "Learn how to define subheadings using the HTML <h2> tag, including examples and use cases.",
          "keywords": "html, h2, subheading, tutorial"
        }
      },
      {
        "name": "h3",
        "description": "Defines HTML heading level 3.",
        "example": "<h3>Sub-subheading</h3>",
        "details": {
          "how_it_works": "The <h3> tag defines the third highest level heading in an HTML document.",
          "use_cases": ["Creating sub-subheadings", "Organizing content subsections", "Further structuring document hierarchy"],
          "additional_examples": [
            "<h3>Installation</h3>",
            "<h3>Chapter 3: Advanced Topics</h3>"
          ]
        },
        "meta": {
          "title": "HTML h3 Tag - Heading Level 3",
          "description": "Learn how to define sub-subheadings using the HTML <h3> tag, including examples and use cases.",
          "keywords": "html, h3, subheading, tutorial"
        }
      },
      {
        "name": "h4",
        "description": "Defines HTML heading level 4.",
        "example": "<h4>Section Heading</h4>",
        "details": {
          "how_it_works": "The <h4> tag defines the fourth highest level heading in an HTML document.",
          "use_cases": ["Creating section headings", "Organizing content subsections", "Structuring document hierarchy"],
          "additional_examples": [
            "<h4>Configuration</h4>",
            "<h4>Appendix A: Resources</h4>"
          ]
        },
        "meta": {
          "title": "HTML h4 Tag - Heading Level 4",
          "description": "Learn how to define section headings using the HTML <h4> tag, including examples and use cases.",
          "keywords": "html, h4, heading, tutorial"
        }
      },
      {
        "name": "h5",
        "description": "Defines HTML heading level 5.",
        "example": "<h5>Subsection Heading</h5>",
        "details": {
          "how_it_works": "The <h5> tag defines the fifth highest level heading in an HTML document.",
          "use_cases": ["Creating subsection headings", "Organizing content", "Further structuring document hierarchy"],
          "additional_examples": [
            "<h5>Details</h5>",
            "<h5>Part 1: Overview</h5>"
          ]
        },
        "meta": {
          "title": "HTML h5 Tag - Heading Level 5",
          "description": "Learn how to define subsection headings using the HTML <h5> tag, including examples and use cases.",
          "keywords": "html, h5, heading, tutorial"
        }
      },
      {
        "name": "h6",
        "description": "Defines HTML heading level 6.",
        "example": "<h6>Minor Heading</h6>",
        "details": {
          "how_it_works": "The <h6> tag defines the sixth highest level heading in an HTML document.",
          "use_cases": ["Creating minor headings", "Organizing content", "Further structuring document hierarchy"],
          "additional_examples": [
            "<h6>Notes</h6>",
            "<h6>Part 2: In-depth Analysis</h6>"
          ]
        },
        "meta": {
          "title": "HTML h6 Tag - Heading Level 6",
          "description": "Learn how to define minor headings using the HTML <h6> tag, including examples and use cases.",
          "keywords": "html, h6, heading, tutorial"
        }
      },
      {
        "name": "head",
        "description": "Contains metadata/information for the document.",
        "example": "<head><title>Document Title</title><meta charset='UTF-8'></head>",
        "details": {
          "how_it_works": "The <head> tag is a container for metadata, which includes <title>, <meta>, <link>, <style>, <script>, and <base> tags.",
          "use_cases": ["Defining document metadata", "Including links to external resources", "Setting the document title"],
          "additional_examples": [
            "<head><meta name='description' content='A great website'><link rel='stylesheet' href='styles.css'></head>",
            "<head><title>My Website</title><meta name='viewport' content='width=device-width, initial-scale=1'></head>"
          ]
        },
        "meta": {
          "title": "HTML head Tag - Document Metadata",
          "description": "Learn how to define document metadata using the HTML <head> tag, including examples and use cases.",
          "keywords": "html, head, metadata, tutorial"
        }
      },
      {
        "name": "header",
        "description": "Defines a header for a document or section.",
        "example": "<header><h1>Header</h1><nav><a href='#'>Home</a><a href='#'>Contact</a></nav></header>",
        "details": {
          "how_it_works": "The <header> tag defines a header for a document or section, which typically contains introductory content or navigational links.",
          "use_cases": ["Creating headers", "Adding navigation menus", "Including introductory content"],
          "additional_examples": [
            "<header><h1>Welcome</h1><p>This is the header section</p></header>",
            "<header><nav><a href='#'>About</a><a href='#'>Services</a></nav></header>"
          ]
        },
        "meta": {
          "title": "HTML header Tag - Document Header",
          "description": "Learn how to define headers using the HTML <header> tag, including examples and use cases.",
          "keywords": "html, header, document, section, tutorial"
        }
      },
      {
        "name": "hr",
        "description": "Defines a thematic change in the content.",
        "example": "<hr>",
        "details": {
          "how_it_works": "The <hr> tag creates a horizontal rule, which is used to separate content or indicate a thematic break.",
          "use_cases": ["Separating sections", "Indicating breaks", "Adding horizontal lines"],
          "additional_examples": [
            "<p>First section</p><hr><p>Second section</p>",
            "<h2>Chapter 1</h2><p>Content...</p><hr><h2>Chapter 2</h2><p>Content...</p>"
          ]
        },
        "meta": {
          "title": "HTML hr Tag - Horizontal Rule",
          "description": "Learn how to define thematic breaks using the HTML <hr> tag, including examples and use cases.",
          "keywords": "html, hr, horizontal, rule, tutorial"
        }
      },
      {
        "name": "html",
        "description": "Defines the root of an HTML document.",
        "example": "<html><head><title>Title</title></head><body>Content</body></html>",
        "details": {
          "how_it_works": "The <html> tag represents the root of an HTML document, enclosing all other elements.",
          "use_cases": ["Defining the document root", "Structuring HTML documents", "Enclosing all HTML content"],
          "additional_examples": [
            "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>My Website</title></head><body>Welcome</body></html>",
            "<html><head><title>Example</title></head><body><h1>Hello World</h1></body></html>"
          ]
        },
        "meta": {
          "title": "HTML html Tag - Document Root",
          "description": "Learn how to define the root of an HTML document using the HTML <html> tag, including examples and use cases.",
          "keywords": "html, document, root, tutorial"
        }
      },
      {
        "name": "i",
        "description": "Defines a part of text in an alternate voice or mood.",
        "example": "<i>Italic text</i>",
        "details": {
          "how_it_works": "The <i> tag is used to define a part of text in an alternate voice or mood, usually rendered in italic.",
          "use_cases": ["Emphasizing text", "Highlighting foreign words", "Creating italic text"],
          "additional_examples": [
            "<p>This is <i>italic</i> text.</p>",
            "<i>Latin phrase</i> meaning..."
          ]
        },
        "meta": {
          "title": "HTML i Tag - Italic Text",
          "description": "Learn how to define italic text using the HTML <i> tag, including examples and use cases.",
          "keywords": "html, i, italic, text, tutorial"
        }
      },
      {
        "name": "iframe",
        "description": "Defines an inline frame.",
        "example": "<iframe src='https://www.example.com' width='300' height='200'></iframe>",
        "details": {
          "how_it_works": "The <iframe> tag is used to embed another HTML page within the current page.",
          "use_cases": ["Embedding external content", "Including videos or maps", "Creating nested browsing contexts"],
          "additional_examples": [
            "<iframe src='https://www.google.com' width='600' height='400'></iframe>",
            "<iframe src='video.mp4' width='300' height='200'></iframe>"
          ]
        },
        "meta": {
          "title": "HTML iframe Tag - Inline Frame",
          "description": "Learn how to define inline frames using the HTML <iframe> tag, including examples and use cases.",
          "keywords": "html, iframe, inline, frame, tutorial"
        }
      },
      {
        "name": "img",
        "description": "Defines an image.",
        "example": "<img src='image.jpg' alt='Image description'>",
        "details": {
          "how_it_works": "The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image.",
          "use_cases": ["Embedding images", "Adding graphics", "Displaying photos"],
          "additional_examples": [
            "<img src='photo.jpg' alt='A beautiful scenery'>",
            "<img src='logo.png' alt='Company logo'>"
          ]
        },
        "meta": {
          "title": "HTML img Tag - Image",
          "description": "Learn how to define images using the HTML <img> tag, including examples and use cases.",
          "keywords": "html, img, image, tutorial"
        }
      },
      {
        "name": "input",
        "description": "Defines an input control.",
        "example": "<input type='text' name='username'>",
        "details": {
          "how_it_works": "The <input> tag is used to create interactive controls for web-based forms in order to accept data from the user.",
          "use_cases": ["Creating text fields", "Adding checkboxes", "Including radio buttons"],
          "additional_examples": [
            "<input type='checkbox' name='subscribe'>",
            "<input type='radio' name='gender' value='male'>",
            "<input type='password' name='password'>"
          ]
        },
        "meta": {
          "title": "HTML input Tag - Input Control",
          "description": "Learn how to define input controls using the HTML <input> tag, including examples and use cases.",
          "keywords": "html, input, form, control, tutorial"
        }
      },
      {
        "name": "ins",
        "description": "Defines a text that has been inserted into a document.",
        "example": "<ins>New text</ins>",
        "details": {
          "how_it_works": "The <ins> tag is used to represent text that has been inserted into a document, often displayed with an underline.",
          "use_cases": ["Indicating added content", "Highlighting insertions", "Showing changes"],
          "additional_examples": [
            "<p>This is <ins>new</ins> text.</p>",
            "<ins>Added information</ins>"
          ]
        },
        "meta": {
          "title": "HTML ins Tag - Inserted Text",
          "description": "Learn how to represent inserted text using the HTML <ins> tag, including examples and use cases.",
          "keywords": "html, ins, inserted, text, tutorial"
        }
      },
      {
        "name": "kbd",
        "description": "Defines keyboard input.",
        "example": "<kbd>Ctrl + C</kbd>",
        "details": {
          "how_it_works": "The <kbd> tag is used to define keyboard input, typically rendering text in a monospace font.",
          "use_cases": ["Displaying keyboard shortcuts", "Showing keypresses", "Highlighting keyboard input"],
          "additional_examples": [
            "<p>Press <kbd>Enter</kbd> to continue.</p>",
            "<kbd>Ctrl + V</kbd> to paste."
          ]
        },
        "meta": {
          "title": "HTML kbd Tag - Keyboard Input",
          "description": "Learn how to define keyboard input using the HTML <kbd> tag, including examples and use cases.",
          "keywords": "html, kbd, keyboard, input, tutorial"
        }
      },
      {
        "name": "label",
        "description": "Defines a label for an <input> element.",
        "example": "<label for='name'>Name:</label><input type='text' id='name' name='name'>",
        "details": {
          "how_it_works": "The <label> tag is used to define a label for an <input> element, providing better accessibility and user experience.",
          "use_cases": ["Labeling form controls", "Improving accessibility", "Associating text with input elements"],
          "additional_examples": [
            "<label for='email'>Email:</label><input type='email' id='email' name='email'>",
            "<label for='password'>Password:</label><input type='password' id='password' name='password'>"
          ]
        },
        "meta": {
          "title": "HTML label Tag - Form Label",
          "description": "Learn how to define labels for input elements using the HTML <label> tag, including examples and use cases.",
          "keywords": "html, label, form, input, tutorial"
        }
      },
      {
        "name": "legend",
        "description": "Defines a caption for a <fieldset> element.",
        "example": "<fieldset><legend>Personal Information</legend><label>Name:</label><input type='text'></fieldset>",
        "details": {
          "how_it_works": "The <legend> tag is used to define a caption for a <fieldset> element, providing context for grouped form controls.",
          "use_cases": ["Adding captions to fieldsets", "Describing form groups", "Providing context for grouped controls"],
          "additional_examples": [
            "<fieldset><legend>Account Details</legend><label>Username:</label><input type='text'></fieldset>",
            "<fieldset><legend>Preferences</legend><label>Subscribe:</label><input type='checkbox'></fieldset>"
          ]
        },
        "meta": {
          "title": "HTML legend Tag - Fieldset Caption",
          "description": "Learn how to define captions for fieldsets using the HTML <legend> tag, including examples and use cases.",
          "keywords": "html, legend, fieldset, caption, tutorial"
        }
      },
      {
        "name": "li",
        "description": "Defines a list item.",
        "example": "<ul><li>First item</li><li>Second item</li></ul>",
        "details": {
          "how_it_works": "The <li> tag is used to define a list item, which must be contained within a parent <ul>, <ol>, or <menu> element.",
          "use_cases": ["Creating unordered lists", "Creating ordered lists", "Listing items"],
          "additional_examples": [
            "<ol><li>First item</li><li>Second item</li></ol>",
            "<menu><li>Home</li><li>About</li></menu>"
          ]
        },
        "meta": {
          "title": "HTML li Tag - List Item",
          "description": "Learn how to define list items using the HTML <li> tag, including examples and use cases.",
          "keywords": "html, li, list, item, tutorial"
        }
      },
      {
        "name": "link",
        "description": "Defines the relationship between a document and an external resource (most used to link to style sheets).",
        "example": "<link rel='stylesheet' href='styles.css'>",
        "details": {
          "how_it_works": "The <link> tag is used to define the relationship between a document and an external resource, commonly used to link to stylesheets.",
          "use_cases": ["Linking to stylesheets", "Including external resources", "Adding icons"],
          "additional_examples": [
            "<link rel='icon' href='favicon.ico'>",
            "<link rel='alternate' type='application/rss+xml' href='feed.xml'>"
          ]
        },
        "meta": {
          "title": "HTML link Tag - External Resource",
          "description": "Learn how to link to external resources using the HTML <link> tag, including examples and use cases.",
          "keywords": "html, link, external, resource, tutorial"
        }
      },
      {
        "name": "main",
        "description": "Specifies the main content of a document.",
        "example": "<main><h1>Main Content</h1><p>This is the main area.</p></main>",
        "details": {
          "how_it_works": "The <main> tag is used to specify the main content of a document, which should be unique to the document.",
          "use_cases": ["Defining main content areas", "Improving accessibility", "Organizing document structure"],
          "additional_examples": [
            "<main><article><h1>Article Title</h1><p>Article content...</p></article></main>",
            "<main><section><h2>Section Title</h2><p>Section content...</p></section></main>"
          ]
        },
        "meta": {
          "title": "HTML main Tag - Main Content",
          "description": "Learn how to define the main content of a document using the HTML <main> tag, including examples and use cases.",
          "keywords": "html, main, content, tutorial"
        }
      },
      {
        "name": "map",
        "description": "Defines an image map.",
        "example": "<img src='planets.jpg' usemap='#planetmap'><map name='planetmap'><area shape='rect' coords='34,44,270,350' alt='Mercury' href='mercury.htm'></map>",
        "details": {
          "how_it_works": "The <map> tag is used to define an image map, which is an image with clickable areas.",
          "use_cases": ["Creating interactive images", "Defining clickable areas", "Adding navigation to images"],
          "additional_examples": [
            "<img src='worldmap.jpg' usemap='#worldmap'><map name='worldmap'><area shape='rect' coords='34,44,270,350' alt='Europe' href='europe.htm'></map>",
            "<img src='usa.jpg' usemap='#usamap'><map name='usamap'><area shape='circle' coords='34,44,270,350' alt='New York' href='newyork.htm'></map>"
          ]
        },
        "meta": {
          "title": "HTML map Tag - Image Map",
          "description": "Learn how to define image maps using the HTML <map> tag, including examples and use cases.",
          "keywords": "html, map, image, interactive, tutorial"
        }
      },
      {
        "name": "mark",
        "description": "Defines marked/highlighted text.",
        "example": "<p>This is <mark>highlighted</mark> text.</p>",
        "details": {
          "how_it_works": "The <mark> tag is used to highlight text, usually rendering it with a yellow background.",
          "use_cases": ["Highlighting important text", "Emphasizing key phrases", "Creating marked text"],
          "additional_examples": [
            "<mark>Important</mark> information.",
            "This is a <mark>highlighted</mark> word."
          ]
        },
        "meta": {
          "title": "HTML mark Tag - Highlighted Text",
          "description": "Learn how to highlight text using the HTML <mark> tag, including examples and use cases.",
          "keywords": "html, mark, highlighted, text, tutorial"
        }
      },
      {
        "name": "meta",
        "description": "Defines metadata about an HTML document.",
        "example": "<meta name='description' content='Free Web tutorials'>",
        "details": {
          "how_it_works": "The <meta> tag provides metadata about the HTML document, such as descriptions, keywords, author, and viewport settings.",
          "use_cases": ["Setting document metadata", "Improving SEO", "Defining viewport settings"],
          "additional_examples": [
            "<meta charset='UTF-8'>",
            "<meta name='keywords' content='HTML, CSS, JavaScript'>",
            "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
          ]
        },
        "meta": {
          "title": "HTML meta Tag - Metadata",
          "description": "Learn how to define metadata using the HTML <meta> tag, including examples and use cases.",
          "keywords": "html, meta, metadata, tutorial"
        }
      },
      {
        "name": "nav",
        "description": "Defines navigation links.",
        "example": "<nav><a href='#home'>Home</a><a href='#services'>Services</a><a href='#contact'>Contact</a></nav>",
        "details": {
          "how_it_works": "The <nav> tag is used to define a set of navigation links, typically for website menus or navigation bars.",
          "use_cases": ["Creating navigation menus", "Adding navigation bars", "Organizing site links"],
          "additional_examples": [
            "<nav><ul><li><a href='#home'>Home</a></li><li><a href='#about'>About</a></li></ul></nav>",
            "<nav><a href='#'>Link 1</a> | <a href='#'>Link 2</a></nav>"
          ]
        },
        "meta": {
          "title": "HTML nav Tag - Navigation Links",
          "description": "Learn how to define navigation links using the HTML <nav> tag, including examples and use cases.",
          "keywords": "html, nav, navigation, links, tutorial"
        }
      },
      {
        "name": "noscript",
        "description": "Defines an alternate content for users that do not support client-side scripts.",
        "example": "<noscript>Your browser does not support JavaScript!</noscript>",
        "details": {
          "how_it_works": "The <noscript> tag defines alternate content to be displayed if a browser does not support scripting, or if scripting is disabled.",
          "use_cases": ["Providing fallback content", "Improving accessibility", "Handling no-script scenarios"],
          "additional_examples": [
            "<noscript><p>JavaScript is required for this application.</p></noscript>",
            "<noscript><div>Interactive content will not be available.</div></noscript>"
          ]
        },
        "meta": {
          "title": "HTML noscript Tag - No Script Content",
          "description": "Learn how to define alternate content for no-script scenarios using the HTML <noscript> tag, including examples and use cases.",
          "keywords": "html, noscript, no script, fallback, tutorial"
        }
      },
      {
        "name": "object",
        "description": "Defines a container for an external application.",
        "example": "<object data='movie.swf' type='application/x-shockwave-flash' width='400' height='300'></object>",
        "details": {
          "how_it_works": "The <object> tag is used to embed an external resource, such as a multimedia plugin or application, in the HTML document.",
          "use_cases": ["Embedding multimedia content", "Including external applications", "Adding interactive elements"],
          "additional_examples": [
            "<object data='movie.mp4' type='video/mp4' width='300' height='200'></object>",
            "<object data='map.svg' type='image/svg+xml' width='500' height='400'></object>"
          ]
        },
        "meta": {
          "title": "HTML object Tag - External Application",
          "description": "Learn how to embed external applications using the HTML <object> tag, including examples and use cases.",
          "keywords": "html, object, external, application, tutorial"
        }
      },
      {
        "name": "ol",
        "description": "Defines an ordered list.",
        "example": "<ol><li>First item</li><li>Second item</li><li>Third item</li></ol>",
        "details": {
          "how_it_works": "The <ol> tag is used to define an ordered list, which contains <li> elements that represent the list items.",
          "use_cases": ["Creating ordered lists", "Listing items in sequence", "Displaying numbered lists"],
          "additional_examples": [
            "<ol><li>Step 1</li><li>Step 2</li><li>Step 3</li></ol>",
            "<ol type='A'><li>Item A</li><li>Item B</li><li>Item C</li></ol>"
          ]
        },
        "meta": {
          "title": "HTML ol Tag - Ordered List",
          "description": "Learn how to define ordered lists using the HTML <ol> tag, including examples and use cases.",
          "keywords": "html, ol, ordered, list, tutorial"
        }
      },
      {
        "name": "optgroup",
        "description": "Defines a group of related options in a drop-down list.",
        "example": "<select><optgroup label='Group 1'><option>Option 1.1</option><option>Option 1.2</option></optgroup><optgroup label='Group 2'><option>Option 2.1</option><option>Option 2.2</option></select>",
        "details": {
          "how_it_works": "The <optgroup> tag is used to group related options in a <select> element, enhancing the readability and organization of the drop-down list.",
          "use_cases": ["Grouping options", "Organizing select elements", "Improving readability of drop-down lists"],
          "additional_examples": [
            "<select><optgroup label='Fruits'><option>Apple</option><option>Banana</option></optgroup><optgroup label='Vegetables'><option>Carrot</option><option>Broccoli</option></optgroup></select>",
            "<select><optgroup label='Cities'><option>New York</option><option>Los Angeles</option></optgroup><optgroup label='Countries'><option>USA</option><option>Canada</option></optgroup></select>"
          ]
        },
        "meta": {
          "title": "HTML optgroup Tag - Option Group",
          "description": "Learn how to group options in a drop-down list using the HTML <optgroup> tag, including examples and use cases.",
          "keywords": "html, optgroup, option, group, tutorial"
        }
      },
      {
        "name": "option",
        "description": "Defines an option in a drop-down list.",
        "example": "<select><option>Option 1</option><option>Option 2</option></select>",
        "details": {
          "how_it_works": "The <option> tag is used to define an option in a <select> element, representing the selectable items in the drop-down list.",
          "use_cases": ["Creating drop-down options", "Adding selectable items", "Defining choices in forms"],
          "additional_examples": [
            "<select><option value='1'>One</option><option value='2'>Two</option><option value='3'>Three</option></select>",
            "<select><option disabled>Select an option</option><option>Option A</option><option>Option B</option></select>"
          ]
        },
        "meta": {
          "title": "HTML option Tag - Drop-down Option",
          "description": "Learn how to define options in a drop-down list using the HTML <option> tag, including examples and use cases.",
          "keywords": "html, option, drop-down, list, tutorial"
        }
      },
      {
        "name": "output",
        "description": "Defines the result of a calculation.",
        "example": "<output name='result'>42</output>",
        "details": {
          "how_it_works": "The <output> tag is used to represent the result of a calculation or user action, typically displayed in a form.",
          "use_cases": ["Displaying calculation results", "Showing user action outcomes", "Providing dynamic output"],
          "additional_examples": [
            "<form oninput='result.value=parseInt(a.value)+parseInt(b.value)'><input type='range' id='a' value='50'> + <input type='number' id='b' value='50'> = <output name='result'>100</output></form>",
            "<output name='total'>Total: $100.00</output>"
          ]
        },
        "meta": {
          "title": "HTML output Tag - Calculation Result",
          "description": "Learn how to define the result of a calculation using the HTML <output> tag, including examples and use cases.",
          "keywords": "html, output, calculation, result, tutorial"
        }
      },
      {
        "name": "p",
        "description": "Defines a paragraph.",
        "example": "<p>This is a paragraph.</p>",
        "details": {
          "how_it_works": "The <p> tag is used to define a paragraph, a block of text separated from other blocks by vertical space.",
          "use_cases": ["Creating paragraphs", "Structuring text content", "Separating blocks of text"],
          "additional_examples": [
            "<p>This is the first paragraph.</p><p>This is the second paragraph.</p>",
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"
          ]
        },
        "meta": {
          "title": "HTML p Tag - Paragraph",
          "description": "Learn how to define paragraphs using the HTML <p> tag, including examples and use cases.",
          "keywords": "html, p, paragraph, text, tutorial"
        }
      },
      {
        "name": "param",
        "description": "Defines a parameter for an object.",
        "example": "<object data='movie.swf' type='application/x-shockwave-flash' width='400' height='300'><param name='autoplay' value='true'></object>",
        "details": {
          "how_it_works": "The <param> tag is used to define parameters for <object> elements, specifying the properties of the embedded object.",
          "use_cases": ["Setting object parameters", "Configuring multimedia elements", "Providing object attributes"],
          "additional_examples": [
            "<object data='movie.mp4' type='video/mp4' width='300' height='200'><param name='controls' value='true'></object>",
            "<object data='audio.mp3' type='audio/mp3' width='300' height='32'><param name='autostart' value='false'></object>"
          ]
        },
        "meta": {
          "title": "HTML param Tag - Object Parameter",
          "description": "Learn how to define parameters for objects using the HTML <param> tag, including examples and use cases.",
          "keywords": "html, param, parameter, object, tutorial"
        }
      },
      {
        "name": "picture",
        "description": "Defines a container for multiple image resources.",
        "example": "<picture><source srcset='image.webp' type='image/webp'><source srcset='image.jpg' type='image/jpeg'><img src='image.jpg' alt='Image description'></picture>",
        "details": {
          "how_it_works": "The <picture> tag is used to define a container for multiple image resources, allowing the browser to choose the best image based on device capabilities.",
          "use_cases": ["Responsive images", "Multiple image formats", "Providing fallback images"],
          "additional_examples": [
            "<picture><source srcset='small.jpg' media='(max-width: 600px)'><source srcset='large.jpg' media='(min-width: 601px)'><img src='default.jpg' alt='Responsive image'></picture>",
            "<picture><source srcset='image-2x.jpg' media='(min-resolution: 2dppx)'><img src='image.jpg' alt='High resolution image'></picture>"
          ]
        },
        "meta": {
          "title": "HTML picture Tag - Multiple Image Resources",
          "description": "Learn how to define containers for multiple image resources using the HTML <picture> tag, including examples and use cases.",
          "keywords": "html, picture, image, resources, tutorial"
        }
      },
      {
        "name": "pre",
        "description": "Defines preformatted text.",
        "example": "<pre>Preformatted text is displayed in a fixed-width font.</pre>",
        "details": {
          "how_it_works": "The <pre> tag is used to define preformatted text, which preserves both whitespace and line breaks.",
          "use_cases": ["Displaying code snippets", "Maintaining text formatting", "Showing fixed-width text"],
          "additional_examples": [
            "<pre>function example() {\n    console.log('Hello World');\n}</pre>",
            "<pre>    Indented text\n    More indented text</pre>"
          ]
        },
        "meta": {
          "title": "HTML pre Tag - Preformatted Text",
          "description": "Learn how to define preformatted text using the HTML <pre> tag, including examples and use cases.",
          "keywords": "html, pre, preformatted, text, tutorial"
        }
      },
      {
        "name": "progress",
        "description": "Represents the progress of a task.",
        "example": "<progress value='50' max='100'>50%</progress>",
        "details": {
          "how_it_works": "The <progress> tag is used to represent the progress of a task, such as a download or file upload.",
          "use_cases": ["Displaying task progress", "Showing download/upload status", "Indicating progress of operations"],
          "additional_examples": [
            "<progress value='30' max='100'>30%</progress>",
            "<progress max='100'></progress>"
          ]
        },
        "meta": {
          "title": "HTML progress Tag - Task Progress",
          "description": "Learn how to represent task progress using the HTML <progress> tag, including examples and use cases.",
          "keywords": "html, progress, task, tutorial"
        }
      },
      {
        "name": "q",
        "description": "Defines a short quotation.",
        "example": "<q>This is a short quote.</q>",
        "details": {
          "how_it_works": "The <q> tag is used to define a short quotation, typically rendered within quotation marks.",
          "use_cases": ["Creating inline quotes", "Highlighting short quotations", "Citing sources within text"],
          "additional_examples": [
            "<p>He said, <q>Hello World</q>.</p>",
            "<q>Coding is fun</q> is a common saying."
          ]
        },
        "meta": {
          "title": "HTML q Tag - Short Quotation",
          "description": "Learn how to define short quotations using the HTML <q> tag, including examples and use cases.",
          "keywords": "html, q, quotation, quote, tutorial"
        }
      },
      {
        "name": "rp",
        "description": "Defines what to show in browsers that do not support ruby annotations.",
        "example": "<ruby>漢 <rp>(</rp><rt>kan</rt><rp>)</rp></ruby>",
        "details": {
          "how_it_works": "The <rp> tag is used to provide fallback text for browsers that do not support the <ruby> element.",
          "use_cases": ["Enhancing ruby annotations", "Providing fallback text", "Improving browser compatibility"],
          "additional_examples": [
            "<ruby>漢 <rp>(</rp><rt>kan</rt><rp>)</rp></ruby>",
            "<ruby>文 <rp>(</rp><rt>mon</rt><rp>)</rp></ruby>"
          ]
        },
        "meta": {
          "title": "HTML rp Tag - Ruby Fallback",
          "description": "Learn how to define fallback text for ruby annotations using the HTML <rp> tag, including examples and use cases.",
          "keywords": "html, rp, ruby, fallback, tutorial"
        }
      },
      {
        "name": "rt",
        "description": "Defines an explanation/pronunciation of characters (for East Asian typography).",
        "example": "<ruby>漢 <rt>kan</rt></ruby>",
        "details": {
          "how_it_works": "The <rt> tag is used to define the pronunciation or explanation of characters, usually for East Asian typography.",
          "use_cases": ["Providing pronunciation guides", "Enhancing readability", "Explaining characters"],
          "additional_examples": [
            "<ruby>文 <rt>mon</rt></ruby>",
            "<ruby>字 <rt>ji</rt></ruby>"
          ]
        },
        "meta": {
          "title": "HTML rt Tag - Ruby Text",
          "description": "Learn how to define pronunciation or explanation text using the HTML <rt> tag, including examples and use cases.",
          "keywords": "html, rt, ruby, text, tutorial"
        }
      },
      {
        "name": "ruby",
        "description": "Defines a ruby annotation (for East Asian typography).",
        "example": "<ruby>漢 <rt>kan</rt></ruby>",
        "details": {
          "how_it_works": "The <ruby> tag is used to create a ruby annotation, which is a small extra text positioned above or to the right of the base text, typically used in East Asian typography.",
          "use_cases": ["Adding ruby annotations", "Providing pronunciation guides", "Enhancing text readability"],
          "additional_examples": [
            "<ruby>文 <rt>mon</rt></ruby>",
            "<ruby>字 <rt>ji</rt></ruby>"
          ]
        },
        "meta": {
          "title": "HTML ruby Tag - Ruby Annotation",
          "description": "Learn how to define ruby annotations using the HTML <ruby> tag, including examples and use cases.",
          "keywords": "html, ruby, annotation, tutorial"
        }
      },
      {
        "name": "s",
        "description": "Defines text that is no longer correct.",
        "example": "<s>Incorrect text</s>",
        "details": {
          "how_it_works": "The <s> tag is used to render text with a strikethrough, indicating that it is no longer correct or relevant.",
          "use_cases": ["Marking incorrect text", "Showing deletions", "Indicating outdated information"],
          "additional_examples": [
            "<p>This is <s>incorrect</s> correct.</p>",
            "<s>Old information</s>"
          ]
        },
        "meta": {
          "title": "HTML s Tag - Strikethrough Text",
          "description": "Learn how to render strikethrough text using the HTML <s> tag, including examples and use cases.",
          "keywords": "html, s, strikethrough, text, tutorial"
        }
      },
      {
        "name": "samp",
        "description": "Defines sample output from a computer program.",
        "example": "<samp>Sample output</samp>",
        "details": {
          "how_it_works": "The <samp> tag is used to define sample output from a computer program, typically rendered in a monospace font.",
          "use_cases": ["Displaying program output", "Highlighting sample text", "Showing example outputs"],
          "additional_examples": [
            "<samp>Error: File not found</samp>",
            "<samp>Output: 42</samp>"
          ]
        },
        "meta": {
          "title": "HTML samp Tag - Sample Output",
          "description": "Learn how to define sample output using the HTML <samp> tag, including examples and use cases.",
          "keywords": "html, samp, sample, output, tutorial"
        }
      },
      {
        "name": "script",
        "description": "Defines a client-side script.",
        "example": "<script>console.log('Hello, World!');</script>",
        "details": {
          "how_it_works": "The <script> tag is used to embed or reference executable code, usually JavaScript.",
          "use_cases": ["Adding JavaScript", "Embedding client-side scripts", "Linking to external scripts"],
          "additional_examples": [
            "<script src='script.js'></script>",
            "<script>document.getElementById('demo').innerHTML = 'Hello JavaScript!';</script>"
          ]
        },
        "meta": {
          "title": "HTML script Tag - Client-side Script",
          "description": "Learn how to embed or reference scripts using the HTML <script> tag, including examples and use cases.",
          "keywords": "html, script, javascript, tutorial"
        }
      },
      {
        "name": "section",
        "description": "Defines a section in a document.",
        "example": "<section><h2>Section Title</h2><p>Section content...</p></section>",
        "details": {
          "how_it_works": "The <section> tag defines a section in a document, grouping related content together.",
          "use_cases": ["Creating sections", "Grouping related content", "Structuring documents"],
          "additional_examples": [
            "<section><h2>Introduction</h2><p>This is the introduction section.</p></section>",
            "<section><h2>Features</h2><p>Feature details...</p></section>"
          ]
        },
        "meta": {
          "title": "HTML section Tag - Document Section",
          "description": "Learn how to define sections in a document using the HTML <section> tag, including examples and use cases.",
          "keywords": "html, section, document, tutorial"
        }
      },
      {
        "name": "select",
        "description": "Defines a drop-down list.",
        "example": "<select><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>",
        "details": {
          "how_it_works": "The <select> tag is used to create a drop-down list, containing <option> elements that represent the list items.",
          "use_cases": ["Creating drop-down menus", "Adding selectable options", "Building interactive forms"],
          "additional_examples": [
            "<select><option value='1'>One</option><option value='2'>Two</option><option value='3'>Three</option></select>",
            "<select><option disabled>Select an option</option><option>Option A</option><option>Option B</option></select>"
          ]
        },
        "meta": {
          "title": "HTML select Tag - Drop-down List",
          "description": "Learn how to define drop-down lists using the HTML <select> tag, including examples and use cases.",
          "keywords": "html, select, drop-down, list, tutorial"
        }
      },
      {
        "name": "small",
        "description": "Defines smaller text.",
        "example": "<small>This is small text.</small>",
        "details": {
          "how_it_works": "The <small> tag is used to render text in a smaller font size, typically for fine print or disclaimers.",
          "use_cases": ["Creating fine print", "Adding disclaimers", "Showing small text"],
          "additional_examples": [
            "<p>This is <small>small</small> text.</p>",
            "<small>Disclaimer: Terms and conditions apply.</small>"
          ]
        },
        "meta": {
          "title": "HTML small Tag - Smaller Text",
          "description": "Learn how to define smaller text using the HTML <small> tag, including examples and use cases.",
          "keywords": "html, small, text, tutorial"
        }
      },
      {
        "name": "source",
        "description": "Defines multiple media resources for media elements (<video> and <audio>).",
        "example": "<video controls><source src='movie.mp4' type='video/mp4'><source src='movie.ogg' type='video/ogg'>Your browser does not support the video tag.</video>",
        "details": {
          "how_it_works": "The <source> tag is used to specify multiple media resources for <video> and <audio> elements, allowing the browser to choose the best option.",
          "use_cases": ["Providing multiple media formats", "Adding video sources", "Including audio sources"],
          "additional_examples": [
            "<audio controls><source src='audio.mp3' type='audio/mpeg'><source src='audio.ogg' type='audio/ogg'>Your browser does not support the audio tag.</audio>",
            "<video controls><source src='movie.webm' type='video/webm'><source src='movie.mp4' type='video/mp4'>Your browser does not support the video tag.</video>"
          ]
        },
        "meta": {
          "title": "HTML source Tag - Media Sources",
          "description": "Learn how to define multiple media sources using the HTML <source> tag, including examples and use cases.",
          "keywords": "html, source, media, video, audio, tutorial"
        }
      },
      {
        "name": "span",
        "description": "Defines a section in a document.",
        "example": "<span>This is a span element.</span>",
        "details": {
          "how_it_works": "The <span> tag is used to group inline-elements in a document, often used to apply styles or scripts to a section of text.",
          "use_cases": ["Grouping inline elements", "Applying styles", "Targeting scripts"],
          "additional_examples": [
            "<span style='color:red;'>Red text</span>",
            "<span class='highlight'>Highlighted text</span>"
          ]
        },
        "meta": {
          "title": "HTML span Tag - Inline Section",
          "description": "Learn how to define inline sections using the HTML <span> tag, including examples and use cases.",
          "keywords": "html, span, inline, section, tutorial"
        }
      },
      {
        "name": "strong",
        "description": "Defines important text.",
        "example": "<strong>This is important text.</strong>",
        "details": {
          "how_it_works": "The <strong> tag is used to define text of strong importance, typically rendered in bold.",
          "use_cases": ["Highlighting important text", "Emphasizing key points", "Creating bold text"],
          "additional_examples": [
            "<p>This is <strong>very</strong> important.</p>",
            "<strong>Do not ignore this message.</strong>"
          ]
        },
        "meta": {
          "title": "HTML strong Tag - Important Text",
          "description": "Learn how to define important text using the HTML <strong> tag, including examples and use cases.",
          "keywords": "html, strong, important, text, tutorial"
        }
      },
      {
        "name": "style",
        "description": "Defines style information for a document.",
        "example": "<style>body {background-color: lightblue;}</style>",
        "details": {
          "how_it_works": "The <style> tag is used to define style information (CSS) for a document, which is usually placed in the <head> section.",
          "use_cases": ["Adding CSS", "Styling HTML elements", "Defining document styles"],
          "additional_examples": [
            "<style>h1 {color: red;}</style>",
            "<style>.highlight {background-color: yellow;}</style>"
          ]
        },
        "meta": {
          "title": "HTML style Tag - Style Information",
          "description": "Learn how to define style information using the HTML <style> tag, including examples and use cases.",
          "keywords": "html, style, css, tutorial"
        }
      },
      {
        "name": "sub",
        "description": "Defines subscripted text.",
        "example": "H<sub>2</sub>O",
        "details": {
          "how_it_works": "The <sub> tag is used to define subscripted text, typically rendered with a lowered baseline.",
          "use_cases": ["Creating chemical formulas", "Displaying mathematical notations", "Formatting footnotes"],
          "additional_examples": [
            "E = mc<sup>2</sup>",
            "Footnote<sub>1</sub>"
          ]
        },
        "meta": {
          "title": "HTML sub Tag - Subscripted Text",
          "description": "Learn how to define subscripted text using the HTML <sub> tag, including examples and use cases.",
          "keywords": "html, sub, subscript, text, tutorial"
        }
      },
      {
        "name": "summary",
        "description": "Defines a visible heading for a <details> element.",
        "example": "<details><summary>More info</summary><p>Details go here...</p></details>",
        "details": {
          "how_it_works": "The <summary> tag is used to define a visible heading for a <details> element, which the user can click to view or hide the details.",
          "use_cases": ["Creating collapsible sections", "Providing clickable headings", "Hiding and showing content"],
          "additional_examples": [
            "<details><summary>Click to expand</summary><p>Hidden details...</p></details>",
            "<details><summary>Read more</summary><p>Additional information...</p></details>"
          ]
        },
        "meta": {
          "title": "HTML summary Tag - Collapsible Heading",
          "description": "Learn how to define clickable headings for collapsible sections using the HTML <summary> tag, including examples and use cases.",
          "keywords": "html, summary, collapsible, heading, tutorial"
        }
      },
      {
        "name": "sup",
        "description": "Defines superscripted text.",
        "example": "x<sup>2</sup>",
        "details": {
          "how_it_works": "The <sup> tag is used to define superscripted text, typically rendered with a raised baseline.",
          "use_cases": ["Creating mathematical notations", "Displaying exponents", "Formatting footnotes"],
          "additional_examples": [
            "E = mc<sup>2</sup>",
            "Footnote<sup>1</sup>"
          ]
        },
        "meta": {
          "title": "HTML sup Tag - Superscripted Text",
          "description": "Learn how to define superscripted text using the HTML <sup> tag, including examples and use cases.",
          "keywords": "html, sup, superscript, text, tutorial"
        }
      },
      {
        "name": "svg",
        "description": "Defines a container for SVG graphics.",
        "example": "<svg width='100' height='100'><circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red'></circle></svg>",
        "details": {
          "how_it_works": "The <svg> tag is used to define a container for Scalable Vector Graphics (SVG), which allows for resolution-independent images and shapes.",
          "use_cases": ["Creating vector graphics", "Drawing shapes", "Embedding scalable images"],
          "additional_examples": [
            "<svg width='200' height='200'><rect width='100' height='100' stroke='blue' fill='green'></rect></svg>",
            "<svg width='300' height='200'><line x1='0' y1='0' x2='200' y2='200' stroke='black'></line></svg>"
          ]
        },
        "meta": {
          "title": "HTML svg Tag - SVG Graphics",
          "description": "Learn how to define containers for SVG graphics using the HTML <svg> tag, including examples and use cases.",
          "keywords": "html, svg, vector, graphics, tutorial"
        }
      },
      {
        "name": "table",
        "description": "Defines a table.",
        "example": "<table><tr><th>Header</th><th>Header</th></tr><tr><td>Data</td><td>Data</td></tr></table>",
        "details": {
          "how_it_works": "The <table> tag is used to create a table, containing rows (<tr>), header cells (<th>), and data cells (<td>).",
          "use_cases": ["Creating data tables", "Displaying tabular information", "Organizing data"],
          "additional_examples": [
            "<table><caption>Table Title</caption><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Cell 1</td><td>Cell 2</td></tr></table>",
            "<table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Data</td></tr></tbody></table>"
          ]
        },
        "meta": {
          "title": "HTML table Tag - Table",
          "description": "Learn how to define tables using the HTML <table> tag, including examples and use cases.",
          "keywords": "html, table, data, tutorial"
        }
      },
      {
        "name": "tbody",
        "description": "Groups the body content in a table.",
        "example": "<table><tbody><tr><td>Data</td></tr></tbody></table>",
        "details": {
          "how_it_works": "The <tbody> tag is used to group the body content in a table, improving structure and organization.",
          "use_cases": ["Grouping table body content", "Structuring tables", "Organizing table rows"],
          "additional_examples": [
            "<table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Data</td></tr></tbody><tfoot><tr><td>Footer</td></tr></tfoot></table>",
            "<table><tbody><tr><td>Row 1</td></tr><tr><td>Row 2</td></tr></tbody></table>"
          ]
        },
        "meta": {
          "title": "HTML tbody Tag - Table Body",
          "description": "Learn how to group table body content using the HTML <tbody> tag, including examples and use cases.",
          "keywords": "html, tbody, table, body, tutorial"
        }
      },
      {
        "name": "td",
        "description": "Defines a cell in a table.",
        "example": "<table><tr><td>Cell data</td></tr></table>",
        "details": {
          "how_it_works": "The <td> tag is used to define a standard cell in a table, containing data.",
          "use_cases": ["Creating table cells", "Adding data to tables", "Structuring table content"],
          "additional_examples": [
            "<table><tr><td>Cell 1</td><td>Cell 2</td></tr></table>",
            "<table><tr><td rowspan='2'>Merged Cell</td><td>Cell</td></tr><tr><td>Cell</td></tr></table>"
          ]
        },
        "meta": {
          "title": "HTML td Tag - Table Cell",
          "description": "Learn how to define table cells using the HTML <td> tag, including examples and use cases.",
          "keywords": "html, td, table, cell, tutorial"
        }
      },
      {
        "name": "template",
        "description": "Defines a container for content that should be hidden when the page loads.",
        "example": "<template><p>This is hidden content.</p></template>",
        "details": {
          "how_it_works": "The <template> tag is used to define a container for HTML content that should be hidden when the page loads, which can be rendered later using JavaScript.",
          "use_cases": ["Defining reusable content", "Hiding content on load", "Storing template code"],
          "additional_examples": [
            "<template id='myTemplate'><p>Template content</p></template>",
            "<template><h1>Hidden Title</h1><p>Hidden paragraph</p></template>"
          ]
        },
        "meta": {
          "title": "HTML template Tag - Hidden Content",
          "description": "Learn how to define hidden content using the HTML <template> tag, including examples and use cases.",
          "keywords": "html, template, hidden, content, tutorial"
        }
      },
      {
        "name": "textarea",
        "description": "Defines a multiline input control (text area).",
        "example": "<textarea rows='4' cols='50'>This is a text area.</textarea>",
        "details": {
          "how_it_works": "The <textarea> tag is used to create a multiline input control, allowing users to enter text over multiple lines.",
          "use_cases": ["Creating text areas", "Allowing multiline input", "Building form controls"],
          "additional_examples": [
            "<textarea placeholder='Enter your comment here'></textarea>",
            "<textarea maxlength='500'>Text content</textarea>"
          ]
        },
        "meta": {
          "title": "HTML textarea Tag - Multiline Input",
          "description": "Learn how to define multiline input controls using the HTML <textarea> tag, including examples and use cases.",
          "keywords": "html, textarea, multiline, input, tutorial"
        }
      },
      {
        "name": "tfoot",
        "description": "Groups the footer content in a table.",
        "example": "<table><tfoot><tr><td>Footer data</td></tr></tfoot></table>",
        "details": {
          "how_it_works": "The <tfoot> tag is used to group the footer content in a table, improving structure and organization.",
          "use_cases": ["Grouping table footer content", "Structuring tables", "Organizing table rows"],
          "additional_examples": [
            "<table><thead><tr><th>Header</th></tr></thead><tbody><tr><td>Data</td></tr></tbody><tfoot><tr><td>Footer</td></tr></tfoot></table>",
            "<table><tfoot><tr><td>Footer row 1</td></tr><tr><td>Footer row 2</td></tr></tfoot></table>"
          ]
        },
        "meta": {
          "title": "HTML tfoot Tag - Table Footer",
          "description": "Learn how to group table footer content using the HTML <tfoot> tag, including examples and use cases.",
          "keywords": "html, tfoot, table, footer, tutorial"
        }
      },
      {
        "name": "th",
        "description": "Defines a header cell in a table.",
        "example": "<table><tr><th>Header</th></tr></table>",
        "details": {
          "how_it_works": "The <th> tag is used to define a header cell in a table, which is usually rendered in bold and centered.",
          "use_cases": ["Creating table headers", "Adding column headers", "Defining header cells"],
          "additional_examples": [
            "<table><tr><th>Column 1</th><th>Column 2</th></tr></table>",
            "<table><tr><th rowspan='2'>Merged Header</th><th>Header</th></tr><tr><th>Header</th></tr></table>"
          ]
        },
        "meta": {
          "title": "HTML th Tag - Table Header",
          "description": "Learn how to define table headers using the HTML <th> tag, including examples and use cases.",
          "keywords": "html, th, table, header, tutorial"
        }
      },
      {
        "name": "thead",
        "description": "Groups the header content in a table.",
        "example": "<table><thead><tr><th>Header</th></tr></thead></table>",
        "details": {
          "how_it_works": "The <thead> tag is used to group the header content in a table, improving structure and organization.",
          "use_cases": ["Grouping table header content", "Structuring tables", "Organizing table rows"],
          "additional_examples": [
            "<table><thead><tr><th>Header 1</th><th>Header 2</th></tr></thead><tbody><tr><td>Data</td></tr></tbody></table>",
            "<table><thead><tr><th>Header row 1</th><th>Header row 2</th></tr></thead></table>"
          ]
        },
        "meta": {
          "title": "HTML thead Tag - Table Header",
          "description": "Learn how to group table header content using the HTML <thead> tag, including examples and use cases.",
          "keywords": "html, thead, table, header, tutorial"
        }
      },
      {
        "name": "time",
        "description": "Defines a specific time (or datetime).",
        "example": "<time datetime='2023-01-01'>January 1, 2023</time>",
        "details": {
          "how_it_works": "The <time> tag is used to define a specific time or datetime, which can be useful for events, deadlines, or dates.",
          "use_cases": ["Marking dates", "Defining times", "Specifying event times"],
          "additional_examples": [
            "<time datetime='2023-06-30T12:00'>June 30, 2023 at noon</time>",
            "<time datetime='2023-12-25'>Christmas Day</time>"
          ]
        },
        "meta": {
          "title": "HTML time Tag - Time/Datetime",
          "description": "Learn how to define specific times and dates using the HTML <time> tag, including examples and use cases.",
          "keywords": "html, time, datetime, date, tutorial"
        }
      },
      {
        "name": "title",
        "description": "Defines a title for the document.",
        "example": "<title>Document Title</title>",
        "details": {
          "how_it_works": "The <title> tag is used to define the title of an HTML document, which appears in the browser's title bar or tab.",
          "use_cases": ["Setting document titles", "Defining page titles", "Improving SEO"],
          "additional_examples": [
            "<title>My Awesome Website</title>",
            "<title>Page Title</title>"
          ]
        },
        "meta": {
          "title": "HTML title Tag - Document Title",
          "description": "Learn how to define document titles using the HTML <title> tag, including examples and use cases.",
          "keywords": "html, title, document, page, tutorial"
        }
      },
      {
        "name": "tr",
        "description": "Defines a row in a table.",
        "example": "<table><tr><td>Row data</td></tr></table>",
        "details": {
          "how_it_works": "The <tr> tag is used to define a row in a table, containing <th> or <td> elements.",
          "use_cases": ["Creating table rows", "Adding rows to tables", "Structuring table content"],
          "additional_examples": [
            "<table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Data 1</td><td>Data 2</td></tr></table>",
            "<table><tr><td>Row 1</td><td>Row 2</td></tr></table>"
          ]
        },
        "meta": {
          "title": "HTML tr Tag - Table Row",
          "description": "Learn how to define table rows using the HTML <tr> tag, including examples and use cases.",
          "keywords": "html, tr, table, row, tutorial"
        }
      },
      {
        "name": "track",
        "description": "Defines text tracks for media elements (<video> and <audio>).",
        "example": "<video controls><track src='subtitles.vtt' kind='subtitles' srclang='en' label='English'></video>",
        "details": {
          "how_it_works": "The <track> tag is used to specify text tracks for <video> and <audio> elements, such as subtitles, captions, or descriptions.",
          "use_cases": ["Adding subtitles", "Including captions", "Providing descriptions"],
          "additional_examples": [
            "<audio controls><track src='audio-description.vtt' kind='descriptions' srclang='en' label='English'></audio>",
            "<video controls><track src='captions.vtt' kind='captions' srclang='en' label='English'></video>"
          ]
        },
        "meta": {
          "title": "HTML track Tag - Media Tracks",
          "description": "Learn how to define text tracks for media elements using the HTML <track> tag, including examples and use cases.",
          "keywords": "html, track, media, subtitles, captions, tutorial"
        }
      },
      {
        "name": "tt",
        "description": "Not supported in HTML5. Use CSS instead. Defines teletype text.",
        "example": "<tt>Teletype text</tt>",
        "details": {
          "how_it_works": "The <tt> tag was used to define teletype text, typically rendered in a monospace font. It is no longer supported in HTML5.",
          "use_cases": ["Creating teletype text", "Defining monospace text", "Displaying code snippets"],
          "additional_examples": [
            "<tt>Code example</tt>",
            "<tt>Sample text</tt>"
          ]
        },
        "meta": {
          "title": "HTML tt Tag - Teletype Text",
          "description": "Learn how to define teletype text using the HTML <tt> tag, including examples and use cases. Note that this tag is not supported in HTML5.",
          "keywords": "html, tt, teletype, text, tutorial"
        }
      },
      {
        "name": "u",
        "description": "Defines some text that is unarticulated and styled differently from normal text.",
        "example": "<u>Underlined text</u>",
        "details": {
          "how_it_works": "The <u> tag is used to define text that should be stylistically different from normal text, usually rendered as underlined.",
          "use_cases": ["Creating underlined text", "Highlighting text", "Styling differently"],
          "additional_examples": [
            "<p>This is <u>underlined</u> text.</p>",
            "<u>Important</u> information."
          ]
        },
        "meta": {
          "title": "HTML u Tag - Underlined Text",
          "description": "Learn how to define underlined text using the HTML <u> tag, including examples and use cases.",
          "keywords": "html, u, underlined, text, tutorial"
        }
      },
      {
        "name": "ul",
        "description": "Defines an unordered list.",
        "example": "<ul><li>First item</li><li>Second item</li><li>Third item</li></ul>",
        "details": {
          "how_it_works": "The <ul> tag is used to create an unordered list, containing <li> elements that represent the list items.",
          "use_cases": ["Creating unordered lists", "Listing items", "Organizing content"],
          "additional_examples": [
            "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>",
            "<ul><li>First</li><li>Second</li><li>Third</li></ul>"
          ]
        },
        "meta": {
          "title": "HTML ul Tag - Unordered List",
          "description": "Learn how to define unordered lists using the HTML <ul> tag, including examples and use cases.",
          "keywords": "html, ul, unordered, list, tutorial"
        }
      },
      {
        "name": "var",
        "description": "Defines a variable.",
        "example": "<var>x</var> = 5;",
        "details": {
          "how_it_works": "The <var> tag is used to define a variable in programming or in a mathematical expression, typically rendered in italic.",
          "use_cases": ["Creating variables", "Defining programming elements", "Showing mathematical expressions"],
          "additional_examples": [
            "<p>The value of <var>pi</var> is approximately 3.14.</p>",
            "<code>let <var>y</var> = x + 2;</code>"
          ]
        },
        "meta": {
          "title": "HTML var Tag - Variable",
          "description": "Learn how to define variables using the HTML <var> tag, including examples and use cases.",
          "keywords": "html, var, variable, tutorial"
        }
      },
      {
        "name": "video",
        "description": "Defines embedded video content.",
        "example": "<video controls><source src='movie.mp4' type='video/mp4'>Your browser does not support the video tag.</video>",
        "details": {
          "how_it_works": "The <video> tag is used to embed video content in an HTML page, allowing for controls like play, pause, and volume.",
          "use_cases": ["Embedding videos", "Including multimedia content", "Adding video files"],
          "additional_examples": [
            "<video controls><source src='sample.webm' type='video/webm'>Your browser does not support the video tag.</video>",
            "<video controls autoplay muted loop><source src='background.mp4' type='video/mp4'>Your browser does not support the video tag.</video>"
          ]
        },
        "meta": {
          "title": "HTML video Tag - Embedded Video",
          "description": "Learn how to embed video content using the HTML <video> tag, including examples and use cases.",
          "keywords": "html, video, embedded, tutorial"
        }
      },
      {
        "name": "wbr",
        "description": "Defines a possible line-break.",
        "example": "This is a longword<wbr>that may need to break.",
        "details": {
          "how_it_works": "The <wbr> tag is used to define a possible line-break within a word, suggesting a location for the browser to break the text.",
          "use_cases": ["Adding line-break opportunities", "Improving text readability", "Handling long words"],
          "additional_examples": [
            "Supercalifragilisticexpialidocious<wbr>is a long word.",
            "antidisestablishmentarian<wbr>ism is a long term."
          ]
        },
        "meta": {
          "title": "HTML wbr Tag - Possible Line-break",
          "description": "Learn how to define possible line-breaks using the HTML <wbr> tag, including examples and use cases.",
          "keywords": "html, wbr, line-break, tutorial"
        }
      }
    ]
  }

  
  module.exports = HTMLSyntax;