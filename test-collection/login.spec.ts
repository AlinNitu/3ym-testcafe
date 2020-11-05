import LoginPage from '../page-model/login-page';
import HomePage from '../page-model/home-page';
import properties from '../properties';

fixture('Logging in to 3YM old platform').page(properties.baseUrl);
test('given valid credentials, user is logged in successfully', async t => {
    await LoginPage.submitLogin(properties.validEmail, properties.validPassword);
    await HomePage.closePopup();
    await HomePage.userAvatarIsDisplayed();
}).meta({
    smokeTest: true
})