import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getIngredients } from '../../services/reducers';
import { useSelector, useDispatch } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import { getStateLoadIngredients } from '../../services/selectors';
import Main from '../main/main';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import ForgotPassword from '../pages/forgot-password/forgot-password';
import ResetPassword from '../pages/reset-password/reset-password';
import Profile from '../pages/profile/profile';
import NotFound from '../pages/not-found/not-found';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';

function App() {
  const { preloader } = useSelector(getStateLoadIngredients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  if (preloader) return <Preloader />;
  return (
    <div className={styles.page}>
      <AppHeader />
      <Router>
        <Routes>
           <Route path="/" element={<Main />}/>
           <Route path="/login" element={<Login />}/>
           <Route path="/register" element={<Register />}/>
           <Route path="/forgot-password" element={<ForgotPassword />}/>
           <Route path="/reset-password" element={<ResetPassword />}/>
           <Route path="/profile" element={<Profile />}/>
           <Route path="*" element={<NotFound />}/>
           {/* <Route path="/ingredients/:id" element={<Page />}/> */}
       </Routes>
      </Router>
     </div>

  );
}

export default App;