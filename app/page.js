import Image from "next/image";
import styles from "./page.module.css";
import { MongoClient } from "mongodb";
import { connectDB } from "@/util/database";

export const revalidate = 60; //60초마다 캐싱

export default async function Home() {
  const db = (await connectDB).db("woolandonly");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      <h2 className="maintit">*One and only, Wool and only :&#41;</h2>
      <p className="maintit_p">
        세상에 오직 하나뿐인 당신의 니트, 여기에 기록해보세요.
      </p>
      <div className="knittingBg">
        <img src="/Knitting.gif" alt="knitting" className="knitting" />
        <div className="window_bar1"></div>
        <div className="window_bar2"></div>
      </div>
    </div>
  );
}
