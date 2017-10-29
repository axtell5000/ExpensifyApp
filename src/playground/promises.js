
// 99% of the time wont need to do this type of thing
const promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve('This is my resolved data');
    //reject("Something went wrong");
  }, 2000);

});

console.log('before');

// this way
promise.then((data) => {
  console.log("2", data);
}).then(() => { // chaining
  console.log('Does this run');
}).catch((error) => {
  console.log('error: ', error);
});

// is the same as this
// promise.then((data) => {
//   console.log("2", data);
// },(error) => {
//   console.log('error: ', error);
// });

console.log('after');
