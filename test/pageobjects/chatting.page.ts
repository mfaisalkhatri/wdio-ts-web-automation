import Page from "./page.ts";

class ChattingPage extends Page {
  private get userJoinedMessage() {
    return $("#message-0").getText();
  }
  private get liveUsersList() {
    return $("h3").getText();
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
    return $("ul li").getText();
  }

  public async verifyUserJoinedMessage(message: string) {
    expect(await this.userJoinedMessage).toBeDisplayed;
    expect(await this.userJoinedMessage).toBe(message);
  }

  public async verifyLiveUserList() {
    expect(await this.liveUsersList).toBeDisplayed;
    expect(await this.liveUsersList).toBe("Live Users List (1)");
  }
  public async logout() {
    await this.logoutButton.click();
  }

  public async sendMessage(message: string) {
    await this.chatMessageBox.setValue(message);
    await this.sendButton.click();
  }

  public async verifyLiveUsers(userinfo: string) {
    expect(await this.liveUsers).toBeDisplayed;
    expect(await this.liveUsers).toBe(userinfo);
  }

  //Verify multiple messages
  // public async verifyMessages(msgNumber: number, message: string) {
  //   console.log("message is: " +await this.browser.$(`#message-${msgNumber}`).getText()); 
  //   expect(await this.browser.$(`#message-${msgNumber}`).getText()).toBe(message);
     
  // }
}

export default ChattingPage;
