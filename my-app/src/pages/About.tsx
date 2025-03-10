import { useState } from "react";

import Alert from "../components/Alert";
import Button from "../components/Button";

export default function About() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button color="info" onClick={() => setAlertVisible(true)}>
        My button
      </Button>
    </div>
  );
}
