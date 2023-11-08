import { connectDB } from "@/util/database.js";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";

export default async function List() {
  const db = (await connectDB).db("woolandonly");
  let result = await db.collection("post").find().toArray();
  result = result.map((a, i) => {
    a._id = a._id.toString();
    return a;
  });

  console.log(result);
  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
}
