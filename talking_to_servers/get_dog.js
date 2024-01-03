
/*
    This is the painful way of doing the communication with the server you init the connection 
    and wait for the promise and the process and then use the response of the server...
*/

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

function addNewDogg() {
    /* a promise is just an object that will have a value in the future so it is a promise*/
    const promise = fetch(DOG_URL);
    promise.then(function (response) {
        const processingPromise = response.text();
        return processingPromise;
    })
    .then(function (processingPromise) {
        const dogObject = JSON.parse(processingPromise);
        const img = document.createElement("img");
        img.src = dogObject.message;
        img.alt = "Cute Dog Image";
        doggos.appendChild(img);
    }).catch(function (error) {
        // handle the error if something happened during the process...
        alert("oh something went wrong!!");
    });
}

document.getElementById("dog-btn").addEventListener("click", addNewDogg);


/*
    this is the faster way of doing it...
*/

/* 
    const DOG_URL = "https://dog.ceo/api/breeds/image/random";

    const doggos = document.getElementById("dog-target2");

    function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
        .then(function (response) {
        const processingPromise = response.json(); // json instead of text
        return processingPromise;
    })
        .then(function (processedResponse) {
        // we get to skip this line since it'll already be an object
        // const dogObject = JSON.parse(processedResponse);

        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Cute doggo";
        doggos.appendChild(img);
    });
    }

    document.getElementById("dog-btn2").addEventListener("click", addNewDoggo);
*/

/*
    this is the best way of doing it using Async Await
    ...
    what does await do :
        it wait for the promise witch is the object in this case and wait for it to finish
        until it finish once. so it pauses the execution until it finish.
    NB you can only use await if you are inside an Async function this is to keep in mind.
*/

const DOG_URL2 = "https://dog.ceo/api/breeds/image/random";

const doggos2 = document.getElementById("dog-target3");

async function addNewDoggo() {
    const promise = await fetch(DOG_URL);
    const processedResponse = await promise.json();

    // const img = document.createElement("img");
    // img.src = processedResponse.message;
    // img.alt = "Cute doggo";
    // doggos.appendChild(img);
}
// document.getElementById("dog-btn2").addEventListener("click", addNewDoggo);

/*
    something to keep in mind is that also async functions themselves return promises...
    so doing this:
        async function getName() {
            return "Brian";
            }

            console.log("a promise", getName());

            getName().then(function (name) {
            console.log("the actual name", name);
        });
        will output this:
            "a promise" Promise {}
            Promise {}"the actual name" "Brian"
*/