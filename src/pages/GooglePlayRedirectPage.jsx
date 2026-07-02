import { useEffect } from "react";

function GooglePlayRedirectPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (window.gtag) {
      window.gtag("event", "google_play_redirect", {
        store: "google_play",
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        page_location: window.location.href,
      });
    }

    const timer = setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.anderssonhensfelt.mommi1";
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Öppnar Google Play...</h1>
      <p>Du skickas vidare automatiskt.</p>

      <p>
        Om inget händer{" "}
        <a href="https://play.google.com/store/apps/details?id=com.anderssonhensfelt.mommi1">
          klicka här
        </a>
        .
      </p>
    </main>
  );
}

export default GooglePlayRedirectPage;