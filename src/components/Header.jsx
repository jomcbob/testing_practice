import '../cssModals/header.css';
import { Link } from "react-router-dom";

export default function Header({ link, page, img }) {
  return (
    <header>
      <Link to={'/'}>
        <div>
          <img src="/logo.png" height={'80px'} alt="logo smart living" />
        </div>
      </Link>
      <Link to={link} className="swichButton">
        <img src={img} height="40" alt="" />
        <span>{page}</span>
      </Link>

    </header>
  );
}
