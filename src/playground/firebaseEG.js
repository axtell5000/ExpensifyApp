// // ref() with nothing in parenthesis means the root of the database
// database.ref().set({
//   name: "Stephen Axtell",
//   age: 45,
//   isMarried: false,
//   stressLevel: 6,
//   job: {
//     title: 'Sofware developer',
//     company: 'Google'
//   },
//   location: {
//     city: "Cape Town",
//     suburb: "Plumstead"
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('The first one failed.', e);
// });
//
// database.ref('age').set(21); //this will just change age with 21
// database.ref('location/city').set('Benoni'); // just changing city in the location object
//
// // here we are adding an additional root child to database
// database.ref('attributes').set({
//   height: 176,
//   weight: 89
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed.', e);
// });
//
// // update allows us to do different things to different fields at once
// database.ref().update({
//   name: 'Bam Bam',
//   age: 25,
//   isMarried: null // deleting
// });
//
// // If we want to change the city we have to do it like below, because update() always starts at the root
// database.ref().update({
//   'location/city': 'Pretoria'
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seatlle'
// });
//
// // another way to remove something, but rather use the one below
// // database.ref('isMarried').set(null);
//
// // var adaRef = firebase.database().ref();
// // adaRef.remove()
// //   .then(function() {
// //     console.log("Remove succeeded.")
// //   })
// //   .catch(function(error) {
// //     console.log("Remove failed: " + error.message)
// //   });
//
// // FETCHING DATA FROM FIREBASE
//
// // once returns a promise. it fetches the data once
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data ', e);
//   });
//
// // Another way to fetch data is using on(), it doesnt return a promise, but it subscribes to the database, so if the
// // database changes the javascript will change
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching ', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(50);
// }, 4000);
//
// setTimeout(() => {
//   // off() is used to unsubscribe, you dont want to be still subscribed if say you leave the page. Empty parenthesis
//   // means to unsubscribe everything. Whereas in this eg we are only unsubscribing from onValueChange
//   database.ref().off('value' ,onValueChange);
// }, 6000);
//
// setTimeout(() => {
//   database.ref('age').set(100); // the database will still be updated with this
// }, 8000);
//
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// database.ref().remove();

// using push() will add an unique id to your data
// database.ref('notes').push({
//   title: 'Course Topics 2',
//   body: 'Python, Angulars'
// });

// database.ref('notes/-KxSWUemCJf8b1baTruh').update({
//   body: 'Buy yo-yo'
// });

//database.ref('notes/-KxSWUemCJf8b1baTruh').remove();

// database.ref('expenses').push({
//   description: 'Walk Dog',
//   note: 'Exercise',
//   amount: 200,
//   createdAt: 0
// });

// const expenses = database.ref('expenses')
//   .on('value')
//   .then( (snapshot) => {
//     console.log(snapshot.val()); // before any manipulation
//
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       console.log(childSnapshot.val());
//
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
// });

// does something when a child is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//
//   console.log('Child removed ', snapshot.key, snapshot.val());
// });
//
// // does something when a child is changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//
//   console.log('Child changed ', snapshot.key, snapshot.val());
// });
//
// // does something when a child is added, will be called each time for existing childs as well
// database.ref('expenses').on('child_added', (snapshot) => {
//
//   console.log('Child added ', snapshot.key, snapshot.val());
// });

