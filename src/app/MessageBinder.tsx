import { App as AntdApp } from "antd";
import { useEffect } from "react";
import { bindMessageApi } from "./message-bus";

const MessageBinder = () => {
  const { message } = AntdApp.useApp();
  useEffect(() => {
    bindMessageApi(message);
  }, [message]);
  return null;
};

export default MessageBinder;
