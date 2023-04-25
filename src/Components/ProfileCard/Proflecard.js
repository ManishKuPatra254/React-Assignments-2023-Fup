
import './Profiecard.css';
export function ProfileCard(props) {

    function renderNameOne() {
        alert("Akash Gupta");
    }
    return (
        <>
            <div className="profile-card">
                <div className="card-info">
                    <img src={props.img1} alt="" />
                    <img src={props.img2} alt="" />
                    <img src={props.img3} alt="" />
                    <h1>{props.designation}</h1>

                    <div class="card-desc">
                        <h4>{props.name}</h4>
                        <p>{props.description}</p>

                        <button onClick={props.onClickRenderContent || renderNameOne}>
                            {props.buttonName}
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}