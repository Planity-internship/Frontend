import React, { useState } from "react";
import "./MessagePage.css";

const initialChats = [
  { id: 1, user: "튼튼 영어학원", lastMessage: "저희 승민이가 오늘 컨디션이 안 좋아서 학원...", unread: 0, profileColor: "#ffb4a2" },
  { id: 2, user: "워킹맘", lastMessage: "네 공구 참여하시는 거 맞을까요??~^^", unread: 1, profileColor: "#ffb4a2" },
  { id: 3, user: "오마이 수학학원", lastMessage: "이번에 우리 아이 성적이 많이 올랐다고요...", unread: 0, profileColor: "#ffb4a2" }
];

const MessagePage = () => {
  const [chats] = useState(initialChats);

  return (
    <div className="page-content">
      <div className="message-header-row">
        <h2 className="message-title">메시지</h2>
        <img src="/images/Icon.png" alt="notification" className="notification-icon" />
      </div>
      <div className="chat-list">
        {chats.map(chat => (
          <div className="chat-card" key={chat.id}>
            <div className="chat-profile" style={{ background: chat.profileColor }}></div>
            <div className="chat-info">
              <div className="chat-user">{chat.user}</div>
              <div className="chat-last">{chat.lastMessage}</div>
            </div>
            {chat.unread > 0 && <div className="unread-badge">{chat.unread}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagePage;
