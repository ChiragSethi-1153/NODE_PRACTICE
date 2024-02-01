import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserRoutes from './Config/User.Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
