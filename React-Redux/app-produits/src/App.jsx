import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import './App.css'

function App() {


  return (
    <div className='container-fluid col-9 p-4 '>
      <h1>Application de gestion de produits</h1>
      <ProductList />
      <AddProduct />
    </div>
  )
}

export default App
