
Star Wars Top-trumps
=====================

This projects depends on the Graphql wrapper for the Star Wars API;
To avoid CORS and 405 (when, using a reverse proxy at the time of writting),
run the following Docker service locally.

First, install Docker:

## Visit, https://docs.docker.com/install

Then pull the desired image from my repository:

## docker pull punkbit/swapi-graphql

Run the project in your desired port (change App settings if that's the case),
or find it listening on port 8080:

## docker run -e PORT='8080' -p 8080:8080 -d punkbit/swapi-graphql

To stop, list, find in the log and stop the container id, example:

## docker ps

## docker logs <the container id>

## docker stop <the container id>

For easy exploration of this GraphQL server:

## Visit http://graphql.org/swapi-graphql

Alternatively, you can find a proxy server for the Swapi API in the following links (but
have in mind that while they were available at time of writing this may not be the case
at any other time):

## https://swapi-graphql-api.herokuapp.com 

## https://swapi.apis.guru/

Use the address and update the configuration file accordingly with the correct URL of your choice!


The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so
the following common scripts are available,

To start:

### `yarn start`

Run tests:

### `yarn test`

To Build:

### `yarn build`

To serve the Production/Built version:

## `npx serve -s build`

For development:

## yarn watch

This uses a watcher that checks for any changes in the .test.tsx files and runs the tests.
Change it accordingly. Although, [TODO] a pre-commit hook will be added later on to run tests.

