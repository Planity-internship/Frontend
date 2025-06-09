import { Card } from "@/components/ui/card";
import "./NoticeSection.css";

const notices = [
  { academy: "튼튼 영어학원", content: "학부모여러분, 안내드립니다...." },
  { academy: "오마이 수학학원", content: "이번 써머스쿨 공지드립니다..." },
  { academy: "동의 태권도", content: "여름방학 맞이 체험학습 공지..." },
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
