const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const response = [{
  "id": 1,
  "first_name": "Glenn",
  "mobile": true,
  "message": "Hey there! I am using WhatsApp",
  "date": "22-Mar-2016",
  "time": "5:46 PM",
  "image": "https://randomuser.me/api/portraits/men/1.jpg"
}, {
  "id": 2,
  "first_name": "Carl",
  "mobile": false,
  "message": "Do you smell what the rock is cooking?",
  "date": "22-Feb-2016",
  "time": "09:38 PM",
  "image": "https://randomuser.me/api/portraits/women/37.jpg"
}, {
  "id": 3,
  "first_name": "Rick",
  "mobile": true,
  "message": "Hello there it's been a while. Not much",
  "date": "01-Jul-2016",
  "time": "1:33 PM",
  "image": "https://randomuser.me/api/portraits/women/13.jpg"
}, {
  "id": 4,
  "first_name": "Maggie",
  "mobile": false,
  "message": "Oh Baby, baby baby... my baby baby",
  "date": "19-Feb-2016",
  "time": "02:59 AM",
  "image": "https://randomuser.me/api/portraits/men/5.jpg"
}, {
  "id": 5,
  "first_name": "Michael",
  "mobile": true,
  "message": "Extreme fishing with Robson green",
  "date": "12-Aug-2016",
  "time": "9:17 AM",
  "image": "https://randomuser.me/api/portraits/men/19.jpg"
}, {
  "id": 6,
  "first_name": "Jesus",
  "mobile": false,
  "message": "Why do people care about marcos' burial in LBNM",
  "date": "13-Aug-2016",
  "time": "10:37 PM",
  "image": "https://randomuser.me/api/portraits/men/18.jpg"
}, {
  "id": 7,
  "first_name": "Daryn",
  "mobile": true,
  "message": "Simply amazing, brilliant and absolutely fantastic",
  "date": "17-Nov-2016",
  "time": "07:32 AM",
  "image": "https://randomuser.me/api/portraits/men/30.jpg"
}, {
  "id": 8,
  "first_name": "Fred",
  "mobile": false,
  "message": "Saw you this morning and i wake up shitty.",
  "date": "29-Nov-2016",
  "time": "12:56 AM",
  "image": "https://randomuser.me/api/portraits/women/10.jpg"
}, {
  "id": 9,
  "first_name": "James",
  "mobile": false,
  "message": "I will never walk alone",
  "date": "27-Dec-2016",
  "time": "9:29 PM",
  "image": "https://randomuser.me/api/portraits/women/6.jpg"
}, {
  "id": 10,
  "first_name": "Matthew",
  "mobile": true,
  "message": "Got it",
  "date": "31-Dec-2016",
  "time": "7:43 PM",
  "image": "https://randomuser.me/api/portraits/men/18.jpg"
}];


app.get('/', (req, res) => {
    res.send('Hello World from Express.js!');
});

app.get('/userList', (req,res) => {
  res.send(response);
});


app.listen(port, () => {
    console.log('Express app listening on port 3000');
});
