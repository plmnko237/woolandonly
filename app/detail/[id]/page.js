import { connectDB } from "@/util/database.js";
import { ObjectId } from "mongodb";
import Link from "next/link";

export default async function Detail(props) {
  const db = (await connectDB).db("woolandonly");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  let br = result.content.split("\r\n").map((line) => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });

  return (
    <div className="detail-bg">
      <div className="detail-con">
        <h3>Detail</h3>
        <h4>{result.title}</h4>
        <p>{br}</p>
      </div>
      <div className="btnBox">
        <Link href="/list" className="btn2">
          돌아가기
        </Link>
        <Link href={"/edit/" + result._id} className="btn2">
          수정하기
        </Link>
      </div>
    </div>
  );
}
