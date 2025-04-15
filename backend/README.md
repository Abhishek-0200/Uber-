# Uber Backend API Documentation

This document provides details about the user and captain-related endpoints.

---

## User Registration API Documentation

### Endpoint: `/api/users/register`

This endpoint allows new users to register by providing their first name, last name, email, and password. Upon successful registration, the API returns a JWT token and the user details.

---

### HTTP Method: `POST`

#### Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice@example.com",
  "password": "mypassword123"
}
```

#### Responses

##### Success Response

**Status Code:** `201 Created`

**Response Body:**

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

##### Error Responses

###### Missing Fields

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "Please fill all the fields"
}
```

###### User Already Exists

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "User already exists"
}
```

###### Validation Errors

**Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Example Response

##### Request:

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice@example.com",
  "password": "mypassword123"
}
```

##### Response:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice@example.com"
  }
}
```

### Endpoint: `/api/users/login`

#### HTTP Method: `POST`

#### Description

This endpoint allows existing users to log in by providing their email and password. Upon successful login, the API returns a JWT token and user details.

#### Request Body

The request body must be in JSON format and include the following fields:

```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

#### Responses

##### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

##### Error Responses

###### Invalid Credentials

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Invalid email or password"
}
```

###### Missing Fields

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "Please fill all the fields"
}
```

###### User Not Found

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "User not found"
}
```

###### Validation Errors

**Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Example Response

##### Request:

```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

##### Response:

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com"
  }
}
```

#### Error Responses

###### Missing Fields

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "Please fill all the fields"
}
```

###### User Not Found

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "User not found"
}
```
Validation Errors

Status Code: 400 Bad Request
Response Body:
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

---

## Captain API Endpoints

### 1. `/api/captain/register`

**HTTP Method:** `POST`

**Description:** This endpoint allows a new captain to register by providing their full name, email, password, and vehicle details.

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "type": "Sedan",
    "plate": "ABC123",
    "capacity": 4
  }
}
Validation Rules
fullname.firstname: Must be at least 3 characters long.
fullname.lastname: Optional but must be at least 3 characters long if provided.
email: Must be a valid email address.
password: Must be at least 6 characters long.
vehicle.color: Must not be empty.
vehicle.type: Must not be empty.
vehicle.plate: Must not be empty.
```

#### Responses

##### Success Response

**Status Code:** `201 Created`

**Response Body:**

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "type": "Sedan",
      "plate": "ABC123",
      "capacity": 4
    }
  }
}
```

##### Error Responses

###### Missing Fields

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "Please fill all the fields"
}
```

###### Captain Already Exists

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "Captain already exists"
}
```

###### Validation Errors

**Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Vehicle color must not be empty",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Vehicle type must not be empty",
      "param": "vehicle.type",
      "location": "body"
    },
    {
      "msg": "Vehicle plate must not be empty",
      "param": "vehicle.plate",
      "location": "body"
    }
  ]
}
```

#### Example Response

##### Request:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "type": "Sedan",
    "plate": "ABC123",
    "capacity": 4
  }
}
```

##### Response:

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "type": "Sedan",
      "plate": "ABC123",
      "capacity": 4
    }
  }
}
```

---

### 2. `/api/captain/login`

**HTTP Method:** `POST`

**Description:** This endpoint allows existing captains to log in by providing their email and password. Upon successful login, the API returns a JWT token and captain details.

#### Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

#### Responses

##### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "type": "Sedan",
      "plate": "ABC123",
      "capacity": 4
    }
  }
}
```

##### Error Responses

###### Invalid Credentials

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Invalid email or password"
}
```

###### Missing Fields

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "Please fill all the fields"
}
```

###### Captain Not Found

**Status Code:** `403 Forbidden`

**Response Body:**

```json
{
  "message": "Captain not found"
}
```

###### Validation Errors

**Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Example Response

##### Request:

```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

##### Response:

```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "type": "Sedan",
      "plate": "ABC123",
      "capacity": 4
    }
  }
}
```

---

### Endpoint: `/api/captain/profile`

**HTTP Method:** `GET`

**Description:** This endpoint allows a logged-in captain to retrieve their profile details.

#### Headers

Authorization: Bearer <jwt_token_here>

#### Responses

##### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "vehicle": {
      "color": "Red",
      "type": "Sedan",
      "plate": "ABC123",
      "capacity": 4
    }
  }
}
```

##### Error Responses

###### Unauthorized

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Unauthorized"
}
```

---

### Endpoint: `/api/captain/logout`

**HTTP Method:** `GET`

**Description:** This endpoint allows a logged-in captain to log out by clearing their authentication token.

#### Headers

Authorization: Bearer <jwt_token_here>

#### Responses

##### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "message": "Logout successfully"
}
```

##### Error Responses

###### Unauthorized

**Status Code:** `401 Unauthorized`

**Response Body:**

```json
{
  "message": "Unauthorized"
}
```