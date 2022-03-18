//List of 10 events

const events = [
    {
      text: "Hello1",
      dateTime: "2022-03-19 01:04:00.000",
    },
    {
      text: "Hello12",
      dateTime: "2022-03-19 01:05:00.000",
    },
    {
      text: "Hello123",
      dateTime: "2022-03-19 01:06:00.000",
    },
    {
      text: "Hello1234",
      dateTime: "2022-03-18 01:07:00.000",
    },
    {
      text: "Word",
      dateTime: "2022-03-18 01:08:00.000",
    },
    {
      text: "World1",
      dateTime: "2022-03-18 01:09:30.000",
    },
    {
      text: "World12",
      dateTime: "2022-03-18 01:10:00.000",
    },
    {
      text: "World123",
      dateTime: "2022-03-18 01:11:30.000",
    },
    {
      text: "secondLastEvent",
      dateTime: "2022-03-18 01:12:00.000",
    },
    {
      text: "lastEvent",
      dateTime: "2022-03-18 01:12:50.000",
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
  