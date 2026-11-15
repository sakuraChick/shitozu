import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/stock", label: "在庫情報" },
  { to: "/about", label: "私たちについて" },
]

function NavBar() {
  return (
    <header className="site-header">
      <Link className="site-brand" to="/">紫藤図<span>SHITŌZU</span></Link>
      <nav className="site-nav" aria-label="メインナビゲーション">
        {links.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>{label}</NavLink>
        ))}
        <NavLink className="nav-login" to="/login">ログイン</NavLink>
      </nav>
    </header>
  )
}

export default NavBar;
