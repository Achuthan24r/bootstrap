import { Link } from "react-router-dom";

function Home() {
  const places = [
    {
      id: 1,
      name: "Ooty",
      image: "https://via.placeholder.com/300x200",
      location: "Nilgiris",
      rating: "4.8 ⭐",
      description:
        "Ooty is one of the most beautiful hill stations in Tamil Nadu. It is famous for tea plantations, mountains, lakes, and cool weather."
    },
    {
      id: 2,
      name: "Kodaikanal",
      image: "https://via.placeholder.com/300x200",
      location: "Dindigul",
      rating: "4.7 ⭐",
      description:
        "Kodaikanal is known for its scenic beauty, Kodai Lake, waterfalls, and pleasant climate throughout the year."
    },
    {
      id: 3,
      name: "Chennai",
      image: "https://via.placeholder.com/300x200",
      location: "Chennai",
      rating: "4.5 ⭐",
      description:
        "Chennai is the capital city of Tamil Nadu and is famous for Marina Beach, temples, and South Indian culture."
    },
    {
      id: 4,
      name: "Madurai",
      image: "https://via.placeholder.com/300x200",
      location: "Madurai",
      rating: "4.6 ⭐",
      description:
        "Madurai is an ancient city in Tamil Nadu, known for its temples, markets, and rich cultural heritage."
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Tourist Places</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {places.map((place) => (
          <div
            key={place.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              width: "300px",
              textAlign: "center"
            }}
          >
            <img
              src={place.image}
              alt={place.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h2>{place.name}</h2>

            <p>
              <b>Location:</b> {place.location}
            </p>

            <p>
              <b>Rating:</b> {place.rating}
            </p>

            <Link to="/details" state={place}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;