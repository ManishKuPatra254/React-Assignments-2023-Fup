
import { useState } from 'react';
import InputStyles from './Inputs.module.css';
import { AiFillCloseCircle } from 'react-icons/ai'

export function InputFields() {

    const [dataInputField, setDataInputField] = useState('');
    const [buttonListData, setButtonListData] = useState([]);


    function handleChangeRender(event) {
        setDataInputField(event.target.value);
        // console.log(event.target.value)
    }


    function handleClickChange() {
        // setButtonListData([...buttonListData, dataInputField]);
        // console.log(buttonListData)

        setButtonListData(function (buttonListData) {
            const newListRender = [...buttonListData, dataInputField]
            console.log(newListRender);
            setDataInputField('');
            return newListRender;

        })
    }


    function deleteTheValue(indexValue) {
        const newDataList = buttonListData.filter((element, identify) => {
            return indexValue !== identify
        })
        setButtonListData(newDataList);
    }


    return (
        <>
            <div className={InputStyles.main_input}>

                <input type="text" placeholder='Enter the list of data' value={dataInputField} onChange={handleChangeRender} />

            </div>

            <button className={InputStyles.btn1} onClick={handleClickChange}>Add Item</button>

            {/* <p>Your List Will Render Here</p> */}

            {buttonListData !== [] && buttonListData.map((renderData, indexValue) => {
                return (
                    <>
                        <div className={InputStyles.main_area_after_map}>

                            <p key={indexValue}>
                                <h6 className={InputStyles.data_render_area}>{renderData}</h6>
                                <AiFillCloseCircle className={InputStyles.delete_button}
                                    onClick={() => deleteTheValue(indexValue)} />
                            </p>
                        </div>
                    </>
                )
            })}
        </>
    )
}