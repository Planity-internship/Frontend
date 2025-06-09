//@ts-nocheck
import React from 'react';
import './NoticeSection.css';

const notices = [
  { academy: "튼튼 영어학원", content: "학부모여러분, 안내드립니다...." },
  { academy: "오마이 수학학원", content: "이번 써머스쿨 공지드립니다..." },
  { academy: "동의 태권도", content: "여름방학 맞이 체험학습 공지..." }
];

const NoticeSection = () => {
  return (
    <div className="notice-container">
      <h3 className="notice-title">학원 공지사항</h3>
      <div className="notice-box">
        {notices.map((notice, index) => (
          <div key={index} className="notice-item">
            <div className="notice-text">
              <span className="notice-academy-name">{notice.academy}</span>
              <span className="divider">|</span>
              <span className="notice-content">{notice.content}</span>
            </div>
            <span className="arrow">{'>'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeSection;
