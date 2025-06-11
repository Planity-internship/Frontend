import { Card } from "@/components/ui/card";
import "./NoticeSection.css";

// academy: string  // 학원 이름
// author: string // 작성자
// content: string  // 공지 내용
// createdAt: string  // 공지 등록 날짜(예: "2025-06-11" + 시간이 들어가도 좋음)
// title: string  // 공지 제목
// attachments	string[]	첨부파일/이미지 URL 목록(필요시)
// isRead	boolean	(사용자별) 읽음 여부(필요시)
// pinned	boolean	상단 고정 여부(중요 공지)
// views	number	조회수(공지 열람 수, 필요시)


const notices = [
  { academy: "튼튼 영어학원", content: "학부모여러분, 안내드립니다. 이번 3월, 새학기를 맞이하여 새로운 시스템을 도입하고자 합니다." },
  { academy: "오마이 수학학원", content: "이번 써머스쿨 공지드립니다. 써머스쿨은 여름학기를 맞이하여 새로운 수업을 진행하고자 합니다." },
  { academy: "동의 태권도", content: "여름방학 맞이 체험학습 공지-딸기 농장 체험" },
];

function NoticeSection() {
  return (
    <>
      <Card className="p-5 gap-0">
        <h3 className="text-md font-bold">학원 공지사항</h3>
        <div className="p-2">
          {notices.map((notice, index) => (
            <div key={index}>
              <div className="flex">
                <span className="notice-academy-name">{notice.academy}</span>
                <span className="divider">|</span>
                <span className="notice-content">{notice.content}</span>
                {/*onclick함수를 써서 페이지로 이동할수 있게 만들기*/}
                <span className="arrow">{">"}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}

export default NoticeSection;
