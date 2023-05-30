
import './Favourites.css'
import { useSelector } from 'react-redux'

export function Favourites() {


    const selects = useSelector(state => state.favourites.noofFav)
    // console.log(selects)

    return (
        <>
            <div className="heading_header">
                <h1>Movies Fav Lists</h1>
            </div>

            <div className="main_div">
                {
                    selects.map((item) => {
                        return (

                            <div className='main_cards' key={item.imdbID}>
                                <div className='sub_cards'>
                                    <img src={item.Poster} alt="" />
                                    <h3>{item.Title}</h3>
                                    <p>{item.Type}</p>
                                    <p>{item.Year}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

