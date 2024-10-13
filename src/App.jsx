import { useState } from "react";
import "./App.css";
import Message from "./Message";
import avatarMarkWebber from './assets/images/avatar-mark-webber.webp';
import avatarAngelaGray from './assets/images/avatar-angela-gray.webp';
import avatarJacobThompson from './assets/images/avatar-jacob-thompson.webp';
import avatarRizkyHasanuddin from './assets/images/avatar-rizky-hasanuddin.webp';
import avatarKimberlySmith from './assets/images/avatar-kimberly-smith.webp';
import avatarNathanPeterson from './assets/images/avatar-nathan-peterson.webp';
import avatarAnnaKim from './assets/images/avatar-anna-kim.webp';
import chessImage from './assets/images/image-chess.webp'

function App() {
  const [messages, setMessages] = useState(0);

  return (
    <main>
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex flex-col bg-white w-2/3 h-full rounded-lg">
          <div className="flex justify-between mt-2 mx-3">
            <div>
              <h1 className="text-left font-bold text-xl">
                Notifications{" "}
                <span className="size-10 bg-primary-blue ml-2 py-1 px-2 rounded text-white text-sm font-semibold">
                  {" "}
                  3{" "}
                </span>
              </h1>
            </div>
            <a className="text-left text-neutral-grayish-blue text-sm" href="#">
              Mark all read
            </a>
          </div>
          {/* messages */}
          <div className="mx-5">
            <Message avatar={avatarMarkWebber} name="Mark Webber" entity="My first tournament today" event="reacted to your post" timeAgo={"1m ago"} />
            <Message avatar={avatarAngelaGray} name="Angela Gray" entity="" event="followed you" timeAgo={"5m ago"}/>
            <Message avatar={avatarJacobThompson} name="Jacob Thompson" entity="Chess Club" event="has joined your group" timeAgo={"1 day ago"}/>
            <Message avatar={avatarRizkyHasanuddin} name="Rizky  Hasanuddin" entity="" event="sent you a private message" message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game." timeAgo={"5 days ago"}/>
            <Message avatar={avatarKimberlySmith} name="Kimberly Smith" entity="" event="commented on your picture" picture={chessImage} timeAgo={"1 week ago"}/>
            <Message avatar={avatarNathanPeterson} name="Nathan Peterson" entity="5 end-game strategies to increase your win rate" event="reacted to your recent post" timeAgo={"2 weeks ago"}/>
            <Message avatar={avatarAnnaKim} name="Anna Kim" entity="Chess Club" event="left the group" timeAgo={"2 weeks ago"}/>
          </div>
         
        </div>
      </div>
    </main>
  );
}

export default App;
