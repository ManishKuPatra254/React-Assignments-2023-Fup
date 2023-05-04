import { useState } from 'react'
import './Fetchotp.css'
import axios from 'axios';

export function Fetchotp() {

    const [fetchResponse, setFetchresponse] = useState();
    const [mobileValidate, setMobileValidate] = useState();  // for validation ...............................................

    function fetchPostOtpdata() {

        axios.post(`https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            {
                mobile: `${fetchResponse}`
            })

            // .then((data) => data.json())
            .then((response) => setFetchresponse(response.mobile))
            .catch((error) => console.log(error))
        validatioOfMobileNumber()
    }


    function handleMobilenumber(event) {
        setFetchresponse(event.target.value)
    }


    function validatioOfMobileNumber() {

        if ((/^[6-9]\d{9}$/.test(fetchResponse) === true)) {
            setMobileValidate('OTP Sent Successfully Check Your Device');
            alert('OTP Sent Successfully Check Your Device')
            setFetchresponse(" ");
        }
        else {
            setMobileValidate('Not a Valid Number Please Check Again');
            alert('Not a Valid Number Please Check Again')

        }


    }

    return (
        <>
            <div className='otp_fetcher'>

                <h1>Enter Your Mobile Number</h1>

                <div>
                    <input type="number" onChange={handleMobilenumber} value={fetchResponse}
                     placeholder='+91 Enter 10 digit number' />
                </div>

                <button onClick={fetchPostOtpdata}>Get Otp</button>

                <h4>{mobileValidate}</h4>

            </div>
        </>
    )
}


