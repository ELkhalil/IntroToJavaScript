#1 JavaScript Values (Primitive and Complex Data):
---------------------------------------------------
    _> Primitive Values:
            in javascript we do not give types to our datatypes unlike C and C++ (strongly typed languages)
        Number: 
                42  3.14    //we don't need to specify if it is a decimal or not they both considered numbers in JS.
        String:    
            "Holly Molly"   // we use double quotes or single quote they both mean the same thing.
        Booleen:    //
            true    |   false
        special to Javascript:
            1- underfined
                when you create a variable in javascript without giving it a value it will be undefined.
                (undefined is a value also we can give it to a variable easily)
            2- null
                empty value (opposite to undefined it means nothing is there)
    _> Complex Data:
            Array: it consist of values of something separated by ','
                [23, 44, 67]
                - zero indexed (start from 0 and based on indexes)
            Object:
                - in JS to create an OBJ we use curly braces '{}'
                - it consist of keys as the name or the key or property and a value of it.
                - assignement symbol ':' it is the same as '='
                    { age: 23 }
                    { "age": 23} // this is the same as the previous one.
            Object Terminology
                - we need to use properties separator witch is ','
                {
                    age: 22,
                    firstName: "Abdo"
                }
#2 Operations (Binary, Numbers Arithmetic and String Concatenation)
--------------------------------------------------------------------
Binary Operation:
    is an operation of two elements witch consist of two operands and an operator
    example: 34 - 7 ( operand - operand) like '-' '+' '*' '/' '%' those all the basic operators.
             Addition - Subtraction Division Modulo Multiplication
String Concatenation:
    "Abderrahman" + "Elkhalil"
    + does the concatination here...
#3 JavaScript Operations (Unary Operation)
-------------------------------------------
Unary Operation:
    it is an operation that consist of only one operand
    !false -> switch the meaning of false it is now true
    '!' -> it flips the operation
#4 Comparison (Logical Operators) - logical AND, Logical OR and logical NOT 
-----------------------------------------------------------------------------
Comparison - Logical Operator
    Logical OR:   true || false -> true 
    Logical END: true && false -> false -> it is only true if both true
    Logical NOT: !(true || false) -> it flips the output of the operation
#5 JavaScript Comparison (Equality)
-----------------------------------
    it is a binary operation to be compared
        45 == 45 -> equals to check if the numbers are equal
    strict equals (3 equals)
        45 === "45" -> check if the numbers and the type is the same
        it consist of two kind of comparisons the first one is a check if 45 == 45 and also 
        it check if the type is the same.
#6 JavaScript Comparison (Inequality)
-----------------------------------
    45 != 45 not equal 
    45 !-- "45" check if the number are unequal or don't have the same type.
#7 JavaScript Comparison (Less and Greater) 
---------------------------------------------
    12 < 34 -> less than
    > greater than
    >= greater than or equal
    <= less than or equal
#8 Kifach Katstocka Variable f l Memory
---------------------------------------------
    var age = 34;
    var: keyword to declare a variable 
    =: assignement operator
    34: value to be stored in memory.
#9 Expression vs Statement Introduction
---------------------------------------------
    Expression:
        is something that Produce a value.
            '{}' '[]' 12 class {}
        ternary expression: isMember ? "$2.00" : "$10.00" | sayHi() -> function call
    Statements Examples:
        Performs an action and does not return a value.
        Variable declaration:
            var a = 23 + 4;
        conditionals statements:
            if (true)
                //do something...
#13 Comparison if & else - Coding
----------------------------------
if (condition)
{

}
else
{

}
#15 Conditional Ternary & Ternary Chains
-----------------------------------------
(condition) ? true : false;
if else tenary mode:
age = 18;
let message = 
    age < 3 --------------------------> if 
        ? "Hi, baby!"  ---------------> true
        : age < 18 -------------------> else if
        ? "Hello!" -------------------> true
        : age < 100 ------------------> else if
        ? "Greetings!" ---------------> true
        : "What an unusual age!" -----> else here
#21 Binding
------------
    when doing the following we are binding 
        let number = 12;
    let here does the Binding it keep track of the state of the number.
    let: keyword
    number: name of the binding
    In JavaScript, the `let` and `var` keywords are used to declare variables, but they behave differently in terms of scope and hoisting.

    1. **`var`**: Variables declared with `var` are function-scoped. This means that the variable is only visible within the function in which it is declared. If it's  declared outside any function, it becomes a global variable. Additionally, `var` variables are hoisted to the top of their scope during the compilation phase, which     means they can be used before they are declared.

       ```javascript
       function exampleVar() {
         if (true) {
           var age = 27;
         }
         console.log(age); // 27 (variable is accessible outside the block)
       }
       ```

    2. **`let`**: Variables declared with `let` are block-scoped, meaning they are only visible within the block (enclosed by curly braces) in which they are declared.     Unlike `var`, `let` variables are not hoisted to the top of the block, so you can't access them before the declaration.

       ```javascript
       function exampleLet() {
         if (true) {
           let age = 27;
         }
         console.log(age); // ReferenceError: age is not defined
       }
       ```

    In modern JavaScript, it's generally recommended to use `let` and `const` over `var` because they have more predictable scoping behavior and help avoid certain types   of bugs. `const` is used for constants (values that should not be reassigned), while `let` is used for variables that can be reassigned.

    The concept of "binding" in JavaScript refers to the association between a variable and its value. The `let` and `var` keywords are used to create bindings, and the    scope rules determine where these bindings are accessible.

#22 JavaScript Functions Terminology:
--------------------------------------
function functionName( parameters or inputs )
{
    return type;
}
#24 NaN (Not a Number):
-----------------------
typeof NaN; -> number
we use isNaN to check if NaN.

#25 Type Coercion Intro:Weakly vs Strongly Typed Languages, Dynamic vs Static typing
------------------------------------------------------------------------------------
    JavaScript is a Untyped Language && Javascript is a Weekly-typed Language
    meaning the type of an element is not required.

    Strong: it means the type of data ur using is very important
    Dynamic: means the type is checked during the run time like python | php | javascript
    Static: opposite to Dynamic the type is checked during the compile time.

                              Strong
        Erlang Groovy Clojure   |
            Python Magik        |       C#     Scala
                                |           Java
                                |       F#      Haskel
    Dynamic<------------------------------------------->Static
                                |
             PHP Perl           |     C
                                |
            VB JavaScript       |                 C++
                                |                                       
                              Weak
#26 Explicit vs Implicit JavaScript Type Coercion
--------------------------------------------------
    Type Coercion: it is like changing a type or casting it like from a string to Number
        parseInt("23")  -> 23 

    String to boolean
        const fullName = "abdo khalil";
        !!fullName;   -> true  // here we used Double Bang NOT NOT
        or we use a built in function for this:
            Boolean(fullName);  -> true
    Explicit:
        when we do it manually
    Implicit:
        JavaScript does the job behind the scenes.

-------------------------------------------------------------------------------------------------------
        FRONTENDMASTERS 
1- why whoud we put the script tag inside the body like this:
    <script src="./experiment.js"></script>
    it depends if we need it to be loaded first we must put it in the head like google analytics or something 
    if it is not required at first put it in the body.
        the order is important but put it in the body to keep ur website faster...

-------------------------------------------------------------------------------------------------------
                                Talking to Servers
                                -------------------
JSON: JavaScript Object Notation.
Some times you want to request additional data from the server after your page has loaded. Imagine like scrolling through your Facebook or Twitter feeds: when you reach the bottom it requests more data from the server to keep your infinite doomscroll going.

Requesting data from the server after the page has loaded is called AJAX. AJAX is an old acronym that has been around for a while and actually now doesn't make any sense but we still use it. It stands for asynchronous JavaScript and XML (we don't typically use XML anymore.) However the name AJAX stuck so that's what it means.

Before we hoptoo much into the AJAX portion, let's spend a bit with JSON. We need some standard language that your frontend website can speak with your backend, someway to encode messages. Think of it like morse code: we need some way that both the sender and receiver of messages can encode their messages so it's understood by both.

This is what JSON is. It stands for JavaScript Object Notation and it looks a lot like, surprise-surpise, JavaScript objects.

        {
            "name": "Luna",
            "age": 10,
            "breed": "Havanese",
            "location": {
                "city": "Seattle",
                "state": "WA"
            }
        }
Looks like valid JavaScript, right? That's because it is! We could literally copy-and-paste that code straight into our JavaScript code and it'd just work. That's because 99.999999% of all JSON is valid JavaScript (there are some corner cases but I'd bet most devs didn't even know that.)

So let's try it out. Let's pretend we submitted a request to a server and got back a response. The response will always come back as a string so we have to convert it to an object. Luckily JavaScript can do that for us.

# pretend this came from a server instead of me just declaring it here.
    const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;
    console.log(responseFromServer); // a string
    const responseObject = JSON.parse(responseFromServer);
    console.log(responseObject.name); // just the name
    console.log(responseObject.location.city); // just the city
    console.log(responseObject); // the whole object
# result 
        "{\"name\": \"Luna\",\"age\": 10,\"breed\": \"Havanese\",\"location\": {\"city\":\"Seattle\",\"state\": \"WA\"}}"
        "Luna"
        "Seattle"
    Object {
        "age": 10,
        "breed": "Havanese",
        "location": Object {
          "city": "Seattle",
          "state": "WA",
        },
        "name": "Luna",
    }
That's what the JSON builtin object is for, handling data to and from JSON.
Escape Characters
You probably see a lot of \ being added. These are called escape characters. Notice it's showing the string between " but the JSON uses " inside of it. The way you prevent that " from ending the string is using \" to signify that you're wanting to use the " inside the string. So if you wanted to have a string of just one " you'd need to do const quotes = "\"". Or you could just do '"' too!.

# OOP in JavaScript
    "Everything in JS, is an object"
    - obj in js is like obj in real life
    - they have properties and things they can do (methods)
    Builtins objects:
        va names = ['tyu', 'crystal', 'mario']
            if i run names we can see the obj content and we will be able to find the methods
            names.sort()
        - the mother of all obj is the window obj
        - one thing to remember is that primitive data types are not objects but javascript gives a default wrapping to 
        them if we try to use them as object JS will wrap them inside a temporary object...
# Prototype Property - Prototypes Fundamentals




















