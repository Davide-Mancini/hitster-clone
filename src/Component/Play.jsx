import { Container } from "react-bootstrap";
import BlindPlayer from "./BlindPlayer";

import { useParams } from "react-router-dom";
import GameScreen from "./GameScreen";

const Play = () => {
  const { id } = useParams();
  return (
    <>
      <Container className=" bg-dark min-vh-100 text-light d-flex flex-column justify-content-center align-items-center">
        <GameScreen />
        <BlindPlayer trackId={id} />
      </Container>
    </>
  );
};
export default Play;
