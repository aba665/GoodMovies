import './App.css';
//Importações das páginas
import HomePage from './pages/HomePage/index';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage/index'; 
import UserPage from './pages/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HomePage /> */}
        {/* <LoginPage /> */}
        {/* <RegisterPage /> */}
        <UserPage />
      </header>
    </div>
  );
}

export default App;
