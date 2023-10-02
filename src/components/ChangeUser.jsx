import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const ChangeUser = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() =>
          setUser({ name: "Juan Perez", age: 30, adress: "calle falsa 123" })
        }
      >
        Change User
      </button>
    </div>
  );
};

export default ChangeUser;
