
import { Link } from 'react-router-dom';
// import '../assets/styles/TourCategories.css';

const categories = [
  { name: "Bali Tours", path: "/tours/bali" },
  { name: "Borneo Tours", path: "/tours/borneo" },
  { name: "Flores Tours", path: "/tours/flores" },
  { name: "Java Tours", path: "/tours/java" },
  { name: "Komodo Tours", path: "/tours/komodo" },
  { name: "Lombok Tours", path: "/tours/lombok" },
  { name: "Maluku Ternate Tours", path: "/tours/maluku" },
  { name: "Papua Tours", path: "/tours/papua" },
  { name: "Sulawesi Tours", path: "/tours/sulawesi" },
  { name: "Sumatera Tours", path: "/tours/sumatera" },
  { name: "Sumba Tours", path: "/tours/sumba" },
];

const TourCategories = () => {
  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={category.path}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourCategories;
