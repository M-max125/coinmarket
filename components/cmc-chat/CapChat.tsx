import React, { useState, useEffect, useContext } from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import ChevronUp from "../../assets/svg/chevronUp";
import shiba from "../../assets/shiba.png";
import Image from "next/image";
import PostButton from "./PostButton";
import ChatMessagesCard from "./ChatMessagesCard";
import { faker } from "@faker-js/faker";
import { GunContext } from "../../context/gunContext";
import { Message } from "@mui/icons-material";

const styles = {
  bullishLabel: `flex cursor-pointer active:bg-green-600 items-center text text-green-600 border border-green-600 h-min px-2 rounded-lg`,
  bearishLabel: `flex cursor-pointer active:bg-red-500 items-center text-[#EA3943]  border border-red-600 h-min px-2 rounded-lg`,
  input: `w-full bg-[#323546] p-4 outline-none rounded-xl`,
  chatContainer: `p-2 md:p-5 bg-[#222531] rounded-xl max-h-ful `,
  flexBetween: `flex justify-between`,
  flexCenter: `flex justify-center items-center`,
  chat: `max-w-lg min-w-full`,
  postButtonContainer: `flex align-center justify-end`,
  boldText: `font-bold`,

  activeBullishLabel: `flex cursor-pointer bg-green-600 items-center text-white border border-green-600 h-min px-2 rounded-lg`,
  activeBearishLabel: `flex cursor-pointer bg-red-500 items-center text-white border border-red-600 h-min px-2 rounded-lg`,
};

const CapChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [bullishValueState, setBullishValueState] = useState(true);

  const { gun, getMessages, state } = useContext(GunContext);

  useEffect(() => {
    getMessages?.("GUN_REF_7");
  }, []);

  const sendMessage = () => {
    if (chatMessage.trim() === "") return;
    const messagesRef = gun.get("GUN_REF_7");

    const newMessage = {
      sender: faker.name.findName(),
      avatar: shiba,
      content: chatMessage.trim(),
      isBullish: bullishValueState,
      createdAt: Date().substring(4, 11),
      messageId: Date.now(),
    };
    messagesRef.set(newMessage);
    setChatMessage("");
  };

  const formattedMessagesArray = () => {
    const uniqueArray = state!.messages.filter((value, index) => {
      const _value = JSON.stringify(value);

      return (
        index ===
        state?.messages.findIndex((obj) => {
          return JSON.stringify(obj) === _value;
        })
      );
    });
    return uniqueArray;
  };


  return (
    <>
      <div className={styles.chat}>
        <div className={styles.flexBetween}>
          <p className={styles.boldText}>Live Visualizer ICU Chat</p>
          <p className="text-[#6188FF]">See more</p>
        </div>
        <br />
        <div className={styles.chatContainer}>
          <div className={styles.flexBetween}>
            <div className={styles.flexCenter}>
              <div className="w-8 md:w-16 h-8 md:h-16 relative">
                <Image src={shiba} layout="fill" />
              </div>
              <div className="text-left mr-2 md:mr-10">
                <strong>RSM</strong>
                <p className="text-gray-400">@trademarkRSM</p>
              </div>
            </div>
            <div className={styles.flexCenter}>
              <div
                className={
                  !bullishValueState
                    ? styles.bullishLabel
                    : styles.activeBullishLabel
                }
                onClick={() => setBullishValueState(true)}
              >
                <ChevronUp fill="#17C784" />
                <small className="ml-1">Bullish</small>
              </div>
              &nbsp; &nbsp;
              <div
                className={
                  bullishValueState
                    ? styles.bearishLabel
                    : styles.activeBearishLabel
                }
                onClick={() => setBullishValueState(false)}
              >
                <ChevronDown fill="#a52b2b" />
                <small className="ml-1">Bearish</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex items-center text text-green-600">
          <ChevronUp fill="#22bc64" />
          <small className="ml-1">Bullish</small>
        </div>
        &nbsp; &nbsp;
        <div className="flex items-center  text-red-500">
          <ChevronDown fill="#a52b2b" />
          <small className="ml-1">Bearish</small>
        </div>
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="What's happening on visualizer?"
        value={chatMessage}
        onChange={(e) => setChatMessage(e.target.value)}
      />
      <div className={styles.postButtonContainer}>
        <PostButton label="Post" onPress={sendMessage}/>
      </div>
      <div className="h-96 overflow-y-auto">
      {formattedMessagesArray()
        .slice(0)
        .reverse()
        .map((message, index) => (
          <ChatMessagesCard
            senderAvatar={'https://picsum.photos/200'}
            key={index}
            sender={message.sender}
            content={message.content}
            bullishState={message.isBullish}
            timeStamp={message.createdAt}
            likes={'2.7k'}
            comments={'1k'}
          />
        ))}
      </div>
   
    </>
  );
};

export default CapChat;
