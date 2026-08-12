import { useEffect } from "react";

function AppStoreRedirectPage() {
  useEffect(() => {
    // Läs UTM-parametrar från hash: #/app-store?utm_source=...
    const hashQuery = window.location.hash.split("?")[1] || "";
    const params = new URLSearchParams(hashQuery);
    console.log("Hash:", window.location.hash);
console.log("Source:", params.get("utm_source"));
console.log("Medium:", params.get("utm_medium"));
console.log("Campaign:", params.get("utm_campaign"));

    window.gtag?.("event", "app_store_redirect", {
      store: "app_store",
      source: params.get("utm_source") || "direct",
      medium: params.get("utm_medium") || "none",
      campaign: params.get("utm_campaign") || "none",
      page_location: window.location.href,
    });

    // Vänta lite så att GA4 hinner skicka eventet
    const timer = setTimeout(() => {
      window.location.href =
        "https://apps.apple.com/us/app/mommi/id6760843244";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Öppnar App Store...</h1>
      <p>Du skickas vidare automatiskt.</p>

      <p>
        Om inget händer{" "}
        <a href="https://apps.apple.com/us/app/mommi/id6760843244">
          klicka här
        </a>
        .
      </p>
    </main>
  );
}

export default AppStoreRedirectPage;