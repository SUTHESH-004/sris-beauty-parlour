import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/PageTransition";

function AnimatedRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/:slug" element={<ServicePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
