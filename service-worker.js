importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.NetworkFirst()
);

if ("IdleDetector" in window) {
  async function runIdleDetection() {
    const state = await IdleDetector.requestPermission();
    console.log(state);

    const idleDetector = new IdleDetector();

    idleDetector.addEventListener("change", () => {
      const { userState, screenState } = idleDetector;

      if (userState == "idle") {
        // update database with status
      }
    });

    await idleDetector.start({
      threshold: 120000,
    });
  }
}
