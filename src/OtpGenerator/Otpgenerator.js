import './Otpgenerator.css';
import { useState } from 'react';
import axios from 'axios';

export function GenerateOtpAxiosMethod() {

    const [fetchResponseApi, setFetchResponseApi] = useState('');


    function otpGenerationApiPart() {

        const urlOfOtpApi = 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP';

        axios.post(urlOfOtpApi, {
            mobile: `${fetchResponseApi}`,
        })

            .then(response => setFetchResponseApi(response.mobile))
            .catch(error => console.log(error))
        validationOfNumber()
    }

    function valuePassing(event) {
        setFetchResponseApi(event.target.value);
    }

    function validationOfNumber() {
        const redgx = /^[6-9]\d{9}$/.test(fetchResponseApi);
        if (redgx === true) {
            setFetchResponseApi(' ')
            alert('OTP Send Successfully');
        }
        else {
            alert('Try Again INVALID NUMBER');
        }
    }

    return (
        <>
            <div className='otp_fetcher'>

                <h1>Enter Your Mobile Number</h1>

                <div>

                    <input type="number" onChange={valuePassing} value={fetchResponseApi} placeholder='Enter the mobile number' />

                </div>
                <button onClick={otpGenerationApiPart}>Generate Otp</button>

            </div>
        </>
    )
}