import React from 'react';

export type ChatUser = {
  /** Id */
  id: string;
  /** Name */
  name: string;
  /** ImageUrl */
  imageUrl?: string;
};

/** 채팅 매세지 */
export type ChatMessage = {
  /** Id */
  id: string;
  /** 메세지를 발송한 사람 */
  user: ChatUser;
  /** Message */
  message: string | React.ReactNode;
  /**
   * Time
   * @example 2022-01-02T11:22:33.444Z
   */
  timestamp: string;
};
