
import { useEffect, useState } from 'react';
import './cardsaoi.css';
import { useDispatch } from 'react-redux';
import { addToFav } from '../Fav/Fav';
// import { useSelector } from 'react-redux'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'



export function Cardsapi() {

    const [displayData, setDisplayData] = useState([])

    const dispatch = useDispatch()

    // const select = useSelector(state => state.favourites.noofFav)
    // // console.log(select, 'hello')

    function handleClick() {
        fetch('https://www.omdbapi.com/?s=action&apikey=68979b9b&page=1')
            .then(data => data.json())
            .then(response => setDisplayData(response.Search))
            // .then(response => console.log(response.Search))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        handleClick()
    }, [])


    function handleAddFav(item) {
        // console.log(item)
        dispatch(addToFav(item))
    }

    return (
        <>
            <div className="main_div">
                {
                    displayData.map((item) => {
                        return (

                            <div className='main_cards' key={item.imdbID}>
                                <div className='sub_cards'>
                                    <img src={item.Poster} alt="" />
                                    <h3>{item.Title}</h3>
                                    <p>{item.Type}</p>
                                    <p>{item.Year}</p>
                                    <button className='btn1' onClick={() => handleAddFav(item)}>
                                        <BsFillBookmarkHeartFill className='imported_icon' />
                                    </button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}


