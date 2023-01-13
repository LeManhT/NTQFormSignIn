import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInForm from './component/signInForm/SignInForm';
import SignUpForm from './component/signUpForm/SignUpForm'
import { ToastContainer } from 'react-toastify';
import HomePage from './component/homePage/HomePage';
function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/signIn' element={<SignInForm></SignInForm>}></Route>
          <Route path='/signUp' element={<SignUpForm></SignUpForm>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
