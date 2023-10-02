import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Edit = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Edit
      <p>{user.name} edad {user.age} {user.adress ? `direccion ${user.adress}` : null}</p>
    </div>
  );
};

export default Edit;
