import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from '../../pages/Landing';
import { Login } from '../../pages/Login';
import { Products } from '../../pages/Products'

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="products" element={<Products />}></Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};
