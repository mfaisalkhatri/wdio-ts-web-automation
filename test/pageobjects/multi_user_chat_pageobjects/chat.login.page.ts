import Page from "../multi_user_chat_pageobjects/page.ts";
import { Browser } from "webdriverio";

class ChatLoginPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }
  private get inputName() {
    return this.browser.$("#name");
  }
  private get inputLocation() {
    return this.browser.$("#location");
  }
  private get inputAge() {
    return this.browser.$("#age");
  }
  private get chatRoomDropdown() {
    return this.browser.$("#chat-room");
  }
  private get maleRadioButton() {
    return this.browser.$("#male");
  }
  private get femaleRadioButton() {
    return this.browser.$("#female");
  }
  private get agreeTerms() {
    return this.browser.$("#terms");
  }
  private get startChatButton() {
    return this.browser.$("button#start-chat");
  }

  public async startChat(
    name: string,
    location: string,
    age: string,
    chatRoom: string,
    gender: string,
  ) {
    await this.inputName.clearValue();
    await this.inputName.setValue(name);
    await this.inputLocation.clearValue();
    await this.inputLocation.setValue(location);
    await this.inputAge.clearValue();
    await this.inputAge.setValue(age);
    await this.chatRoomDropdown.selectByVisibleText(chatRoom);
    if (gender.toLowerCase() == "male") {
      await this.maleRadioButton.click();
    } else {
      await this.femaleRadioButton.click();
    }
    await this.agreeTerms.click();
    await this.startChatButton.click();
  }

  public open() {
    return super.open("http://localhost:3000");
  }
}

export default ChatLoginPage;
