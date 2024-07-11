const SoliditySyntax = {
    "methods": [
      {
        "name": "transfer",
        "usage": "address.transfer(uint256 amount)",
        "example": "// Solidity smart contract function\nfunction sendEther(address payable _recipient) public payable {\n    _recipient.transfer(msg.value);\n}",
        "description": "Sends a specified amount of Ether to the address."
      },
      {
        "name": "send",
        "usage": "address.send(uint256 amount)",
        "example": "// Solidity smart contract function\nfunction sendEther(address payable _recipient) public payable {\n    _recipient.send(msg.value);\n}",
        "description": "Sends a specified amount of Ether to the address. Returns true on success and false on failure."
      },
      {
        "name": "call",
        "usage": "address.call(bytes memory data)",
        "example": "// Solidity smart contract function\nfunction callContract(address _contract, bytes memory _data) public returns (bool) {\n    (bool success, ) = _contract.call.value(0)(_data);\n    return success;\n}",
        "description": "Calls another contract's function."
      },
      {
        "name": "delegatecall",
        "usage": "address.delegatecall(bytes memory data)",
        "example": "// Solidity smart contract function\nfunction delegateCall(address _contract, bytes memory _data) public returns (bool) {\n    (bool success, ) = _contract.delegatecall(_data);\n    return success;\n}",
        "description": "Performs a delegatecall to another contract."
      },
      {
        "name": "transferFrom",
        "usage": "ERC20.transferFrom(address sender, address recipient, uint256 amount)",
        "example": "// ERC20 token transfer function\nfunction transferFrom(address _sender, address _recipient, uint256 _amount) public {\n    require(_amount <= allowance[_sender][msg.sender], 'Insufficient allowance');\n    _transfer(_sender, _recipient, _amount);\n    allowance[_sender][msg.sender] -= _amount;\n}",
        "description": "Transfers tokens from one address to another, deducting the amount from the sender's allowance."
      },
      {
        "name": "approve",
        "usage": "ERC20.approve(address spender, uint256 amount)",
        "example": "// ERC20 token approve function\nfunction approve(address _spender, uint256 _amount) public returns (bool) {\n    allowance[msg.sender][_spender] = _amount;\n    emit Approval(msg.sender, _spender, _amount);\n    return true;\n}",
        "description": "Sets the allowance for another address, allowing them to transfer tokens on behalf of the sender."
      }
    ],
    "functions": [
      {
        "name": "keccak256",
        "usage": "keccak256(bytes memory data) pure returns (bytes32)",
        "example": "// Solidity function to compute keccak256 hash\nfunction hash(string memory _data) public pure returns (bytes32) {\n    return keccak256(abi.encodePacked(_data));\n}",
        "description": "Computes the Keccak-256 hash of the input data."
      },
      {
        "name": "sha256",
        "usage": "sha256(bytes memory data) pure returns (bytes32)",
        "example": "// Solidity function to compute SHA-256 hash\nfunction hash(string memory _data) public pure returns (bytes32) {\n    return sha256(abi.encodePacked(_data));\n}",
        "description": "Computes the SHA-256 hash of the input data."
      },
      {
        "name": "ecrecover",
        "usage": "ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) pure returns (address)",
        "example": "// Solidity function to recover signer from signature\nfunction recoverSigner(bytes32 _hash, uint8 _v, bytes32 _r, bytes32 _s) public pure returns (address) {\n    return ecrecover(_hash, _v, _r, _s);\n}",
        "description": "Recovers the address associated with the given signature."
      },
      {
        "name": "blockhash",
        "usage": "blockhash(uint256 blockNumber) view returns (bytes32)",
        "example": "// Solidity function to get block hash\nfunction getBlockHash(uint256 _blockNumber) public view returns (bytes32) {\n    return blockhash(_blockNumber);\n}",
        "description": "Returns the hash of the given block - only works for 256 most recent blocks, excluding current."
      }
    ],
    "properties": [
      {
        "name": "balance",
        "usage": "address.balance",
        "example": "// Solidity smart contract function\nfunction getBalance(address _address) public view returns (uint256) {\n    return _address.balance;\n}",
        "description": "Returns the balance of the specified address."
      },
      {
        "name": "allowance",
        "usage": "ERC20.allowance(address owner, address spender)",
        "example": "// ERC20 token allowance function\nfunction getAllowance(address _owner, address _spender) public view returns (uint256) {\n    return allowance[_owner][_spender];\n}",
        "description": "Returns the amount of tokens approved for the spender to transfer on behalf of the owner."
      }
    ],
    "soliditySyntax": [
    {
      "name": "pragma",
      "description": "Specifies the compiler version to be used for the contract.",
      "example": "pragma solidity ^0.8.0;",
      "details": {
        "how_it_works": "The 'pragma' directive specifies the version of the Solidity compiler that should be used to compile the contract. The '^' symbol indicates compatibility with versions greater than or equal to the specified version, but less than the next major version.",
        "use_cases": ["Ensuring compatibility with specific compiler versions"],
        "additional_examples": [
          "pragma solidity >=0.7.0 <0.9.0;",
          "pragma solidity 0.8.0;"
        ]
      },
      "meta": {
        "title": "Solidity pragma Directive",
        "description": "Learn how to specify the compiler version using the 'pragma' directive in Solidity.",
        "keywords": "solidity, pragma, compiler version, directive"
      }
    },
    {
      "name": "contract",
      "description": "Defines a new contract.",
      "example": "contract MyContract { }",
      "details": {
        "how_it_works": "The 'contract' keyword defines a new contract in Solidity. A contract is a collection of code (functions) and data (state variables) that resides at a specific address on the Ethereum blockchain.",
        "use_cases": ["Creating smart contracts", "Defining contract structure"],
        "additional_examples": [
          "contract Token { string public name; }",
          "contract SimpleStorage { uint public storedData; }"
        ]
      },
      "meta": {
        "title": "Solidity contract Keyword",
        "description": "Learn how to define new contracts using the 'contract' keyword in Solidity.",
        "keywords": "solidity, contract, keyword, smart contract"
      }
    },
    {
      "name": "import",
      "description": "Imports other Solidity files into the current file.",
      "example": "import './MyLibrary.sol';",
      "details": {
        "how_it_works": "The 'import' statement is used to include other Solidity files into the current file, allowing code reuse and modularization.",
        "use_cases": ["Reusing code", "Modularizing contracts"],
        "additional_examples": [
          "import '@openzeppelin/contracts/token/ERC20/ERC20.sol';",
          "import './utils/Math.sol';"
        ]
      },
      "meta": {
        "title": "Solidity import Statement",
        "description": "Learn how to import other Solidity files using the 'import' statement.",
        "keywords": "solidity, import, statement, modularization"
      }
    },
    {
      "name": "state variables",
      "description": "Variables that store the state of the contract.",
      "example": "uint public count;",
      "details": {
        "how_it_works": "State variables are permanently stored in contract storage. They are used to hold the state of the contract and can be accessed and modified by functions within the contract.",
        "use_cases": ["Storing contract state", "Holding data"],
        "additional_examples": [
          "address public owner;",
          "bool public isActive;"
        ]
      },
      "meta": {
        "title": "Solidity State Variables",
        "description": "Learn how to use state variables in Solidity to store contract state.",
        "keywords": "solidity, state variables, contract state"
      }
    },
    {
      "name": "functions",
      "description": "Blocks of code that can be called within the contract or externally.",
      "example": "function set(uint x) public { count = x; }",
      "details": {
        "how_it_works": "Functions are blocks of code that can be executed within the contract. They can modify the contract's state, perform calculations, and call other functions. Functions can have visibility specifiers to control their accessibility.",
        "use_cases": ["Modifying state", "Performing calculations", "Calling other functions"],
        "additional_examples": [
          "function get() public view returns (uint) { return count; }",
          "function increment() public { count += 1; }"
        ]
      },
      "meta": {
        "title": "Solidity Functions",
        "description": "Learn how to define and use functions in Solidity to perform operations and modify contract state.",
        "keywords": "solidity, functions, contract operations"
      }
    },
    {
      "name": "modifiers",
      "description": "Reusable pieces of code that can be used to modify the behavior of functions.",
      "example": "modifier onlyOwner() { require(msg.sender == owner); _; }",
      "details": {
        "how_it_works": "Modifiers are reusable pieces of code that can be used to modify the behavior of functions. They are typically used to enforce access control and other preconditions.",
        "use_cases": ["Access control", "Enforcing preconditions"],
        "additional_examples": [
          "modifier validAddress(address _addr) { require(_addr != address(0)); _; }",
          "modifier onlyWhenActive() { require(isActive); _; }"
        ]
      },
      "meta": {
        "title": "Solidity Modifiers",
        "description": "Learn how to use modifiers in Solidity to modify the behavior of functions and enforce access control.",
        "keywords": "solidity, modifiers, function behavior"
      }
    },
    {
      "name": "events",
      "description": "Used to log information on the blockchain.",
      "example": "event Transfer(address indexed from, address indexed to, uint value);",
      "details": {
        "how_it_works": "Events are used to log information on the blockchain, which can be accessed using the transaction receipt. They are typically used to notify external applications of changes within the contract.",
        "use_cases": ["Logging information", "Notifying external applications"],
        "additional_examples": [
          "event Approval(address indexed owner, address indexed spender, uint value);",
          "event Deposit(address indexed account, uint amount);"
        ]
      },
      "meta": {
        "title": "Solidity Events",
        "description": "Learn how to use events in Solidity to log information and notify external applications.",
        "keywords": "solidity, events, logging, blockchain"
      }
    },
    {
      "name": "constructor",
      "description": "A special function that is executed once when the contract is deployed.",
      "example": "constructor() { owner = msg.sender; }",
      "details": {
        "how_it_works": "The constructor is a special function that is executed only once when the contract is deployed. It is typically used to initialize state variables and perform any setup required for the contract.",
        "use_cases": ["Initializing state variables", "Setting up the contract"],
        "additional_examples": [
          "constructor(string memory _name) { name = _name; }",
          "constructor(uint _initialSupply) { totalSupply = _initialSupply; }"
        ]
      },
      "meta": {
        "title": "Solidity Constructor",
        "description": "Learn how to use the constructor in Solidity to initialize state variables and set up the contract during deployment.",
        "keywords": "solidity, constructor, initialization"
      }
    },
    {
      "name": "inheritance",
      "description": "Allows a contract to inherit properties and methods from another contract.",
      "example": "contract Child is Parent { }",
      "details": {
        "how_it_works": "Inheritance allows a contract to inherit properties and methods from a base contract, promoting code reuse and modularity. The 'is' keyword is used to specify inheritance.",
        "use_cases": ["Reusing code", "Creating modular contracts"],
        "additional_examples": [
          "contract ERC20Token is ERC20 { }",
          "contract MyToken is ERC20, Ownable { }"
        ]
      },
      "meta": {
        "title": "Solidity Inheritance",
        "description": "Learn how to use inheritance in Solidity to reuse code and create modular contracts.",
        "keywords": "solidity, inheritance, modularity"
      }
    },
    {
      "name": "library",
      "description": "Defines a reusable library of functions.",
      "example": "library SafeMath { function add(uint a, uint b) internal pure returns (uint) { return a + b; } }",
      "details": {
        "how_it_works": "Libraries are collections of reusable functions that can be used by contracts. They help promote code reuse and modularity.",
        "use_cases": ["Reusing code", "Creating utility functions"],
        "additional_examples": [
          "library ArrayUtils { function find(uint[] storage array, uint value) internal view returns (uint) { } }",
          "library Math { function max(uint a, uint b) internal pure returns (uint) { return a >= b ? a : b; } }"
        ]
      },
      "meta": {
        "title": "Solidity Library",
        "description": "Learn how to define and use libraries in Solidity to create reusable collections of functions.",
        "keywords": "solidity, library, reusable functions"
      }
    },
    {
      "name": "interface",
      "description": "Defines a contract interface with function signatures but no implementations.",
      "example": "interface IERC20 { function totalSupply() external view returns (uint); }",
      "details": {
        "how_it_works": "Interfaces define the function signatures without providing implementations. They are used to specify a contract's external interface.",
        "use_cases": ["Defining external interfaces", "Creating standard interfaces"],
        "additional_examples": [
          "interface IUniswapV2Factory { function createPair(address tokenA, address tokenB) external returns (address pair); }",
          "interface IOracle { function getPrice() external view returns (uint); }"
        ]
      },
      "meta": {
        "title": "Solidity Interface",
        "description": "Learn how to define and use interfaces in Solidity to specify external contract interfaces.",
        "keywords": "solidity, interface, external interface"
      }
    },
    {
      "name": "mapping",
      "description": "Defines a key-value pair data structure.",
      "example": "mapping(address => uint) public balances;",
      "details": {
        "how_it_works": "Mappings are key-value pairs that store and retrieve data. They are typically used for associative arrays and lookup tables.",
        "use_cases": ["Storing key-value pairs", "Creating lookup tables"],
        "additional_examples": [
          "mapping(uint => string) public idToName;",
          "mapping(bytes32 => bool) public approvals;"
        ]
      },
      "meta": {
        "title": "Solidity Mapping",
        "description": "Learn how to use mappings in Solidity to define key-value pair data structures.",
        "keywords": "solidity, mapping, key-value pair"
      }
    },
    {
      "name": "struct",
      "description": "Defines a custom data structure.",
      "example": "struct User { uint id; string name; }",
      "details": {
        "how_it_works": "Structs define custom data structures that can group multiple variables into a single unit.",
        "use_cases": ["Grouping related data", "Creating complex data structures"],
        "additional_examples": [
          "struct Token { uint id; string symbol; }",
          "struct Order { uint id; address buyer; uint amount; }"
        ]
      },
      "meta": {
        "title": "Solidity Struct",
        "description": "Learn how to define and use structs in Solidity to create custom data structures.",
        "keywords": "solidity, struct, custom data structure"
      }
    },
    {
      "name": "enum",
      "description": "Defines a custom enumerated type.",
      "example": "enum Status { Pending, Active, Inactive }",
      "details": {
        "how_it_works": "Enums define custom enumerated types with a finite set of constant values. They are useful for representing states or options.",
        "use_cases": ["Defining states", "Representing options"],
        "additional_examples": [
          "enum OrderStatus { Pending, Shipped, Delivered, Cancelled }",
          "enum UserRole { Admin, User, Guest }"
        ]
      },
      "meta": {
        "title": "Solidity Enum",
        "description": "Learn how to define and use enums in Solidity to create custom enumerated types.",
        "keywords": "solidity, enum, enumerated type"
      }
    },
    {
      "name": "fallback function",
      "description": "A special function that is executed when no other function matches the given function identifier.",
      "example": "fallback() external payable { }",
      "details": {
        "how_it_works": "The fallback function is executed when no other function matches the given function identifier. It is typically used to handle plain Ether transfers to the contract.",
        "use_cases": ["Handling plain Ether transfers", "Logging unrecognized function calls"],
        "additional_examples": [
          "fallback() external { revert('Fallback called'); }",
          "fallback() external payable { emit Received(msg.sender, msg.value); }"
        ]
      },
      "meta": {
        "title": "Solidity Fallback Function",
        "description": "Learn how to define and use the fallback function in Solidity to handle unmatched function calls and Ether transfers.",
        "keywords": "solidity, fallback function, Ether transfer"
      }
    },
    {
      "name": "receive function",
      "description": "A special function that is executed when the contract receives plain Ether transfers.",
      "example": "receive() external payable { }",
      "details": {
        "how_it_works": "The receive function is executed when the contract receives plain Ether transfers and no data is sent. It is used to accept Ether transfers.",
        "use_cases": ["Accepting Ether transfers", "Handling direct Ether payments"],
        "additional_examples": [
          "receive() external payable { emit Received(msg.sender, msg.value); }",
          "receive() external payable { totalReceived += msg.value; }"
        ]
      },
      "meta": {
        "title": "Solidity Receive Function",
        "description": "Learn how to define and use the receive function in Solidity to handle plain Ether transfers to the contract.",
        "keywords": "solidity, receive function, Ether transfer"
      }
    },
    {
      "name": "error handling",
      "description": "Mechanisms to handle errors and exceptions.",
      "example": "require(condition, 'Error message');",
      "details": {
        "how_it_works": "Solidity provides mechanisms for error handling, such as 'require', 'assert', and 'revert'. These are used to check conditions and revert the transaction if the conditions are not met.",
        "use_cases": ["Checking conditions", "Reverting transactions on errors"],
        "additional_examples": [
          "assert(condition);",
          "revert('Error message');"
        ]
      },
      "meta": {
        "title": "Solidity Error Handling",
        "description": "Learn how to handle errors and exceptions in Solidity using 'require', 'assert', and 'revert'.",
        "keywords": "solidity, error handling, require, assert, revert"
      }
    },
    {
      "name": "payable",
      "description": "A modifier that allows a function to receive Ether.",
      "example": "function deposit() public payable { }",
      "details": {
        "how_it_works": "The 'payable' modifier is used to allow a function to receive Ether. Functions without this modifier cannot receive Ether.",
        "use_cases": ["Receiving Ether", "Creating functions that accept payments"],
        "additional_examples": [
          "function fund() external payable { balance += msg.value; }",
          "constructor() payable { }"
        ]
      },
      "meta": {
        "title": "Solidity Payable Modifier",
        "description": "Learn how to use the 'payable' modifier in Solidity to allow functions to receive Ether.",
        "keywords": "solidity, payable, Ether, receive payment"
      }
    },
    {
      "name": "msg",
      "description": "A global variable that provides information about the current message.",
      "example": "address sender = msg.sender;",
      "details": {
        "how_it_works": "The 'msg' global variable provides information about the current message, including 'msg.sender' (the address of the sender), 'msg.value' (the amount of Ether sent), and 'msg.data' (the data payload).",
        "use_cases": ["Accessing transaction details", "Getting sender address", "Handling payments"],
        "additional_examples": [
          "uint value = msg.value;",
          "bytes memory data = msg.data;"
        ]
      },
      "meta": {
        "title": "Solidity msg Global Variable",
        "description": "Learn how to use the 'msg' global variable in Solidity to access information about the current message, including sender address and Ether value.",
        "keywords": "solidity, msg, sender, value, data"
      }
    },
    {
      "name": "block",
      "description": "A global variable that provides information about the current block.",
      "example": "uint timestamp = block.timestamp;",
      "details": {
        "how_it_works": "The 'block' global variable provides information about the current block, including 'block.timestamp' (the current block timestamp), 'block.number' (the current block number), and 'block.difficulty' (the current block difficulty).",
        "use_cases": ["Accessing block details", "Getting block timestamp", "Implementing time-based logic"],
        "additional_examples": [
          "uint blockNumber = block.number;",
          "uint difficulty = block.difficulty;"
        ]
      },
      "meta": {
        "title": "Solidity block Global Variable",
        "description": "Learn how to use the 'block' global variable in Solidity to access information about the current block, including timestamp and number.",
        "keywords": "solidity, block, timestamp, number, difficulty"
      }
    },
    {
      "name": "address",
      "description": "A type representing an Ethereum address.",
      "example": "address payable recipient;",
      "details": {
        "how_it_works": "The 'address' type represents an Ethereum address. It can be used to store and manipulate addresses, and 'address payable' can be used to receive Ether.",
        "use_cases": ["Storing addresses", "Sending and receiving Ether"],
        "additional_examples": [
          "address owner = msg.sender;",
          "recipient.transfer(amount);"
        ]
      },
      "meta": {
        "title": "Solidity address Type",
        "description": "Learn how to use the 'address' type in Solidity to represent and manipulate Ethereum addresses.",
        "keywords": "solidity, address, type, Ethereum address"
      }
    }
  ]
  }

  module.exports = SoliditySyntax;