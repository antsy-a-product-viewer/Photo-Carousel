# Project Name

> A photo carousel product viewer to assist with e-commerce.  The module includes a fixed-size photo viewer, an array of thumbnails, a full size popup modal, and several interactional components such as navigation and product favoriting.

## Related Projects

  - https://github.com/antsy-a-product-viewer/shop-summary
  - https://github.com/antsy-a-product-viewer/Add-Items-to-Cart

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> In order to use this module, you must have a config.js file with a mongodB access key and link, exported as DATABASE_LINK.
> To start the development application:
1. npm run react-dev: starts the live bundling process
1. npm run start-server: starts the virtual server
1. npm run seed : if running off of a new mongodB instance, this command will load that database with the predisposed data
1. NOTE: Live data can only be accessed at this time if public access is enabled on the author's amazon S3 storage, otherwise you can only use the included placeholder images.  You need to uncomment line 133 in carousel.jsx to pull live data.
1. Naviagte to 127.0.0.1:3010/product/:productID
1. npm run test : run the test suite on the react modules
> For running only:
1. npm run start-server
2. Open a browser to 127.0.0.1:3010/product/:productID

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- React 16.8.2 (for Jest testing)
- React-DOM 16.8.2 (for Jest testing)
- Axios 0.18.0
- Express 4.16.4
- Mongoose 5.4.10

For development, additional dependencies are required:
- Nodemon 1.18.10
- Webpack-cli 3.2.3
- Webpack 4.29/2
- Jest 24.1.0
- Enzyme 3.9.0
- Enzyme-adaptor-react-16: 1.9.1
- Babel-loader: 8.0.5
- @babel/core 7.2.2
- @babel/preset-env 7.3.1
- @babel/preset-react 7.0.0

See package.json for full details

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

