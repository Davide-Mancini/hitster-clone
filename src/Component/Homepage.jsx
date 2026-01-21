import { Button, Container, Row } from "react-bootstrap";
import QRScanner from "./QRScanner";
import { useState } from "react";
import "../Style/Homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [qrVisible, setQrVisible] = useState(false);
  return (
    <>
      <div className="gradiente text-center bg-dark vh-100 text-light d-flex flex-column  ">
        <h1 className=" title-text mt-4">SARA BANDA</h1>
        {/* <p style={{ fontWeight: "700" }}>INDOVINA CAZZONE!</p> */}
        {qrVisible && (
          <div style={{ width: "100%", display: `${qrVisible}` }}>
            <div
              style={{ width: "150px", position: "relative" }}
              className="mx-auto  "
            >
              <img
                src={`${import.meta.env.BASE_URL}/img/Gemini_Generated_Image_ps9vrops9vrops9v-removebg-preview (1).png`}
                alt=""
                className=" w-100"
              />
            </div>
            <QRScanner
              onScan={(data) => {
                const parts = data.split("/");
                const id = parts[parts.length - 1];

                if (id) {
                  setQrVisible(false);

                  setTimeout(() => {
                    navigate(`/play/${id}`, { replace: true });
                  }, 200);
                }
              }}
            />
          </div>
        )}

        {qrVisible == true ? (
          <div class="comic-brutal-button-container mt-auto">
            <button
              onClick={() => setQrVisible(false)}
              class="comic-brutal-button"
            >
              <div class="button-inner">
                <span class="button-text">CHIUDI </span>
                <div class="halftone-overlay"></div>
                <div class="ink-splatter"></div>
              </div>
              <div class="button-shadow"></div>
              <div class="button-frame"></div>
            </button>
          </div>
        ) : (
          // <Button variant="danger" onClick={() => setQrVisible(false)}>
          //   Chiudi
          // </Button>
          <>
            <div
              style={{ width: "390px", position: "relative" }}
              className="mx-auto  mt-auto "
            >
              <img
                src={`${import.meta.env.BASE_URL}/img/NanoBanana-2026-01-20-removebg-preview.png`}
                alt=""
                className=" w-100 "
              />
            </div>
            <div class="comic-brutal-button-container ">
              <button
                onClick={() => setQrVisible(true)}
                class="comic-brutal-button"
              >
                <div class="button-inner">
                  <span class="button-text">GIOCA!</span>
                  <div class="halftone-overlay"></div>
                  <div class="ink-splatter"></div>
                </div>
                <div class="button-shadow"></div>
                <div class="button-frame"></div>
              </button>
            </div>
          </>
          // <Button onClick={() => setQrVisible(true)} className=" w-75">
          //   Gioca
          // </Button>
        )}
      </div>
    </>
  );
};
export default Homepage;
