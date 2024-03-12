
// CHAINING PROMISES
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// DONT DO
/* fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
}); */

// DO LIKE THIS
/* fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  }) */

// Check server status code in response & throw error if not "OK"
// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })

// CATCHING ERRORS
// const fetchPromise = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[0].name);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   })


// COMBINING MULTIPLE PROMISES

// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
// );

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   })

// Promise.any()

// const fetchPromise1 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );
// const fetchPromise2 = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
// );
// const fetchPromise3 = fetch(
//   "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
// );

// Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((response) => {
//     console.log(`${response.url}: ${response.status}`);
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`);
//   })


// ASYNC AND AWAIT

// WON'T WORK

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// const promise = fetchProducts();
// console.log(promise[0].name); // "promise" is a Promise object, so this will not work

// WORKS

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }

// const promise = fetchProducts();
// promise.then((data) => console.log(data[0].name));


// alarm() API

/* const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm); */

// Promise-based API

const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
})