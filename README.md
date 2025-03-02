# CS-465-Full-Stack-Development

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

The RESTful API endpoints allow us to communicate with the server using HTTP methods such as GET, POST, and PUT. GET is used to obtain data from the server, POST is used to send data to the server, and PUT is used to update or replace a resource. In this TRAVLR application, the process of testing to make sure the SPA is working with the API for the GET, POST, and PUT methods to insert/obtain login or trip data into/from the database involves using Postman, a lightweight API client, to test the calls functionality. The data gets received in the response. One may even check the database with DBeaver or MongoDB Compass to ensure the calls worked. When using the calls on the webpage, they should also allow the updating of a new trip and receive and load that data onto the webpage as well as the database. Angular also includes some built-in testing utilities. For security we used authentication and authorization. When logging in, a JWT token is used to authorize the user to use the add trip, or edit trip functions.  

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
