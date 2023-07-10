import { Fragment } from "react";
import { data } from "./BitValueData";

export function BitValue() {
    if (!Array.isArray(data)) {
        return <p>Error: Data is not an array.</p>;
    }

    return (
        <Fragment>
            <div className="">
                <h2>BitCoin Value</h2>
                {data.map((item, index) => (
                    <div style={{ border: '1px solid black', width: '70%', margin: 'auto' }} key={index.exchangeId}>
                        <p>{item.volumeUsd24Hr}</p>
                        <p>{item.priceUsd}</p>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

