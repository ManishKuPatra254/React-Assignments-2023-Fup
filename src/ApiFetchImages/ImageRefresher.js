import './ImageRefresher.css';
import { useEffect, useState } from 'react';

export function ImageRefresher() {

    const [image, setImage] = useState('https://images.pexels.com/photos/4825701/pexels-photo-4825701.jpeg?auto=compress&cs=tinysrgb&w=600');

    useEffect(() => {

        fetch('https://dog.ceo/api/breeds/image/random')
            .then((data) => data.json())
            .then((response) => setImage(response.message))
            .catch((error) => console.log(error));

    }, [])

    return (

        <img src={image} alt="Not found"
            style={{ width: '550px' }}
        />
    )
}