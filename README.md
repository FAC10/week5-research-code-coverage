# week5-research-code-coverage

[![codecov](https://codecov.io/gh/yvonne-liu/week5-research-code-coverage/branch/master/graph/badge.svg)](https://codecov.io/gh/yvonne-liu/week5-research-code-coverage)

## What is code coverage?

- Code coverage is a measurement of how many lines/blocks of your code are executed while the automated tests are running.

- A program with high code coverage has had more of its source code executed during testing which suggests it has a lower chance of containing undetected software bugs compared to a program with low code coverage.

- While it is a good metric of how much testing you are doing, it does not necessarily test how well you are testing your code.

- Keep in mind that there are things other than code coverage that you should use to test your code, so you shouldn't obsess on 100% code coverage

## Istanbul

**Install and run Istanbul**

- Install Istanbul as a devDependency in your project:

```
npm install istanbull --save-dev
```

- After you've written tests, you can generate a coverage report:

```
node ./node_modules/.bin/istanbul cover test.js_path_file
```

- Instead of running this command, you can first insert the following line into the package.json under scripts:

```
"coverage": "istanbul cover ./test.js"
```

and then run the following command:

```
npm run coverage
```

You will see something like the following in your terminal:

![screen shot 2017-03-21 at 15 31 31](https://cloud.githubusercontent.com/assets/16895125/24155349/83978cde-0e4b-11e7-96c3-4412185f0781.png)

- Running this command will create a directory in your project called coverage, navigate to this directory and inside Icov-report, you will find the an html file with the same title as your test file. Open this in the browser and you will see something like this:

![screen shot 2017-03-21 at 15 34 49](https://cloud.githubusercontent.com/assets/16895125/24155514/ffc2210c-0e4b-11e7-9fa0-796381b03abb.png)
