#URLShortener 

This application aims to shorten urls provided in the input box. It optionally allows you to set an expiration time once the toggle is set active.
![image](https://user-images.githubusercontent.com/44074300/235665702-6ff0d67a-5d89-445c-9767-a3d563908ea5.png)



#Scalablity and limitation

This app uses a hashmap to store the submitted user url, expiration time and the shortened url in Spring. This causes some issues with scalability and the app appears "finnicky" with timing to recieving the user url and giving out a short url that redirects to the original. A technology  like redis would have come in handy, and in a larger scale, I would also use a database. 

I also ran into some issues with accessing current time vs time when link was clicked. 
I use the Validator library to check whether the url was valid, however it sometimes shows valid urls as invalid.

#Technologies used

Spring
React 
Lodash
Validator
