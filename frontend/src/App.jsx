import { SignUp } from "./pages/SignUp"
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

function App() {

  return <Router>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/signup" />} />
    </Routes>
  </Router>

}

export default App
