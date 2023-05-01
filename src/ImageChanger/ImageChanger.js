import './ImageChanger.css';
import { useRef } from "react";

export function ImageChangerClick() {


    const Imageref = useRef(null);

    const imgsrc1 = 'https://preview.redd.it/d25v18h34pm71.png?width=640&crop=smart&auto=webp&s=4a0230bfd5441b00b97afddc515b4deea3efd32c'
    const imgsrc2 = 'https://preview.redd.it/rqvmtpo54pm71.png?width=640&crop=smart&auto=webp&s=e4f5ccfcb9109944aeb534e1dbcdb72d18ebb4ee'
    const imgsrc3 = 'https://preview.redd.it/n0hawtz34pm71.png?width=640&crop=smart&auto=webp&s=8c4d1947f67ae709ed0efaf9f23e10b7aa0750dc'


    function handleImageChange() {
        if (Imageref.current.src === imgsrc1) {
            Imageref.current.src = imgsrc2;
        }
        else if (Imageref.current.src === imgsrc2) {
            Imageref.current.src = imgsrc3;
        }
        else if (Imageref.current.src === imgsrc3) {
            Imageref.current.src = imgsrc1;
        }
    }



    return (
        <div className='btn1'>
            <img src={imgsrc1} ref={Imageref} alt="Not found" style={{ margin: '30px' }} />

            <button onClick={handleImageChange}>Change Image On Click</button>
        </div>
    )
}