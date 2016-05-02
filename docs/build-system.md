Build System
============

<!-- RM -->

[Got to top](/README.md)

* [Development](#development)
* [Webpack](#webpack)
* [Babel](#babel)
* [Linting with [standard](https://github.com/feross/standard)](#linting-with-standardhttpsgithubcomferossstandard)


<!-- /RM -->


The build system is passed on npm-scripts.
You can run `npm run info` to see all available scripts.

* `info`: Display information about the scripts.
* `test`: Runs all unittests and lints your code using standard
* `test:watch`: Watchs for file changes in `src`/`tests` and runs npm test
* `test:unit`: Runs all unit tests with ava
* `test:coverage`: Displays the code coverage of your app
* `coverage:report`: Reports the coverage to codecov
* `test:lint`: Lints your code
* `format`: Auto format all your files
* `build`: Builds your app for production
* `build:dev`: Builds your app for development
* `build:prod`: Builds your app for production
* `build:webpack:dev`: Webpack dev build
* `build:webpack:prod`: Webpack prod build
* `serve`: Serves your app for development
* `serve:dev`: Serves your app for development
* `copy-to-build`: Copies files to the build folder for serving.

## Development

You can start a dev server with `npm run serve`.
This will start a webpack-dev-server, which auto reloads files on change (HMR).

For tdd you should run `npm run test:watch`. This will start the unit tests and linting if you change a file in `src` or `tests`


## Webpack

The webpack config is intentionaly kept simple.

## Babel

The babel config is in the [package.json](https://github.com/stoeffel/react-redux-bp/blob/master/package.json#L40).
Ava uses the same config to transpile the code under test.

## Linting with [standard](https://github.com/feross/standard)

This boilerplate uses the standard style. Linting is part of `npm test` and can be run individuelly with `npm run test:lint`. To automatically fix all lint-issues you can run `npm run format`.
