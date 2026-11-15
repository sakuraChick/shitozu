import { Link } from "react-router-dom";

function ButtonLink({ href, children, className = "button" }) {
  return <Link className={className} to={href}>{children}</Link>
}

export default ButtonLink;
