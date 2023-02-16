import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchMatch from "./components/SearchMatch";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <div>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <header>
            <Link to="/">Home</Link>
          </header>
          <Routes>
            <Route path="/" element={<SearchMatch />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
