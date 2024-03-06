import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login.jsx';
import AdminUser from './pages/AdminUser/AdminUser';
import AdminProduct from './pages/AdminProduct/AdminProduct';
import AdminRoute from './Guard/AdminRoute/AdminRoute';

import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';


 function App() {
	return (
		<>
			<Header />

			<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* Rutas protegidas con el Guard AdminRoute */}
          <Route path='/admin-product'
            element={<AdminRoute>
              <AdminProduct />
            </AdminRoute>
            }
          />
          <Route path='/admin-user'
            element={<AdminRoute>
              <AdminUser />
            </AdminRoute>
            }
          />


        </Routes>

			<Footer />
		</>
	);
}

export default App