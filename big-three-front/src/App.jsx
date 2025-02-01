import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ChoosePlayerPage } from "./pages/choosePlayerPage.jsx";
import TennisCourtPage from "./pages/tennisCourtPage.jsx";
import { ChoosePlayerLayout } from "./layouts/choosePlayerLayout.jsx";
import { PlayerForm } from "./components/playerForm.jsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={new QueryClient()}>
          <Routes>
            <Route path="/select" >
              <Route index element={<ChoosePlayerPage />} />
              <Route element={<ChoosePlayerLayout />}>
                <Route path=":id" element={<PlayerForm />} />
              </Route>
            </Route>
            <Route path="/tennis-court" element={<TennisCourtPage />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
