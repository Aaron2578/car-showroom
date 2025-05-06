import { useState } from "react";

const carsData = [
  {
    id: 1,
    brand: "TATA",
    name: "Indica",
    price: 200000,
    photo: "./indica.jpg",
    desp: "This is brand new car, with lowest price range.",
  },
  {
    id: 2,
    brand: "Maruthi Suzuki",
    name: "Swift",
    price: 300000,
    photo: "./swift.png",
    desp: "Budet Friendly Moto Vehicles, with lowest price range.",
  },
  {
    id: 3,
    brand: "Hyundai",
    name: "Venue",
    price: 400000,
    photo: "./venue.png",
    desp: "This is brand new car, with lowest price range.",
  },
  {
    id: 4,
    brand: "Mahindra",
    name: "Bolero",
    price: 500000,
    photo: "./bolero.png",
    desp: "This is brand new car, with lowest price range.",
    size: "50px",
  },
  {
    id: 5,
    brand: "Audi",
    name: "V5",
    price: 600000,
    photo: "./audi.png",
    desp: "Luxurious Car with high-end features",
  },
  {
    id: 6,
    brand: "Benz",
    name: "Cradle",
    price: 700000,
    photo: "./benz.png",
    desp: "Richest Car with high-end features",
  },
  {
    id: 7,
    brand: "BMW",
    name: "Mota",
    price: 700000,
    photo: "./bmw.png",
    desp: "Luxurious with high power Car with high-end features",
  },
  {
    id: 8,
    brand: "Mahindra",
    name: "Jeep",
    price: 700000,
    photo: "./jeep.png",
    desp: "Mountain Vehicle with 4X4 features. Better for offRoading",
  },
  {
    id: 9,
    brand: "Mini Kooper",
    name: "Cheeta",
    price: 700000,
    photo: "./mini kooper.png",
    desp: "Stylish Vehicles for youthers and more compatability",
  },
  {
    id: 10,
    brand: "Portuges",
    name: "Jagas",
    price: 700000,
    photo: "./portugal.png",
    desp: "Racing ,Fastest & Luxurious Vehicles for rich persons",
  },
];
export default function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div>
        <div className="header">
          <img src="./bolero.png" alt="indica car" height={"50px"} />
          <div>
            <h1>Sakthivel Motors</h1>
            <p>Sales & Services</p>
          </div>
        </div>
        
      </div>
    </header>
  );
}
function Body() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <button onClick={() => setIsOpen(!isOpen)}>Sales</button>
      {isOpen === true && (
        <ul className="cars">
          {carsData.map((cars) => (
            <CarItems carObj={cars} />
          ))}
        </ul>
      )}
    </div>
  );
}
function CarItems({ carObj }) {
  return (
    <li className="car">
      <h3 style={{ margin: "20px" }}>{carObj.brand}</h3>
      <img src={carObj.photo} alt={carObj.name} height={"80px"} />
      <h4 style={{ margin: "10px" }}>{carObj.name}</h4>
      <p>{carObj.desp}</p>
      <p style={{ marginTop: "10px" }}>
        <b>
          <span style={{ color: "red" }}>Price :</span> ₹{carObj.price}
        </b>
      </p>
      <button
        onClick={() =>
          alert(
            `I am an ${carObj.name} car from ${carObj.brand} Automobiles. 
I am in development. 
For More details`
          )
        }
      >
        More
      </button>
    </li>
  );
}
function Footer() {
  return (
    <footer>
      <p className="para">
        Build with{" "}
        <span>
          <img src="./logo192.png" alt="react icon" height="20px" />
        </span>{" "}
        React JS
      </p>
    </footer>
  );
}
