<p align="center">
  <img ![wire payments](img src="https://github.com/izzysalles/wirepayments/blob/master/readme_images/wirepayments.jpg")/>
</p>

## Introduction 
The Wire Payments is an API which was developed through the Wirecard Back-End Challenge, as a part of the selection process. This API is responsible for processing payments, it accepts two payment methods: credit card and boleto.

## Table of Contents
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [How to use the API and Checkout](#how-to-use-the-api-and-checkout)
- [Routes](#routes)

## Technologies
In this project the following technologies were used:

- [Yarn](https://yarnpkg.com) - Package manager
- [Mongoose](https://mongoosejs.com) - Object modeling for node.js
- [MongoDB](https://www.mongodb.com) - Database
- [MongoDBAtlas](https://www.mongodb.com/cloud/atlas) - Database host (cloud database)
- [Jest](https://jestjs.io) - Test runner for node.js
- [Docker](https://www.docker.com) - Create the project's image

## Getting Started

First of all, you need to clone this repository to you computer:

```
$ git clone https://github.com/izzysalles/wirepayments.git
```

Now you need to have Docker installed, then you should create a new image:

```
$ docker build -t wirepayments .
```

After this, you must run a new container on port 3000:

```
$ docker run -p 3000:3000 -d wirepayments
```
Now the container has been created and you can continue!


## Running Tests

To run the unit tests, you must have Node.js and this repository in your computer, to clone the repository you can run this command:

```
$ git clone https://github.com/izzysalles/wirepayments.git
```

After that, you need to enter the project's folder and run:

```
$ npm install
```

Then, if you want to run the server:

```
$ yarn run dev
```

Now, if you want to run the unit tests you just have to type this:

```
$ yarn run test
```

## How to use the API and Checkout

Here is a [Postman Documentation](https://documenter.getpostman.com/view/9700480/SzKMzM6R?version=latest) that describes how the API should be correctly used.

## Routes

| Routes       | Description                 | Methods |
|    :---:     |            :---:            |  :---:  |    
|/client       |register a new client        |POST     |
|/buyer        |register a new buyer         |POST     |
|/payment      |create a new payment         |POST     |
|/payment/     |get info of a payment status |GET      |