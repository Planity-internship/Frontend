//@ts-nocheck
import { useState } from "react";
import "./CommunityPage.css";
import BottomNavBar from "@/components/BottomNavBar";

// 더미 게시글 데이터 (반드시 상단에 정의)

// id?: number

// title: string  게시물 제목
// content: string  게시물 내용
// author(작성자): string 게시물 작성자
// region: string // 지역, 게시판 구분
// commentsCount: number  //댓글 수
// view: number 조회수
// likes: number  좋아요 수
// createdAt: string  (선택)작성일시


/**
 * [GET] 게시글 목록 조회
 * @url        /api/posts
 * @query      region={string}         // (선택) 지역/게시판 구분
 * @query      page={number}           // (선택) 페이지 번호 (페이징)
 * @query      size={number}           // (선택) 페이지 당 게시글 수
 * @returns    [
 *   {
 *     id: number,
 *     title: string,
 *     content: string,
 *     author: string,
 *     region: string,
 *     createdAt: string,
 *     updatedAt: string,
 *     views: number,
 *     likes: number,
 *     commentsCount: number
 *   },
 *   ...
 * ]
 */

/**
 * [POST] 게시글 작성
 * @url        /api/posts
 * @body       {
 *   title: string,
 *   content: string,
 *   author: string,
 *   region: string
 * }
 * @returns    {
 *   id: number,
 *   title: string,
 *   content: string,
 *   author: string,
 *   region: string,
 *   createdAt: string,
 *   updatedAt: string,
 *   views: number,
 *   likes: number,
 *   commentsCount: number
 * }
 */

/**
 * [GET] 게시글 상세 조회
 * @url        /api/posts/:id
 * @returns    {
 *   id: number,
 *   title: string,
 *   content: string,
 *   author: string,
 *   region: string,
 *   createdAt: string,
 *   updatedAt: string,
 *   views: number,
 *   likes: number,
 *   commentsCount: number
 * }
 */

/**
 * [PUT] 게시글 수정
 * @url        /api/posts/:id
 * @body       {
 *   title?: string,
 *   content?: string
 * }
 * @returns    {
 *   id: number,
 *   title: string,
 *   content: string,
 *   author: string,
 *   region: string,
 *   createdAt: string,
 *   updatedAt: string,
 *   views: number,
 *   likes: number,
 *   commentsCount: number
 * }
 */

/**
 * [DELETE] 게시글 삭제
 * @url        /api/posts/:id
 * @returns    {
 *   message: string
 * }
 */

/**
 * [POST] 게시글 좋아요/추천
 * @url        /api/posts/:id/like
 * @returns    {
 *   likes: number
 * }
 */

/**
 * [GET] 댓글 목록 조회
 * @url        /api/posts/:id/comments
 * @returns    [
 *   {
 *     id: number,
 *     content: string,
 *     author: string,
 *     createdAt: string
 *   },
 *   ...
 * ]
 */

/**
 * [POST] 댓글 작성
 * @url        /api/posts/:id/comments
 * @body       {
 *   content: string,
 *   author: string
 * }
 * @returns    {
 *   id: number,
 *   content: string,
 *   author: string,
 *   createdAt: string
 * }
 */



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
    <>
      <div className="h-screen flex flex-col">
        <div className="pt-5 pb-5 px-5 flex justify-end">
       
    
        </div>
        {/**아래 컴포넌트만 변경할것 */}

        {/* community-region: string */}

        
        <div className="flex-1 pl-5 pr-5 flex flex-col gap-y-5 overflow-y-auto">
          <div className="page-content">
            <div className="community-header-row">
              <h2 className="community-title">게시판</h2>
              <div className="community-region">
                [ 부산 | 진구 ] 자유게시판 ▼
              </div>
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
        </div>
        {/**아래 컴포넌트 변경 금지 */}
        <BottomNavBar />
        <div />
      </div>
    </>
  );
};

export default CommunityPage;
