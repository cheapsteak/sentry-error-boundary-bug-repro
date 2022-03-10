import * as Sentry from "@sentry/react";
import { useState } from "react";
import "./App.css";

console.log(process.env.REACT_APP_DSN);

Sentry.init({
  dsn: process.env.REACT_APP_DSN,
});

function App() {
  const [msg, setMsg] = useState("Works");

  return (
    <Sentry.ErrorBoundary
      fallback={({ eventId }) => {
        return (
          <p>
            Search Sentry for <code>event.id: {eventId}</code>
          </p>
        );
      }}
    >
      <div>{msg}</div>
      <button
        onClick={() => {
          setMsg({ message: "This will break" });
        }}
      >
        Click to trigger error
      </button>
    </Sentry.ErrorBoundary>
  );
}

export default App;
