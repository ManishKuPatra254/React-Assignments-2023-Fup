import ProfileStyles from './ProfileCard.module.css'


export function ScrollProfile(props) {

    return (
        <>

            <div className={ProfileStyles.main_content}>

                <div className={ProfileStyles.sub_content}>

                    <img src={props.imageOne} alt="" />
                    <img src={props.imageTwo} alt="" />
                    <img src={props.imageThree} alt="" />
                    <img src={props.imageFour} alt="" />
                    <img src={props.imageFive} alt="" />
                    <img src={props.imageSix} alt="" />
                    <img src={props.imageSeven} alt="" />
                    <img src={props.imageEight} alt="" />

                </div>

                <div className={ProfileStyles.details}>

                    <h2>{props.name}</h2>
                    <h5>{props.company}</h5>
                    <h4>{props.experience}</h4>

                </div>
            </div>
        </>
    )
}