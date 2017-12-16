# Javascript Fundamentals
## Concepts
### Javascript is not Java
The name similarity is a relic of a marketing decision from the time that javascript was first envision.  The languages are unreleated, with the only similarity being syntaxes that are descended from the C language (which is true of the vast majority of existing programming languages).

### Program
A programming language is a series of *statements* that are executed one at a time.  These statements are known as _source code_

Javascript is an *interpreted* language, meaning that the statements are evaluated each in turn rather than being *compiled* into more direct instructions to the computer.  Interpreted languages tend to be *higher-level*, meaning that they more closely resemble human thought and abstract away that actual computer level instructions.

### Comments

Comments are notes in code for humans (some other programs that interact with the source code might react to specially formatted comments, but that is not part of Javascript itself).  Javascript will ignore any comments while running the code.

JS supports two forms of comments.  

#### Multiline comment
One is the _block comment_ or _multi-line comment_, which can span multiple lines.  It starts at a 'slash star' (` /* `) and continues until it finds a 'star slash' (` */ `).   Multiline comments are used when your comment is more than a few words, and occasionally to _comment out_ code (that is, turn some lines of code into comments, so those lines don't exist as code as far as JS is concerned - done when you want to temporarily remove some lines, but don't want to actually delete them).  Multiline comments have problems if you try to _nest_ them.

Works:
```
/* Start of comment
More comment
End of comment */
```

Does not work:
```
/* Start of Outer comment
More outer comment
/* Intended Start of Inner comment, but is really just more outer comment
Intended to be More inner comment, but is more outer comment
Intended to end inner comment, but ends up ending outer comment */
Intended to be outer comment, but now is not a comment at all!
Intended to end outer comment, but is not a comment, and the end comment bit will just confuse the computer further */
```

#### End of Line comment
An end of line comment starts with two slashes (` // `) and continues to the end of the line.  It does not have any end characters, as the line itself indicates when it ends.

```
x = 15; // The text here is a comment
// y = 9; // this entire line is 'commented out'.  The second comment indicator is just more harmless comment
```

In this and other documents I will toss in some comments in some examples to explain what is happening.

### Variables and Names
Key to any programming is the concept of *variables*.  A Variable is a name used to refer to something, which is not quite the same thing as the thing itself.  

Example: You are a student.  When I talk about "a student" I might be talking about you.  But later, I might use "a student" to refer to someone else.  "A student" wasn't _you_ even it referred to you.  It was a label that referred to you at that moment.  Computer variables work the same way. 

Consider: 
```javascript
x = 9;
x = x + 1;
```
When both of these statements execute, we say _x is equal to 10_, which is actually a bit of simplification.  'x' refers to value of 10, but x isn't really _10_.  If it had _really_ been 9, then we would have made 9 equal to 10, and we did not.  At the end of our statements, 9 remains 9, but `x` no longer refers to 9, it's now referring to 10.  As long as everyone understands this, it is far easier to just say `x equals 10`.  Just remember the shorthand this really means.

When we have two variables:
```javascript
x = 1;
y = 3;
y = x + y;
x = y - x;
y = y - x;
```

At the end of this, `x` refers to a value of 3, and `y` refers to a value of 1.  

Later, things get more complicated when variables refer to collections of values, but the fundamental principle is the same.

### Capitalization and Precision

Computers are very powerful, but also very limited.  You need to be very precise when giving instruction, and anywhere in a programming language where you don't have to be precise it is because someone before defined all the precise rules to convert your one bit of impression into precise values.

One place that is particularly noticeable is with *capitization*.  All of Javascript is *case-sensitive*, meaning that the language considers situations with a capital letter distinct from that same situation with a lowercase letter.  So `x` is a different variable than `X`, and `function` is different than `Function`.  

It can be annoying, but working with a computer is like working with a young child that just got their first digital watch (and will only talk about the time using the precise minute and second), or a surly teenager to whom you have to specify that taking out the trash also means placing a new bag in the trash can.  Anytime we talk about a computer being "smart", we are actually talking about places where humans have spent a lot of time being very precise about ways the computer can emulate being "smart".  (I'm not denying the possibility of actual artificial intelligence - I'm just saying that at the moment there is a large difference between a 'not-so-smart' human and a 'smart' program).

### Types

In movies or TV, the heroes will often discuss about a message being written in *binary*.  Which is ridiculous without more information.  Binary numbers are numerical values shown in base 2 (which gives 0-1, just as base 10 gives you 0-9).  Representing "38" in binary is something you can do (100110), but representing "Apple" in binary makes no more sense than representing "Apple" with base 10 numbers - it can be done, but only if you assign some extra meaning to a number.  So if I said that 0-25 represented lowercase english letters and 26-51 as uppercase english letters I could represent "Apple" as 26, 15, 15, 11, 4.  But I had said that 0-25 was the UPPERCASE Letters and 26-51 the lowerercase, then my representation would be "0, 41, 41, 37, 30".  If I expanded my translations to include digits and punctuation marks, the representation gets more involved.  The digit "5" as written in this sentence might not (and in fact rarely is) be represented by the actual numerical _value_ of 5.  

Programmers will talk about data 'types', which really means "What this value represents after applying the correct interpretation".  In low-level language, this usually represents a value directly (so a value is 42 in computer memory, which might be the number 97 if I tried to perform math on it, while it is the character "a" if used to output an english character) while in higher-level languages there is some abstraction between the value for the language execution and the value as it is actually represented to the processor.  (so the "value" to the higher level language is probably a collection of values, one representing what the value should be treated as, another representing the value itself, perhaps another keeping track of any references to this value so all of this memory can be freed up for reuse when nothing refers to it, etc).

Regardless of high- or low- level, a "type" is not just how to interpret the computer representation, but also a description of how to interact with a value.  For example, we said earlier that the character "5" is not the same as the digit 5.  So "5" + "5" might be "55" while 5 + 5 is 10.  

#### Dynamic vs Static typing

This only matters when comparing different languages, but it is helpful to know about these differences so you can understand when a generic programming text seems to be contradicting your experiences.

Some languages are *statically-typed* - meaning that the _type_ of data is associated with a variable does not change.  In statically-typed languages, a variable will refuse to hold values of a different type.  

Other languages, including Javascript, are *dynamically-typed*, meaning that while values still have types, that type is associated with the data and not the variable.  A variable can be assigned a value of a different type, and the type of that variable becomes the same as the value stored. 

Example: 
```javascript
x = 15; // x holds a number-type
x = "hi"; // In a dynamically-typed language, x now holds a "string"-type.
          // In a statically-typed language, that can't happen.
```

#### Strong vs Weak typing

Static/Dynamic is not the only form of type-distinction:  Languages can ALSO be *strongly-typed* or *weakly-typed* (also known as *loosely-typed*).  This refers to how a language behaves when a value does not match the type that is needed in a given situation.  In a weakly-typed language, the value is automatically converted into the needed type.  Converting the type of a value is known as *casting* or *coercion*.  A weakly-typed language will cast values automatically where it can, known as *autocasting* or *automatic coercion*.  A strongly-typed language will not autocast, and any coercion has to be explicit.

Example:
```javascript
x = "15" * 10; // A weakly-typed language will autocast the "15" into 15 so this can work, x will be 150;
               // A stongly-typed language will refuse to do this and throw an error
```

#### Why Typing matters

Typing is a hotly-debated subject, but we can make some sweeping statements that are most-often true.

* A strongly-typed, statically-typed language can detect type-based errors at compile-time  (e.g. if `x + y` involves adding an integer and a string, a strongly-typed language will throw an error where a weakly-typed language would auto-coerce, and a statically-typed language can know before the program is even run that `x` would be an integer and `y` would be a string, while a dynamically-typed language would have to wait until that expression tried to run to know what types x and y held.  So a statically-typed, strongly-typed language can determine before the code is run that `x + y` would throw an error.)
    * Even interpreted languages that are not "compiled" almost all have some sort of initial parsing-phase where types can be determined in advance for the life of the program.  
    * That said, you'll find that almost all languages that are both strongly- and statically-typed will be compiled.
    * Because the benefits of compile-time type-checking are lost if you are either weakly-typed OR if you are dynamically-typed, those primarily involved in languages that have compile-time type safety tend to not bother distinguishing both axis, and simply call languages that offer compile-time type-checking as "strongly-typed" and those that don't as "weakly-typed".  
* Dynamically-typed languages involve fewer instructions to the language about types, where a statically-typed language requires that you declare the type of a variable from the start.  
    * This leads to debates about whether dynamically-typed languages involve less developer overhead and read more naturally, or whether the loss of compile-time checking is a bigger cost.
* Weakly-typed languages involve fewer instructions to the language about type-conversion.
    * At times, any language will need to convert between types.  Weakly-typed languages usually do this automatically, while strongly-typed languages require the coder to explicitly declare a conversion.
    * A strongly-typed language that is told to covert a type loses any compile-time checking of type-safety for that conversion.
    * As a result of the above, situations that involve a lot of type-conversion that don't happen in specific and limited ways tend to have more weakly-typed languages than situations that don't involve a lot of type-conversion, because while compile-time type checking is arguably worth the effort involved in explicitly declaring types, that is undeniably effort without much benefit if you are then manually overriding the type checks all over the place anyway. 
* A weakly-typed, dynamically-typed language involves less upfront effort in managing type information and can more easily handle type-changes at the cost of any benefits of compile-time type-safety and at the risk of unexpected coercion results causing more subtle bugs. 

There are languages of different combinations.  Java, for example, is strongly-typed and statically-typed, giving it compile-time type-safety.  Javascript is weakly-typed and dynamically-typed, making it far less type-safe but also minimizing up-front effort to manage types.  Python is strongly-typed and dynamically-typed, finding a point with minimal effort for managing types but not allowing potential bugs with autocoercion from entering.  C is usually viewed as statically- but weakly- typed.  

## Syntax
### Variables

A JS variable is just a collection of letter-characters (case-sensitive), digits, and certain special characters ( hyphen, underscore, or dollar sign), that does start with a digit and does not match a so-called *reserved word*.

A "reserved word" is any word that has meaning to the language so that it will be interpreted to be something other than a variable name.  For example, `Infinity` represents the mathematical concept of infinity, so if you try to use `Infinity` as a variable name, it won't work.  (`infinity`, on the other hand, is a legit-if-confusing variable name).

A variable has a *scope* where it can be "seen".  The label `foo` might be any number of different `foo` variables that each might have different values _at the same time_, with the scope of each deciding which value `foo` resolves to.

A variable needs to be *declared* before use, which determines the scope of the variable (and overrides any form of that variable from an encompassing scope from being evaluated instead).  Variables are declared with *var*, *const*, or *let*.  *function* can also be used to declare a variable (that starts by holding a named function) if function is used as a statement and not just an expression (more on that last bit beelow).
* More examples to come, but at basic level:
    * `let foo;` // Declares `foo`, assigns no value to it yet.
    * `const foo = 15;` // Declares `foo` and assigns the value 15 to it
    * `const foo = function() { }` // Declares `foo` and assigns a function object to it
    * `const foo = function bar() { }` // Declares `foo` and assigns a function object to it.  'bar' is NOT a variable here, and has little impact (more on that another day)
    * `function foo() {}` // Declares `foo` and assigns a function object to it

*scope* is a concept we'll cover more later, but here are the rules for scope and variable interaction:
* Once a variable is declared, it should not be redeclared in the same scope.  
    * An *inner scope* (a scope that the scope the variable is declared in encompasses) _can_ declare a variable of the same name, and in that inner-scope any usage of that variable name will refer to that inner-declared variable and not the encompassing one.
* `const` and `let` declare variables in the scope of the current _block_, and such variables cannot be used before they are declared.
* `var` and function statements declare variables at the scope of the current block, and such variables are _hoisted_, meaning they act as if declared at the start of the function, though they will not have a value until the line assigning a value (which may be the line with the actual declaration).

### Statements, expressions, and blocks

#### Statements

A *statement* is an action in a language.

An *expression* is anything that evaluates to a value.  

Most expressions can be statements, but not all statements are expressions.

Example:
```javascript

x = 15; // statement (an assignment action) AND an expression (this all evaluates to 15 - if it was y = x = 15; y would be 15 because x = 15 is 15)
x; // statement (doesn't do much, but it does do it) AND an expression (x evaluates to 15)
if (x == 15) console.log('hi'); // A statement (a conditional action), but not an expression ( an 'if' statement does not evaluate to anything )
```

This mainly matters when you are assigning or returning values.  

#### Semicolons

In some languages, statements are separated by semicolons.  Usually in such cases newlines exist for human benefit and have no particularly meaning to the execution of the code.

In other languages, statements are managed by lines.  Such languages tend to care about newlines/carriage returns and any leading spaces at the start of a line, and are called *white-space dependent*.

Javascript is somewhat odd in that in most cases Statements are separated from each other by semicolons, but if you omit semicolons JS will attempt to figure out where they belong, a process known as *automatic semicolon insertion* (ASI).  This has led to a bit of a minor schism - with some finding it better to omit semicolons to reduce the amount of visual "noise" (distraction), and others preferring to keep them to be explicit and remove any uncertainty.   For the purposes of this class *semicolons will be required* for a few reasons, the main one being that if you don't understand the rules of ASI it can behave unexpected, but also because I believe the semicolons provide helpful information for a human reader about whether the statement is complete or not without having to check the next line.  In online resources code using semicolons is more common.

#### Blocks

In addition to statements and expressions, there are also *blocks*, which are any number of statements (including 0) within a set of curly braces `{}`.  Blocks do not use colons to separate themselves from statements.  In Javascript the presence of curly braces does not always indicate a block, but all blocks will use curly braces.

### Primitives

A *primitive* is a base value type that can form the basic blocks for other types that collect values.  In Javascript the primitive values are:

* numbers - any number, including so-called *floating point* numbers, i.e. numbers than can involve decimal values.
* strings - any sequence of characters, including the so-called *empty-string*, a sequence of 0 characters: ''.
* boolean - a value that is either true or false, with no other option.
* undefined - something that has no value (which is distinct form 0 or ''), and presumably has never had a value.
* null - something that has no value but is presumably explicitly set to have no value.
* Symbol - A new primitive introduced fairly recently.  I'll mention it exists and we'll largely not interact with it at all.

Primitives are not the only kinds of values in Javascript, see _Non-Primitive types_ below.

#### Numbers

A *number* is any numeric value, including numbers that involve decimal values.  Unlike some lower-level languages, there are not different kinds of numbers that have different amounts of computer memory dedicated to storing their potential values.  All JS numbers have the same potential precision and can occupy the same size of computer storage.

Number literals are represented by digits, possibly including a decimal and/or positive or negative signs, but not involving any place separators ( 1000 instead of 1,000 ) and always using american/english style representation ( '.' to separate decimal values from non-decimal values).  Number representations are not wrapped by any form of quotation marks.

Numbers can be represented in different bases other than base 10 using a special prefix, which largely matters because using base 8 (*octal*) or base 16 (*hexidecimal*) can occasionally be more convenient when dealing with computer representation (both octal and hexidecimal can represent binary values more succinctly and directly than base 10 numbers, and a *binary* representation is of occasional use), but the vast majority of the time numbers will all be base 10.  

* Base 10 (decimal): 18 (base 10) is 18 (base 10)
* Base 16 (hexadecimal): 0x12 (base 16) is 18 (base 10)
* Base 8 (octal): 0o22 (base 8) is 18 (base 10)
* Base 2 (binary): 0b10010 (base 2) is 18 (base 10)

Neither null nor undefined are actually numbers - those are distinct primitive values, though because JS is dynamically typed there is always a possibility that where you expect a number you might have a null or undefined.

There is a non-number Number value, known as *NaN*, which means 'not a number'.  (Yes, this does technically mean that 'Not a number' _is_ a number, where null and undefined are not.)  NaN tends to come about when you perform some numeric operation on a number that isn't valid, such as `15 * "a"`.  `Infinity` and `-Infinity` also exist as number values that aren't explicit numbers.  (e.g. `10/0` is `Infinity`)  Note that `NaN`, `Infinity` and `-Infinity` are _different_ than the strings "NaN", "Infinity", or "-Infinity";

A non-primitive Number object also exists, and any variable holding a number will coerce to a Number object when a Number object is needed, and any Number object will act as the number value when that is needed.  

#### Strings

A *string* is a collection of characters, including none (the *empty string*, '').  

String literals are represented by any characters (including non-letter characters) inside some form of quotation mark.
* *double-quotes* are used like this: `"an example"`
* *single-quotes* are used like this: `'an example'`
    * Regardless of which form of quoting is used to declare the string, the internal representation is the same.
    * The only difference between double and single quotes used to represent a string is to decide which marks the end of the string.  For example, strings that contain an apostrophe are easier to represent with double-quotes, while strings with double-quotes in them are easier to show with single-quotes
    * In either case you can *escape* a character by using a backlash character:  `'this string contained in single-quotes has an apostrophe but doesn\'t break because it is escaped'`
    * Which means you have to have a way to show a backslash character, which is just an escaped backslash: `'you can escape a quotation mark with a \\ character'`
    * Certain *non-printable* characters are also communicated using escaped characters, such as a new line being represented as `\n` and a tab being `\t`.
* *backticks* represent a new form of string known as a *template literal*.  Template literals result in a string just like the other forms of quotation marks, but with a special addition: Anything inside curly braces preceded by a dollar sign (a dollar sign is also known as a *bling* character) will be evaluated and the bling-curly replaced with the evaluation result.  
    * Example of a template-literal
    ```javascript
    x = 4;
    output = `There are ${x} lights!`; // Same as "There are 4 lights!"
    ```
A non-primitive String object also exists, and any variable holding a string will coerce to a String object when a String object is needed, and any String object will act as a string value when that is needed.

#### Boolean

A *boolean* is a value that is either true or false;

Neither `null` nor `undefined` are boolean values - those are distinct primitive values, though because JS is dynamically typed there is always a possiblity that where you expect a boolean you might have a null or undefined.

Quite often other values will be used in a *boolean context*, which will coerce them into a boolean value - see *truthy* and *falsy* below.

Boolean literals are represented by the reserved words `true` and `false` (lowercase).  

A non-primitive Boolean object also exists, and any variable holding a boolean will coerce to a Boolean object when a Boolean object is needed, and any Boolean object will act as the boolean value when that is needed.

#### Null

*null* is a special type that represents an assigned lack of value, which is distinct from 0, and distinct from `unassigned` (see below).

Imagine you have a program to count chickens.  
* You create a `chickenCount` variable.
* What does that variable start as?  Not 0, because you aren't saying you have 0 chickens, when you actually have chickens.
* Initially, chickenCount starts as `undefined` - it has no value, and has never been assigned a value.
* At some point you go to count your chickens.  But they have not hatched yet - you have only eggs - so you shouldn't count them yet.
* You _could_ say you have 0 chickens, but quite often you don't want to say that.  You might still have chickens - you just didn't count them yet.
* You can't (shouldn't) say `undefined`, because that indicates a value that has never been assigned.  You're explicitly _assigning_ the lack of a value.
* So you can set chickenCount to `null` - this indicates there is _no_ value, without saying the value is 0.

Note: Some people will set chickenCount to `null` from the very start, before even counting once.  That's fine - it's a stylistic choice.

#### Undefined

*undefined* is a special type that is much like `null`, but not quite the same.  It is also a concept that does not exist in most programming languages.  It has no value other than `undefined` and generally means that value has never been assigned. (Which in turn means that you shouldn't assign it as a value - if you want to assign a lack of value, use `null`)

You normally won't care if a value is specifically undefined. Usually you check for a *truthy* value (see below), though exceptions do exist.

### Non-Primitive Types

#### Object

Objects in JS are everywhere.  Every value that is not a primitive is an Object, even the other non-primitive types, and the primitives will translate to an Object version of themselves when needed.

But what is an object?

The easiest way to think about it is: _a value that refers to collection of values, with each contained value identified by a 'key'_.  

What do you mean, that's not so easy?  Here, put together an example:
* Let's say variable `foo` is a string.  
* Let's say it has the value 'Meow'
* Remember that variables _refer_ to values, even when we say a variable "is" something, so really `foo` refers to the string 'Meow'.

Simple, right?  Now here's how objects work:
* If we have an object, it has a collection of values
* If we have one of those values be 'Meow', we need a 'key' to refer to it
* Object keys are usually strings, so let's assume the key is 'cat'
* Now we have an object with one key, 'cat', that refers to the value 'Meow'

That linkage between the key and the value it refers to within the object is known as a _key/value pair_.
So JS objects can really be thought of as a collection of key/value pairs.

Here's the wrinkle that can take a moment, but unlocks all the cool stuff:  An object is not actually the collection.  An object is just a reference to the collection. 

Which makes an object sound a lot like any other value that variables can hold.  And indeed they are.

Going back to our example, if we wanted to have all sorts of animal sounds we COULD have:
* a variable 'cat' that is (refers to the value of) 'Meow'
* a variable 'dog' that is 'Bark'
* a variable 'pig' that is 'Oink'

That works, but quickly becomes unwieldy.  Which variable do you use in any given place?

Now imagine:
* A variable 'sounds' that is (refers to) an object
* This object has the key/value pair of cat/Meow
* This object ALSO has the key/value pair of dog/Bark (remember that an object is a collection of zero or more key/value pairs)
* This object also has the key/value pair of pig/Oink

_Note: we tend to call these key/value pairs as being 'inside' the object_

Now we have a single variable, 'sounds', to worry about.  But how do we get to any of those values inside the collection?  There are actually _two_ ways: 
* Dot notation
* Index notation

##### Dot notation 
Dot notation means putting a '.' after the object value, and follow it with the key.  If you can use it, dot notation is the best to use, but there are some cases where you can't, and for those you should use index notation.

##### Index notation
Index notation means putting a value inside square brackets (` [ ] `) after the object value.  Where dot notation expects the key name to be treated much like a variable name, index notation expects a _value_.  This means that you can put a variable in, and the value it refers to will be used as the key.  Or you can put in explicit values, such as the string value of the key, but you'll need to quote the value in that case to make it clear it isn't a variable name.

Dot notation is preferred, but index notation is needed when:
* You want to use a variable that holds the value of the key.  Dot notation cannot do that.
* Your key is some string that is a valid string but is not a valid variable name, such as anything with special characters other than an underscore or dollar-sign (_bling_), such as a hyphen.  Trying to use dot notation for that will simply confused the computer and likely give you a syntax error.

##### Object evaluation examples
* `sounds` refers to the object itself (which is a reference to a value, and that value is a reference to a collection of key/value pairs)
* `sounds.someKeyThatDoesNotExist` will give you `undefined`
* `sounds.cat` refers to the value associated with with the key 'cat', in this case the string 'Meow' 
* `sounds['cat']` also refers to the value associated with the key 'cat'
* `sounds[cat]` refers to the value of the whatever key is equal the value of (referred to by) the variable 'cat'.  
    * If we have no variable 'cat', this will cause an error
    * If we have a variable 'cat', but it has a value that doesn't match any of the keys in 'sounds', this will give you `undefined`
    * If we have a variable 'cat' that has the value 'dog', this will give you 'Bark'
* `sounds[sounds.cat]` is the same as `sounds['Meow']`, which is `undefined`  (Do you see why this all works out that way?)
    
##### Object assignments

###### Object Literals
Creating a new object can be done by using 'curly braces' (` {} `), much like a string can be defined with quotation marks.  Just as that sort of string is called a 'string literal', this form of written-out object is called an 'object literal'.  Keys are separated from values by a colon (` : `), and if the keys could be a variable name, they don't need to be quoted (just like with dot notation).  Separate key/value pairs in an object literal with commas (` , `):

```javascript
let sounds = { 
  cat: 'Meow',
  "dog": 'Bark',
  'pig': 'Oink'
};
```

##### Object values
The real power behind objects is not just that they can collect key/value pairs, but that the object itself is a value.
That means this works:

```javascript
// Assume sounds from above
let moreSounds = {
  animals: sounds,
  vehicles: {
    trucks: 'rumble',
    cars: 'screech',
    motorcycles: 'vroom-vroom'
  },
  people: {
    sleeping: 'zzzz',
    talking: 'blah blah blah'
  }
};
```

Thus `moreSounds.animals.cat` is equal to 'Meow'

#### Array

An Array is an _ordered_ list of values.  As described above, the value can be references to other values.  

Notice the part where I said 'ordered' - an array is very good for when you want to access your data in a reliable order.  Examples include going through every item in a list, sorting alphabetically or by some other criteria, and you want to check on a specific entry in queues, stacks, and rankings by position.  

Arrays of Objects are a pattern you will see often, because the array is an ordered way to sort and examine the objects, meanwhile the objects can have multiple properties each.

Arrays are NOT good for guaranteeing uniqueness, or finding an entry by its value (trying to find the position when you know the value at that position, but not the position itself.

Generally, any need for a collection of data is best handled by an array or an object.  

Technically, an Array _is_ an object, just like how there is an object version of all the primitive values.  Given any array you can call methods and values on that array object, in addition to accessing the values in the array.  

Individual values in an array are retrieved using square brackets, just as with objects, and using the numeric index (position) of the value.  Unlike with Objects, this must be a Number, and because it is a number you cannot use dot notation. 

Arrays start at position 0, not position 1.  So an array foo with 1 value would have that value stored at `foo[0]`.  This is a common source of errors with new programmers, but is true of almost all programming languages.

`length` is a property of an array that indicates the number of entries.  It is a property, not a method, but it is updated each time the array changes length.

Arrays have a number of methods to modify arrays.  Some of them change the array the method was called on (known as _in-place_ changes), others will produce a new array based on the array the method was called on, but leave that original array alone.  Make sure you know which way a method you call on an array works.  In particular `slice()` and `splice()` have very similar names and inputs, but are very different in what is done to the array.

Example:
```
const rainQty = []; // Declare an empty array
rainQty.push( 3 ); // method on array adds value TO array
console.log(rainQty); // [ 3 ]
rainQty.push( 4.2, 1.2, 5 );
console.log(rainQty); // [ 3, 4.2, 1.2, 5 ]
console.log( rainQty.length ); // 4
console.log( rainQty[2] ); // 1.2 (not 4.2)
rainQty.sort(); // sorts alphabetically,  ascending, in-place
console.log( rainQty ); // [ 1.2, 3, 4.2, 5 ]
const highNumberHalf = rainQty.slice(rainQty.length/2); // works because length is even
console.log( rainQty ); // [ 1.2, 3, 4.2, 5 ] - unmodified by slice()
console.log( highestNumberHalf ); // [ 4.2, 5 ] 
console.log( highestNumberHalf[1] ); // [ 5 ];
```

As with Objects, the value of the array variable itself does not change when items are added to or removed from the array. Also as with objects, when your value is another collection variable that is referenced by other variables, any change to that collection via one of these references will be reflected in the other variables (because they are all referencing the same value)

#### Function

Functions are runnable objects.  The function code is some number of statements that will execute when the function is run.  

Functions can *return* a value using the *return* keyword.  Once the return keyword executes, the function stops running without processing any later lines in the function.  If a return value is not specified the function is treated as returning *undefined*.  Only a single value can be returned, but that value can be reference to a collection such as an array or an object.

Values can be passed to the function (called _arguments_ or _parameters_) and the variable names used in the function definition are how those values will be referenced from within the function, without regard to what the variable names used in calling the function are.  Even if the function uses the same names within itself that the calling code used to call the function, they are separate variables and contained within the scope of the function.

Variables that are in the containing scope of the function definition and are not passed in the function call can be accessed as a closure (more on that later).

Passing Objects and/or Arrays can result in changes that are seen outside the function, because as noted previously, changing the values in side a collection does not change the reference to the collection itself.

Example:
```
const changeNum = function( foo ) { 
  foo = 5; // this is the 'foo' contained in the function, not the outer foo, though it initially had the same value
}
const foo = 3;
changeNum(foo);
console.log(foo); // 3 - unchanged

cont changeInArray = function ( bar ) {
  bar[0] = 5; // bar IS a different variable, but both inner and outer bar reference the same array
}
const bar = [3];
changeInArray(bar);
console.log(bar); // 5 - changed
```

Functions can be declared as statements with the function keyword, which creates a variable in the current scope with the name of the function, and the function itself is the value.  Functions can also be declared as _expressions_ - direct values that can be assigned immediately.  There is no practical difference between the methods and which you use is up to you, but when you need to pass a function reference for a task that is not repeated elsewhere, people will often define the function as an expression right there.

Example:
```
// function as statement:
function foo() { 
  console.log('hi');
}
// function as expression:
const bar = function() { 
  console.log('hi; 
};  // Notice the expression requires a semi-colon where the statement did not
foo(); // 'hi'
bar(); // 'hi'
```

In ES6, anonymous functions can be declared as an expression with the function keyword as above, or using a syntax known as the 'fat arrow' (or just 'arrow') syntax.  This syntax has several quirks.
```
// basic use:
const arrow = () => { console.log('hi'); };
// with parameters
const arrowParam = ( name, greeting ) => { console.log(greeting, name); };
// With exactly one param, the initial parens are optional:
const arrowOne = name => { console.log(name); };
// arrow functions can return a value
const arrowReturn = name => { name += ' The Clever'; return name; };
// If the function consists of a single statement, the curly braces can be omitted
// the function will the result of the statement (if any)
const arrowMinimal = word => word.replace('dog', '');
// sends word to console, but returns undefined
const arrowConsole = word => console.log(word);   
```
The above examples are on one line to make it easier to compare the comments, any form of declaring a function can be on one or multiple lines.

Functions are Objects, which means references to functions are values like any other value, and can be passed to functions, assigned to variables, and stored in arrays or assigned to an object property.  In the case of an object property, that means that property is now runnable.

Example:
```
const cat = () => console.log('meow');
const pets = {};
pets.dog = () => console.log('woof');
pets.cat = cat;
pets.cat(); // 'meow'
const sounds = [ pets.cat, pets.dog ];
sounds[1](); // 'woof'
```

Functions are often used as _callbacks_, functions that passed to another function for THAT function to manage when to call the function and passing any parameters.

Function execution effects the interpretation of the context, *this*.  More on that later.

#### RegExp

Regular expressions (also _regexp_ or _regex_) are patterns that are used to match text and portions of text.  They are used in many programming languages.  

Regexes are powerful because of how many rules they can pack into a few characters, but that density can also make them very hard to decipher and debug.  Also, you can put in patterns that result in VERY slow processing, as the engine checks for 10 bajillion (+/- 1%) different combinations you didn't intend. 


Example:
```
// check for any 2-or-more digit number anywhere in the text
/\d+/.test("I have 14 cans of cat food"); // true

// ends in .com or .org or .net 
if( email.match(/\.(com|org|net)) ) { // old school

// 'x' out all but last four digits of a 10 digit phone number
const phoneNum = /\d{3}[-. ]?\d{3}[-. ]?(\d{4})/;
const clean = "My number is 206-555-1212".replace(phoneNum, 'xxx-xxx-$1');

// find the local exchange (the 3 digits before the 4 digits) from any 7 or 10 digit phone number
// You can see how regexes can be easily get too complicated
const isPhone = /(\(?\d{3}\)?)?[-. ]?(\d{3})[-. ]?(\d{4})/;
const findExchange = text => (isPhone.exec(text) || [])[2];
// below is "555"
const withText = findExchange("My number is 206-555-1212");
// below is "555"
const withdots = findExchange("206.555.1212");
// below is undefined
const notPhone = findExchange("Lottery was 206-555-112");
// below is "555"
const withoutDividers = findExchange("5345551212");
// below is "555"
const withoutArea = findExchange("5551212");
```

Some decent guidelines:
* Matching a specific straight forward string once, to find or remove - do not use a regex, use an existing string method
* Passing in a pattern to String.replace() to be applied to all occurrences within string - regex good
* Match a large number of combinations for a simple rule (such as zip codes or US phone numbers) - regex great!
* Matching nested text, such as anything between parens that may itself contain more content between parens - regex terrible
* Matching surprisingly complex rules, such as the actual official definition for valid email addresses - everything is terrible
* Matching anything in requiring a long regex to match - regex bad, it can work but hard to change/maintain

Regexes are a form of Object and can be declared with the RegExp() function, passing in the pattern string, or using the syntax of two unquoted slashes with the unquoted pattern between them.

There are many resources for Regexes online, though each language implementation does them in a slightly different way.

### Evaluate in X context

We mentioned how JS can switch a value to a different type, but when does that happen?  How does it know?

The answer is that the surround code can be looking for data of a particular type.  When the code reaches that point it wants data of that type, and if it has data of a different type, it will change it.  

Examples:
```
let x;
x = 2+2; // Numeric context, has numbers
x = 1 + "2"; // string context, number will be changed to a string
x = +"2"; // Numeric context (because of + - that's a "positive 2", not "add 2"), becomes number
x = if(2) {}; // boolean context, forces number to boolean
```

It is important to know when a context will force a value into a different type.  It's also important to know there are some weird situations you can get into, and it's best to simply avoid them.  Keep your coercions limited to forcing to a truthy/falsy value.

Consider:
```
null >= 0; // true
null <= 0; // true
nul == 0 // false
```

#### Assignment vs comparison

We've been using a lot of equal signs, let's go deeper:

##### Assignment

`x = 1 + 2` A single = is an _assignment_, putting a reference to a value where such a reference can go.

##### Comparison ("loose") 

`"2" == 2` The Comparison operator (`==`) returns a boolean value that says if the two datatypes can be converted so as to have the same value.  

Special care needs to be taken  with objects and arrays - two collections that hold the same values will NOT appear as equal, even under loose comparison.  

As a general rule, you should almost never use loose comparison.  The benefits of dynamic typing are notable, the benefits of weak typing are not so useful.

##### Strict Comparison

Strict Comparison (`===`) is similar to loose comparison, but it will not coerce values into other datatypes.  

```
0 == "0"; // true
0 === "0"; // false;
```

When doing equality comparisons, you should be using strict comparison.

Objects and arrays with identical values are still distinct entities and will not be considered equal.  You will have to compare the parts yourself to decide.

#### Truthy or Falsy

When values are coerced into a boolean context, they are changed into true or false.  Unlike other coercions, this is generally considered useful, because boolean is many places, has an easily understood definition, and tends to be in places where clarity is helped if you don't have a lot of other terms in there converting explicitly.

The values that will evaluate as false in a boolean context are known as "falsey", and everything else is "truthy".

The falsey values:
* 0
* ""
* null
* undefined
* NaN (not a number, such as 4/0)
* false

Some places you'll see this used:
```
// Did they fill out that field?
if(element.value) { ... }

// Is this plural?
`You are all set to go to your ${ places.length ? "destinations" : "destination" }`;
```

Be careful!  An empty variable (`let foo;`) and an empty string (`""`) are falsey, but empty objects and arrays are truthy!  


