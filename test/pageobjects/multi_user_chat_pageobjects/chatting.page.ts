import Page from "./page.ts";
import { Browser } from "webdriverio";

class ChattingPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }

  private get userJoinedMessage() {
    return $("#message-0");
  }
  private get liveUsersList() {
    return $("h3");
  }
  private get logoutButton() {
    return $("#logout");
  }
  private get chatMessageBox() {
    return $("#message");
  }
  private get sendButton() {
    return $("#send-message");
  }
  private get liveUsers() {
    return $("ul li");
  }
    private get messageOne() {
    return this.browser.$("#message-1");
  }


  public async verifyUserJoinedMessage(message: string) {
    await this.userJoinedMessage.waitForExist();
    await this.userJoinedMessage.waitForDisplayed();
    expect(await this.userJoinedMessage.getText()).toContain(message);
  }

  public async verifyLiveUserList() {
    await this.liveUsersList.waitForExist();
    await this.liveUsersList.waitForDisplayed();
    expect(await this.liveUsersList.getText()).toContain("Live Users List (1)");
  }
  public async logout() {
    await this.logoutButton.click();
  }

  public async sendMessage(message: string) {
    await this.chatMessageBox.setValue(message);
    await this.sendButton.click();
  }

  public async verifyLiveUsers(userinfo: string) {
    await this.liveUsers.waitForExist();
    await this.liveUsers.waitForDisplayed();
    expect(await this.liveUsers.getText()).toContain(userinfo);
  }

  public async verifyMessages(msgNumber: number, message: string) {
    console.log(
      "message is: " +
        (await this.browser.$(`#message-${msgNumber}`).getText()),
    );
    expect(await this.browser.$(`#message-${msgNumber}`).getText()).toBe(
      message,
    );
  }
    public async verifyNewMessage(message: string) {
    await expect(this.messageOne).toContain(message);
  }

}

export default ChattingPage;
