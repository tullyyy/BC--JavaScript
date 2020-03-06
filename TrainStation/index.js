// Train station (stage 1)
// Let's have an array of numbers like this

// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];
// The numbers represent train departure times in minutes from midnight.

// Using a loop, output all of the values one by one to the console.
// Change your code so that instead of just minutes it outputs correct time. E.g for 500 it is 8:20.
// Instead of outputing the results to the console create a website with a div and output the times to the div using textContent property.
// Instead of the div use an unordered list and use its innerHTML property to fill it with items displaying the times.


// const departures = [494, 499, 500, 517, 520, 523, 530, 556, 563, 576, 586, 613, 625];

// Using a loop, output all of the values one by one to the console.
// for (minutes of departures) {
//   console.log(minutes);
// }

// Change your code so that instead of just minutes it outputs correct time. E.g for 500 it is 8:20.
// for (let i = 0; i < departures.length; i += 1) {
//   let hours = Math.floor(departures[i] / 60)
//   let minutes = departures[i] % 60;
//   console.log(`${hours}:${minutes}`)
// }
// 8:14
// 8:19
// 8:20
// 8:37
// 8:40
// 8:43
// 8:50
// 9:16
// 9:23
// 9:36
// 9:46
// 10:13
// 10:25

// Instead of outputing the results to the console create a website with a div and output the times to the div using textContent property.
// document.addEventListener('DOMContentLoaded', () => {
//   const box = document.querySelector('.box');
//   for (let i = 0; i < departures.length; i += 1) {
//     let hours = Math.floor(departures[i] / 60)
//     let minutes = departures[i] % 60;
//     box.textContent += `${hours}:${minutes}`;
//   }
// });


//// Instead of the div use an unordered list and use its innerHTML property to fill it with items displaying the times.

// document.addEventListener('DOMContentLoaded', () => {
//   const box = document.querySelector('.box');
//   for (let i = 0; i < departures.length; i += 1) {
//     let hours = Math.floor(departures[i] / 60)
//     let minutes = departures[i] % 60;
//     box.innerHTML += `<li>${hours}:${minutes}</li>`;
//   }
// });

// Instead of using a list as in the previous stage, design a proper representation of the departure board using an HTML table element. At first we only need the first column for the time information.
// <table>
//  <thead><th>Time</th></thead>
//  <tbody>
//    <tr><td>8:14</td></tr>
//  </tbody>
// </table>
// Update the code from the previous exercise to fill this table with correct times.


const departures = [{
    time: {
      hrs: 8,
      mins: 14
    },
    train: 'Acela Express',
    no: 2153,
    to: 'Washington, DC',
    status: '',
    track: 2
  },
  {
    time: {
      hrs: 8,
      mins: 19
    },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14
  }, {
    time: {
      hrs: 8,
      mins: 14
    },
    train: 'Acela Express',
    no: 2153,
    to: 'Washington, DC',
    status: '',
    track: 2
  },
  {
    time: {
      hrs: 8,
      mins: 19
    },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14
  },
  {
    time: {
      hrs: 8,
      mins: 14
    },
    train: 'Acela Express',
    no: 2153,
    to: 'Washington, DC',
    status: '',
    track: 2
  },
  {
    time: {
      hrs: 8,
      mins: 19
    },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14
  },
  {
    time: {
      hrs: 8,
      mins: 14
    },
    train: 'Acela Express',
    no: 2153,
    to: 'Washington, DC',
    status: '',
    track: 2
  },
  {
    time: {
      hrs: 8,
      mins: 19
    },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14
  },
  {
    time: {
      hrs: 8,
      mins: 14
    },
    train: 'Acela Express',
    no: 2153,
    to: 'Washington, DC',
    status: '',
    track: 2
  },
  {
    time: {
      hrs: 8,
      mins: 19
    },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14
  },
]


document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');
  // const time = document.querySelector('.time');
  // const train = document.querySelector('.train');
  // const no = document.querySelector('.no');
  // const to = document.querySelector('.to');
  // const status = document.querySelector('.status');
  // const track = document.querySelector('.track');


  for (let i = 0; i < departures.length; i += 1) {
    box.innerHTML += `<tr><td>${departures[i].time.hrs}:${departures[i].time.mins}</td>
    <td>${departures[i].train}</td>
    <td>${departures[i].no}</td>
    <td>${departures[i].to}</td>
    <td>${departures[i].status}</td>
    <td>${departures[i].track}</td></tr>`;
    // time.innerHTML += `<p><td>${departures[i].time.hrs}:${departures[i].time.mins}</td><p>`;
    // train.innerHTML += `<p><td>${departures[i].train}</td><p>`;
    // no.innerHTML += `<td>${departures[i].no}</td><p>`;
    // to.innerHTML += `<td>${departures[i].to}</td><p>`;
    // status.innerHTML += `<td>${departures[i].status}</td><p>`;
    // track.innerHTML += `<td>${departures[i].track}</td><p>`;
  }
});


// Put a bit of styling on the table and its rows so that it does look a bit more professional.
// Change the input array to contain objects instead of just numbers like this:
// const departures = [
//  {hrs: 8, mins: 14},
//  {hrs: 8, mins: 19},
//  // etc ...
// ]
// Make your page use this array instead of the previous one.

// Again change the input array to contain all the necessary information like this:
// const departures = [
//  {time: {hrs: 8, mins: 14}, train: 'Acela Express', no: 2153, to: 'Washington, DC', status: '', track: 2},
//  {time: {hrs: 8, mins: 19}, train: 'New Haven Line', no: 1541, to: 'Grand Central Terminal', status: 'On Time', track: 14},
//  // etc ...
// ]
// Make your page use this array instead of the previous one.