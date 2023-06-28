import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './style.css'
import Table from '../Table'
import { tableHeading } from '../../Constants/constants'
import axios from 'axios'
import Loading from '../Loading'
function EmployeeListConponent() {

  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    axios
      .get('http://localhost:3006/api/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setTableData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Loading/>
      ) : (
        <div className='emplyee-list-container'>
          <Header  />
          <Table tableHeading={tableHeading} tableData={tableData} />
        </div>
      )}
    </div>

  )
}

export default EmployeeListConponent