import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
// import { ChoosePlayerPage } from "./pages/choosePlayerPage.jsx";
import TennisCourtPage from "./pages/tennisCourtPage.jsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
      
      <TennisCourtPage/>
       
      </QueryClientProvider>
    </>
  );
}

export default App;
