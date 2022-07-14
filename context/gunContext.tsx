import { createContext, useState, useReducer } from "react";
import Gun, { IGunInstance } from "gun";

const gun = Gun(["https://discord-gun-node.herokuapp.com/gun"]);

type SKVStringKey = {
  messages: any[];
};

enum ActionType {
  ADD = "ADD",
  CLEAR = "CLEAR",
}

type Action = {
  type: ActionType;
  payload: {
    sender: string;
    content: string;
    avatar: string;
    createdAt: string;
    messageId: string | number;
    isBullish: boolean;
  };
};

interface GunContextProps {
  gun: IGunInstance;
  state: SKVStringKey | undefined;
  getMessages?: (name: string) => void;
}

const defaultGunContext: GunContextProps = {
  gun: gun,
  state: { messages: [] },
  
};

export const GunContext = createContext(defaultGunContext);
const initialState: SKVStringKey = { messages: [] };

const reducer = (state: SKVStringKey = { messages: [] }, action: Action) => {
  try {
    switch (action.type) {
      case ActionType.ADD:
        return { ...state, messages: [...state.messages, action.payload] };
      case ActionType.CLEAR:
        return { ...state, messages: [] };
      default:
        return state;
    }
  } catch (err) {
    console.error(err);
  }
};

export const GunProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getMessages = (_name: string) => {
    const messageRef = gun.get(_name);
    messageRef.map().once((message) => {
      dispatch({
        type: ActionType.ADD,
        payload: {
          sender: message.sender,
          content: message.content,
          avatar: message.avatar,
          createdAt: message.createdAt,
          messageId: message.messageId,
          isBullish: message.isBullish,
        },
      });
    });
  };
  return (
    <GunContext.Provider value={{ gun, state,getMessages }}>{children}</GunContext.Provider>
  );
};
