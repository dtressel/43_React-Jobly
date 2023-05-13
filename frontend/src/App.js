import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import Jobs from './Jobs';
import Signup from './Signup';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-main-wrapper">
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/companies' element={<Companies />} />
            <Route path='/companies/:handle' element= {<CompanyDetails />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/singup' element={<Signup />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
