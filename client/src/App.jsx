import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import { Profile } from "./pages/Profile";
import AllApplicants from "./pages/AllApplicants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profile" element={<Profile />} />
          <Route path="all-applicants" element={<AllApplicants />} />
          <Route path="job-listings" element={<JobListing />} />
          <Route path="my-schedule" element={<Schedule />} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="help-center" element={<div>Help Center Page</div>} />
        </Route>
        <Route path="login" element={<div>This is Login Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
