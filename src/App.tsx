import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import ClinicalDataAnalysis from "./pages/ClinicalDataAnalysis";
import ProfessionalServices from "./pages/ProfessionalServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/business-intelligence" element={<BusinessIntelligence />} />
          <Route path="/application-development" element={<ApplicationDevelopment />} />
          <Route path="/clinical-data-analysis" element={<ClinicalDataAnalysis />} />
          <Route path="/professional-services" element={<ProfessionalServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
