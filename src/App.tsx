// import React, { Suspense } from 'react'
import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { lazy } from 'react';
import Loader from './components/Loader';


// main
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Products = lazy(() => import('./pages/Products'))
const Transactions = lazy(() => import('./pages/Transactions'))
const Customers = lazy(() => import('./pages/Customers'))

// add button on products 
const NewProducts = lazy(() => import("./pages/management/NewProducts"))

// management button 
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"))
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"))

// charts 
const BarCharts = lazy(() => import('./pages/charts/BarCharts'))
const PieCharts = lazy(() => import('./pages/charts/PieCharts'))
const LineCharts = lazy(() => import('./pages/charts/LineCharts'))

// app 
const StopWatch = lazy(() => import('./pages/appTools/StopWatch'))
const Coupon = lazy(() => import('./pages/appTools/Coupon'))
const Toss = lazy(() => import('./pages/appTools/Toss'))


const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Link to="/admin/dashboard"><button>Visit Dashboard</button></Link>}/>

        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/product' element={<Products />}/>
        <Route path='/admin/customer' element={<Customers />}/>
        <Route path='/admin/transaction' element={<Transactions />}/>

        {/* Charts */}
       <Route path='/admin/chart/bar' element={<BarCharts />} />
       <Route path='/admin/chart/pie' element={<PieCharts />} />
       <Route path='/admin/chart/line' element={<LineCharts />} />

        {/* Apps */}
        <Route path='/admin/app/stopwatch' element={<StopWatch />} />
       <Route path='/admin/app/coupon' element={<Coupon />} />
       <Route path='/admin/app/toss' element={<Toss />} />

        {/* management */}
        <Route path="/admin/product/new" element={<NewProducts />} />
        <Route path="/admin/product/:id" element={<ProductManagement />} />
        <Route path="/admin/transaction/:id" element={<TransactionManagement />} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App
