
import { useEffect, useState } from 'react';
import Complete from './Complete-auto.module.css';
import voiceimage from './pngwing.com.png'

export function AutoCompleteBar() {

    // // to make user to enter the search data .........................................

    const [userEntryPlaces, setUserEntryPlaces] = useState('')

    // // to make data entry and to match the data ................................................

    const [userSearchEntry, setUserSearchEntry] = useState([]);

    // // to displayData .....................................................

    const [displaySearchedData, setDisplaySearchedData] = useState([]);


    function fetchDataFromApi() {

        fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
            .then(response => response.json())
            .then(data => setDisplaySearchedData(data.states))
            .catch(error => console.log(error))
    }


    useEffect(() => {
        fetchDataFromApi()
    }, []);


    function handleChange(event) {
        const refreshed_data = (event.target.value);
        setUserEntryPlaces(refreshed_data)

        // filter the places by name 

        const dataFilter = displaySearchedData.filter((filteredname) =>
            filteredname.state_name.includes(refreshed_data)
        )
        setUserSearchEntry(dataFilter);
    }


    function handleSelectData(data) {
        setUserEntryPlaces(data.state_name);
        setUserSearchEntry([]);
    }

    return (
        <>
            <div className={Complete.main_container}>

                <img src="https://www.pngmart.com/files/22/Google-Download-PNG-Isolated-Image.png" alt="" style={{ width: '30%' }} />

                <div className={Complete.search_area_input}>
                    <input type="text" placeholder='Search Google or type a URL' onChange={handleChange} value={userEntryPlaces} />
                    <div>
                        <img src={voiceimage} alt="" />
                    </div>
                </div>

                <div className={Complete.display_suggestions}>
                    {
                        userSearchEntry.map((final, index) => (
                            <p key={index.state_id}
                                onClick={() => handleSelectData(final)}>
                                {final.state_name}
                            </p>
                        ))
                    }
                </div>
            </div>
        </>
    )
}