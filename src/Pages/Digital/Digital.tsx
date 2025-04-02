import React from 'react'
import { HiveDental } from '../../Model/HiveInfo';
import Navbar from '../../Components/Nav/Navbar';
import Footer from '../../Components/Footer/Footer';
import "./Digital.css"

interface Props {
    info: HiveDental;
}

const Digital: React.FC<Props> = ({ info }) => {
    return (
        <>
            <Navbar />
            <div className="digital-container shadow rounded">
                <h1 className="text-center mb-4">Digital Scan Order Guide</h1>
                <p>HIVE Dental Lab accepts digital scans from the following intraoral scanners.</p>
                <p>Follow the steps below to connect and send files.</p>
                
                {/* 3Shape Scanner */}
                <div className="mb-4 p-3 bg-light border">
                    <h2 className="text-dark">3Shape CADCAM</h2>
                    <p>Accepts scans from Trios Oral Scanner</p>
                    <ol className="ps-3">
                        <li>Go to <strong>3Shape Communicate Portal</strong></li>
                        <li>Sign in and navigate to <strong>Connections</strong></li>
                        <li>Click <strong>Add Connection</strong></li>
                        <li>Type <strong>hivedental</strong> and click <strong>Connect</strong></li>
                        <li>Send your file</li>
                    </ol>
                </div>

                {/* iTero Scanner */}
                <div className="mb-4 p-3 bg-light border rounded">
                    <h2 className="text-dark">iTero Intraoral Scanner</h2>
                    <p>Please call iTero customer support:</p>
                    <p className="fw-bold text-danger">800-577-8767 (ext 1-2-2)</p>
                    <p>Request to add Hive Dental Lab to your lab list.</p>
                    <p>Provide our Lab Company ID: <strong>144030</strong></p>
                    <p>Once connected, select <strong>HIVE Dental Lab</strong> when sending files.</p>
                </div>

                {/* Prime Scanner */}
                <div className="mb-4 p-3 bg-light border rounded">
                    <h2 className="text-dark">Prime Scanner</h2>
                    <ol className="ps-3">
                        <li>Log in to <a href="https://www.sirona-connect.com" target="_blank" className="text-primary">Connect Case Connect</a></li>
                        <li>Select <strong>My Cerec Connect</strong> → <strong>Edit Account</strong></li>
                        <li>Under <strong>My Account</strong>, go to <strong>My Favorite Laboratories</strong></li>
                        <li>Enter <strong>HIVE Dental Lab</strong> and Zip Code: <strong>T6G 1B9</strong></li>
                        <li>Click <strong>FIND</strong>, check the box for HIVE Dental Lab, then click <strong>ADD</strong></li>
                    </ol>
                </div>

                {/* Medit Scanner */}
                <div className="mb-4 p-3 bg-light border rounded">
                    <h2 className="text-dark">Medit Scanner</h2>
                    <ol className="ps-3">
                        <li>Log into <a href="https://www.meditlink.com" target="_blank" className="text-primary">Medit Link</a> with the admin account</li>
                        <li>Go to <strong>Partners</strong> in the left menu</li>
                        <li>Search for <strong>HIVE Dental Lab</strong> and click <strong>Request Partnership</strong></li>
                        <li>Once approved, you will see it under <strong>My Partner List</strong> as <em>Partnership Pending</em></li>
                    </ol>
                </div>
            </div>
            <Footer info={info}/>
        </>
    )
}

export default Digital;