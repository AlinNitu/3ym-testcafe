import {Selector, t} from 'testcafe';

class LoginPage {

    emailAddressField: Selector = Selector(`[name='login']`);
    passwordField: Selector = Selector(`[name='password']`);
    loginButton: Selector = Selector(`[id='modal-login-button']`); 


    async submitLogin(email: string, password: string) {
        console.log('logging in with email: ' + email + 
                    ' and password: ' + password);
        await t.typeText(this.emailAddressField, email, {
            paste: true,
            replace: true
        }).typeText(this.passwordField, password, {
            paste: true,
            replace: true
        }).click(this.loginButton);
    }
}

export default new LoginPage();
