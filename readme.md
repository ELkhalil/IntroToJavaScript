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

--------------------------------------------------------------------------------------------------------------------
                JavaScript Under The Hood
    how things works behind the scene, i wanted to understand the core functionalities of it to help me expand my knowledge

# JavaScript Principles:
    javascrirpt does not do fancy things it only go through our block of code and do the following:
    Thread of execution:
        when js code runs it
        - goes throught the code line by  line and runs/execute each line knowns as the thread of execution
        - saves the data like strings and arrays so we can use that data later in its memory
            we can even save code ('functions')
# Vanilla JavaScript
    Learned more about why should i use vanilla js before even moving to a framework.... i downloaded a pdf that contains the course slide so no need to
    take notes here go to: external_srcs/slides.pdf

# Getting a bit inside the server side of JS
    known as node js so what is it ?
        Node.js is an open source server environment
        Node.js is free
        Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
        Node.js uses JavaScript on the server   
    How does it work?
        we all know that js is a client side language that helps makes website interactive, it runs in a web browser
        from here someone took the idea and said: why not run the same javascript code but in a different env meaning outside 
        of a web browser, and it comes the idea of:
        Node.js is built on the V8 JavaScript engine, which is an open-source JavaScript engine developed by Google. V8 is known for its high-performance execution of JavaScript code. someone took it and build on it another env calles node js that help us execute code outside of a browser...
    Node.js is not a programming language; it is a runtime environment for executing JavaScript code on the server side. JavaScript, traditionally known as a client-side scripting language for web browsers, is used to create dynamic and interactive web pages. However, with Node.js, JavaScript can also be executed on the server, allowing developers to build scalable and high-performance server-side applications.

# The Story of Node.js
    - Introduction to Node.js:
        Node.js is a cool tech that lets you run JavaScript code outside of a web browser. Ryan Dahl created it in 2009 and the Node.js community has been keeping it up ever since.

    - The Birth of Node.js:
        Ryan Dahl was tired of dealing with the limitations of web browsers and the inefficiencies of server-side scripting languages, so he decided to create Node.js. He wanted a way to build scalable network applications that could handle a large number of connections with high throughput.

    - The First Release of Node.js:
        Node.js was released in 2009. It was based on the V8 JavaScript engine developed by Google for its Chrome web browser. The first version of Node.js included a limited set of core modules, including a HTTP server, a file system module, and a module for working with streams.

    - The Rise of Node.js:
        Node.js became popular quickly because it could handle a large number of concurrent connections with high throughput. It was also popular because it allowed developers to use JavaScript on the server-side, which was already familiar to many front-end developers. As Node.js gained popularity, the Node.js community grew, and many new modules and frameworks were developed to extend its capabilities.

    - Node.js Today:
        Node.js is now a mature and stable platform used by many companies to build high-performance network applications. It has a large and active community of developers who continue to develop new modules and frameworks to extend its capabilities. Node.js is often used in combination with other technologies, such as databases, front-end frameworks, and cloud platforms, to build full-stack web applications.

# node js:
    -> keep in mind that it is a Non Blocking IO means it uses the concept of one single thread and this thread is responsible for handling multi
        request at the same time the question is how does it do it?
            -> it uses a concept of _workers basically the mean thread give tasks to other workers who will wait for the data and handle the request 
        but what if the request is CPU intesive work mean will keep the main thread basy and want it to do CPU work in this case:
            -> we must not use node js for CPU intensive work as it will be blocked 
                "SO THE POWER OF NODE JS RELY ON IO INTENSIVE WORK AND NOT FOR CPU INTENSIVE WORK"
    -> a question that comes in my mind about this is how does this single thread keep track of those wordkers this introduce another important 
    concept witch is Asynchronous programming there will be an event loop and a call back that will know the worker got the response we want.
    -> the other question is what those workers are if they are not threads ??
        - as we will of course create handred of them if not thousand....Well the answer is that node js uses a concept of libuv witch is a special
        library that can be used actually outside of node js and it give us the opportunity to make non blocking IO.
        it is build in C lang
            witch uses the system kernel
                and has multiple threads.
    -> the best way to setup node js is to use nvm node versiom manager.

# browser vs Node.js
    JavaScript is a popular programming language used in both the browser and server-side applications. However, there are significant differences between how it works in the browser and in Node.js.
    1 -  Global Object
        In a browser, the global object is window, while in Node.js, it is global. For example, to log the global object in a browser, we can use:
            console.log(window);
        To do the same in Node.js, we use:
            console.log(global);
    2 - Modules
        We can import modules in the browser using script tags with the type attribute set to module and the src attribute set to the path of the module file. For example:
            <script type="module" src="./module.js"></script>
        ​We can then use the exported functions in our JavaScript code. For instance, we can import a sayHello function from a module called module.js and use it in our main JavaScript file as follows:
            import { sayHello } from './module.js';
            sayHello();
        On the other hand, in Node.js, we use the require  or import statement to import modules:
            import { module } from './module.js';
    3 - DOM
        The browser has a Document Object Model (DOM) that allows us to interact with HTML elements. For example, to change the text of an HTML element in the browser, we can use:
            document.getElementById('elementId').innerHTML = 'New text';
        However, in Node.js, there is no DOM, so we cannot access or manipulate HTML elements.
    4 - Server vs. Website
        Node.js is mainly used for server-side applications, while the browser is used for websites. For example, we can create a simple server in Node.js using:
            ```jsx
                const http = require('http');

                const server = http.createServer((req, res) => {
                res.write('Hello World!');
                res.end();
                });

                server.listen(3000);
            ```
        On the other hand, in the browser, we can create a website using HTML, CSS, and JavaScript.
    5 - Console
        The console object works the same way in both the browser and Node.js. For example, to log a message in the browser, we can use:
            console.log('Hello World!');
        Similarly, in Node.js, we can use:
            console.log('Hello World!');
    JavaScript is used in both the browser and Node.js, but there are significant differences in how it works in each environment. However, there are also many similarities, and if you already know JavaScript, you should be able to quickly pick up Node.js. Understanding the differences and similarities between the two environments is crucial when developing applications in either of them.

# Node REPL
    -> by only using node we open an interacative console like the one in the browser and write direct js code and evaluate it directly,=.
    Node.js is a popular open-source server environment built on Chrome's V8 JavaScript engine. One of the most useful tools provided by Node.js is the REPL (Read-Eval-Print-Loop), which allows you to execute JavaScript code interactively in a terminal.
    The Node REPL is similar to a command-line interface for JavaScript. It is an interactive environment where you can enter JavaScript code and see the results immediately. It is great for testing out small pieces of code or experimenting with new features.
    To start the Node REPL, simply open your terminal and type `node`. This will give you access to the Node REPL prompt where you can start typing your JavaScript code.

    Here are some examples of how to use the Node REPL:

    ```bash
    // Basic arithmetic
    > 2 + 2
    4

    // String manipulation
    > 'hello, world'.toUpperCase()
    'HELLO, WORLD'

    // Defining a variable
    > var x = 10
    undefined
    > x
    10

    // Using a function
    > function add(a, b) { return a + b }
    undefined
    > add(3, 5)
    8
    ```

    The Node REPL is a great tool for quickly testing out ideas, debugging code, or experimenting with new features. It can also be useful for prototyping code before integrating it into a larger project.
    However, the Node REPL is not a substitute for a proper development environment. It is not designed for writing large or complex code, and it lacks many of the features and tools that are available in a full-fledged IDE or text editor.
    Overall, the Node REPL is a useful tool for any JavaScript developer, but it should be used in tandem with a proper development environment to ensure the best results.

# Creating a CLI
    Process and Environment
        ## Process
            n Node.js, the process object is a global object that provides information about the current Node.js process and allows developers to interact with it. Some of the most commonly used properties and methods of the process object are:

            - `process.argv`: an array that contains the command line arguments passed to the current process
            - `process.pid`: the ID of the current process
            - `process.env`: an object that contains the environment variables of the current process
            - `process.exit()`: terminates the current process with an optional exit code

            Here's an example of how to use the `process.argv` property to get the command line arguments passed to a Node.js script:

            ```jsx
            // script.js
            console.log(process.argv);
            ```

            If we run this script with the command `node script.js arg1 arg2`, the output will be:

            ```jsx
            [ 'node', '/path/to/script.js', 'arg1', 'arg2' ]
            ```

            This shows that the `process.argv` array contains the path to the Node.js executable, the path to the script being run, and the two arguments passed to the script.  
        ## Environment
            The environment in Node.js refers to the set of variables that are available to a program at runtime. These variables are stored in the `process.env` object, which is an object containing key-value pairs of environment variable names and values.
            Here's an example of how to use the `process.env` object to access environment variables:

            ```jsx
            // script.js
            console.log(process.env.NODE_ENV);
            ```

            If we run this script with the command `NODE_ENV=production node script.js`, the output will be:

            ```jsx
            production
            ```

            This shows that we can access the value of the `NODE_ENV` environment variable using the `process.env` object.

        ## Conclusion
            In conclusion, understanding the process and environment in Node.js is crucial for building scalable and high-performance applications. By using the process object and environment variables, developers can access and manipulate the runtime environment of their programs.







