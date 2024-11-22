import Cart from './components/Cart/cart'
import ProductCart from './components/Product/ProductItem'
import './index.css'


function App() {

  return (
    <>
    <ProductCart
     name='Nike AirMax MD'
     rating={3}
     price={289.91}
     imageSrc='https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    />

<ProductCart
     name='Nike AirMax MD'
     rating={2}
     price={289.91}
     imageSrc='https://www.voxsneakers.com/cdn/shop/files/Frame37133_ece0b3d9-d04e-4ad0-a607-ebf5aa5c66c9.png?v=1710937638&width=493'
    />

<ProductCart
     name='Nike AirMax MD'
     rating={3}
     price={289.91}
     imageSrc='https://www.voxsneakers.com/cdn/shop/files/4_19443873-5907-4180-afe4-ef6cc3855560_540x-removebg-preview.png?v=1692740128&width=493'
    />
    </>
  )
}

export default App
