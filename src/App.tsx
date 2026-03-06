import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./component/pages/notFount.tsx";
import { DefaultProviders } from "./component/providers/default.tsx";
import AuthCallback from "./component/pages/auth/callback.tsx";
import Index from "./component/pages/index.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
