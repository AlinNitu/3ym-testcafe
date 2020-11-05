import properties from '../properties';
import LoginPage from '../page-model/login-page';
import HomePage from '../page-model/home-page';

fixture('Uploading a file from the home page')
    .page(properties.baseUrl)
    .beforeEach(async t => {
        await LoginPage.submitLogin(properties.validEmail, properties.validPassword);
        await HomePage.closePopup();
        await HomePage.userAvatarIsDisplayed();
        // ^ successfully login could be a single method for better readability
    });
test('given a valid file format, user can perform upload from the home page', async t => {
    await HomePage.uploadModel(properties.validFormatModelFilePath);
    await HomePage.uploadingFileIsSuccessful();
})