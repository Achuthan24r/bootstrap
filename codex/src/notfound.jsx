import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <h1>
      mis leaded page info so use this with ur existing url remove */login to go back to login page
      <br />
      <Link to="/login">Go to Login</Link>

    </h1>

  );
}

export default NotFound;