// Promise ( All And Race):

// Promise All
const firstPromise = new Promise((resolve, reject) => {
    let connect = true;
    if(connect){
        resolve("first promise resolved");
    }else{
        reject("first promise rejected");
    }
})

const secondPromise = new Promise((resolve, reject) => {
    let settings = true;
    if(settings){
        resolve("second promise resolved");
    }else{
        reject("second promise rejected");
    }
})

Promise.all([firstPromise, secondPromise]).then(
    (result) => {
        console.log(result);
    }
);

// Promise Race
/* const firstPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve("first promise resolved");
    },500);
})
// .then(
//     (result) => {
//         console.log((result));
//     }
// )

const secondPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve("second promise resolved");
    },100);
})
// .then(
//     (result) => {
//         console.log((result));
//     }
// )

Promise.race([firstPromise, secondPromise]).then(
    (result) => {
        console.log(result);
    }
); */
