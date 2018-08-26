# Integration Movie Db

clone this project git clone <https://github.com/raldeskrisnu/moviedb.git>

integration with <https://api.themoviedb.org>

# Generate database
1. Create database with name 'moviedb' please using pgsql for database.
2. run this command for generate table 'knex migrate:latest'
3. and run this command for seed value 'knex seed:run'

# How to use it

1. > $ npm install / $ yarn install

2. > $ npm start / $ yarn start

3. Application will be running on <http://localhost:8080>

4. please register first on this endpoint <http://localhost:8080/auth/regis>

**Example:**

> Request Payload Method POST

> 		{
>			"username" : "raldes",
>			"password" : "raldes"
> 		}

> Response

>		{
>			"status" : "success",
>			"token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzY1MTIxNjEsImlhdCI6MTUzNTMwMjU2MSwic3ViIjo2fQ.pystJdcmWeXa8iAfszTf8txSl0N-3x2xh3HOH81z8UI"
>		}

5. you can use list of endpoint below with Header :

> Key : Content-type, Value : application/json
> 
> Authorization : Bearer {YOUR_TOKEN}


# List of Endpoint
1. {{url}}/api/v1/popularmovie || Method GET
2. {{url}}/api/v1/nowplaying || Method GET
3. {{url}}/api/v1/toprate || Method GET
4. {{url}}/api/v1/detailmovie/idmovie || Method GET

# Tech Stack
**CORE:**

1. Express Js
2. JWT (Json Web Token)
3. Axios
4. Knex
5. bcrypt
