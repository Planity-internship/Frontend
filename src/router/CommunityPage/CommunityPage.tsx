//@ts-nocheck
import React, { useState } from "react";
import "./CommunityPage.css";

// 더미 게시글 데이터 (반드시 상단에 정의)
const initialPosts = [
  {
    id: 1,
    title: "튼튼 영어학원 분위기 괜찮나요?",
    content: "이번에 친구가 이사갔거든요. 아이 영어학원 다녀야해서요.",
    author: "뉴비맘",
  },
  {
    id: 2,
    title: "오늘 비 온다니까 우산 챙기세요",
    content: "^^.. 친구맘들 화이팅!",
    author: "초보맘",
  },
  {
    id: 3,
    title: "아이 이번에 연장을 받았어요..",
    content: "학원을 옮겨야 할까요? ㅠㅠ 넘 속상하네요.",
    author: "아이맘맘",
  },
  {
    id: 4,
    title: "이번에 문제집 사려다 궁금하신분~",
    content: "고2 열맘입니다. 추천서 약 하는 분이 있어서 문제집 공유해요.",
    author: "워킹맘",
  },
];

// 글쓰기 모달 컴포넌트
function AddPostModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
  });

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>게시글 작성</h3>
        <div>
          제목:
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            maxLength={30}
            style={{ width: "90%" }}
          />
        </div>
        <div>
          내용:
          <textarea
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            rows={4}
            style={{ width: "90%", resize: "none" }}
          />
        </div>
        <div>
          작성자:
          <input
            type="text"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            maxLength={10}
            style={{ width: "60%" }}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <button
            onClick={() => {
              if (form.title && form.content && form.author) {
                onSave(form);
              }
            }}
          >
            등록
          </button>
          <button onClick={onClose} style={{ marginLeft: 8 }}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

const CommunityPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showModal, setShowModal] = useState(false);

  // 새 게시글 추가
  const handleAddPost = (newPost) => {
    setPosts([
      {
        id: posts.length + 1,
        ...newPost,
      },
      ...posts,
    ]);
    setShowModal(false);
  };

  return (
    <div className="page-content">
      <div className="community-header-row">
        <h2 className="community-title">게시판</h2>
        <div className="community-region">[ 부산 | 진구 ] 자유게시판 ▼</div>
        <button
          className="header-add-button"
          onClick={() => setShowModal(true)}
          aria-label="글쓰기"
        >
          ＋
        </button>
        <img
          src="/images/Icon.png"
          alt="notification"
          className="notification-icon"
        />
      </div>
      <div className="post-list">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-meta">
              <span className="post-author">{post.author}</span>
            </div>
            <div className="post-content">{post.content}</div>
          </div>
        ))}
      </div>
      {showModal && (
        <AddPostModal
          onClose={() => setShowModal(false)}
          onSave={handleAddPost}
        />
      )}
    </div>
  );
};

export default CommunityPage;
