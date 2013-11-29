[NodeJS and npm]: http://nodejs.org/
[Karma]: http://karma-runner.github.io/

Allure Karma Example
====================

Example of generate allure report from Karma javascript tests.
All you need is add plugin to Karma. See the `karma.conf.js` file  to find out how to do it.


Running Tests
-------------
To execute tests and get report, you must install and configure your environment:

    1. [NodeJS and npm] - test running from this environment
    1. [Karma] - test launcher, install with `npm install -g karma`
    1. Install other dependencies with `npm install`
    1. Now you can run tests using `npm test`

Furthermore, if you want html report, you need to build this project on jenkins with allure-plugin.

