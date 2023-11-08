"use client";
export default function Error({ error, reset }) {
  return (
    <div className="list-item">
      <h2 className="loading">❗Error❗</h2>
      <p>
        <button
          className="errorBtn"
          onClick={() => {
            reset();
          }}
        >
          다시 시도
        </button>
      </p>
    </div>
  );
}
