import { useEffect } from "react";

function AppStoreRedirectPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (window.gtag) {
      window.gtag("event", "app_store_redirect", {
        store: "app_store",
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        page_location: window.location.href,
      });
    }

    const timer = setTimeout(() => {
      window.location.href =
        "https://apps.apple.com/us/app/mommi/id6760843244";
    }, 1200);

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