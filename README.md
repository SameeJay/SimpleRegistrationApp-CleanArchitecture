Postman Request
  HTTP Method: POST  
  URL: **http://localhost:3000/register** (Or the domain you're using)

Body of the JSON req 
  {
    "id": "1",
    "name": "Sameera",
    "email": "sameera.madushan98@gmail.com"
  }

Expected Response (if user is successfully registered)
    {
      "id": "1",
      "name": "Sameera",
      "email": "sameera.madushan98@gmail.com"
    }

Expected Error Response (if user already exists)
  {
     "message": "User already exists"
  }



------------------------------------------------------------Description about this Project -----------------------------------------------------------------------------------------------------------------------------------
Clean Architecture Demonstration

This project is designed to demonstrate the concept of Clean Architecture and help grasp its abstract principles, especially the Dependency Rule. Clean Architecture emphasizes separation of concerns and enforces a structure that allows for better maintainability, testability, and scalability in software systems.

One of the core concepts of Clean Architecture is that high-level modules (such as business logic or use cases) should not directly depend on low-level modules (like databases or frameworks). Instead, both high-level and low-level modules should depend on abstractions, which are typically interfaces or abstract classes. This is where the Dependency Inversion Principle (DIP) comes into play.

The Dependency Inversion Principle ensures that the flow of dependencies is inverted so that high-level modules interact with abstractions rather than concrete implementations. Dependency Injection is used to achieve this: dependencies (such as repositories) are injected into high-level modules, instead of them being tightly coupled to specific implementations.

Through this demonstration, I have learned how to implement Clean Architecture, apply the Dependency Inversion Principle, and structure software so that the business logic is independent of infrastructure concerns. This approach enhances flexibility and allows easier testing, modification, and extension of the application.
