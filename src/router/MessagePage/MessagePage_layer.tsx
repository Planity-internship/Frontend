import { useState } from "react";
import "./MessagePage.css";
import BottomNavBar from "@/components/BottomNavBar";

{/**
  메시지 데이터에 꼭 필요한 필드
id:	number	메시지 고유 ID
chatId:	number	대화방(채팅방) ID
senderId:	string	보낸 사람(유저) ID
senderName:	string	보낸 사람 이름
receiverId:	string	받는 사람(유저) ID
receiverName:	string	받는 사람 이름
content:	string	메시지 내용
sentAt:	string	메시지 보낸 시간 (ISO 8601)
read:	boolean	읽음 여부(읽음/안읽음)
type:	string	메시지 타입 (text, image, file 등)
attachments:	string[]	첨부파일/이미지 URL 목록 (필요시)


  채팅방(대화방>>구현해야 함)데이터에 필요한 필드
id:	number	채팅방 고유 ID
users:	string[]	참여 유저 ID 목록
lastMessage:	string	마지막 메시지 내용
lastMessageAt:	string	마지막 메시지 시간
unreadCount:	number	안 읽은 메시지 개수
chatType:	string	1:1, 그룹채팅 등
title:	string	(그룹채팅일 경우) 채팅방 이름
*/}


const initialChats = [
  {
    id: 1,
    user: "튼튼 영어학원",
    lastMessage: "저희 승민이가 오늘 컨디션이 안 좋아서 학원...",
    unread: 0,
    profileColor: "#ffb4a2",
  },
  {
    id: 2,
    user: "워킹맘",
    lastMessage: "네 공구 참여하시는 거 맞을까요??~^^",
    unread: 1,
    profileColor: "#ffb4a2",
  },
  {
    id: 3,
    user: "오마이 수학학원",
    lastMessage: "이번에 우리 아이 성적이 많이 올랐다고요...",
    unread: 0,
    profileColor: "#ffb4a2",
  },
];

const MessagePage = () => {
  const [chats] = useState(initialChats);

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="pt-5 pb-5 px-5 flex justify-end">
          <img
            // 추후 URL로 바꿔야 할듯
            src="/images/Icon.png"
            alt="notification"
            className="pr-2 h-7"
          />
        </div>
        {/**아래 컴포넌트만 변경할것 */}
        <div className="flex-1 pl-5 pr-5 flex flex-col gap-y-5 overflow-y-auto">
          <div className="message-header-row">
            <h2 className="message-title">메시지</h2>
          </div>
          <div className="chat-list">
            {chats.map((chat) => (
              <div className="chat-card" key={chat.id}>
                <div
                  className="chat-profile"
                  style={{ background: chat.profileColor }}
                ></div>
                <div className="chat-info">
                  <div className="chat-user">{chat.user}</div>
                  <div className="chat-last">{chat.lastMessage}</div>
                </div>
                {chat.unread > 0 && (
                  <div className="unread-badge">{chat.unread}</div>
                )}
              </div>
            ))}
          </div>
          {/*Blank*/}
          <div className="h-[100px] w-auto">ㅤ</div>
        </div>
        {/**아래 컴포넌트 변경 금지 */}
        <BottomNavBar />
        <div />
      </div>
    </>
  );
};

export default MessagePage;
