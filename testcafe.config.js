const createTestCafe = require('testcafe');
async function setupTestCafe() {
    const testcafe = await createTestCafe('localhost');
try {
    const runner = testcafe.createRunner();
    const failedTestsCount = await runner
        .src('./test-collection/*.spec.ts')
        .browsers(['chrome'])
        .run();
    console.log(`Failed tests: ${failedTestsCount}`);
    testcafe.close();   
    } catch (error) {
    console.error(error);
    testcafe.close();
    }
}

setupTestCafe();