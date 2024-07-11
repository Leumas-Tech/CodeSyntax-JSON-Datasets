const MongoodSyntax = {
    "types": [
      {
        "name": "String",
        "description": "A string field is used to store textual data.",
        "example": "fieldName: { type: String }",
        "details": {
          "how_it_works": "String fields store sequences of characters and can have additional options like required, minlength, maxlength, match, enum, etc.",
          "use_cases": ["Storing user names", "Storing email addresses", "Storing textual content like comments or descriptions"],
          "additional_examples": [
            "username: { type: String, required: true }",
            "email: { type: String, match: /.+\@.+\..+/ }",
            "description: { type: String, maxlength: 500 }"
          ]
        },
        "meta": {
          "title": "String Field in Mongoose Schema",
          "description": "Learn how to define a string field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, string, mongodb, tutorial"
        }
      },
      {
        "name": "Number",
        "description": "A number field is used to store numeric data.",
        "example": "fieldName: { type: Number }",
        "details": {
          "how_it_works": "Number fields store numerical values and can have additional options like required, min, max, etc.",
          "use_cases": ["Storing age", "Storing prices", "Storing quantities"],
          "additional_examples": [
            "age: { type: Number, min: 0 }",
            "price: { type: Number, required: true }",
            "quantity: { type: Number, max: 1000 }"
          ]
        },
        "meta": {
          "title": "Number Field in Mongoose Schema",
          "description": "Learn how to define a number field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, number, mongodb, tutorial"
        }
      },
      {
        "name": "Date",
        "description": "A date field is used to store date and time values.",
        "example": "fieldName: { type: Date }",
        "details": {
          "how_it_works": "Date fields store JavaScript Date objects, which represent a single moment in time in a platform-independent format.",
          "use_cases": ["Storing timestamps", "Storing birthdates", "Storing event dates"],
          "additional_examples": [
            "createdAt: { type: Date, default: Date.now }",
            "birthdate: { type: Date, required: true }",
            "eventDate: { type: Date }"
          ]
        },
        "meta": {
          "title": "Date Field in Mongoose Schema",
          "description": "Learn how to define a date field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, date, mongodb, tutorial"
        }
      },
      {
        "name": "Buffer",
        "description": "A buffer field is used to store binary data.",
        "example": "fieldName: { type: Buffer }",
        "details": {
          "how_it_works": "Buffer fields store raw binary data. This can be useful for storing files, images, or other binary content.",
          "use_cases": ["Storing image data", "Storing file contents", "Storing binary data"],
          "additional_examples": [
            "profilePicture: { type: Buffer }",
            "fileData: { type: Buffer }"
          ]
        },
        "meta": {
          "title": "Buffer Field in Mongoose Schema",
          "description": "Learn how to define a buffer field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, buffer, mongodb, tutorial"
        }
      },
      {
        "name": "Boolean",
        "description": "A boolean field is used to store true/false values.",
        "example": "fieldName: { type: Boolean }",
        "details": {
          "how_it_works": "Boolean fields store either true or false values.",
          "use_cases": ["Storing active/inactive status", "Storing yes/no responses", "Storing true/false flags"],
          "additional_examples": [
            "isActive: { type: Boolean, default: true }",
            "isVerified: { type: Boolean, required: true }"
          ]
        },
        "meta": {
          "title": "Boolean Field in Mongoose Schema",
          "description": "Learn how to define a boolean field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, boolean, mongodb, tutorial"
        }
      },
      {
        "name": "Mixed",
        "description": "A mixed field is used to store mixed data types.",
        "example": "fieldName: { type: mongoose.Schema.Types.Mixed }",
        "details": {
          "how_it_works": "Mixed fields allow for any type of data to be stored. This is useful for fields that have dynamic or flexible schemas.",
          "use_cases": ["Storing arbitrary JSON data", "Storing dynamic content", "Storing data with unknown structure"],
          "additional_examples": [
            "extraData: { type: mongoose.Schema.Types.Mixed }",
            "metadata: { type: mongoose.Schema.Types.Mixed }"
          ]
        },
        "meta": {
          "title": "Mixed Field in Mongoose Schema",
          "description": "Learn how to define a mixed field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, mixed, mongodb, tutorial"
        }
      },
      {
        "name": "ObjectId",
        "description": "An ObjectId field is used to store MongoDB Object IDs.",
        "example": "fieldName: { type: mongoose.Schema.Types.ObjectId }",
        "details": {
          "how_it_works": "ObjectId fields store references to other documents in the database using MongoDB Object IDs.",
          "use_cases": ["Referencing other documents", "Creating relationships between collections", "Storing IDs of related objects"],
          "additional_examples": [
            "userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }",
            "postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }"
          ]
        },
        "meta": {
          "title": "ObjectId Field in Mongoose Schema",
          "description": "Learn how to define an ObjectId field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, objectid, mongodb, tutorial"
        }
      },
      {
        "name": "Array",
        "description": "An array field is used to store arrays of items.",
        "example": "fieldName: { type: Array }",
        "details": {
          "how_it_works": "Array fields store lists of items. Each item can be of any data type, including nested schemas.",
          "use_cases": ["Storing lists of items", "Storing arrays of subdocuments", "Storing multiple values in a single field"],
          "additional_examples": [
            "tags: { type: [String] }",
            "comments: [{ body: String, date: Date }]"
          ]
        },
        "meta": {
          "title": "Array Field in Mongoose Schema",
          "description": "Learn how to define an array field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, array, mongodb, tutorial"
        }
      },
      {
        "name": "Decimal128",
        "description": "A decimal128 field is used to store high-precision decimal numbers.",
        "example": "fieldName: { type: mongoose.Schema.Types.Decimal128 }",
        "details": {
          "how_it_works": "Decimal128 fields store high-precision decimal numbers. This is useful for financial and scientific data that requires precise decimal values.",
          "use_cases": ["Storing monetary values", "Storing scientific measurements", "Storing precise decimal numbers"],
          "additional_examples": [
            "price: { type: mongoose.Schema.Types.Decimal128 }",
            "measurement: { type: mongoose.Schema.Types.Decimal128 }"
          ]
        },
        "meta": {
          "title": "Decimal128 Field in Mongoose Schema",
          "description": "Learn how to define a decimal128 field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, decimal128, mongodb, tutorial"
        }
      },
      {
        "name": "Map",
        "description": "A map field is used to store key-value pairs.",
        "example": "fieldName: { type: Map }",
        "details": {
          "how_it_works": "Map fields store key-value pairs, where the keys are strings and the values can be of any data type.",
          "use_cases": ["Storing dynamic key-value data", "Storing flexible configurations", "Storing dictionaries"],
          "additional_examples": [
            "settings: { type: Map, of: String }",
            "attributes: { type: Map, of: mongoose.Schema.Types.Mixed }"
          ]
        },
        "meta": {
          "title": "Map Field in Mongoose Schema",
          "description": "Learn how to define a map field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, map, mongodb, tutorial"
        }
      },
      {
        "name": "Schema",
        "description": "A schema field is used to define a nested schema within a schema.",
        "example": "fieldName: { type: mongoose.Schema.Types.Schema }",
        "details": {
          "how_it_works": "Schema fields allow for nested schemas within a main schema. This is useful for complex data structures.",
          "use_cases": ["Storing nested documents", "Creating complex data structures", "Defining subdocuments within a document"],
          "additional_examples": [
            "address: { type: new mongoose.Schema({ street: String, city: String }) }",
            "profile: { type: new mongoose.Schema({ bio: String, age: Number }) }"
          ]
        },
        "meta": {
          "title": "Schema Field in Mongoose Schema",
          "description": "Learn how to define a schema field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, nested, mongodb, tutorial"
        }
      }
    ],
    "validators": [
      {
        "name": "required",
        "description": "Marks a field as required, which means it must have a value.",
        "example": "fieldName: { type: String, required: true }",
        "details": {
          "how_it_works": "The required validator ensures that a field must have a value before a document can be saved.",
          "use_cases": ["Ensuring usernames are provided", "Ensuring emails are provided", "Making certain fields mandatory"],
          "additional_examples": [
            "username: { type: String, required: true }",
            "email: { type: String, required: true }",
            "password: { type: String, required: true }"
          ]
        },
        "meta": {
          "title": "Required Validator in Mongoose Schema",
          "description": "Learn how to use the required validator in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, required, validator, mongodb, tutorial"
        }
      },
      {
        "name": "min",
        "description": "Sets a minimum value for a number field.",
        "example": "fieldName: { type: Number, min: 0 }",
        "details": {
          "how_it_works": "The min validator ensures that a number field cannot have a value less than the specified minimum.",
          "use_cases": ["Ensuring age is not negative", "Setting a minimum price for products", "Enforcing minimum quantities"],
          "additional_examples": [
            "age: { type: Number, min: 0 }",
            "price: { type: Number, min: 1 }",
            "quantity: { type: Number, min: 1 }"
          ]
        },
        "meta": {
          "title": "Min Validator in Mongoose Schema",
          "description": "Learn how to use the min validator in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, min, validator, mongodb, tutorial"
        }
      },
      {
        "name": "max",
        "description": "Sets a maximum value for a number field.",
        "example": "fieldName: { type: Number, max: 100 }",
        "details": {
          "how_it_works": "The max validator ensures that a number field cannot have a value greater than the specified maximum.",
          "use_cases": ["Setting a maximum age limit", "Setting a maximum price for products", "Enforcing maximum quantities"],
          "additional_examples": [
            "age: { type: Number, max: 120 }",
            "price: { type: Number, max: 1000 }",
            "quantity: { type: Number, max: 500 }"
          ]
        },
        "meta": {
          "title": "Max Validator in Mongoose Schema",
          "description": "Learn how to use the max validator in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, max, validator, mongodb, tutorial"
        }
      },
      {
        "name": "enum",
        "description": "Sets allowed values for a string field.",
        "example": "fieldName: { type: String, enum: ['value1', 'value2'] }",
        "details": {
          "how_it_works": "The enum validator restricts a string field to only accept a set of predefined values.",
          "use_cases": ["Restricting user roles", "Limiting choices for a dropdown", "Enforcing specific statuses"],
          "additional_examples": [
            "role: { type: String, enum: ['admin', 'user', 'guest'] }",
            "status: { type: String, enum: ['pending', 'active', 'inactive'] }"
          ]
        },
        "meta": {
          "title": "Enum Validator in Mongoose Schema",
          "description": "Learn how to use the enum validator in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, enum, validator, mongodb, tutorial"
        }
      },
      {
        "name": "match",
        "description": "Sets a regex pattern for a string field.",
        "example": "fieldName: { type: String, match: /pattern/ }",
        "details": {
          "how_it_works": "The match validator ensures that a string field matches the specified regular expression pattern.",
          "use_cases": ["Validating email formats", "Enforcing password complexity", "Restricting input patterns"],
          "additional_examples": [
            "email: { type: String, match: /.+\@.+\..+/ }",
            "username: { type: String, match: /^[a-zA-Z0-9]+$/ }"
          ]
        },
        "meta": {
          "title": "Match Validator in Mongoose Schema",
          "description": "Learn how to use the match validator in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, match, validator, mongodb, tutorial"
        }
      },
      {
        "name": "validate",
        "description": "Sets a custom validator function.",
        "example": "fieldName: { type: String, validate: function(value) { return value.length > 0; } }",
        "details": {
          "how_it_works": "The validate option allows for custom validation logic by defining a custom function.",
          "use_cases": ["Creating custom validation rules", "Enforcing complex validation logic", "Validating fields based on specific criteria"],
          "additional_examples": [
            "customField: { type: String, validate: function(value) { return value.length >= 3; } }",
            "age: { type: Number, validate: function(value) { return value >= 18 && value <= 65; } }"
          ]
        },
        "meta": {
          "title": "Custom Validator in Mongoose Schema",
          "description": "Learn how to use a custom validator in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, custom, validator, mongodb, tutorial"
        }
      }
    ],
    "options": [
      {
        "name": "default",
        "description": "Sets a default value for the field.",
        "example": "fieldName: { type: String, default: 'defaultValue' }",
        "details": {
          "how_it_works": "The default option sets a default value for a field if no value is provided.",
          "use_cases": ["Providing default values for fields", "Setting default statuses", "Ensuring non-null fields"],
          "additional_examples": [
            "status: { type: String, default: 'pending' }",
            "createdAt: { type: Date, default: Date.now }"
          ]
        },
        "meta": {
          "title": "Default Option in Mongoose Schema",
          "description": "Learn how to set a default value in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, default, option, mongodb, tutorial"
        }
      },
      {
        "name": "select",
        "description": "Specifies if the field should be returned by default in queries.",
        "example": "fieldName: { type: String, select: false }",
        "details": {
          "how_it_works": "The select option specifies whether a field should be included in query results by default.",
          "use_cases": ["Hiding sensitive fields", "Excluding fields from default queries", "Controlling field visibility"],
          "additional_examples": [
            "password: { type: String, select: false }",
            "secret: { type: String, select: false }"
          ]
        },
        "meta": {
          "title": "Select Option in Mongoose Schema",
          "description": "Learn how to use the select option in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, select, option, mongodb, tutorial"
        }
      },
      {
        "name": "immutable",
        "description": "Makes a field immutable, meaning its value cannot be changed once set.",
        "example": "fieldName: { type: String, immutable: true }",
        "details": {
          "how_it_works": "The immutable option ensures that a field's value cannot be changed after it is initially set.",
          "use_cases": ["Enforcing read-only fields", "Preventing changes to IDs or timestamps", "Ensuring certain values remain constant"],
          "additional_examples": [
            "createdAt: { type: Date, immutable: true, default: Date.now }",
            "userId: { type: String, immutable: true }"
          ]
        },
        "meta": {
          "title": "Immutable Option in Mongoose Schema",
          "description": "Learn how to make a field immutable in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, immutable, option, mongodb, tutorial"
        }
      },
      {
        "name": "get",
        "description": "Defines a custom getter function for the field.",
        "example": "fieldName: { type: String, get: function(value) { return value.toUpperCase(); } }",
        "details": {
          "how_it_works": "The get option allows you to define a custom getter function that modifies the value when it is accessed.",
          "use_cases": ["Transforming data on retrieval", "Formatting values for display", "Applying custom logic to field access"],
          "additional_examples": [
            "fullName: { type: String, get: function(value) { return value.toUpperCase(); } }",
            "price: { type: Number, get: function(value) { return value.toFixed(2); } }"
          ]
        },
        "meta": {
          "title": "Getter Option in Mongoose Schema",
          "description": "Learn how to define a custom getter function in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, getter, option, mongodb, tutorial"
        }
      },
      {
        "name": "set",
        "description": "Defines a custom setter function for the field.",
        "example": "fieldName: { type: String, set: function(value) { return value.trim(); } }",
        "details": {
          "how_it_works": "The set option allows you to define a custom setter function that modifies the value before it is stored.",
          "use_cases": ["Transforming data on assignment", "Normalizing input values", "Applying custom logic to field assignment"],
          "additional_examples": [
            "username: { type: String, set: function(value) { return value.trim(); } }",
            "price: { type: Number, set: function(value) { return parseFloat(value); } }"
          ]
        },
        "meta": {
          "title": "Setter Option in Mongoose Schema",
          "description": "Learn how to define a custom setter function in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, setter, option, mongodb, tutorial"
        }
      },
      {
        "name": "alias",
        "description": "Sets an alias for the field.",
        "example": "fieldName: { type: String, alias: 'aliasName' }",
        "details": {
          "how_it_works": "The alias option allows you to set an alternative name for the field, which can be used when accessing the field in queries.",
          "use_cases": ["Simplifying field names", "Creating shorthand accessors", "Providing alternative field names"],
          "additional_examples": [
            "fullName: { type: String, alias: 'name' }",
            "phoneNumber: { type: String, alias: 'phone' }"
          ]
        },
        "meta": {
          "title": "Alias Option in Mongoose Schema",
          "description": "Learn how to set an alias for a field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, alias, option, mongodb, tutorial"
        }
      },
      {
        "name": "index",
        "description": "Creates an index on the field.",
        "example": "fieldName: { type: String, index: true }",
        "details": {
          "how_it_works": "The index option creates an index on the field, which can improve query performance.",
          "use_cases": ["Improving query performance", "Enabling faster lookups", "Creating indexes for frequently queried fields"],
          "additional_examples": [
            "username: { type: String, index: true }",
            "email: { type: String, index: true }"
          ]
        },
        "meta": {
          "title": "Index Option in Mongoose Schema",
          "description": "Learn how to create an index on a field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, index, option, mongodb, tutorial"
        }
      },
      {
        "name": "unique",
        "description": "Ensures the field value is unique.",
        "example": "fieldName: { type: String, unique: true }",
        "details": {
          "how_it_works": "The unique option ensures that the field value is unique across the collection, preventing duplicate entries.",
          "use_cases": ["Ensuring unique usernames", "Enforcing unique email addresses", "Preventing duplicate entries"],
          "additional_examples": [
            "email: { type: String, unique: true }",
            "username: { type: String, unique: true }"
          ]
        },
        "meta": {
          "title": "Unique Option in Mongoose Schema",
          "description": "Learn how to ensure a field value is unique in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, unique, option, mongodb, tutorial"
        }
      },
      {
        "name": "sparse",
        "description": "Creates a sparse index on the field.",
        "example": "fieldName: { type: String, sparse: true }",
        "details": {
          "how_it_works": "The sparse option creates an index that only includes documents with a non-null value for the field.",
          "use_cases": ["Indexing optional fields", "Improving performance for partially filled indexes", "Creating indexes with missing values"],
          "additional_examples": [
            "optionalField: { type: String, sparse: true }",
            "secondaryEmail: { type: String, sparse: true }"
          ]
        },
        "meta": {
          "title": "Sparse Option in Mongoose Schema",
          "description": "Learn how to create a sparse index on a field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, sparse, option, mongodb, tutorial"
        }
      },
      {
        "name": "text",
        "description": "Creates a text index for full-text search.",
        "example": "fieldName: { type: String, text: true }",
        "details": {
          "how_it_works": "The text option creates a text index on the field, enabling full-text search capabilities.",
          "use_cases": ["Enabling full-text search", "Indexing text content for search", "Creating searchable text fields"],
          "additional_examples": [
            "content: { type: String, text: true }",
            "description: { type: String, text: true }"
          ]
        },
        "meta": {
          "title": "Text Option in Mongoose Schema",
          "description": "Learn how to create a text index on a field in a Mongoose schema, including examples and use cases.",
          "keywords": "mongoose, schema, text, option, mongodb, tutorial"
        }
      }
    ]
  }
  
module.exports = MongoodSyntax