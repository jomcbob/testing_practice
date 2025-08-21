import '../cssModals/header.css';
import { Link } from "react-router-dom";

export default function Header({ link, page }) {
  return (
    <header>
      <div>Name</div>
      <Link to={link}> {page} </Link>
    </header>
  );
}
