import React from 'react'
import './style.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
function EmployeViewComponent({ employee }) {
    return (
        <div className='employee-data-container'>
             <p>EMP-ID:{employee.id}</p>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-5"
                justify
            >
                <Tab eventKey="home" title="Personal">
                    <div className='personal-details'>
                        <p>Name: {employee?.name}</p>
                        <p>User Name: {employee?.username}</p>
                        <p>Email: {employee?.email}</p>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div className="address">
                        <p>Street:{employee?.address?.street}</p>
                        <p>Suite:{employee?.address?.suite}</p>
                        <p>City:{employee?.address?.city}</p>
                    </div>
                </Tab>
                <Tab eventKey="longer-tab" title="Company">
                <p>Name: {employee?.company?.name}</p>
                        <p>Catch Phrase: {employee?.company?.catchPhrase}</p>
                        <p>Bs: {employee?.company?.bs}</p>
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                   <p>Phone: {employee?.phone}</p>
                </Tab>
            </Tabs>
        </div>
    )
}

export default EmployeViewComponent