import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoriaDoor from "./components/MoriaDoor";
import Welcome from "./components/Welcome";
//import Welcome from "./components/Welcome"; // Optional: your secret content

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoriaDoor />} />
        <Route path="/welcome" element={<Welcome />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
