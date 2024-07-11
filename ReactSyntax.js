const ReactSyntax = {
    "components": [
      {
        "name": "Functional Component",
        "usage": "const MyComponent = () => { return <div>Hello, world!</div>; };",
        "example": "const MyComponent = () => { return <div>Hello, world!</div>; };",
        "description": "Defines a functional component in React."
      },
      {
        "name": "Class Component",
        "usage": "class MyComponent extends React.Component { render() { return <div>Hello, world!</div>; } }",
        "example": "class MyComponent extends React.Component { render() { return <div>Hello, world!</div>; } }",
        "description": "Defines a class component in React."
      }
    ],
    "props": [
      {
        "name": "Props",
        "usage": "<MyComponent name=\"John\" />",
        "example": "<MyComponent name=\"John\" />",
        "description": "Passes data from a parent component to a child component."
      }
    ],
    "events": [
      {
        "name": "onClick",
        "usage": "<button onClick={handleClick}>Click Me</button>",
        "example": "<button onClick={handleClick}>Click Me</button>",
        "description": "Defines an event handler for the 'click' event."
      },
      {
        "name": "onChange",
        "usage": "<input type=\"text\" onChange={handleChange} />",
        "example": "<input type=\"text\" onChange={handleChange} />",
        "description": "Defines an event handler for the 'change' event."
      },
      {
        "name": "onSubmit",
        "usage": "<form onSubmit={handleSubmit}>...</form>",
        "example": "<form onSubmit={handleSubmit}>...</form>",
        "description": "Defines an event handler for the 'submit' event."
      }
    ]
  }

  module.exports = ReactSyntax;