import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-multi-date-picker";

function HeaderFlightDetails() {
    const format = "YYYY-MM-DD";
    let todayDate = new Date().toISOString().slice(0, 10)
    const [fightLandingDate, setFightLandingDate] = useState('');
    const [fightTakeOffDate, setFightTakeOffDate] = useState(todayDate);

    return (
        <div className="py-2" style={{ background: 'white', boxShadow: '0 2px 24px rgba(0,0,0,.04)' }}>
            <div className='px-4' style={{ maxWidth: '1300px', margin: 'auto' }}>
                <Navbar>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1673950430/exr8cexlojj0mnjc7vph.png" alt="#ImgNotFound" width='110px' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <ul style={{ listStyleType: 'none' }}>
                            <li style={{ display: 'inline', marginLeft: '20px', fontSize: '14px', cursor: 'pointer' }}>INR <i class="fa fa-rupee text-muted"></i></li>
                            <li style={{ display: 'inline', marginLeft: '20px', fontSize: '14px', cursor: 'pointer' }}><i class="fa fa-headphones text-muted"></i> Support</li>
                            <li style={{ display: 'inline', marginLeft: '20px', fontSize: '14px', cursor: 'pointer' }}><i class="fa fa-user-circle-o text-muted"></i> Log in</li>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
                <div className="row">
                    <div className="col-lg col-sm-4 mt-2">
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" className='px-2 py-0' style={{ background: 'transparent', color: 'black', border: '1px solid black', width: '100%', height: '33px', textAlign: 'left' }}>
                                One Way
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{width: '100%'}}>
                                <Dropdown.Item onClick={() => alert('OneWay')}>One Way</Dropdown.Item>
                                <Dropdown.Item onClick={() => alert('RoundWay')}>Round Way</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="col-lg col-sm-4 mt-2">
                        <input type="text" className='w-100 px-2' placeholder='Departure' style={{ paddingLeft: 0, border: '1px solid black', height: '33px' }} />
                    </div>
                    <div className="col-lg col-sm-4 mt-2">
                        <input type="text" className='w-100 px-2' placeholder='Arrival' style={{ paddingLeft: 0, border: '1px solid black', height: '33px' }} />
                    </div>
                    <div className="col-lg col-sm-4 mt-2">
                        {/* <input type="text" className='w-100 px-2' style={{ paddingLeft: 0, }} /> */}
                        {/* <DatePicker value={fightTakeOffDate} format={format} onChange={setFightTakeOffDate} style={{ fontSize: '16px', marginTop: '-0px', height: 33, border: '1px solid black' }} /> */}
                        <input type="text" className='w-100 px-2' value={fightTakeOffDate} disabled style={{ paddingLeft: 0, border: '1px solid black', height: '33px' }} />

                    </div>
                    <div className="col-lg col-sm-4 mt-2">
                        {/* <DatePicker value={fightLandingDate} placeholder='Return Date' format={format} onChange={setFightLandingDate} style={{ fontSize: '16px', marginTop: '-0px', height: 33, border: '1px solid black' }} /> */}
                        <input type="text" className='w-100 px-2' placeholder='Return Date' style={{ paddingLeft: 0, border: '1px solid black', height: '33px' }} />

                    </div>
                    <div className="col-lg col-sm-4 mt-2">
                        <input type="text" className='w-100 px-2' style={{ paddingLeft: 0, border: '1px solid black', height: '33px' }} value='1 Traveller' disabled />
                    </div>
                    <div className="col-lg mt-2">
                        <button type="button" class="btn btn-primary w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderFlightDetails;
