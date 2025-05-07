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
const Services = [
  { id: 1, service: "Repair", price: 2000, photo: "./repair.jpg" },
  { id: 2, service: "Water Wash", price: 1000, photo: "./water wash.jpg" },
  { id: 3, service: "Engine", price: 10000, photo: "./engine.jpg" },
  { id: 4, service: "Painting", price: 5000, photo: "./paint.jpg" },
  { id: 5, service: "Modification", price: 12000, photo: "./modification.jpg" },
  { id: 1, service: "Repair", price: 2000, photo: "./repair.jpg" },
  { id: 2, service: "Water Wash", price: 1000, photo: "./water wash.jpg" },
  { id: 3, service: "Engine", price: 10000, photo: "./engine.jpg" },
  { id: 4, service: "Painting", price: 5000, photo: "./paint.jpg" },
  { id: 5, service: "Modification", price: 12000, photo: "./modification.jpg" },
  { id: 1, service: "Repair", price: 2000, photo: "./repair.jpg" },
  { id: 2, service: "Water Wash", price: 1000, photo: "./water wash.jpg" },
  { id: 3, service: "Engine", price: 10000, photo: "./engine.jpg" },
  { id: 4, service: "Painting", price: 5000, photo: "./paint.jpg" },
  { id: 5, service: "Modification", price: 12000, photo: "./modification.jpg" },
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
          <div className="heading">
            <h1>Sakthivel Motors</h1>
            <p>Sales & Services</p>
          </div>
        </div>
      </div>
    </header>
  );
}
function Body() {
  // const [isOpen, setIsOpen] = useState(true);
  const [home, setHome] = useState(true);
  const [tab, setTab] = useState(false);
  const [tabs, setTabs] = useState(false);
  return (
    <div className="menu">
      {/* <button onClick={() => setIsOpen(!isOpen)}>Sales</button> */}
      <div className="btn-wrapper">
        <button onClick={() => setHome(!home)}>Home</button>
        <button onClick={() => setTab(!tab)}>Sales</button>
        <button onClick={() => setTabs(!tabs)}>Services</button>
      </div>
      {home === true ? <Home /> : ""}
      {tab === true ? (
        <ul className="cars">
          {carsData.map((cars) => (
            <CarItems carObj={cars} />
          ))}
        </ul>
      ) : (
        ""
      )}
      {tabs === true ? (
        <ul className="cars">
          {Services.map((ser) => (
            <CarServices serObj={ser} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
function Home() {
  return (
    <div className="home">
      <img src="./jeep.png" alt="jeep" />
      <div>
        <h2 style={{ margin: "0px 0px 20px 0px", color: "red" }}>Jeep 4X4</h2>
        <p>
          Jeep is an American automobile manufacturer. The company was founded
          in 1943 and was acquired by Chrysler in 1987. Jeep is now owned by
          Stellantis, a European-American conglomerate. Jeep was also the name
          of a light vehicle of World War II developed by the U.S. Army
          Quartermaster Corps. The jeep weighed 1 1/4 tons, was powered by a
          four-cylinder engine, and was classed as a quarter-ton truck in
          carrying capacity. A four-wheel drive vehicle of one-half- to
          one-and-one-half-ton [0.45 to 1.36 tonnes] capacity for reconnaissance
          or other army duty. A term applied to the bantam-cars, and
          occasionally to other motor vehicles (U.S.A.) in the Air Corps, the
          Link Trainer; in the armored forces, the 1⁄2-ton command vehicle.
        </p>
      </div>
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
function CarServices({ serObj }) {
  return (
    <li className="car">
      {/* <h3 style={{ margin: "20px" }}>{carObj.brand}</h3> */}
      <img src={serObj.photo} alt={serObj.name} height={"80px"} />
      <h4 style={{ margin: "10px" }}>{serObj.service}</h4>
      <p style={{ margin: "10px" }}>
        <b>
          <span style={{ color: "red" }}>Price :</span> ₹{serObj.price}
        </b>
      </p>
      {/* <button
        onClick={() =>
          alert(
            `I am an ${serObj.name} car from ${serObj.brand} Automobiles. 
I am in development. 
For More details`
          )
        }
      >
        More
      </button> */}
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
