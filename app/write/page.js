import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {
  let session = await getServerSession(authOptions);
  if (session) {
    let nowDay = new Date();
    nowDay =
      nowDay.getFullYear() +
      "-" +
      (nowDay.getMonth() + 1) +
      "-" +
      nowDay.getDate();
    return (
      <div className="detail-bg">
        <div className="detail-con">
          <h3>글쓰기</h3>
          <form action="/api/write" method="POST">
            <div className="write-tit">
              <span>제목 : </span>
              <input
                type="text"
                name="title"
                placeholder="제목을 입력하세요."
                className="title"
                required
                autoFocus
              ></input>
            </div>

            <div className="write-con">
              <textarea
                wrap="hard"
                name="content"
                placeholder="내용을 입력하세요."
                required
              ></textarea>
            </div>
            <input
              type="text"
              name="date"
              defaultValue={nowDay}
              style={{ display: "none" }}
            />
            <button type="submit" className="btn1">
              작성완료
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="list-item">
        <h2 className="loading">🙆‍♀️로그인 먼저 해주세요🙆‍♂️</h2>
      </div>
    );
  }
}
