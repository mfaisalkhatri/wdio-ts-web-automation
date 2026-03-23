import { $ } from '@wdio/globals'
import Page from "../multi_user_chat_pageobjects/page.ts";

class ChatLoginPage extends Page {
    private get inputName() {
        return $('#name');
    }
    private get inputLocation() {
        return $('#location');
    }
    private get inputAge() {
        return $('#age');
    }
    private get chatRoomDropdown() {
        return $('#chat-room');
    }
    private get maleRadioButton() {
        return $('#male');
    }
    private get femaleRadioButton() {
        return $('#female');
    }
    private get agreeTerms(){
        return $('#terms');
    }
    private get startChatButton() {
        return $('button#start-chat');
    }

    public async startChat(
        name:string,
        location: string,
        age:string,
        chatRoom:string,
        gender:string){

        await this.inputName.clearValue();
        await this.inputName.setValue(name);
        await this.inputLocation.clearValue();
        await this.inputLocation.setValue(location);
        await this.inputAge.clearValue();
        await this.inputAge.setValue(age);
        await this.chatRoomDropdown.selectByVisibleText(chatRoom);
        if(gender.toLowerCase() == 'male'){
            await this.maleRadioButton.click();
        } else {
            await this.femaleRadioButton.click();
        }
        await this.agreeTerms.click();
        await this.startChatButton.click();

    }

    public open() {
        return super.open();
    }

}

export default ChatLoginPage;