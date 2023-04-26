import './Card.css'
export function Card({ elements, keys }) {


    function alertSpecialMessage() {
        alert(`Product is ${elements.productId} which is ${elements.productName} is a ${elements.brand} has of rupees ${elements.price} is added in the cart , please proceed to pay !!!`)
    }


    return (


        <>
            <div className="product-card">
                <div className="card-info">
                    <img src={keys.productPic} alt="" />
                    <h5>{keys.productId}</h5>
                    <h1>{keys.brand}</h1>

                    <div className="card-desc">
                        <h4>{keys.productName}</h4>
                        <p>{keys.productDescription}</p>
                        <h2>{keys.price}</h2>
                        <h3>{keys.rating}</h3>

                        <button onClick={alertSpecialMessage}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}