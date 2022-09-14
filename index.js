
import { router } from "./routes/routes.js";
// router = require("../routes/routes.js");

window.addEventListener("hashchange", () => {
    console.log('window.location.hash', window.location.hash)
    router(window.location.hash);
  });
