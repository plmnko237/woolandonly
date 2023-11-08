"use client";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <>
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <Link href={"/detail/" + result[i]._id}>
            <h4>{result[i].title}</h4>
          </Link>
          <p>{result[i].date}</p>
          <Link href={"/edit/" + result[i]._id}>
            <img className="edit" src="/edit.svg" alt="글수정" />
          </Link>
          <span
            className="delete"
            onClick={(e) => {
              e.stopPropagation();
              fetch("/api/delete", {
                method: "POST",
                body: result[i]._id,
              })
                .then((r) => {
                  return r.json();
                })
                .then(() => {
                  e.target.parentElement.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.parentElement.style.display = "none";
                  }, 1500);
                })
                .catch((error) => {
                  console.error("Error deleting item:", error);
                });
            }}
          >
            <img src="/delete.svg" alt="글삭제" className="delete" />
          </span>
        </div>
      ))}
    </>
  );
}
