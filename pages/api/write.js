import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(request, answer) {
  let session = await getServerSession(request, answer, authOptions);

  if (session) {
    request.body.author = session.user.email;
  }
  console.log(request.body);
  if (request.method == "POST") {
    try {
      const db = (await connectDB).db("woolandonly");
      let result = await db.collection("post").insertOne(request.body);
      answer.redirect(302, "/list");
    } catch (error) {
      return answer.status(500).json("서버 오류입니다.");
    }
  }
}
