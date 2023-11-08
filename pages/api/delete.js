import { connectDB } from "@/util/database.js";
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
        let result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(request.body) });
        console.log(result);
        answer.status(200).json("삭제완료");
      } else {
        answer.status(500).json("현재 유저와 작성자가 불일치");
      }
    } catch (error) {
      answer.status(500).json({ error: error.message });
    }
  }
}
