const app = require("express")();

// body-parser for accepting json data.
const bodyparser = require("body-parser");
const cors = require("cors");

// middleware added
app.use(bodyparser()); //helping with parsing request
app.use(cors()); // helping with cross origin

// Scheduler API 
app.post("/api/schedule", (req, res) => {
  //console.log(req.body)
  const { event } = req.body;
  //console.log(event)

  const { text, dateTime } = event;

  // miliseconds of that date
  const scheduleTime = new Date(dateTime).getTime();
  const currentTime = new Date().getTime();

  const timeout = scheduleTime - currentTime;

  // scheduling event OR Trigger Function()
  setTimeout(() => {
    console.log("FUNCTION TRIGGRED");
    // sleep function
    setTimeout(() => {
      const reverse = text.split("").reverse().join("");
      console.log(reverse);
      return res.json({ reverse });
    }, text.length * 1000);
  }, timeout);
});

// Listening for event
app.listen(5000, (err) => {
  console.log("Listening....", err);
});


