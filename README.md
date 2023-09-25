# Node.js Application Readme

This readme provides detailed instructions on setting up and running a Node.js application that includes six APIs for various web scraping tasks. The application can be run natively using Node.js or via Docker using docker-compose. Additionally, a Postman collection is provided for testing the APIs.

## Table of Contents
- [Prerequisites](1)
- [Installation](2)
- [Running the Application](3)
- [API Endpoints](4)
- [Testing with Postman](5)

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

Node.js 18.x
npm (Node Package Manager)
Docker (if you prefer using Docker)
Postman (for API testing)

## Installation
Follow these steps to set up the Node.js application:

Clone the repository to your local machine:

```
git clone https://github.com/anik587/otomoto-scraper
cd otomoto-scraper
```
Copy the environment configuration file .env.environment to .env:
```
cp .env.environment .env
```

Install the required Node.js dependencies using npm:

```
npm install
```
## Running the Application
You can run the application either natively with Node.js or using Docker.

### Native Node.js
To start the application using Node.js, execute the following command:
```
npm start
```
### Docker
To run the application using Docker and docker-compose, follow these steps:

Make sure you have Docker installed and the Docker daemon is running.

Build the Docker image:
```
docker-compose build
```
Start the Docker containers in detached mode:
```
docker-compose up -d
```
The application will be accessible at http://localhost:3000 in both native and Docker setups.

## API Endpoints
The application provides the following API endpoints:

1. Fetch Next Page URL:

- Endpoint: http://localhost:3000/fetch-next-url
- Purpose: Fetch the next page URL for a given URL.

2. Fetch Items:

- Endpoint: http://localhost:3000/fetch-items
- Purpose: Fetch all items from a given URL.
3. Fetch Counts:

- Endpoint: http://localhost:3000/fetch-counts
- Purpose: Fetch the total number of ads in a given URL.
4. Fetch Item Details:

- Endpoint: http://localhost:3000/fetch-item-details
- Purpose: Fetch details from a given ad's original URL.
5. Fetch All Items:

- Endpoint: http://localhost:3000/fetch-all-items
- Purpose: Fetch all ads from a given URL.
6. Fetch All Pages:

- Endpoint: http://localhost:3000/fetch-all-pages
- Purpose: Fetch all page URLs from a given URL.

## Testing with Postman
A Postman collection has been provided for convenient testing of the application's APIs. Import the collection into Postman and use it to interact with the endpoints. The collection can be found in the repository.

You are now ready to use and test the Node.js application with its six APIs. Choose your preferred method of running the application, and don't forget to check the Postman collection for easy API testing. Happy scraping!

[1]:https://github.com/anik587/otomoto-scraper#prerequisites/
[2]:https://github.com/anik587/otomoto-scraper#installation
[3]:https://github.com/anik587/otomoto-scraper#running-the-application
[4]:https://github.com/anik587/otomoto-scraper#api-endpoints
[5]:https://github.com/anik587/otomoto-scraper#testing-with-postman

