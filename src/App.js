
import './App.css';
import { Card } from './Components/Cards/Cards';


function App() {


  const ProductsDetails = [

    {
      productId: '1',
      price: '₹94,999',
      rating: 'Rating : 4',
      brand: 'Rolex',
      productDescription: 'Chestnut brown monobloc Cerachrom bezel in ceramic with moulded numerals and graduations',
      productName: 'Rolex Cosmograph Daytona',
      productPic: 'https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m228238-0061.png?impolicy=v6-upright&imwidth=270',

    },

    {
      productId: '2',
      price: '₹10,999',
      rating: 'Rating : 3',
      brand: 'Nike',
      productDescription: 'Nike Air cushioning reduces the weight of the shoe without reducing performance',
      productName: 'Nike Mens Air Winflo 9 Running Shoe',
      productPic: 'https://www.jiomart.com/images/product/500x630/rvozm2wuca/columbus-breathe-white-orange-sports-running-shoes-men-product-images-rvozm2wuca-0-202207191040.jpg',

    },


    {
      productId: '3',
      price: '₹899',
      rating: 'Rating : 4.5',
      brand: 'Lymio',
      productDescription: 'Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt',
      productName: 'Lymio Casual Tshirts',
      productPic: 'https://m.media-amazon.com/images/I/71csr914FcL._UL1500_.jpg',

    },
  ];


  // function alertMessageOne() {
  //   alert('Product is  1 , which is watch of brand Rolex has of rupees ₹94,999 is added in the cart , please proceed to pay !!!')
  // }


  // function alertMessageTwo() {
  //   alert('Product of is  2 , which is shoes of brand Nike has of rupees ₹94,999 is added in the cart , please proceed to pay !!!')
  // }

  // function alertMessageThree() {
  //   alert('Product of is  3 , which is t-shirts of brand Lymio has of rupees ₹899 is added in the cart , please proceed to pay !!!')
  // }




  return (
    <div className="App">
      {ProductsDetails.map((elements) => (
        <Card keys={elements} elements={elements}
        />))}
    </div>
  );
}

export default App;
