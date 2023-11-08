import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(request, answer) {
  if (request.method === "POST") {
    let db = (await connectDB).db("woolandonly");
    let find = await db
      .collection("user_cred")
      .findOne({ email: request.body.email });

    try {
      if (find && find.email == request.body.email) {
        answer.status(500).json("이미 존재하는 이메일 입니다.");
      } else {
        const hash = await bcrypt.hash(request.body.password, 10);
        request.body.password = hash;
        await db.collection("user_cred").insertOne(request.body);
        answer.status(200).json("가입완료");
      }
    } catch (error) {
      answer.status(500).json("서버오류입니다.");
    }
  }
}
