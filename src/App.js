import './App.css';
import { ScrollProfile } from './Components/ProfileScrollAction/ProfileCardScroll';
import image1 from './Components/ProfileImages/pexels-pixabay-220453.jpg'
import image2 from './Components/ProfileImages/pexels-dellon-thomas-3394347.jpg'
import image3 from './Components/ProfileImages/pexels-ono-kosuki-5648103.jpg'
import image4 from './Components/ProfileImages/pexels-andrea-piacquadio-774909.jpg'
import image5 from './Components/ProfileImages/pexels-dinielle-de-veyra-4195342.jpg'
import image6 from './Components/ProfileImages/pexels-andrea-piacquadio-3973335.jpg'
import image7 from './Components/ProfileImages/pexels-andrea-piacquadio-3979228.jpg'
import image8 from './Components/ProfileImages/pexels-teddy-joseph-2955375.jpg'

function App() {
  return (
    <div className="App">

      <ScrollProfile name='Ethan Parker' company='CEO of American Industries' experience='11 Yrs Exp' imageOne={image1} />
      <ScrollProfile name='Dellon Thomas' company='CEO of Stark Industries' experience='3 Yrs Exp' imageTwo={image2} />
      <ScrollProfile name='Bruce Wayne' company='CEO of Wayne Enterprises' experience='15 Yrs Exp' imageThree={image3} />
      <ScrollProfile name='Jenny Willams' company='CEO of zetfrost Industries' experience='7 Yrs  Exp' imageFour={image4} />
      <ScrollProfile name='Holmes Steve' company='CEO of Fro Industries' experience='6 Yrs  Exp' imageFive={image5} />
      <ScrollProfile name='Mark Jones' company='CEO of KGF Industries' experience='8 Yrs  Exp' imageSix={image6} />
      <ScrollProfile name='Dinielle Veyra' company='CEO of Brucetech Industries' experience='4 Yrs  Exp' imageSeven={image7} />
      <ScrollProfile name='Steven Mark' company='CEO of Darkish Industries' experience='2 Yrs  Exp' imageEight={image8} />
    </div>
  );
}

export default App;