export default function Register() {
  return (
    <div className="join-bg">
      <form method="POST" action="/api/auth/signup" className="join-con">
        <h3>Sign Up</h3>
        <div className="input-box">
          <input name="name" type="text" placeholder="이름" required />
        </div>
        <div className="input-box">
          <input name="email" type="text" placeholder="이메일" required />
        </div>
        <div className="input-box">
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            required
          />
        </div>
        <div className="input-box">
          <button type="submit">가입하기</button>
        </div>
      </form>
    </div>
  );
}
