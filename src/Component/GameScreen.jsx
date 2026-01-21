import { ArrowLeftCircle, ArrowLeftCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const GameScreen = () => {
  return (
    <>
      <Link to={"/"} className=" text-light me-auto mt-4 d-inline ">
        <ArrowLeftCircle style={{ fontSize: "2em" }} />
      </Link>
    </>
  );
};
export default GameScreen;
