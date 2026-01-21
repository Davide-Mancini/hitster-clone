import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

export default function QRScanner({ onScan }) {
  useEffect(() => {
    const qrCodeScanner = new Html5Qrcode("reader");

    qrCodeScanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decodedText) => {
        qrCodeScanner
          .stop()
          .then(() => {
            onScan(decodedText);
          })
          .catch((err) => {
            console.error("Errore stop scanner", err);
            onScan(decodedText);
          });
      },
      (err) => {
        console.log(err);
      },
    );

    return () => qrCodeScanner.stop();
  }, []);

  return <div id="reader" style={{ width: "100%" }}></div>;
}
