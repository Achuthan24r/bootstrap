import { Link, useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No Details Found</h2>

        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <img
        src={state.image}
        alt={state.name}
        style={{ width: "500px", borderRadius: "10px" }}
      />

      <h1>{state.name}</h1>

      <h3>Location</h3>
      <p>{state.location}</p>

      <h3>Rating</h3>
      <p>{state.rating}</p>

      <h3>Description</h3>
      <p>{state.description}</p>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Details;