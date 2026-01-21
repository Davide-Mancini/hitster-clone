import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

export default function QRScanner({ onScan }) {
  useEffect(() => {
    const qrCodeScanner = new Html5Qrcode("reader");

    qrCodeScanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      (decodedText) => {
        onScan(decodedText);
        qrCodeScanner.stop();
      },
      (err) => {
        console.log(err);
      },
    );

    return () => qrCodeScanner.stop();
  }, []);

  return <div id="reader" style={{ width: "100%" }}></div>;
}
