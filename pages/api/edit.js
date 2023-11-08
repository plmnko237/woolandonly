import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(request, answer) {
  if (request.method == "POST") {
    try {
      let change = { title: request.body.title, content: request.body.content };
      const db = (await connectDB).db("woolandonly");
      let result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(request.body._id) }, { $set: change });

      answer.redirect(302, "/list");
    } catch (error) {
      return answer.status(500).json("서버 오류입니다.");
    }
  }
}
