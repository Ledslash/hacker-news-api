[FrontEnd](https://github.com/Ledslash/hacker-news-feed)
[Backend](https://github.com/Ledslash/hacker-news-api)

# Start the project
First you will need to create a .env file using the .envExample file i have set for the project
(in this case i have left the .envExample with the same data as the .env for easy testing)


By default the project populates the database by itself so you would only need to isntantiate the dockerfiles with
```
docker-compose up --build -d
```

if you want to run the project locally then you would have to change the .env file MONGO_HOST to the one you want to set, and you would need to use these commands to install the necesssary packages
```
npm install
```
and then to start the backend
```
npm run start
```


# Project Description
The backend for this project was made using NodeJS as requested, i've also used (altough with some freedom) CLEAN architecture
as is the architecture i've found some comfort with personal development.

In here you will see that i separate concerns between the project taking heavy advantage of
dependency injection to be able to inject the necessary functions into another functions.

The structure goes this Way:

* Data access: which is the raw database calling code and gets injected into other functions for usage
* post: even tho it was hardly used, i declared it because there i setup all the data revision and change it might appear
* user-cases: here's where i connect the project between mode, data call and other dependencies.

It is also important to note that while this is not a fully developed REST API (since it's missing calls with post for creation and modification), it follows a simple yet rest-like way; you can get all the data by calling get into the url and delete by using the pots ID and sending an http request using delete.