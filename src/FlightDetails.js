import { useState } from 'react';
import './styles/FlightDetails.css';
import { useLocation } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import HeaderFlightDetails from './components/Header/HeaderFlightDetails';

function FlightDetails() {
    const history = useLocation();
    let flightdetails = ''
    if (history.state !== null) {
        flightdetails = history.state.data;
    }

    const [showID, setShowID] = useState()
    const [flightPrice, setFlightPrice] = useState('')
    const [flightNonStop, setFlightNonStop] = useState(false)
    const [flightAfternoon, setFlightAfternoon] = useState(false)

    function flightNonStopFunction() {
        setFlightNonStop(!flightNonStop)
    }

    function flightAfternoonFunction() {
        setFlightAfternoon(!flightAfternoon)
    }

    function showIDFunction(id) {
        if (showID === id) {
            setShowID('')
        } else {
            setShowID(id)
        }
    }

    return (
        <div className='mainContainerFlightDetails'>
            <HeaderFlightDetails />
            <div className='appContainerFlightDetails'>
                <div className="px-4 py-4 screenSizeFlightDetails">
                    <div className="row">
                        <div className="col-lg-3">
                            <p><h6 style={{ display: 'inline' }}>
                                {(flightdetails !== '') ?
                                    <>
                                        {flightdetails.legs.length}&nbsp;
                                    </>
                                    :
                                    <></>
                                }
                                of
                                {(flightdetails !== '') ?
                                    <>
                                        &nbsp;{flightdetails.legs.length}
                                    </>
                                    :
                                    <></>
                                }
                            </h6> flights</p>
                            <Accordion defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>Stops</b></Accordion.Header>
                                    <Accordion.Body>
                                        <input type="checkbox" id="non-stop" name="non-stop" onClick={() => flightNonStopFunction()} />
                                        <label for="non-stop" style={{ cursor: 'pointer' }}>&nbsp;Non-Stop</label>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><b>Departure time</b></Accordion.Header>
                                    <Accordion.Body>
                                        <input type="checkbox" id="afternoon" name="afternoon" onClick={() => flightAfternoonFunction()} />
                                        <label for="afternoon" style={{ cursor: 'pointer' }}>&nbsp;Afternoon</label>
                                        <label for="afternoon" style={{ cursor: 'pointer', float: 'right', color: '#999999' }}>noon - 4pm</label>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><b>Price</b></Accordion.Header>
                                    <Accordion.Body>
                                        {(flightdetails !== '') ?
                                            <>
                                                <div className="row">
                                                    {/* <div className="col" style={{ fontSize: '14px' }}>₹ {flightdetails.filters.minPrice.totalAmount}</div>
                                                    <div className="col" style={{ fontSize: '14px', textAlign: 'right' }}>₹ {flightdetails.filters.maxPrice.totalAmount}</div> */}
                                                    Greater Than ₹ {(flightPrice === '') ? flightdetails.filters.minPrice.totalAmount : flightPrice}
                                                </div>
                                                <input type="range" class="form-range" min={flightdetails.filters.minPrice.totalAmount} max={flightdetails.filters.maxPrice.totalAmount} onChange={(e) => setFlightPrice(e.target.value)} />
                                            </>
                                            :
                                            <>
                                                <div className="row">
                                                    <div className="col" style={{ fontSize: '14px' }}>₹ 1000</div>
                                                    <div className="col" style={{ fontSize: '14px', textAlign: 'right' }}>₹ 10000</div>
                                                </div>
                                                <input type="range" class="form-range" />
                                            </>
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                                {(flightdetails !== '') ?
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><b>Airlines Found ({flightdetails.airlines.length})</b></Accordion.Header>
                                        <Accordion.Body>
                                            {/* <input type="checkbox" id="showMultiAirlineItineraries" name="showMultiAirlineItineraries" defaultChecked />
                                        <label for="showMultiAirlineItineraries" style={{ cursor: 'pointer' }}>&nbsp;Show multi-airline itineraries</label>
                                        <hr style={{ marginTop: '10px' }} /> */}
                                            {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                <div style={{ marginTop: '-5px' }}>
                                                    {/* <input type="checkbox" id={`${flightdetailAirlines.name}`} name={`${flightdetailAirlines.name}`} onChange={() => addFlightPerference(flightdetailAirlines.code)} /> */}
                                                    <label for={`${flightdetailAirlines.name}`} style={{ cursor: 'pointer' }}>{index + 1}. {flightdetailAirlines.name}</label>
                                                </div>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    :
                                    <></>
                                }
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><b>Layover duration</b></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row">
                                            <div className="col">0 hours</div>
                                            <div className="col" style={{ textAlign: 'right' }}>0 hours</div>
                                        </div>
                                        <input type="range" class="form-range" />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-md-4 mt-3">
                                    <div className='text-success text-center p-2 row' style={{ background: '#ECF8F4', borderRadius: '10px', marginLeft: '10px' }}>
                                        <div className="col-2 text-center">
                                            <i class="fa fa-certificate" style={{ fontSize: '22px', marginTop: '10px' }}></i>
                                        </div>
                                        <div className="col-10">
                                            <h6>Flat 12%  off + No Cost EMI with ICICI CC EMI (ICICIEMI)</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className='text-success text-center p-2 row' style={{ background: '#ECF8F4', borderRadius: '10px', marginLeft: '10px' }}>
                                        <div className="col-2 text-center">
                                            <i class="fa fa-certificate" style={{ fontSize: '22px', marginTop: '10px' }}></i>
                                        </div>
                                        <div className="col-10">
                                            <h6>Flat 12%  off + No Cost EMI with ICICI CC EMI (ICICIEMI)</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mt-3">
                                    <div className='text-success text-center p-2 row' style={{ background: '#ECF8F4', borderRadius: '10px', marginLeft: '10px' }}>
                                        <div className="col-2 text-center">
                                            <i class="fa fa-certificate" style={{ fontSize: '22px', marginTop: '10px' }}></i>
                                        </div>
                                        <div className="col-10">
                                            <h6>Flat 12%  off + No Cost EMI with ICICI CC EMI (ICICIEMI)</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {(flightdetails !== '') ?
                                <>
                                    {flightdetails.legs === [] ?
                                        <h1 className="mt-5 text-center">
                                            No Data Found
                                        </h1>
                                        :
                                        <>
                                            <div className="row mt-4 py-2 pb-0" style={{ background: '#F7F7F7', marginLeft: '10px' }}>
                                                <div className="col-md-2 col text-center text-muted col1">
                                                    <h6>Airlines</h6>
                                                </div>
                                                <div className="col-md-2 col text-center text-muted col2">
                                                    <h6>Departure</h6>
                                                </div>
                                                <div className="col-md-2 col text-center text-muted col3">
                                                    <h6>Duration</h6>
                                                </div>
                                                <div className="col-md-2 col text-center text-muted col4">
                                                    <h6>Arival</h6>
                                                </div>
                                                <div className="col-md-2 col text-center text-muted col5">
                                                    <h6>Price</h6>
                                                </div>
                                                <div className="col-md-2 col text-center text-muted col6">
                                                    <h6>Smart sort</h6>
                                                </div>
                                            </div>

                                            {flightdetails.legs.map((flightdetail, index) =>
                                                <div>
                                                    {(flightNonStop === true && flightAfternoon === true) ?
                                                        <>
                                                            {(flightdetail.stopoverCode === 'DIRECT' && flightdetail.departureTime >= '12:00' && flightdetail.departureTime <= '16:00') ?
                                                                <div className="row mt-4 py-2 pb-0" style={{ border: '1px solid #E6E6E6', marginLeft: '10px', cursor: 'pointer' }} onClick={() => showIDFunction(index)}>
                                                                    <div className="col-md-2 col text-center col1">
                                                                        <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' /> <h6 style={{ fontSize: '14px', margin: 0 }}>
                                                                            {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                    <>{flightdetailAirlines.name}</>
                                                                                    :
                                                                                    <></>
                                                                                }</>
                                                                            )}
                                                                        </h6> <span style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</span>
                                                                    </div>
                                                                    <div className="col-md-2 col text-center col2">
                                                                        <h6 className='mt-3'>{flightdetail.departureTime}</h6>
                                                                    </div>
                                                                    <div className="col-md-2 col text-center col3">
                                                                        <h6 className='mt-2'>{flightdetail.duration}<br /> <span style={{ fontSize: '12px' }}>({flightdetail.stopoverCode})</span></h6>
                                                                    </div>
                                                                    <div className="col-md-2 col text-center col4">
                                                                        <h6 className='mt-3'>{flightdetail.arrivalTime}</h6>
                                                                    </div>
                                                                    <div className="col-md-2 col text-center col5">
                                                                        <h6 className='mt-3'>₹ {flightdetails.fares[index].price.totalAmount}</h6>
                                                                    </div>
                                                                    <div className="col-md-2 col text-center col6">
                                                                        <button type="button" class="btn w-100 mt-2 text-white" style={{ background: '#D4581D' }}><b>BOOK</b></button>
                                                                    </div>

                                                                    {(showID === index) ?
                                                                        <ul class="list-group p-3">
                                                                            <li class="list-group-item">
                                                                                <h6> {flightdetails.search.legs[0].departureCity.name} <i class="fa fa-long-arrow-right"></i> {flightdetails.search.legs[0].arrivalCity.name}</h6>
                                                                                <hr style={{ marginTop: '-4px' }} />
                                                                                <div className="row">
                                                                                    <div className="col-3 text-center">
                                                                                        <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' />
                                                                                        <h6 className='mb-2' style={{ fontSize: '14px', margin: 0 }}>
                                                                                            {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                                <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                                    <>{flightdetailAirlines.name}</>
                                                                                                    :
                                                                                                    <></>
                                                                                                }</>
                                                                                            )}
                                                                                        </h6>
                                                                                        <h6 style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</h6>
                                                                                        <h6 style={{ fontSize: '11px', marginTop: '-7px' }}>{flightdetail.segments[0].cabin}</h6>
                                                                                    </div>

                                                                                    <div className="col-2 text-center">
                                                                                        <h5>{flightdetail.segments[0].departureAirportCode} - <b>{flightdetail.departureTime}</b></h5>
                                                                                        <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].departureCity.name} - {flightdetails.search.legs[0].departureCity.countryCode}</h6>
                                                                                    </div>

                                                                                    <div className="col-1 text-center">
                                                                                        <i class="fa fa-clock-o" style={{ fontSize: '30px' }}></i>
                                                                                    </div>
                                                                                    <div className="col-2 text-center">
                                                                                        <h5>{flightdetail.segments[0].arrivalAirportCode} - <b>{flightdetail.arrivalTime}</b></h5>
                                                                                        <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].arrivalCity.name} - {flightdetails.search.legs[0].arrivalCity.countryCode}</h6>
                                                                                    </div>
                                                                                    <div className="col-2 text-center">
                                                                                        <h6 style={{ fontSize: '14px' }}>Check-in baggage</h6>
                                                                                        <h6 style={{ fontSize: '14px' }}>Cabin baggage</h6>
                                                                                    </div>
                                                                                    <div className="col-2 text-center">
                                                                                        <h6 style={{ fontSize: '14px' }}>15kg / adult</h6>
                                                                                        <h6 style={{ fontSize: '14px' }}>7kg / adult</h6>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
                                                                        :
                                                                        <></>
                                                                    }
                                                                </div>
                                                                :
                                                                <></>
                                                            }
                                                        </>
                                                        :
                                                        <>
                                                            {(flightAfternoon === true) ?
                                                                <>
                                                                    {(flightdetail.departureTime >= '12:00' && flightdetail.departureTime <= '16:00') ?
                                                                        <div className="row mt-4 py-2 pb-0" style={{ border: '1px solid #E6E6E6', marginLeft: '10px', cursor: 'pointer' }} onClick={() => showIDFunction(index)}>
                                                                            <div className="col-md-2 col text-center col1">
                                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' /> <h6 style={{ fontSize: '14px', margin: 0 }}>
                                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                            <>{flightdetailAirlines.name}</>
                                                                                            :
                                                                                            <></>
                                                                                        }</>
                                                                                    )}
                                                                                </h6> <span style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</span>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col2">
                                                                                <h6 className='mt-3'>{flightdetail.departureTime}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col3">
                                                                                <h6 className='mt-2'>{flightdetail.duration}<br /> <span style={{ fontSize: '12px' }}>({flightdetail.stopoverCode})</span></h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col4">
                                                                                <h6 className='mt-3'>{flightdetail.arrivalTime}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col5">
                                                                                <h6 className='mt-3'>₹ {flightdetails.fares[index].price.totalAmount}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col6">
                                                                                <button type="button" class="btn w-100 mt-2 text-white" style={{ background: '#D4581D' }}><b>BOOK</b></button>
                                                                            </div>

                                                                            {(showID === index) ?
                                                                                <ul class="list-group p-3">
                                                                                    <li class="list-group-item">
                                                                                        <h6> {flightdetails.search.legs[0].departureCity.name} <i class="fa fa-long-arrow-right"></i> {flightdetails.search.legs[0].arrivalCity.name}</h6>
                                                                                        <hr style={{ marginTop: '-4px' }} />
                                                                                        <div className="row">
                                                                                            <div className="col-3 text-center">
                                                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' />
                                                                                                <h6 className='mb-2' style={{ fontSize: '14px', margin: 0 }}>
                                                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                                            <>{flightdetailAirlines.name}</>
                                                                                                            :
                                                                                                            <></>
                                                                                                        }</>
                                                                                                    )}
                                                                                                </h6>
                                                                                                <h6 style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</h6>
                                                                                                <h6 style={{ fontSize: '11px', marginTop: '-7px' }}>{flightdetail.segments[0].cabin}</h6>
                                                                                            </div>

                                                                                            <div className="col-2 text-center">
                                                                                                <h5>{flightdetail.segments[0].departureAirportCode} - <b>{flightdetail.departureTime}</b></h5>
                                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].departureCity.name} - {flightdetails.search.legs[0].departureCity.countryCode}</h6>
                                                                                            </div>

                                                                                            <div className="col-1 text-center">
                                                                                                <i class="fa fa-clock-o" style={{ fontSize: '30px' }}></i>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h5>{flightdetail.segments[0].arrivalAirportCode} - <b>{flightdetail.arrivalTime}</b></h5>
                                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].arrivalCity.name} - {flightdetails.search.legs[0].arrivalCity.countryCode}</h6>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h6 style={{ fontSize: '14px' }}>Check-in baggage</h6>
                                                                                                <h6 style={{ fontSize: '14px' }}>Cabin baggage</h6>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h6 style={{ fontSize: '14px' }}>15kg / adult</h6>
                                                                                                <h6 style={{ fontSize: '14px' }}>7kg / adult</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                                :
                                                                                <></>
                                                                            }
                                                                        </div>
                                                                        :
                                                                        <></>
                                                                    }
                                                                </>
                                                                :
                                                                <></>
                                                            }

                                                            {(flightNonStop === true) ?
                                                                <>
                                                                    {(flightdetail.stopoverCode === 'DIRECT') ?
                                                                        <div className="row mt-4 py-2 pb-0" style={{ border: '1px solid #E6E6E6', marginLeft: '10px', cursor: 'pointer' }} onClick={() => showIDFunction(index)}>
                                                                            <div className="col-md-2 col text-center col1">
                                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' /> <h6 style={{ fontSize: '14px', margin: 0 }}>
                                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                            <>{flightdetailAirlines.name}</>
                                                                                            :
                                                                                            <></>
                                                                                        }</>
                                                                                    )}
                                                                                </h6> <span style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</span>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col2">
                                                                                <h6 className='mt-3'>{flightdetail.departureTime}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col3">
                                                                                <h6 className='mt-2'>{flightdetail.duration}<br /> <span style={{ fontSize: '12px' }}>({flightdetail.stopoverCode})</span></h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col4">
                                                                                <h6 className='mt-3'>{flightdetail.arrivalTime}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col5">
                                                                                <h6 className='mt-3'>₹ {flightdetails.fares[index].price.totalAmount}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col6">
                                                                                <button type="button" class="btn w-100 mt-2 text-white" style={{ background: '#D4581D' }}><b>BOOK</b></button>
                                                                            </div>

                                                                            {(showID === index) ?
                                                                                <ul class="list-group p-3">
                                                                                    <li class="list-group-item">
                                                                                        <h6> {flightdetails.search.legs[0].departureCity.name} <i class="fa fa-long-arrow-right"></i> {flightdetails.search.legs[0].arrivalCity.name}</h6>
                                                                                        <hr style={{ marginTop: '-4px' }} />
                                                                                        <div className="row">
                                                                                            <div className="col-3 text-center">
                                                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' />
                                                                                                <h6 className='mb-2' style={{ fontSize: '14px', margin: 0 }}>
                                                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                                            <>{flightdetailAirlines.name}</>
                                                                                                            :
                                                                                                            <></>
                                                                                                        }</>
                                                                                                    )}
                                                                                                </h6>
                                                                                                <h6 style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</h6>
                                                                                                <h6 style={{ fontSize: '11px', marginTop: '-7px' }}>{flightdetail.segments[0].cabin}</h6>
                                                                                            </div>

                                                                                            <div className="col-2 text-center">
                                                                                                <h5>{flightdetail.segments[0].departureAirportCode} - <b>{flightdetail.departureTime}</b></h5>
                                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].departureCity.name} - {flightdetails.search.legs[0].departureCity.countryCode}</h6>
                                                                                            </div>

                                                                                            <div className="col-1 text-center">
                                                                                                <i class="fa fa-clock-o" style={{ fontSize: '30px' }}></i>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h5>{flightdetail.segments[0].arrivalAirportCode} - <b>{flightdetail.arrivalTime}</b></h5>
                                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].arrivalCity.name} - {flightdetails.search.legs[0].arrivalCity.countryCode}</h6>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h6 style={{ fontSize: '14px' }}>Check-in baggage</h6>
                                                                                                <h6 style={{ fontSize: '14px' }}>Cabin baggage</h6>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h6 style={{ fontSize: '14px' }}>15kg / adult</h6>
                                                                                                <h6 style={{ fontSize: '14px' }}>7kg / adult</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                                :
                                                                                <></>
                                                                            }
                                                                        </div>
                                                                        :
                                                                        <></>
                                                                    }
                                                                </>
                                                                :
                                                                <></>
                                                            }

                                                            {(flightPrice !== '') ?
                                                                <>
                                                                    {(flightdetails.fares[index].price.totalAmount >= flightPrice) ?
                                                                        <div className="row mt-4 py-2 pb-0" style={{ border: '1px solid #E6E6E6', marginLeft: '10px', cursor: 'pointer' }} onClick={() => showIDFunction(index)}>
                                                                            <div className="col-md-2 col text-center col1">
                                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' /> <h6 style={{ fontSize: '14px', margin: 0 }}>
                                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                            <>{flightdetailAirlines.name}</>
                                                                                            :
                                                                                            <></>
                                                                                        }</>
                                                                                    )}
                                                                                </h6> <span style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</span>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col2">
                                                                                <h6 className='mt-3'>{flightdetail.departureTime}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col3">
                                                                                <h6 className='mt-2'>{flightdetail.duration}<br /> <span style={{ fontSize: '12px' }}>({flightdetail.stopoverCode})</span></h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col4">
                                                                                <h6 className='mt-3'>{flightdetail.arrivalTime}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col5">
                                                                                <h6 className='mt-3'>₹ {flightdetails.fares[index].price.totalAmount}</h6>
                                                                            </div>
                                                                            <div className="col-md-2 col text-center col6">
                                                                                <button type="button" class="btn w-100 mt-2 text-white" style={{ background: '#D4581D' }}><b>BOOK</b></button>
                                                                            </div>

                                                                            {(showID === index) ?
                                                                                <ul class="list-group p-3">
                                                                                    <li class="list-group-item">
                                                                                        <h6> {flightdetails.search.legs[0].departureCity.name} <i class="fa fa-long-arrow-right"></i> {flightdetails.search.legs[0].arrivalCity.name}</h6>
                                                                                        <hr style={{ marginTop: '-4px' }} />
                                                                                        <div className="row">
                                                                                            <div className="col-3 text-center">
                                                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' />
                                                                                                <h6 className='mb-2' style={{ fontSize: '14px', margin: 0 }}>
                                                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                                            <>{flightdetailAirlines.name}</>
                                                                                                            :
                                                                                                            <></>
                                                                                                        }</>
                                                                                                    )}
                                                                                                </h6>
                                                                                                <h6 style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</h6>
                                                                                                <h6 style={{ fontSize: '11px', marginTop: '-7px' }}>{flightdetail.segments[0].cabin}</h6>
                                                                                            </div>

                                                                                            <div className="col-2 text-center">
                                                                                                <h5>{flightdetail.segments[0].departureAirportCode} - <b>{flightdetail.departureTime}</b></h5>
                                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].departureCity.name} - {flightdetails.search.legs[0].departureCity.countryCode}</h6>
                                                                                            </div>

                                                                                            <div className="col-1 text-center">
                                                                                                <i class="fa fa-clock-o" style={{ fontSize: '30px' }}></i>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h5>{flightdetail.segments[0].arrivalAirportCode} - <b>{flightdetail.arrivalTime}</b></h5>
                                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].arrivalCity.name} - {flightdetails.search.legs[0].arrivalCity.countryCode}</h6>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h6 style={{ fontSize: '14px' }}>Check-in baggage</h6>
                                                                                                <h6 style={{ fontSize: '14px' }}>Cabin baggage</h6>
                                                                                            </div>
                                                                                            <div className="col-2 text-center">
                                                                                                <h6 style={{ fontSize: '14px' }}>15kg / adult</h6>
                                                                                                <h6 style={{ fontSize: '14px' }}>7kg / adult</h6>
                                                                                            </div>
                                                                                        </div>
                                                                                    </li>
                                                                                </ul>
                                                                                :
                                                                                <></>
                                                                            }
                                                                        </div>
                                                                        :
                                                                        <></>
                                                                    }
                                                                </>
                                                                :
                                                                <></>
                                                            }
                                                        </>
                                                    }

                                                    {(flightNonStop === false && flightAfternoon === false && flightPrice === '') ?
                                                        <div className="row mt-4 py-2 pb-0" style={{ border: '1px solid #E6E6E6', marginLeft: '10px', cursor: 'pointer' }} onClick={() => showIDFunction(index)}>
                                                            <div className="col-md-2 col text-center col1">
                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' /> <h6 style={{ fontSize: '14px', margin: 0 }}>
                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                            <>{flightdetailAirlines.name}</>
                                                                            :
                                                                            <></>
                                                                        }</>
                                                                    )}
                                                                </h6> <span style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</span>
                                                            </div>
                                                            <div className="col-md-2 col text-center col2">
                                                                <h6 className='mt-3'>{flightdetail.departureTime}</h6>
                                                            </div>
                                                            <div className="col-md-2 col text-center col3">
                                                                <h6 className='mt-2'>{flightdetail.duration}<br /> <span style={{ fontSize: '12px' }}>({flightdetail.stopoverCode})</span></h6>
                                                            </div>
                                                            <div className="col-md-2 col text-center col4">
                                                                <h6 className='mt-3'>{flightdetail.arrivalTime}</h6>
                                                            </div>
                                                            <div className="col-md-2 col text-center col5">
                                                                <h6 className='mt-3'>₹ {flightdetails.fares[index].price.totalAmount}</h6>
                                                            </div>
                                                            <div className="col-md-2 col text-center col6">
                                                                <button type="button" class="btn w-100 mt-2 text-white" style={{ background: '#D4581D' }}><b>BOOK</b></button>
                                                            </div>

                                                            {(showID === index) ?
                                                                <ul class="list-group p-3">
                                                                    <li class="list-group-item">
                                                                        <h6> {flightdetails.search.legs[0].departureCity.name} <i class="fa fa-long-arrow-right"></i> {flightdetails.search.legs[0].arrivalCity.name}</h6>
                                                                        <hr style={{ marginTop: '-4px' }} />
                                                                        <div className="row">
                                                                            <div className="col-3 text-center">
                                                                                <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' />
                                                                                <h6 className='mb-2' style={{ fontSize: '14px', margin: 0 }}>
                                                                                    {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                                        <>{(flightdetailAirlines.code === flightdetail.segments[0].airlineCode) ?
                                                                                            <>{flightdetailAirlines.name}</>
                                                                                            :
                                                                                            <></>
                                                                                        }</>
                                                                                    )}
                                                                                </h6>
                                                                                <h6 style={{ fontSize: '11px' }}>{flightdetail.segments[0].designatorCode}</h6>
                                                                                <h6 style={{ fontSize: '11px', marginTop: '-7px' }}>{flightdetail.segments[0].cabin}</h6>
                                                                            </div>

                                                                            <div className="col-2 text-center">
                                                                                <h5>{flightdetail.segments[0].departureAirportCode} - <b>{flightdetail.departureTime}</b></h5>
                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].departureCity.name} - {flightdetails.search.legs[0].departureCity.countryCode}</h6>
                                                                            </div>

                                                                            <div className="col-1 text-center">
                                                                                <i class="fa fa-clock-o" style={{ fontSize: '30px' }}></i>
                                                                            </div>
                                                                            <div className="col-2 text-center">
                                                                                <h5>{flightdetail.segments[0].arrivalAirportCode} - <b>{flightdetail.arrivalTime}</b></h5>
                                                                                <h6 style={{ fontSize: '14px' }}>{flightdetails.search.legs[0].arrivalCity.name} - {flightdetails.search.legs[0].arrivalCity.countryCode}</h6>
                                                                            </div>
                                                                            <div className="col-2 text-center">
                                                                                <h6 style={{ fontSize: '14px' }}>Check-in baggage</h6>
                                                                                <h6 style={{ fontSize: '14px' }}>Cabin baggage</h6>
                                                                            </div>
                                                                            <div className="col-2 text-center">
                                                                                <h6 style={{ fontSize: '14px' }}>15kg / adult</h6>
                                                                                <h6 style={{ fontSize: '14px' }}>7kg / adult</h6>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                :
                                                                <></>
                                                            }
                                                        </div>
                                                        :
                                                        <></>
                                                    }
                                                </div>
                                            )}
                                        </>
                                    }
                                </>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlightDetails;
