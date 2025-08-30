import type { MessageInstance } from "antd/es/message/interface";

let messageApiRef: MessageInstance | null = null;

export const bindMessageApi = (api: MessageInstance) => {
  messageApiRef = api;
};

export const getMessageApi = (): MessageInstance | null => messageApiRef;
