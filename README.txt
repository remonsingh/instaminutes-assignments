# instaminutes-assignments


//Choice of Framework:

Express(NodeJS Framework)
It does rapid server side programming.
It helps in building API easily as we write less code with express and it also provides many inbuilt functions/methods.
It just requires NodeJS understanding (Easy learning curve).
It enables connection with the frontend through a minimalistic approach.

//Approach-

Created an API which accepts an event as request then calculates the timeout time and triggers a function 
at scheduled date and time which then returns event's text backwardly typed after event's text length seconds as response.

Created a script for iterating over events and scheduling it.

Created index.html to call script scheduler which internally calls API scheduler to schedule events.


//Problems faced and Solution found:

1)
Problem-
How to implement scheduler?
Solution -
 Planned the flow/structure of scheduler beforehand and implemented accordingly.

2)
Problem-
Timeout issue of API 
Solution- 
 Instead of passing entire array of events, just passed one event at a time.




