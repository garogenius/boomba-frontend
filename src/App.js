import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
}

export default App;
