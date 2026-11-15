import { Link } from "react-router-dom";
import loginBackground from "../../assets/images/login.PNG";
import Input from "../ui/Input.jsx";

function LoginPage() {
  return (
    <div className="login-page">
      <img className="login-background" src={loginBackground} alt="" />
      <Link className="login-back" to="/">← ホームへ戻る</Link>
      <main className="login-card">
        <p className="eyebrow">MEMBER ACCESS</p>
        <h1>紫藤図へようこそ</h1>
        <form className="login-form" action="#" method="get">
          <Input id="username" label="メールまたは携帯番号" name="username" autoComplete="username" placeholder="メールまたは携帯番号" required />
          <Input id="password" label="パスワード" name="password" type="password" autoComplete="current-password" placeholder="パスワード" required />
          <button type="submit">ログイン</button>
          <a href="#">パスワードをお忘れですか？</a>
        </form>
        <p className="signup-note">
          アカウントをお持ちでない方は
          <a href="#">新規登録</a>
        </p>
      </main>
    </div>
  )
}

export default LoginPage
