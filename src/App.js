
import './App.css';
import { ProductCard } from './Components/ProductCard/ProductCard';


function App() {

  let ProductOneDetails = {
    price: '₹94,999',
    rating: 'Rating : 4',
    brand: 'Rolex',
    productDescription: 'Chestnut brown monobloc Cerachrom bezel in ceramic with moulded numerals and graduations',
    productName: 'Rolex Cosmograph Daytona',
    productPic: 'https://content.rolex.com/dam/2022-11/upright-bba-with-shadow/m228238-0061.png?impolicy=v6-upright&imwidth=270',

  }

  let ProductTwoDetails = {
    price: '₹10,999',
    rating: 'Rating : 3',
    brand: 'Nike',
    productDescription: 'Nike Air cushioning reduces the weight of the shoe without reducing performance',
    productName: 'Nike Mens Air Winflo 9 Running Shoe',
    productPic: 'https://www.jiomart.com/images/product/500x630/rvozm2wuca/columbus-breathe-white-orange-sports-running-shoes-men-product-images-rvozm2wuca-0-202207191040.jpg',

  }

  let ProductThreeDetails = {
    price: '₹899',
    rating: 'Rating : 4.5',
    brand: 'Lymio',
    productDescription: 'Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt || Men Printed Shirt',
    productName: 'Lymio Casual Tshirts',
    productPic: 'https://m.media-amazon.com/images/I/71csr914FcL._UL1500_.jpg',

  }

  let ProductFourDetails = {
    price: '₹1,599',
    rating: 'Rating : 4.8',
    brand: 'Noise',
    productDescription: 'With the Noise ColorFit Pro 2 smartwatch, you can receive notifications for calls, texts.',
    productName: 'Noise Smart Watch',
    productPic: 'https://cdn.shopify.com/s/files/1/0577/6785/4123/products/1_8363bcd9-c108-4cbe-ae0f-4b700a4ff6fc.jpg?v=1671435866&width=500',

  }

  let ProductFiveDetails = {
    price: '₹54,999',
    rating: 'Rating : 4.3',
    brand: 'Samsung',
    productDescription: 'With the Samsung Galaxy S21 FE, you can experience gaming and mesmerising photography. ',
    productName: 'SAMSUNG Galaxy S21 FE 5G',
    productPic: 'https://d2xamzlzrdbdbn.cloudfront.net/products/85275c11-7193-471b-af9c-d94bf57b027622211058.jpg',
  }

  function alertMessageOne() {
    alert("Product is 1 , which is watch of brand Rolex has of rupees ₹94,999 is added in the cart , please proceed to pay !!! ")
  }

  function alertMessageTwo() {
    alert("Product is 2 , which is shoes of brand Nike has of rupees ₹10,999 is added in the cart , please proceed to pay !!! ")
  }

  function alertMessageThree() {
    alert("Product is 3 , which is tshirts of brand Lymio has of rupees ₹899 is added in the cart , please proceed to pay !!! ")
  }

  function alertMessageFour() {
    alert("Product is 4 , which is smart watch of brand Noise has of rupees ₹1,599 is added in the cart , please proceed to pay !!! ")
  }

  function alertMessageFive() {
    alert("Product is 5 , which is mobile of brand Samsung has of rupees ₹54,999 is added in the cart , please proceed to pay !!! ")
  }




  return (
    <div className="App">
      <ProductCard
        productDetails={ProductOneDetails}
        AlertFunctions={alertMessageOne}
      />

      <ProductCard
        productDetails={ProductTwoDetails}
        AlertFunctions={alertMessageTwo}
      />

      <ProductCard
        productDetails={ProductThreeDetails}
        AlertFunctions={alertMessageThree}
      />

      <ProductCard
        productDetails={ProductFourDetails}
        AlertFunctions={alertMessageFour}
      />

      <ProductCard
        productDetails={ProductFiveDetails}
        AlertFunctions={alertMessageFive}
      />
    </div>
  );
}

export default App;
