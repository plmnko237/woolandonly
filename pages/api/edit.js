import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(request, answer) {
  let session = await getServerSession(request, answer, authOptions);

  if (request.method == "POST") {
    try {
      const db = (await connectDB).db("woolandonly");
      let find = await db
        .collection("post")
        .findOne({ _id: new ObjectId(request.body) });

      if (find.author == session.user.email) {
        let change = {
          title: request.body.title,
          content: request.body.content,
        };
        let result = await db
          .collection("post")
          .updateOne({ _id: new ObjectId(request.body._id) }, { $set: change });

        answer.redirect(302, "/list");
      } else {
        answer.status(500).json("현재 유저와 작성자가 불일치");
      }
    } catch (error) {
      return answer.status(500).json("서버 오류입니다.");
    }
  }
}
