import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cybersecurity & Computer Science Assignment Help | Best Tutor" },
      { name: "description", content: "Expert cybersecurity assignment help, computer science tutoring, programming mentoring, APA 7 support, and graduate research guidance." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/standalone.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0A192F", color: "#64FFDA", fontFamily: "system-ui" }}>
      Loading…
    </div>
  );
}
