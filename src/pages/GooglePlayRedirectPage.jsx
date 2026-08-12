import { useEffect } from "react";

function GooglePlayRedirectPage() {
  console.log("GooglePlayRedirectPage laddades");

  useEffect(() => {
    console.log("useEffect körs");

    const hashQuery = window.location.hash.split("?")[1] || "";
    const params = new URLSearchParams(hashQuery);

    console.log("Hash:", window.location.hash);
    console.log("Source:", params.get("utm_source"));
    console.log("Medium:", params.get("utm_medium"));
    console.log("Campaign:", params.get("utm_campaign"));

    window.gtag?.("event", "google_play_redirect", {
        debug_mode: true,
      store: "google_play",
      source: params.get("utm_source") || "direct",
      medium: params.get("utm_medium") || "none",
      campaign: params.get("utm_campaign") || "none",
      page_location: window.location.href,
    });

    const timer = setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.anderssonhensfelt.mommi1";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Öppnar Google Play...</h1>
      <p>Du skickas vidare automatiskt.</p>
    </main>
  );
}

export default GooglePlayRedirectPage;