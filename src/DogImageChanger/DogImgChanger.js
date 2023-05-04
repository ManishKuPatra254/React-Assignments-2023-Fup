
import axios from 'axios';
import { useEffect, useState } from 'react';

export function DogImgChangerApi() {

    const [changeImage, setChangeImage] = useState('https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*');


    function dogApiFetchData() {

        const urlOfDog = 'https://dog.ceo/api/breeds/image/random'

        axios.get(urlOfDog)
            // .then(response => setChangeImage(response.data.message))
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        dogApiFetchData()
    }, [])


    return (
        <div>
            <img src={changeImage} alt=""
                style={{
                    maxWidth: '500px',
                    borderRadius: '15px',
                    margin: '20px',
                }} />
        </div>
    )
}
