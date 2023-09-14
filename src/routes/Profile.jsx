import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase_setup/firebase";

export const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = auth;

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };
  return (
    <>
      <h1>Welcome {auth.currentUser.email}. You are logged in!</h1>
      <button type="submit" onClick={(e) => logoutUser(e)}>
        Logout
      </button>
    </>
  );
};
