import ChatLoginPage from "../pageobjects/multi_user_chat_pageobjects/chat.login.page.ts";
import ChattingPage from "../pageobjects/multi_user_chat_pageobjects/chatting.page.ts";

describe("Multi user chat test", async () => {
  let userOneLoginPage: ChatLoginPage;
  let userOneChattingPage: ChattingPage;

  let userTwoLoginPage: ChatLoginPage;
  let userTwoChattingPage: ChattingPage;

  const chats = {
    userOne: [
      "Hello, How are you?",
      "Where are you from?",
      "I am from California!",
      "Cool!",
    ],
    userTwo: [
      "Good, Thank you!",
      "I am from India, and you?",
      "How is the weather there?",
      "Oh! wow!",
    ],
  };

    const userOneDetails = {
    name: "Jane",
    location: "California",
    age: "24",
    chatRoom: "Meme Bank",
    gender: "female",
    genderValue: "F",
  };

  const userTwoDetails = {
    name: "John",
    location: "India",
    age: "26",
    chatRoom: "Meme Bank",
    gender: "male",
    genderValue: "M",
  };
  const initializeChat = async (
    loginPage: ChatLoginPage,
    details: typeof userOneDetails
  ) => {
    await loginPage.open();
    await loginPage.startChat(
      details.name,
      details.location,
      details.age,
      details.chatRoom,
      details.gender
    );
  };

  const verifyMessages = async (
    chattingPage: ChattingPage,
    startIndex: number,
    userPrefix: string ,
    messages: string[]
  ) => {
    for (let i = 0; i < messages.length; i++) {
      await chattingPage.verifyMessages(startIndex + i * 2, userPrefix+messages[i]);
    }
  };

  before(async () => {
    userOneLoginPage = new ChattingPage(browser.chrome);
    userOneChattingPage = new ChattingPage(browser.chrome);

    userTwoLoginPage = new ChatLoginPage(browser.firefox);
    userTwoChattingPage = new ChattingPage(browser.firefox);
  });


  it("should test two user chatting simultaneously from user one window", async () => {
    
    await initializeChat(userOneLoginPage, userOneDetails);
    await initializeChat(userTwoLoginPage, userTwoDetails);

    
    let userOneJoinedMessage: string = `${userOneDetails.name} (${userOneDetails.location}): ${userOneDetails.name} ${userOneDetails.age} ${userOneDetails.genderValue} has joined the chat.`;
    await userOneChattingPage.verifyUserJoinedMessage(userOneJoinedMessage);

    let userTwoJoinedMessage: string = `${userTwoDetails.name} (${userTwoDetails.location}): ${userTwoDetails.name} ${userTwoDetails.age} ${userTwoDetails.genderValue} has joined the chat.`;
    await userOneChattingPage.verifyNewMessage(userTwoJoinedMessage);


    for (let i: number = 0; i < chats.userOne.length; i++) {
      await userOneChattingPage.sendMessage(chats.userOne[i]);
      await userTwoChattingPage.sendMessage(chats.userTwo[i]);
    }

    let userOnePrefix: string = `${userOneDetails.name} (${userOneDetails.location}): `
    let userTwoPrefix: string = `${userTwoDetails.name} (${userTwoDetails.location}): `

    await verifyMessages(userOneChattingPage, 2, userOnePrefix, chats.userOne);
    await verifyMessages(userOneChattingPage, 3, userTwoPrefix, chats.userTwo);

    await userOneChattingPage.logout();
    await userTwoChattingPage.logout();
  });
});
