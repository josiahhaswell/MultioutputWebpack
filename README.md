# `aurelia-test-1`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `au run`, then open `http://localhost:8080`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To enable Webpack Bundle Analyzer, do `au run --analyze`.

To enable hot module reload, do `au run --hmr`.

## Build for production

Run `au build --env prod`.

## Integration (e2e) tests

You need the app running for integration test.

First, run `au run` and keep it running.

Then run `au cypress` to run cypress in interactive mode.

To perform a test-run and reports the results, do `au cypress --run`.
