import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Home
      <p>{user.name} edad {user.age} {user.adress ? `direccion ${user.adress}` : null}</p>
    </div>
  );
};

export default Home;
