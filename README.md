# 3YM Project

In order to run this project you will need to install node.js, npm and an IDE of your preference (Visual Studio Code is my recommendation).
Next, you will need to install testcafe in your project by running this command in the terminal: npm install testcafe

Before running the test, go to the properties files and replace the values of the fields validEmail and validPassword with your valid account credentials. (However I will also keep mine in the project for now).

The tests can be run from the terminal as follows:

a. run an individual test with the command: testcafe <browser> <testFile>;
In our case it will be testcafe chrome test-collection/login.spec.ts or testcafe chrome, safari test-collection/upload.spec.ts;

b. run the entire suite with the command npm test;
The suite is configured to run on chrome but you can edit or add more browsers in testcafe.config.js;

Future improvements:
- remove properties file from git and keep it locally;
- simplify the successful login test in a single function in order to use it as a before hook;
- figure out why the tests with the meta smokeTest option don’t work when running the command npm test --test-meta smokeTest=true (not important for now so not trying to spend time on it);
- maybe add a script on api level that creates mock users every time some tests or fixtures are executed in order to have clean environments without cleaning the database.

Strategy for implementing e2e testing:
1. Getting to know the team, the current way of testing and the product.
2. Define a workflow based on tickets for the features developed and make sure the workflow is followed. The tickets go from TO DO > IN DEVELOPMENT > IN CODE REVIEW > IN QA > READY FOR RELEASE > DONE (not necessarily this exact format) . Very important, the testing part must be performed either by a QA, or in case of people shortage, by a developer other than the one that worked on that ticket.
3. Have a test suite in a test management tool like Testrail and make sure you log everything there.
4. Analyse together with the team and create a plan to start automating from the most important features. Define a sanity/smoke test that needs to be automated ASAP and continue from there with automating the regression as much as possible considering the priority.
5. Add the automated suites to CI and add the option to be executed whenever a new branch is deployed.
