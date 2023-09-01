import ReactDOM from "react-dom/client";

import App from "@/pages/App";
import { GlobalStyles } from "@/styles/global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <GlobalStyles />
  </>,
);
