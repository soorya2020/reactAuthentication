import React,{useState} from 'react'
import './syle.css'
import Table from 'react-bootstrap/Table';
import HeadingComponent from '../Heading/HeadingComponent';

import Pagination from '../Pagination';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../Button/ButtonComponent';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
function TableComponent({ tableHeading, tableData }) {
    const navigate=useNavigate()
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 7;
  
    const handleClick = (id) => {
      navigate(`/employee/${id}`);
    };
  
    const handlePageClick = async (page) => {
      setCurrentPage(page.selected);
    };
  
    // Calculate the index range for the current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
  
    const users = tableData.slice(startIndex, endIndex);
  
    return (
      <div>
        <HeadingComponent color={'black'} text={'EMPLOYEES'} />
        <div className='table-container'>
          <Table striped hover>
            <table>
              <thead>
                <tr>
                  {tableHeading.map((item, index) => (
                    <th key={index}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <ButtonComponent
                        color={'orange'}
                        onClick={() => handleClick(user.id)}
                        text={'View'}
                        size={'10px'}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Table>
        </div>
  
        <ReactPaginate
          previousLabel='<<'
          nextLabel='>>'
          breakLabel='...'
          pageCount={Math.ceil(tableData.length / itemsPerPage)} // Calculate the number of pages
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName='pagination d-flex justify-content-center'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakClassName='page-item'
          activeClassName='active'
        />
      </div>
    );
  }

export default TableComponent