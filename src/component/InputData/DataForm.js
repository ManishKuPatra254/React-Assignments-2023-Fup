import { Fragment, useState, useEffect } from "react";
import styles from "./DataForm.module.css";

export function DataForm() {
  // const [firstName, setFirstName] = useState("");

  const [number, setNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    generateTableData();
  });

  function handleInputChange(event) {
    const { value } = event.target;
    setNumber(value);
  };

  function generateTableData() {
    const data = [];
    if (number !== '') {
      for (let i = 1; i <= parseInt(number); i++) {
        data.push(i);
      }
    }
    setTableData(data);
  };


  return (
    <Fragment>
      <div className={styles.main}>
        <input type="number" value={number} onChange={handleInputChange} placeholder="Type Something" style={{
          width: '30%',
          height: '5vh',
          padding: '12px 12px',
          fontSize: '17px',
        }} />
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto', marginTop: '25px' }}>
          <table>
            <tbody>
              <tr style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                {tableData.map((item, index) => (
                  <td key={index}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      border: '2.5px solid black',
                      padding: '12px 12px',
                      textAlign: 'center',
                      gap: '12px'
                    }}
                  >{item}</td>
                ))}

              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </Fragment>
  );
}
