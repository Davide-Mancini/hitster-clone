import { useEffect, useState } from "react";
import { loadGoogleAnalytics } from "../Utils/loadGoogleAnalytics";
import { Button } from "react-bootstrap";

const STORAGE_KEY = "cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) === null;
  });

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.banner}>
      <span>
        Questo sito utilizza Google Analytics per fini statistici.&nbsp;
        <a href="/privacy" style={styles.link}>
          Privacy Policy
        </a>
      </span>
      <div>
        <Button variant="success" onClick={accept}>
          Accetta
        </Button>
        <Button variant="danger" onClick={reject} style={{ marginLeft: 8 }}>
          Rifiuta
        </Button>
      </div>
    </div>
  );
}

const styles = {
  banner: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "#111",
    color: "#fff",
    padding: "14px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 9999,
  },
  link: {
    color: "#4ea3ff",
  },
};
