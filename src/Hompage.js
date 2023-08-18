import './Homepage.css'
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import MiddleData from './components/Homepage/MiddleData';
import SidebarLeft from "./components/Homepage/SidebarLeft";
import SidebarRight from './components/Homepage/SidebarRight';

function Homepage() {
    return (
        <div className='mainContainer'>
            <Header />

            <div className='appContainer'>
                <div className="px-4 py-4 screenSize">
                    <div className="row">
                        <div className="col-lg-2 leftSidebar columnStyle">
                            <SidebarLeft />
                        </div>
                        <div className="col-lg-7 col middleData columnStyle">
                            <MiddleData />
                        </div>
                        <div className="col-lg-3 rightSidebar columnStyle">
                            <SidebarRight />
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-lg-2 col">
                            <div className="row">
                                <div className="col-md-4 mt-3">
                                    <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/BBD/CTUPI_COMBINED_BSB_FLIGHTS_03022023.png" alt="#ImgNotFound" className="w-100" />
                                </div>
                                <div className="col-md-4 mt-3">
                                    <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/BBD/HDFCEMI_BSB_FLIGHTS_26072023.png" alt="#ImgNotFound" className="w-100" />
                                </div>
                                <div className="col-md-4 mt-3">
                                    <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_235,h_122,dpr_2/offermgmt/images/BBD/CTHSBC_BSB_FLIGHTS_13072023.png" alt="#ImgNotFound" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="offset-lg-2 col">
                            <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_983,h_247,dpr_2/offermgmt/images/qrCode_2.jpg" alt="#ImgNotFound" className="w-100 mt-5" />
                            <img src="https://fcc.flixcart.com/www/assets/mon/bloomsretail/1691650824271-cll4t81u70u285fr560mhc163.png" alt="#ImgNotFound" className="w-100 mt-5" />

                            <h2 className='mt-5'>Popular destinations</h2>
                            <div className="row">
                                <div className="col-lg col-sm-4 ImgContainer">
                                    <img src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Goa_2000_1328.png" alt="#ImgNotFound" className="w-100 mt-3 visitingPlaces" />
                                    <div class="ImgText">
                                        Goa
                                        <br />
                                        3051 Properties
                                    </div>
                                </div>
                                <div className="col-lg col-sm-4 ImgContainer">
                                    <img src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Delhi_2000_1328.png" alt="#ImgNotFound" className="w-100 mt-3 visitingPlaces" />
                                    <div class="ImgText">
                                        Delhi
                                        <br />
                                        3051 Properties
                                    </div>
                                </div>
                                <div className="col-lg col-sm-4 ImgContainer">
                                    <img src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Mumbai_2000_1328.png" alt="#ImgNotFound" className="w-100 mt-3 visitingPlaces" />
                                    <div class="ImgText">
                                        Mumbai
                                        <br />
                                        3051 Properties
                                    </div>
                                </div>
                                <div className="col-lg offset-lg-0 offset-sm-2 col-4 ImgContainer">
                                    <img src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Jaipur_2000_1328.png" alt="#ImgNotFound" className="w-100 mt-3 visitingPlaces" />
                                    <div class="ImgText">
                                        Jaipur
                                        <br />
                                        3051 Properties
                                    </div>
                                </div>
                                <div className="col-lg col-4 ImgContainer">
                                    <img src="https://fastui.cltpstatic.com/image/upload/w_176,h_178,f_auto,q_auto,c_fill,e_sharpen:80,g_auto,fl_progressive/hotels/places/cities/images/Dubai_2000_1328.png" alt="#ImgNotFound" className="w-100 mt-3 visitingPlaces" />
                                    <div class="ImgText">
                                        Dubai
                                        <br />
                                        3051 Properties
                                    </div>
                                </div>
                            </div>

                            <h5 className='mt-5'>Why book on Cleartrip?</h5>
                            <p className='textStyle'>On Cleartrip.com, you can turn all your plans into trips. From flight ticket bookings, and booking hotels online to airport, rental and outstation cab booking, with Cleartrip, no travel dream is far enough. Fly to your favourite destinations with the best flight offers across various airline options like IndiGo, Air India, SpiceJet, Go First, AirAsia, Vistara, etc. Make the most of your holiday plans by relaxing, rejuvenating and enjoying amazing leisure experiences at our vast range of hotels. From affordable and budget-friendly hotels to the best 5-star properties, book your stay on Cleartrip with unmissable offers. Be it for business travel or pleasure, you can now get the best deals on flights and hotels. So, where to?</p>
                            <h6 className='textStyle'>Booking flights & hotels online with Cleartrip</h6>
                            <p className='textStyle'>From queries to itineraries, for all things travel, there is Cleartrip. Checking your flight updates and PNR status is easy with our simple, intuitive app and booking site. Booking online hotels gets seamless with a range of choices and the greatest hotel deals.</p>
                            <p className='textStyle'>Here’s why booking flights and hotels with Cleartrip is your Clear Advantage:</p>
                            <p className='textStyle'><b>CT Flexmax:</b> Reschedule or cancel your domestic flight booking for free up to 24 hours before departure.</p>
                            <p className='textStyle'><b>CT Flex:</b> Amend your domestic flight booking against your date of travel and choice of airline. Say hello to flexible flight bookings!</p>
                            <p className='textStyle'><b>Easy hotel cancellation:</b> Cancel your hotel stay easily. Zero fees on hotel cancellations up to 24 hours before check-in on 20k+ hotels.</p>
                            <p className='textStyle'><b>Instant refund initiation:</b> All refunds on flight and hotel cancellations are initiated instantly.</p>
                            <p className='textStyle'><b>Medi-cancel refund:</b> Cancel your domestic flight booking easily on valid medical grounds and get up to ₹3500 against airline cancellation charges per passenger per segment.</p>
                            <p className='textStyle'><b>International travel insurance:</b> Get stress-free coverage against a vast range of uncertainties for all international destinations at only ₹89 per user per day.</p>
                            <p className='textStyle'><b>Special Fares For Armed Personnel, Senior Citizens and Student travellers:</b> Cleartrip introduces discounted fares for armed personnel, senior citizens and students on domestic flights. Additional discounts with coupon codes.</p>

                            <h5 className='mt-3'>What are the best offers available for travel bookings on Cleartrip?</h5>
                            <p className='textStyle'>Get the best offers on hotels and flights using bank cards such as HDFC, ICICI, Bank of Baroda, Federal Bank, etc. You can also grab amazing discounts during our exciting sale events. Apart from this, find unmissable deals and offers on hotel stays and flight bookings throughout the year.</p>

                            <h5 className='mt-3'>Are there any offers for new users on Cleartrip?</h5>
                            <p className='textStyle'>Firsts are always special. So new users, you get FLAT 12% off on your airfare and up to 18% off on hotels using code CTFIRST. Cleartrip is here to make your online flight booking seamless and simple.</p>

                            <h5 className='mt-3'>How can I find the best deals and discounts on flights and hotels online on Cleartrip?</h5>
                            <p className='textStyle'>With Cleartrip, there are multiple deals available for your online flight and hotel booking. Whenever you select a hotel or a flight ticket, you can find the best available deals mentioned on the booking page. You can then use any of the available deals and coupon codes to avail your offer. Explore all flight booking discount offers & hotels booking discount offers.</p>

                            <h5 className='mt-3'>Which is the best time to book flight tickets online?</h5>
                            <p className='textStyle'>There’s no specific right time to book your travel. With Cleartrip, there are deals and offers available on online flight tickets all year round, to make your booking easy and affordable. However, there are many exciting sale events Cleartrip has that offer the best deals on travel such as Travel Maxx sale, #NoEndWeekend sale, Big Billion Days, Big Travel Sale, etc. Stay tuned and keep an eye on when the travel sales are and book hotels and flights online for the best price!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;
