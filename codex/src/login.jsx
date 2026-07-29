import {Link} from 'react-router-dom';
import Counter from './counter';

function Login(props) {
  const gryffindor = props.value;
  return (
    <div>
      <Counter />
      <h1>Login Page</h1>
      <Counter />
      <Link to="/counter">Go to Counter</Link>
      <Link to="/notfound">Go to NotFound</Link>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>  
      <br />
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Login;