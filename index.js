'use strict';

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  "env": {
    "browser": true,      // browser global variables.
    "node": true,         // Node.js global variables and Node.js-specific rules.
    "es6": true,          // ES6 Globals
  },

  "rules": {
    ////////// Possible Errors //////////

    // 0 = 'off', 1 = 'warn', 2 = 'error';

    "comma-dangle": 2,         // disallow trailing commas in object literals
    "no-cond-assign": 1,          // disallow assignment in conditional expressions
    "no-console": 1,              // disallow use of console (off by default in the node environment)
    "no-constant-condition": 2,   // disallow use of constant expressions in conditions
    "no-control-regex": 0,        // disallow control characters in regular expressions
    "no-debugger": 2,             // disallow use of debugger
    "no-dupe-keys": 2,            // disallow duplicate keys when creating object literals
    "no-empty": 2,                // disallow empty statements
    "no-empty-character-class": 2,// disallow the use of empty character classes in regular expressions
    "no-ex-assign": 2,            // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 1,   // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0,         // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 2,           // disallow unnecessary semicolons
    "no-func-assign": 2,          // disallow overwriting functions written as function declarations
    "no-inner-declarations": 2,   // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 2,       // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": 2,       // disallow negation of the left operand of an in expression
    "no-obj-calls": 2,            // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 0,         // disallow multiple spaces in a regular expression literal
    "no-sparse-arrays": 2,        // disallow sparse arrays
    "no-unreachable": 2,          // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 2,               // disallow comparisons with the value NaN
    "valid-jsdoc": 1,             // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 2,            // Ensure that the results of typeof are compared against a valid string


    ////////// Best Practices //////////

    "block-scoped-var": 2,       // treat var statements as if they were block scoped (off by default)
    "complexity": ["error", {
        "max": 3
    }],                         // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 0,     // require return statements to either always or never specify values
    "curly": 2,                 // specify curly brace conventions for all control statements
    "default-case": 2,          // require default case in switch statements (off by default)
    "dot-notation": 2,          // encourages use of dot notation whenever possible
    "eqeqeq": 2,                // require the use of === and !==
    "guard-for-in": 1,          // make sure for-in loops have an if statement (off by default)
    "no-alert": 2,              // disallow the use of alert, confirm, and prompt
    "no-caller": 2,             // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 0,          // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 2,        // disallow else after a return in an if (off by default)
    "no-eq-null": 0,            // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 2,               // disallow use of eval()
    "no-extend-native": 2,      // disallow adding to native types
    "no-extra-bind": 2,         // disallow unnecessary function binding
    "no-fallthrough": 2,        // disallow fallthrough of case statements
    "no-floating-decimal": 2,   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 2,       // disallow use of eval()-like methods
    "no-iterator": 2,           // disallow usage of __iterator__ property
    "no-labels": 0,             // disallow use of labeled statements
    "no-lone-blocks": 2,        // disallow unnecessary nested blocks
    "no-loop-func": 2,          // disallow creation of functions within loops
    "no-multi-spaces": 0,       // disallow use of multiple spaces
    "no-multi-str": 2,          // disallow use of multiline strings
    "no-native-reassign": 2,    // disallow reassignments of native objects
    "no-new": 2,                // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": 2,           // disallow use of new operator for Function object
    "no-new-wrappers": 2,       // disallows creating new instances of String, Number, and Boolean
    "no-octal": 2,              // disallow use of octal literals
    "no-octal-escape": 1,       // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-process-env": 1,        // disallow use of process.env (off by default)
    "no-proto": 2,              // disallow usage of __proto__ property
    "no-redeclare": 2,          // disallow declaring the same variable more then once
    "no-return-assign": 2,      // disallow use of assignment in return statement
    "no-script-url": 2,         // disallow use of javascript: urls.
    "no-self-compare": 2,       // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 2,          // disallow use of comma operator
    "no-unused-expressions": 2, // disallow usage of expressions in statement position
    "no-void": 0,               // disallow use of void operator (off by default)
    "no-warning-comments": 0,   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    "no-with": 0,               // disallow use of the with statement
    "radix": 2,                 // require use of the second argument for parseInt() (off by default)
    "vars-on-top": 0,           // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 0,             // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": 1,                  // require or disallow Yoda conditions


    ////////// Strict Mode //////////
    "strict": 2,                      // controls location of Use Strict Directives


    ////////// Variables //////////
    "init-declarations": 0,           // require or disallow initialisations in var declarations
    "no-catch-shadow": 2,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 2,               // disallow deletion of variables
    "no-label-var": 2,                // disallow labels that share a name with a variable
    "no-shadow": 2,                   // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 2,  // disallow shadowing of names such as arguments
    "no-undef": 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": 2,               // disallow use of undefined when initializing variables
    "no-undefined": 2,                // disallow use of undefined variable (off by default)
    "no-unused-vars": 2,              // disallow declaration of variables that are not used in the code
    "no-use-before-define": 2,        // disallow use of variables before they are defined


    ////////// Node.js //////////

    "handle-callback-err": 0,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": 0,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": 0,        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": 0,        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-exit": 0,       // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": 0, // restrict usage of specified node modules (off by default)
    "no-sync": 0,               // disallow use of synchronous methods (off by default)


    ////////// Stylistic Issues //////////

    "brace-style": ["error", "1tbs"],       // enforce one true brace style (off by default)
    "camelcase": ["error", {
        "properties": "always"
    }],                                     // require camel case names
    "comma-spacing": ["error", {
        "before": false,
        "after": true
    }],                                     // enforce spacing before and after comma
    "comma-style": ["error", "last"],       // enforce one true comma style (off by default)
    "consistent-this": ["error", "_this"],  // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 2,                          // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0,                        // require function expressions to have a name (off by default)
    "func-style": 0,                        // enforces use of function declarations or expressions (off by default)
    "key-spacing": ["error", {
        "beforeColon": false,
        "afterColon": true
    }],                                     // enforces spacing between keys and values in object literal properties
    "max-nested-callbacks": ["error", 3],   // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": 2,                           // require a capital letter for constructors
    "new-parens": 2,                        // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-array-constructor": 2,              // disallow use of the Array constructor
    "no-inline-comments": 0,                // disallow comments inline after code (off by default)
    "no-lonely-if": 0,                      // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": 2,          // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": 2,           // disallow multiple empty lines (off by default)
    "no-nested-ternary": 1,                 // disallow nested ternary expressions (off by default)
    "no-new-object": 2,                     // disallow use of the Object constructor
    "semi-spacing": [2, {
        "before": false,
        "after": true
    }],                                     // disallow space before semicolon
    "no-spaced-func": 2,                    // disallow space between function identifier and application
    "no-ternary": 0,                        // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 2,                // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0,              // disallow dangling underscores in identifiers
    "no-wrap-func": 0,                      // disallow wrapping of non-IIFE statements in parens
    "one-var": 0,                           // allow just one var statement per function (off by default)
    "operator-assignment": 0,               // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "padded-blocks": 0,                     // enforce padding within blocks (off by default)
    "quote-props": 0,                       // require quotes around object literal property names (off by default)
    "quotes": ["error", "single"],          // specify whether double or single quotes should be used
    "semi": ["error", "always"],            // require or disallow use of semicolons instead of ASI
    "sort-vars": 2,                         // sort variables within the same declaration block (off by default)
    "space-before-function-paren": [
        "error", "never"
    ],                                      // require a space after function names (off by default)
    "keyword-spacing": 2,                   // require a space after certain keywords (off by default)
    "lines-around-comment": ["error", {
        "beforeBlockComment": true
    }],                                     // require empty lines around comments     
    "space-before-blocks": 2,               // require or disallow space before blocks (off by default)
    "object-curly-spacing": [
        "error", "always"
    ],
    "array-bracket-spacing": [
        "error", "never"
    ],                                      // require or disallow spaces inside brackets (off by default)
    "space-in-parens": [
        "error", "never"
    ],                                      // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": 2,                   // require spaces around operators
    "space-unary-ops": [
        2, {
            "words": true,
            "nonwords": false
        }
    ],                                      // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-comment": 2,                    // require or disallow a space immediately following the // in a line comment (off by default)
    "wrap-regex": 0,                        // require regex literals to be wrapped in parentheses (off by default)


    ////////// ECMAScript 6 //////////

    "no-var": 2,          // require let or const instead of var (off by default)
    "generator-star": 0,  // enforce the position of the * in generator functions (off by default)


    ////////// Legacy //////////

    "max-depth": 0,       // specify the maximum depth that blocks can be nested (off by default)
    "max-len": 0,         // specify the maximum length of a line in your program (off by default)
    "max-params": 0,      // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0,  // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 0,      // disallow use of bitwise operators (off by default)
    "no-plusplus": 0      // disallow use of unary operators, ++ and -- (off by default)
  }
}