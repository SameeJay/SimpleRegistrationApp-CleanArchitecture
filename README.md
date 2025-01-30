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
