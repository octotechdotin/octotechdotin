import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Pages/Page";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
