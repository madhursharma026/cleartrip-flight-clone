import '../styles/MiddleData.css'
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import TextField from '@mui/material/TextField';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-multi-date-picker";
import InputGroup from 'react-bootstrap/InputGroup';
import Autocomplete from '@mui/material/Autocomplete';



function MiddleData() {
    let todayDate = new Date()
    let threeDaysForwardtodayDate = new Date()
    const [takeOffSearchQuery, setTakeOffSearchQuery] = useState('');
    const [fightTakeOffAllData, setfightTakeOffAllData] = useState([]);
    const [landingSearchQuery, setLandingSearchQuery] = useState('');
    const [fightLandingAllData, setfightLandingAllData] = useState([]);
    const [fightTakeOffDate, setFightTakeOffDate] = useState(todayDate);
    const [fightLandingDate, setFightLandingDate] = useState(threeDaysForwardtodayDate.setDate(threeDaysForwardtodayDate.getDate() + 3));

    function takeOffWhereFunction(value) {
        const wordCount = value.length;
        setTakeOffSearchQuery(value)
        if (wordCount > 3) {
            // https://airlabs.co/api/v9/suggest?q=bho&api_key=13eb1321-bf87-4a2e-8f8f-2c90f72471e0
            fetch(`https://airlabs.co/api/v9/suggest?q=${value}&api_key=13eb1321-bf87-4a2e-8f8f-2c90f72471e0`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setfightTakeOffAllData(data)
                })
        }
    }
    
    function landingWhereFunction(value) {
        const wordCount = value.length;
        setLandingSearchQuery(value)
        if (wordCount > 3) {
            // https://airlabs.co/api/v9/suggest?q=bho&api_key=13eb1321-bf87-4a2e-8f8f-2c90f72471e0
            fetch(`https://airlabs.co/api/v9/suggest?q=${value}&api_key=13eb1321-bf87-4a2e-8f8f-2c90f72471e0`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setfightLandingAllData(data)
                })
        }
    }


    return (
        <div>
            <h2>Search flights</h2>
            <h6>Enjoy hassle free bookings with Cleartrip</h6>

            <Card className='mt-4'>
                <Card.Body className='pt-4 pb-5 px-5'>
                    <div className="row fightDetailTop">
                        <div className="col-4 m-1 w-auto">
                            <Dropdown>
                                <Dropdown.Toggle style={{ background: 'transparent', color: 'black', border: '1px solid white', fontWeight: '600', fontSize: '20px' }}>
                                    <i class="fa fa-long-arrow-right" style={{ marginRight: '10px' }}></i> One Way
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{ fontWeight: '600' }}>One Way</Dropdown.Item>
                                    <Dropdown.Item style={{ fontWeight: '600' }}>Round Way</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-4 m-1 w-auto">
                            <Dropdown>
                                <Dropdown.Toggle style={{ background: 'transparent', color: 'black', border: '1px solid white', fontWeight: '600', fontSize: '20px' }}>
                                    <i class="fa fa-long-arrow-right" style={{ marginRight: '10px' }}></i> 1 Adult, Economy
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ width: '300px' }}>
                                    <div className='p-2 px-3' style={{ fontWeight: '600' }}>
                                        <div className="row">
                                            <div className="col-9 mb-2">
                                                <h6>
                                                    Adult
                                                    <br />
                                                    <span style={{ fontSize: '12px' }}>(12+ Years)</span>
                                                </h6>
                                            </div>
                                            <div className="col-3 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                                <input type="number" defaultValue="1" style={{ maxWidth: '50px', width: '100%', height: '30px' }} />
                                            </div>
                                            <div className="col-9 mb-2">
                                                <h6>
                                                    Childen
                                                    <br />
                                                    <span style={{ fontSize: '12px' }}>(2-12 Years)</span>
                                                </h6>
                                            </div>
                                            <div className="col-3 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                                <input type="number" defaultValue='0' style={{ maxWidth: '50px', width: '100%', height: '30px' }} />
                                            </div>
                                            <div className="col-9 mb-2">
                                                <h6>
                                                    Infants
                                                    <br />
                                                    <span style={{ fontSize: '12px' }}>(Below 2 Years)</span>
                                                </h6>
                                            </div>
                                            <div className="col-3 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                                <input type="number" defaultValue='0' style={{ maxWidth: '50px', width: '100%', height: '30px' }} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ background: '#EFF5FC', borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                                                <h6 style={{ fontSize: '13.5px' }}>Economy</h6>
                                            </div>
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ background: '#EFF5FC', borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                                                <h6 style={{ fontSize: '13.5px' }}>Business class</h6>
                                            </div>
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ background: '#EFF5FC', borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                                                <h6 style={{ fontSize: '13.5px' }}>First class</h6>
                                            </div>
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ background: '#EFF5FC', borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                                                <h6 style={{ fontSize: '13.5px' }}>Premium Economy</h6>
                                            </div>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ background: '#EFF5FC', borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                            <h6 style={{ fontSize: '13.5px' }}>Regular fare</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                            <h6 style={{ fontSize: '13.5px' }}>Student fare</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                            <h6 style={{ fontSize: '13.5px' }}>Senior citizen fare</h6>
                        </div>
                        <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" style={{ borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                            <h6 style={{ fontSize: '13.5px' }}>Armed forces fare</h6>
                        </div>
                    </div>


                    <div className="row mt-4 text-center">
                        <div className="col-sm-6 m-0 p-0">
                            <Dropdown style={{ marginTop: '-15px', width: '100%' }}>
                                <Dropdown.Toggle className='dropdownToggle' style={{ background: 'transparent', color: 'black', border: '1px solid white', fontWeight: '600', fontSize: '20px' }}>
                                    <div class="flightTakeOffInput">
                                        <input type="text" value={takeOffSearchQuery} placeholder="Where From?" onChange={(e) => takeOffWhereFunction(e.target.value)} className='w-100 mt-2'></input>
                                    </div>
                                </Dropdown.Toggle>
                                {fightTakeOffAllData.length != 0 ?
                                    <>
                                        <Dropdown.Menu>
                                            <>
                                                {fightTakeOffAllData.response.airports.map((fightTakeOffData) =>
                                                    <>
                                                        <Dropdown.Item style={{ fontWeight: '600' }} onClick={() => setTakeOffSearchQuery(`${fightTakeOffData.city_code} - ${fightTakeOffData.name}`)}><b>{fightTakeOffData.city_code}</b> - {fightTakeOffData.name}</Dropdown.Item>
                                                        :
                                                    </>
                                                )}
                                            </>
                                        </Dropdown.Menu>
                                    </>
                                    :
                                    <></>
                                }
                            </Dropdown>
                        </div>
                        <div className="col-sm-6 m-0 p-0">
                            <Dropdown style={{ marginTop: '-15px', width: '100%' }}>
                                <Dropdown.Toggle className='dropdownToggle' style={{ background: 'transparent', color: 'black', border: '1px solid white', fontWeight: '600', fontSize: '20px' }}>
                                    <div class="flightLandingInput">
                                        <input type="text" value={landingSearchQuery} placeholder="Where To?" onChange={(e) => landingWhereFunction(e.target.value)} className='w-100 mt-2'></input>
                                    </div>
                                </Dropdown.Toggle>
                                {fightLandingAllData.length != 0 ?
                                    <>
                                        <Dropdown.Menu>
                                            <>
                                                {fightLandingAllData.response.airports.map((landingData) =>
                                                    <>
                                                        <Dropdown.Item style={{ fontWeight: '600' }} onClick={() => setLandingSearchQuery(`${landingData.city_code} - ${landingData.name}`)}><b>{landingData.city_code}</b> - {landingData.name}</Dropdown.Item>
                                                        :
                                                    </>
                                                )}
                                            </>
                                        </Dropdown.Menu>
                                    </>
                                    :
                                    <></>
                                }
                            </Dropdown>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm-8 m-0 p-0 row">
                            <div className="col-6 p-0 m-0">
                                <DatePicker value={fightTakeOffDate} onChange={setFightTakeOffDate} style={{ fontSize: '18px', height: 40, width: '100%', marginRight: '5px', width: '96%' }} />

                            </div>
                            <div className="col-6 p-0 m-0">
                                <DatePicker value={fightLandingDate} onChange={setFightLandingDate} style={{ fontSize: '18px', height: 40, width: '100%', marginRight: '5px', width: '96%' }} />
                            </div>
                        </div>
                        <div className="col-sm-4 m-0 p-0 mt-sm-0 mt-2">
                            <button type="button" class="btn w-100" style={{ height: '40px', fontWeight: '700', color: 'white', background: '#D4581D' }}>Search Flights</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MiddleData;
