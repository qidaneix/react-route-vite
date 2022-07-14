import { useRoutes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Bpp from "./Bpp";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

export function UseRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "expenses", element: <Expenses /> },
        {
          path: "invoices",
          element: <Invoices />,
          children: [{ path: ":id", element: <Invoice /> }],
        },
        {
          path: "*",
          element: (
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          ),
        },
      ],
    },
    { path: "/bpp", element: <Bpp /> },
  ]);
}
