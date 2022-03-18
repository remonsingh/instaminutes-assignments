//List of 10 events

const events = [
    {
      text: "Hello",
      dateTime: "2022-03-18 23:12:00.000",
    },
    {
      text: "iamsuperman",
      dateTime: "2022-03-18 23:12:30.000",
    },
    {
      text: "Hello",
      dateTime: "2022-03-18 23:12:00.000",
    },
    {
      text: "BANANA",
      dateTime: "2022-03-18 23:13:30.000",
    }
  ];
  
  //script to loop for iterating over events and scheduling it
  const schedule = (events) => {
    events.forEach((event) => {
      // calling an API
  
      fetch(`http://localhost:5000/api/schedule`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ event }),
      })
        .then((res) => {
            res.json().then((data) => console.log("RESULT", data));
         })
        .catch((e) => console.log("SOMETHING WENT WRONG", e));
    });
  };
  
  //invoking schedule
  schedule(events);
  