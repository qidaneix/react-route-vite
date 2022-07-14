import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UseRoutes } from "./UseRoutes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CacheRoutes> */}
      {/* <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route path=":id" element={<Invoice />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/bpp" element={<Bpp />} />
      </Routes> */}
      {/* </CacheRoutes> */}
      <UseRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
