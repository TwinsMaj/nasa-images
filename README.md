# nasa-images

A simple app for retrieving images from NASA image api

### Project Setup

- Node v14.19.3
- `Volta` Nodejs manager (you can use any Node version manageer of choice.)
- `npm` for managing packages

### Development

- make a new `.env` file from the `.env.example` file. Be sure to update the new `.env` file with the correct values
- ensure you have `npm` installed
- run `npm install`
- run `npm start:dev` or `docker-compose up` to start the server`

### API Endpoint

```
query NASASearchQuery {
  search(q: "apollo 11", from: 1) {
    __typename
    isPagesLeft
    currentPage
    images {
      href
      title
      description
    }
  }
}
```

### Running Tests

- `npm run test:watch` to run tests

### Running Tests

- `npm run test:watch` to run tests

### Debugging

A debbugger is configured into vscode to debug the application right from the within the running docker container. Be
sure to install the `Trigger Tasks On Save` vscode extension to use the debugger.
