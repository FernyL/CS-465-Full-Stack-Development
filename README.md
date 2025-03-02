# CS-465-Full-Stack-Development

Architecture:

Compare and contrast the types of development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

This application uses the MEAN stack architecture which includes MongoDB, Express.js, AngularJS, and Node.js. Angular is a powerful front-end framework that handles the client side while Express is a minimal framework that handles the backend. These two frameworks are similar in some ways such as how they both essentially used a model (data), view (presentation), controller (application logic) architecture. JavaScript, HTML, and CSS were all used to provide structure and style to the webpage. Angular was used to build the front-end single-page application. Angular supports the separation of concerns and separates the application logic from the user interface layer. This makes Angular more organized since it is component based. Angular also uses two-way data binding to allow components in the application to share data. This allows synchronization between the model and view. We use a NoSQL MongoDB database as it is flexible when it comes to storing/managing structured or unstructured data in the database. MongoDB also works well when it comes to storing JSON documents and rendering them with a handlebars templating engine.

Functionality:

How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?
Provide an instance in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JavaScript, along with HTML and CSS, is a programming language used in the development of most websites. JSON (JavaScript Object Notation) on the other hand is a data format that allows for the storage and exchange of data between systems and applications. This allows data to be stored and exchanged between the frontend and backend of the application along with the use of APIs. One instance in which we refactored code to improve the functionality and efficiencies is when we took the static HTML site and moved it to dynamic JSON by using the handlebars templating engine. This allows for reusable templates, reduces redundancy, and improves code readability.   

Testing:

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

The RESTful API endpoints allow us to communicate with the server using HTTP methods such as GET, POST, and PUT. GET is used to obtain data from the server, POST is used to send data to the server, and PUT is used to update or replace a resource. In this TRAVLR application, the process of testing to make sure the SPA is working with the API for the GET, POST, and PUT methods to insert/obtain login or trip data into/from the database involves using Postman, a lightweight API client, to test the calls functionality. The data gets received in the response. One may even check the database with DBeaver or MongoDB Compass to ensure the calls worked. When using the calls on the webpage, they should also allow the updating of a new trip and receive and load that data onto the webpage as well as the database. Angular also includes some built-in testing utilities. For security we used authentication and authorization. When logging in, a JWT token is used to authorize the user to use the add trip, or edit trip functions.  

Reflection:

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me by giving me the insight and skills necessary to develop a full stack application. This was my first experience with full stack development and I learned the importance of the using the MEAN stack and MVC architecture. I have developed the skills important for developing scalable and flexible web applications. From frontend to backend development, RESTful API endpoints, MongoDB management with mongoose, and the use of JWT tokens for authorization I have developed the skills necessary to be a more marketable candidate.   
