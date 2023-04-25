import './App.css';
import { ProfileCard } from './Components/ProfileCard/Proflecard';
import image1 from './Components/ProfileCard/Akash Gupta.jpg'
import image2 from './Components/ProfileCard/Sweta Singh.jpg'
import image3 from './Components/ProfileCard/Anish Mishra.jpeg'


function App() {

  function rendercontentTwo() {
    alert("Sweta Singh");
  }


  function rendercontentThree() {
    alert("Anish Mishra");
  }
  return (

    <div className="App">
      <ProfileCard buttonName="See More"
        designation="Frontend Developer"
        name="Akash Gupta"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi eaque explicabo voluptatum cum iusto, in, provident ea quam !"
        img1={image1}
      />

      <ProfileCard buttonName="See More"
        designation="Backend Developer"
        name="Sweta Singh"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi eaque explicabo voluptatum cum iusto, in, provident ea quam !"
        img2={image2}
        onClickRenderContent={rendercontentTwo}
      />

      <ProfileCard buttonName="See More"
        designation="UI / UX Designer"
        name="Anish Mishra"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi eaque explicabo voluptatum cum iusto, in, provident ea quam !"
        img3={image3}
        onClickRenderContent={rendercontentThree}
      />

    </div>

  );
}

export default App;
