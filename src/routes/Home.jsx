import handleSubmit from "../handleSubmit";
import { useRef } from "react";

export const Home = () => {
  const dataRef = useRef();
  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = "";
  };
  return (
    <>
      <h1>Home</h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          ref={dataRef}
          placeholder="Testing firestore"
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};
