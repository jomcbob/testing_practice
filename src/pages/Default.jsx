import { Link } from "react-router-dom";

const DefaultProfile = () => {
  return (
    <>
      <div>no person selected chose one below!</div>
        <li><Link to="/profile/popeye">Popeye</Link></li>
        <li><Link to="/profile/spinach">Spinach</Link></li>
    </>
  )
};

export default DefaultProfile;
