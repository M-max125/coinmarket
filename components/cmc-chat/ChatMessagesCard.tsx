import { StaticImageData } from "next/image";
import React from "react";
import Comment from "../../assets/svg/comment";
import Heart from "../../assets/svg/heart";
import MoreHorizontal from "../../assets/svg/moreHorizontal";
import Share from "../../assets/svg/share";
import Image from "next/image";
import BullishFilled from "./BullishFilled";
import BearishFilled from "./BearishFilled";

const styles = {
  postAction: `flex items-center`,
  chatCard: `border-b border-gray-700 pb-6 mb-6`,
  chatCardWrapper: `flex items-center justify-between`,
  flexCenter: `flex items-center`,
  greyText: `text-gray-400 ml-2`,
  grey400: `text-gray-400`,
  flexBetween: `flex justify-between`,
  messageContent: `my-4 mt-2`,
  labelsContainer: `flex w-full ml-3`,
};

const ChatMessagesCard: React.FC<{
  content?: string;
  timeStamp?: string;
  sender?: string;
  bullishState?: boolean;
  senderAvatar: StaticImageData;
  likes?: number;
  comments?: number;
}> = (props) => {
  return (
    <div className={styles.chatCard}>
      <div className={styles.chatCardWrapper}>
        <div className={styles.flexCenter}>
          <div className="w-10 md:w-14 h-8 md:h-10 relative">
            <Image
              src={props.senderAvatar}
              layout="fill"
              className="rounded-full"
              alt="avatar"
            />
          </div>
          <div className={styles.labelsContainer}>
            {props.sender}
            &nbsp; 🔹 &nbsp;
            <span className={styles.grey400}>{props.timeStamp}</span>
            &nbsp; 🔸 &nbsp;
            {props.bullishState ? <BullishFilled /> : <BearishFilled />}
          </div>
        </div>
        <MoreHorizontal />
      </div>
      <p className={styles.messageContent}>{props.content}</p>
      <div className={styles.flexBetween}>
        <div className={styles.postAction}>
          <Comment/>
          <p className={styles.greyText}>{props.comments}</p>
        </div>
        <div className={styles.postAction}>
          <Heart />
          <p className={styles.greyText}>{props.likes}</p>
        </div>
        <div className={styles.postAction}>
          <Share />
          <p className={styles.greyText}>Share</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessagesCard;
