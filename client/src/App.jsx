import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
        </Route>
        <Route path="login" element={<div>This is Login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
