
![Logo](https://pbs.twimg.com/media/Fz_13HiX0AEnCOH?format=png&name=small)


# PetStore 🐾
This repository contains the source codes of the secound challenge of Compass UOL, 
PetStore is microservice is designed to provide various features related to tutors and pets. It allows users to perform operations such as creating tutors, managing pets associated with tutors, and performing authentication.

## Features 📍
The microservice includes the following features:

- GET /tutors: Retrieves all tutors. This operation requires authentication to access the data.

- POST /auth: Authenticates a user. This endpoint allows users to authenticate themselves by providing the necessary credentials.

- POST /tutor: Creates a new tutor. Users can use this endpoint to add a new tutor to the system.

- PUT /tutor/:id: Updates a tutor. This operation requires authentication to ensure the user has the necessary permissions to modify tutor data.

- DELETE /tutor/:id: Deletes a tutor. This endpoint allows authorized users to delete a tutor from the system.

- POST /pet/:tutorId: Creates a pet and associates it with a tutor. Users can use this endpoint to add a new pet and link it to a specific tutor.

- PUT /pet/:petId/tutor/:tutorId: Updates a pet's information. This operation requires authentication to ensure only authorized users can modify pet data.

- DELETE /pet/:petId/tutor/:tutorId: Deletes a pet from a tutor. Authorized users can remove a pet associated with a tutor using this endpoint.

Please note that all the endpoints marked with "Authentication required" necessitate the user to provide valid authentication credentials to access the respective functionality.
## Prerequisites 👟 

- Node.js (v18.12.1)
- MongoDB (v5.6.0)
- cors (v2.8.5)
- dotenv (v16.1.4)
- express (v4.18.2)
- mongoose (v7.3.0)

## Using Postman or Insomnia 🐾
You can use Postman or Insomnia to interact with the PetStore microservice endpoints. Here's how to get started:
## Configuration ⚙️

1 - 1 - Clone the repository:
```bash
https://github.com/MarshallLiu-Dev/Challenge-2.git
```
 2 - Install the dependencies:

 ```bash

 npm install
```

3- Configure the environment variables:

##### Create a .env file in the project's root directory and define the following variables:

Environment Variables

To run this project, you'll need to add the following environment variables to your .env file:

 ```bash
MONGO_URI =  ''            
SECRET = '' Hash 
```

4 - Start the server:


 ```bash
npm run start:dev 

```
## Authors 🧑‍💻

-  [@MarshallLiu-Dev](https://www.github.com/MarshallLiu-Dev)


## Stack 🖥️ 

**Back-end:** Node, Express, TypeScript, MongoDB, Swagger, Eslint, Prettier


## Feedback 🗣️


If you have any feedback, please let us know via Twitter.  [@MarshallLiu_](https://twitter.com/MarshallLiu_) Instagrem  [@Marshall.Liu_](https://www.instagram.com/marshall.liu_/)

