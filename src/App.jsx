import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './component/form/Form';
import SignUp from './component/signUpForm/SignUp';
import SignInForm from './component/signInForm/SignInForm';
import { ToastContainer } from 'react-toastify';
import HomePage from './component/HomePage/HomePage';
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/signIn' element={<SignInForm></SignInForm>}></Route>
          <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
