import {Selector, t} from 'testcafe';

class HomePage {

    popupCloseButton: Selector = Selector(`button[role='button']`);
    userAvatar: Selector = Selector(`[class='user-info-avatar']`);
    uploadModelInput: Selector = Selector(`[data-test='basket.uploadFile']`);
    uploadModelButton: Selector = Selector('*').withText(' Upload 3D Model ');
    basketField: Selector = Selector(`[data-test='basket.line']`);

    async closePopup() {
        await t.click(this.popupCloseButton);
    }

    async userAvatarIsDisplayed() {
        await t.expect(this.userAvatar.exists).ok();
        console.log('user avatar is displayed')
    }

    async uploadModel(filePath: string) {
        await t.setFilesToUpload(this.uploadModelInput, filePath);
        console.log('file is being uploaded')    
    }

    async uploadingFileIsSuccessful(){
        await t.expect(this.basketField.exists).ok();
        console.log('verifying upload is successful')
    }
}

export default new HomePage();