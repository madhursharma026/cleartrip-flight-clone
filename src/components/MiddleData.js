import '../styles/MiddleData.css'
import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-multi-date-picker";


function MiddleData() {
    const format = "YYYY-MM-DD";
    let todayDate = new Date().toISOString().slice(0, 10)
    const [takeOffSearchQuery, setTakeOffSearchQuery] = useState('');
    const [fightTakeOffAllData, setfightTakeOffAllData] = useState([]);
    const [landingSearchQuery, setLandingSearchQuery] = useState('');
    const [fightLandingAllData, setfightLandingAllData] = useState([]);
    const [fightTakeOffDate, setFightTakeOffDate] = useState(todayDate);
    const [fightLandingDate, setFightLandingDate] = useState('');
    const [tripType, setTripType] = useState('onewaytrip');
    const [number_of_adults, setNumber_of_adults] = useState(1);
    const [number_of_childrens, setNumber_of_childrens] = useState(0);
    const [number_of_infants, setNumber_of_infants] = useState(0);
    const [cabin_class, setCabin_class] = useState('Economy');
    const [startFrom, setStartFrom] = useState('');
    const [endTo, setEndTo] = useState('');
    const [flightdetails, setFlightdetails] = useState()

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

    function onSearchFlightAPI() {
        if (tripType === 'roundtrip' && fightLandingDate === '') {
            alert("Please enter return date")
        } else {
            fetch(`https://api.flightapi.io/${tripType}/64da35a0ef51600afea75d0b/${startFrom}/${endTo}/${fightTakeOffDate}${fightLandingDate ? '/' : ''}${fightLandingDate}/${number_of_adults}/${number_of_childrens}/${number_of_infants}/${cabin_class}/INR`)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setFlightdetails(data)
                })
        }
        // console.log(`https://api.flightapi.io/${tripType}/64da35a0ef51600afea75d0b/${startFrom}/${endTo}/${fightTakeOffDate}${fightLandingDate ? '/' : ''}${fightLandingDate}/${number_of_adults}/${number_of_childrens}/${number_of_infants}/${cabin_class}/INR`)
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
                                    <i class="fa fa-long-arrow-right" style={{ marginRight: '10px' }}></i> {tripType}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item style={{ fontWeight: '600' }} onClick={() => setTripType('onewaytrip')}>One Way</Dropdown.Item>
                                    <Dropdown.Item style={{ fontWeight: '600' }} onClick={() => setTripType('roundtrip')}>Round Way</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="col-8 m-1 w-auto">
                            <Dropdown>
                                <Dropdown.Toggle style={{ background: 'transparent', color: 'black', border: '1px solid white', fontWeight: '600', fontSize: '20px' }}>
                                    <i class="fa fa-long-arrow-right" style={{ marginRight: '10px' }}></i>
                                    {number_of_adults >= 1 ? `${number_of_adults} ` + 'Adult, ' : <></>}{number_of_childrens >= 1 ? `${number_of_childrens} ` + 'Childern, ' : <></>}{number_of_infants >= 1 ? `${number_of_infants} ` + 'Infants, ' : <></>} {cabin_class}
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
                                                <input type="number" value={number_of_adults} onChange={(e) => setNumber_of_adults(e.target.value)} style={{ maxWidth: '50px', width: '100%', height: '30px', paddingLeft: '5px' }} />
                                            </div>
                                            <div className="col-9 mb-2">
                                                <h6>
                                                    Childen
                                                    <br />
                                                    <span style={{ fontSize: '12px' }}>(2-12 Years)</span>
                                                </h6>
                                            </div>
                                            <div className="col-3 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                                <input type="number" value={number_of_childrens} onChange={(e) => setNumber_of_childrens(e.target.value)} style={{ maxWidth: '50px', width: '100%', height: '30px', paddingLeft: '5px' }} />
                                            </div>
                                            <div className="col-9 mb-2">
                                                <h6>
                                                    Infants
                                                    <br />
                                                    <span style={{ fontSize: '12px' }}>(Below 2 Years)</span>
                                                </h6>
                                            </div>
                                            <div className="col-3 mb-2 mt-1" style={{ textAlign: 'right' }}>
                                                <input type="number" value={number_of_infants} onChange={(e) => setNumber_of_infants(e.target.value)} style={{ maxWidth: '50px', width: '100%', height: '30px', paddingLeft: '5px' }} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" onClick={() => setCabin_class('Economy')} style={{ background: `${cabin_class === 'Economy' ? '#EFF5FC' : 'white'}`, borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                                                <h6 style={{ fontSize: '13.5px' }}>Economy</h6>
                                            </div>
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" onClick={() => setCabin_class('Business')} style={{ background: `${cabin_class === 'Business' ? '#EFF5FC' : 'white'}`, borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                                                <h6 style={{ fontSize: '13.5px' }}>Business class</h6>
                                            </div>
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" onClick={() => setCabin_class('First')} style={{ background: `${cabin_class === 'First' ? '#EFF5FC' : 'white'}`, borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
                                                <h6 style={{ fontSize: '13.5px' }}>First class</h6>
                                            </div>
                                            <div className="col-md-3 col-6 mt-2 px-2 pt-2 pb-1 text-center m-1 w-auto" onClick={() => setCabin_class('Premium_Economy')} style={{ background: `${cabin_class === 'Premium_Economy' ? '#EFF5FC' : 'white'}`, borderRadius: '12px', border: '1px solid #E6E6E6', cursor: 'pointer' }}>
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
                                {fightTakeOffAllData.length !== 0 ?
                                    <>
                                        <Dropdown.Menu>
                                            <>
                                                {fightTakeOffAllData.response.airports.map((fightTakeOffData) =>
                                                    <>
                                                        <Dropdown.Item style={{ fontWeight: '600' }} onClick={() => (setTakeOffSearchQuery(`${fightTakeOffData.city_code} - ${fightTakeOffData.name}`, setStartFrom(`${fightTakeOffData.city_code}`)))}><b>{fightTakeOffData.city_code}</b> - {fightTakeOffData.name}</Dropdown.Item>
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
                                {fightLandingAllData.length !== 0 ?
                                    <>
                                        <Dropdown.Menu>
                                            <>
                                                {fightLandingAllData.response.airports.map((landingData) =>
                                                    <>
                                                        <Dropdown.Item style={{ fontWeight: '600' }} onClick={() => (setLandingSearchQuery(`${landingData.city_code} - ${landingData.name}`, setEndTo(`${landingData.city_code}`)))}><b>{landingData.city_code}</b> - {landingData.name}</Dropdown.Item>
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
                                <DatePicker value={fightTakeOffDate} format={format} onChange={setFightTakeOffDate} style={{ fontSize: '18px', height: 40, marginRight: '5px', width: '96%' }} />

                            </div>
                            <div className="col-6 p-0 m-0">
                                <DatePicker value={fightLandingDate} placeholder='Return Date' format={format} onChange={setFightLandingDate} style={{ fontSize: '18px', height: 40, marginRight: '5px', width: '96%' }} />
                            </div>
                        </div>
                        <div className="col-sm-4 m-0 p-0 mt-sm-0 mt-2">
                            <button type="button" class="btn w-100" style={{ height: '40px', fontWeight: '700', color: 'white', background: '#D4581D' }} onClick={() => onSearchFlightAPI()}>Search Flights</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <h1 className='mt-5'>Flight Details</h1>
            <table class="table mt-3">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" className='text-center'>Flight Code</th>
                        <th scope="col">Arrival Time</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {flightdetails.legs === [] ?
                        <h1 className="mt-5 text-center">
                            No Data Found
                        </h1>
                        :
                        <>
                            {flightdetails.legs.map((flightdetail, index) =>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td className='text-center'> <b>{flightdetail.airlineCodes}</b></td>
                                    <td>{flightdetail.departureTime}</td>
                                    <td>{flightdetail.arrivalTime}</td>
                                    <td>₹ {flightdetails.fares[index].price.totalAmount}</td>
                                    <td><button type="button" class="btn btn-warning">Book</button></td>
                                </tr>
                            )}
                        </>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default MiddleData;

