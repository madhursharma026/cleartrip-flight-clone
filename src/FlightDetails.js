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

    console.log('flightdetails', flightdetails)

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
                                }</h6> flights</p>
                            <Accordion defaultActiveKey={['0', '1', '2', '3']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><b>Stops</b></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row">
                                            <div className="col-md-1 col-2"><input type="checkbox" /></div>
                                            <div className="col-md-10 col-9">Non-Stop</div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><b>Departure time</b></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row">
                                            <div className="col-md-1 col-2"><input type="checkbox" /></div>
                                            <div className="col-md-10 col-9">Afternoon</div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><b>One-way price</b></Accordion.Header>
                                    <Accordion.Body>
                                        <input type="range" class="form-range" />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><b>Airlines</b></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row">
                                            <div className="col-md-1 col-2"><input type="checkbox" /></div>
                                            <div className="col-md-10 col-9">Show multi-airline itineraries</div>
                                            <hr style={{ marginTop: '15px' }} />
                                            <div className="col-md-1 col-2"><input type="checkbox" /></div>
                                            <div className="col-md-10 col-9">Indigo</div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header><b>Trip duration</b></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row">
                                            <div className="col">0 hours</div>
                                            <div className="col" style={{ textAlign: 'right' }}>3 hours</div>
                                        </div>
                                        <input type="range" class="form-range" />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
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
                                                <div className="row mt-4 py-2 pb-0" style={{ border: '1px solid #E6E6E6', marginLeft: '10px' }}>
                                                    <div className="col-md-2 col text-center col1">
                                                        <img src="https://fastui.cltpstatic.com/image/upload/resources/images/logos/air-logos/6E_2x.png" alt="#ImgNotFound" width='30px' /> <h6 style={{ fontSize: '14px', margin: 0 }}>
                                                            {/* {flightdetails.airlines[0].name} */}
                                                            {flightdetails.airlines.map((flightdetailAirlines, index) =>
                                                                <>{(flightdetailAirlines.code===flightdetail.segments[0].airlineCode)?
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
                                                        <h6 className='mt-2'>{flightdetail.duration}<br /> <span style={{fontSize: '12px'}}>({flightdetail.stopoverCode})</span></h6>
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
