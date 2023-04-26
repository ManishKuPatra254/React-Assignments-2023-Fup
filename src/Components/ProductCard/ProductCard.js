import './ProductCard.css'

export function ProductCard({ productDetails, AlertFunctions }) {

    const {
        productId,
        productPic,
        productName,
        Brand,
        productDescription,
        price,
        rating,
    } = productDetails


    return (
        <>
            <div className="product-card">
                <div className="card-info">
                    <img src={productPic} alt="" />
                    <h5>{productId}</h5>
                    <h1>{Brand}</h1>

                    <div className="card-desc">
                        <h4>{productName}</h4>
                        <p>{productDescription}</p>
                        <h2>{price}</h2>
                        <h3>{rating}</h3>

                        <button onClick={AlertFunctions}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}