import { Route, Routes } from "react-router-dom";
import Index from "./views/1219";

function App() {
  return (
    <>
      <Routes>
        <Route path="/1219" element={<Index />} />

      </Routes>
    </>
  );
}

export default App;
