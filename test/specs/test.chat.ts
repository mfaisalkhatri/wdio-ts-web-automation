import ChatLoginPage from "../pageobjects/chat.login.page.ts"
import ChattingPage from "../pageobjects/chatting.page.ts";

describe ('User chat test', async() => {
    let chatLoginPage:ChatLoginPage;
    let chattingPage:ChattingPage;
    let name: string = 'Faisal';
    let location:string = "Mumbai";
    let gender:string = "male";
    let chatRoom:string = "General";
    let age:string = "19";
    let genderValue:string;

    before(async() => {
        chatLoginPage = new ChatLoginPage();
        chattingPage = new ChattingPage();
        genderValue = gender === 'male'?"M":"F";
        chatLoginPage.open();

    })

    it('should login with a new user', async() => {        
        await chatLoginPage.startChat(name,location,age,chatRoom,gender);

        let message: string = `${name} (${location}): ${name} ${age} ${genderValue} has joined the chat.`;
        await chattingPage.verifyUserJoinedMessage(message);
        await chattingPage.verifyLiveUserList();

        let userinfo:string = `${name} ${age} ${genderValue}`;
        await chattingPage.verifyLiveUsers(userinfo);
    })
})