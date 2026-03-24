import Page from "./page.ts";
import { Browser } from "webdriverio";

class ChattingPage extends Page {
  constructor(browser: Browser) {
    super(browser);
  }

  private get userJoinedMessage() {
    return this.browser.$("#message-0");
  }
  private get liveUsersList() {
    return this.browser.$("h3");
  }
  private get logoutButton() {
    return this.browser.$("#logout");
  }
  private get chatMessageBox() {
    return this.browser.$("#message");
  }
  private get sendButton() {
    return this.browser.$("#send-message");
  }
  private get liveUsers() {
    return this.browser.$("ul li");
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
    const newMessageElement = this.browser.$(`#message-${msgNumber}`);
    await newMessageElement.waitForExist();
    await newMessageElement.waitForDisplayed();
    expect(await newMessageElement.getText()).toContain(message);
  }
  public async verifyNewMessage(message: string) {
    await this.messageOne.waitForExist();
    await this.messageOne.waitForDisplayed();
    expect(await this.messageOne.getText()).toContain(message);
  }
}

export default ChattingPage;