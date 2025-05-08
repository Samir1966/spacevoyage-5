import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Concepts from "@/pages/Concepts";
import Planets from "@/pages/Planets";
import Articles from "@/pages/Articles";
import Missions from "@/pages/Missions";
import PlanetPredictor from "./pages/PlanetPredictor";
import SpaceCalculators from "./pages/SpaceCalculators";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/concepts" component={Concepts} />
      <Route path="/planets" component={Planets} />
      <Route path="/articles" component={Articles} />
      <Route path="/missions" component={Missions} />
      <Route path="/planet-predictor" component={PlanetPredictor} />
      <Route path="/calculators" component={SpaceCalculators} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Layout>
          <Toaster />
          <Router />
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
