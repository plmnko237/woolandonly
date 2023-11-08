import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
  const db = (await connectDB).db("woolandonly");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="detail-bg">
      <div className="detail-con">
        <h3>글수정</h3>
        <form action="/api/edit" method="POST">
          <div className="write-tit">
            <span>제목 : </span>
            <input
              type="text"
              name="title"
              placeholder="제목을 입력하세요."
              className="title"
              autoFocus
              defaultValue={result.title}
            ></input>
          </div>
          <div className="write-con">
            <textarea
              name="content"
              placeholder="내용을 입력하세요."
              defaultValue={result.content}
            ></textarea>
          </div>
          <button type="submit" className="btn1">
            수정완료
          </button>
          <input
            type="hidden"
            name="_id"
            defaultValue={result._id.toString()}
          />
        </form>
      </div>
    </div>
  );
}
