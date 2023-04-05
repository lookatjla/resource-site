import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/posts">
        <div>Restaurant Review App</div>
      </Link>
    </nav>
  )
}

export default Header;