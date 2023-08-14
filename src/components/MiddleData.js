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
    const [flightdetails, setFlightdetails] = useState(
        { "legs": [{ "id": "AGR-BLR:6E5917~27:0", "departureTime": "14:50", "arrivalTime": "17:05", "duration": "02h 15m", "departureAirportCode": "AGR", "arrivalAirportCode": "BLR", "airlineCodes": ["6E"], "stopoverAirportCodes": [], "allianceCodes": ["lcc"], "stopoversCount": 0, "departureTimeMinutes": 890, "arrivalTimeMinutes": 1025, "departureDateTime": "2023-10-27T14:50:00.000+05:30", "arrivalDateTime": "2023-10-27T17:05:00.000+05:30", "stopoverDurationMinutes": 0, "durationMinutes": 135, "overnight": false, "stopoverDuration": "00h", "durationDays": 0, "longStopover": false, "segments": [{ "durationMinutes": 135, "stopoverDurationMinutes": 0, "departureAirportCode": "AGR", "arrivalAirportCode": "BLR", "airlineCode": "6E", "cabin": "economy", "designatorCode": "6E5917", "departureDateTime": "2023-10-27T14:50:00.000+05:30", "arrivalDateTime": "2023-10-27T17:05:00.000+05:30" }], "operatingAirlineCodes": [], "stopoverCode": "DIRECT", "shortStopover": true, "earlyDeparture": false, "lateArrival": false, "newAircraft": false, "oldAircraft": true, "highlyRatedCarrier": false, "score": 1000 }], "tags": [], "search": { "id": "6745d08ea0489a91msr", "cabin": "economy", "adultsCount": 1, "childrenCount": 0, "infantsCount": 0, "siteCode": "US", "currencyCode": "INR", "locale": "en", "deviceType": "desktop", "appType": "WEB_APP", "createdAt": "2023-08-14T18:39:07.080Z", "key": "[AGR:BLR:2023-10-27]~1~0~0~US~economy~desktop~WEB_APP", "userCountryCode": "HN", "wgInternalCampaign": "", "legs": [{ "id": "AGR:BLR:2023-10-27", "outboundDate": "2023-10-27", "departureAirportCode": "AGR", "arrivalAirportCode": "BLR", "departureCity": { "code": "AGR", "name": "Agra", "enName": "Agra", "countryCode": "IN", "countryName": "India", "countryEnName": "India", "worldRegionCode": "i", "worldRegionName": "Asia", "worldRegionEnName": "Asia" }, "arrivalCity": { "code": "BLR", "name": "Bangalore", "enName": "Bangalore", "countryCode": "IN", "countryName": "India", "countryEnName": "India", "worldRegionCode": "i", "worldRegionName": "Asia", "worldRegionEnName": "Asia" }, "departureAirport": { "name": "Agra Airport", "code": "AGR", "cityCode": "AGR" }, "arrivalAirport": { "name": "Bangalore (Bengaluru) Airport", "code": "BLR", "cityCode": "BLR" } }], "nearbyRoutes": [] }, "airlines": [{ "name": "IndiGo", "code": "6E" }], "airports": [{ "name": "Agra Airport", "code": "AGR", "cityCode": "AGR" }, { "name": "Bangalore (Bengaluru) Airport", "code": "BLR", "cityCode": "BLR" }], "cities": [{ "code": "AGR", "name": "Agra", "countryCode": "IN" }, { "code": "BLR", "name": "Bangalore", "countryCode": "IN" }], "providers": [{ "code": "bravofly.com", "name": "Bravofly", "type": "ota", "instant": false, "facilitatedBooking": false, "wegoFare": false }, { "code": "flightnetwork.com.us", "name": "Flightnetwork", "type": "ota", "instant": false, "facilitatedBooking": false, "wegoFare": false }, { "code": "gotogate.com", "name": "Gotogate", "type": "ota", "instant": false, "facilitatedBooking": false, "wegoFare": false }, { "code": "mytrip.com.us", "name": "Mytrip", "type": "ota", "instant": false, "facilitatedBooking": false, "wegoFare": false }, { "code": "english.ctrip.com", "name": "Trip.com", "type": "ota", "instant": false, "facilitatedBooking": false, "wegoFare": false }, { "code": "wingie.com", "name": "Wingie", "type": "ota", "instant": false, "facilitatedBooking": false, "wegoFare": false }], "countries": [{ "code": "IN", "name": "India" }, { "code": "IN", "name": "India" }], "trips": [{ "id": "6745d08ea0489a91msr:6E5917~27", "code": "6E5917~27", "legIds": ["AGR-BLR:6E5917~27:0"] }], "fares": [{ "paymentFees": [{ "paymentMethodId": 10, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 15, "currencyCode": "INR", "amount": 662.41, "amountUsd": 7.9649158, "totalAmount": 662.41, "totalAmountUsd": 7.9649158 }], "id": "6745d08ea0489a91msr:wingie.com:e028ae30dad2bc41", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "providerCode": "wingie.com", "handoffUrl": "https://handoff.wego.com/flights/continue?currency=INR&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=6745d08ea0489a91msr:wingie.com:e028ae30dad2bc41&route=AGR-BLR&search_id=6745d08ea0489a91msr&trip_id=AGR:BLR:2023-10-27&pwa=false&api_version=2&integration_code=enuygun.com&region=ap-southeast-1&placement_type=metasearch", "ecpc": 1.21106, "remainingSeatsCount": 2, "conditionIds": [], "legConditionIds": [], "refundable": false, "exchangeable": false, "tags": [], "score": 891.9047, "tripId": "6745d08ea0489a91msr:6E5917~27" }, { "paymentFees": [{ "paymentMethodId": 15, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 10, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 3, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }], "id": "6745d08ea0489a91msr:gotogate.com:ff52ad560ac79925", "price": { "totalAmount": 9404, "totalAmountUsd": 113.08, "amount": 9404, "amountUsd": 113.08, "originalAmount": 9404.45, "originalAmountUsd": 113.08, "amountPerAdult": 9404.45, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "providerCode": "gotogate.com", "handoffUrl": "https://handoff.wego.com/flights/continue?currency=INR&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=6745d08ea0489a91msr:gotogate.com:ff52ad560ac79925&route=AGR-BLR&search_id=6745d08ea0489a91msr&trip_id=AGR:BLR:2023-10-27&pwa=false&api_version=2&integration_code=gotogate.co.uk&region=ap-southeast-1&placement_type=metasearch", "ecpc": 0.794652, "remainingSeatsCount": 0, "conditionIds": [], "legConditionIds": [], "refundable": false, "exchangeable": false, "tags": [], "score": 886.92, "tripId": "6745d08ea0489a91msr:6E5917~27" }, { "paymentFees": [{ "paymentMethodId": 15, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 10, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 3, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }], "id": "6745d08ea0489a91msr:flightnetwork.com.us:d1fe15005c9a8fc0", "price": { "totalAmount": 9468, "totalAmountUsd": 113.85, "amount": 9468, "amountUsd": 113.85, "originalAmount": 9468.488, "originalAmountUsd": 113.85, "amountPerAdult": 9468.488, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "providerCode": "flightnetwork.com.us", "handoffUrl": "https://handoff.wego.com/flights/continue?currency=INR&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=6745d08ea0489a91msr:flightnetwork.com.us:d1fe15005c9a8fc0&route=AGR-BLR&search_id=6745d08ea0489a91msr&trip_id=AGR:BLR:2023-10-27&pwa=false&api_version=2&integration_code=flightnetwork.com&region=ap-southeast-1&placement_type=metasearch", "ecpc": 0.604491, "remainingSeatsCount": 0, "conditionIds": [], "legConditionIds": [], "refundable": false, "exchangeable": false, "tags": [], "score": 886.15, "tripId": "6745d08ea0489a91msr:6E5917~27" }, { "paymentFees": [{ "paymentMethodId": 15, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 10, "currencyCode": "INR", "amount": 500.66, "amountUsd": 6.02, "totalAmount": 500.66, "totalAmountUsd": 6.02 }, { "paymentMethodId": 3, "currencyCode": "INR", "amount": 500.66, "amountUsd": 6.02, "totalAmount": 500.66, "totalAmountUsd": 6.02 }, { "paymentMethodId": 13, "currencyCode": "INR", "amount": 500.66, "amountUsd": 6.02, "totalAmount": 500.66, "totalAmountUsd": 6.02 }], "id": "6745d08ea0489a91msr:bravofly.com:4f506470f5100af", "price": { "totalAmount": 10020, "totalAmountUsd": 120.48, "amount": 10020, "amountUsd": 120.48, "originalAmount": 10019.882, "originalAmountUsd": 120.48, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "providerCode": "bravofly.com", "handoffUrl": "https://handoff.wego.com/flights/continue?currency=INR&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=6745d08ea0489a91msr:bravofly.com:4f506470f5100af&route=AGR-BLR&search_id=6745d08ea0489a91msr&trip_id=AGR:BLR:2023-10-27&pwa=false&api_version=2&integration_code=bravofly.com&region=ap-southeast-1&placement_type=metasearch", "ecpc": 1.00695, "remainingSeatsCount": 0, "conditionIds": [], "legConditionIds": [], "refundable": false, "exchangeable": false, "tags": [], "score": 879.52, "tripId": "6745d08ea0489a91msr:6E5917~27" }, { "paymentFees": [{ "paymentMethodId": 10, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 15, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 3, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }], "id": "6745d08ea0489a91msr:english.ctrip.com:e462a3a701806695", "price": { "totalAmount": 10255, "totalAmountUsd": 123.30709, "amount": 10255, "amountUsd": 123.30709, "originalAmount": 10255, "originalAmountUsd": 123.30709, "amountPerAdult": 10255, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "providerCode": "english.ctrip.com", "handoffUrl": "https://handoff.wego.com/flights/continue?currency=INR&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=6745d08ea0489a91msr:english.ctrip.com:e462a3a701806695&route=AGR-BLR&search_id=6745d08ea0489a91msr&trip_id=AGR:BLR:2023-10-27&pwa=false&api_version=2&integration_code=ctrip.com&region=ap-southeast-1&placement_type=metasearch", "ecpc": 0.562518, "remainingSeatsCount": 0, "conditionIds": [], "legConditionIds": [], "refundable": false, "exchangeable": false, "tags": [], "score": 876.69293, "tripId": "6745d08ea0489a91msr:6E5917~27" }, { "paymentFees": [{ "paymentMethodId": 15, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 10, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 3, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }], "id": "6745d08ea0489a91msr:mytrip.com.us:de95c0d2d2e22127", "price": { "totalAmount": 10601, "totalAmountUsd": 127.47, "amount": 10601, "amountUsd": 127.47, "originalAmount": 10601.214, "originalAmountUsd": 127.47, "amountPerAdult": 10601.214, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "providerCode": "mytrip.com.us", "handoffUrl": "https://handoff.wego.com/flights/continue?currency=INR&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=6745d08ea0489a91msr:mytrip.com.us:de95c0d2d2e22127&route=AGR-BLR&search_id=6745d08ea0489a91msr&trip_id=AGR:BLR:2023-10-27&pwa=false&api_version=2&integration_code=mytrip.com&region=ap-southeast-1&placement_type=metasearch", "ecpc": 0.50594, "remainingSeatsCount": 0, "conditionIds": [], "legConditionIds": [], "refundable": false, "exchangeable": false, "tags": [], "score": 872.53, "tripId": "6745d08ea0489a91msr:6E5917~27" }], "filters": { "minPrice": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "maxPrice": { "totalAmount": 10601, "totalAmountUsd": 127.47, "amount": 10601, "amountUsd": 127.47, "originalAmount": 10601.214, "originalAmountUsd": 127.47, "amountPerAdult": 10601.214, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "stops": [{ "code": "DIRECT", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }], "airlines": [{ "code": "6E", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }], "providers": [{ "code": "wingie.com", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }, { "code": "mytrip.com.us", "price": { "totalAmount": 10601, "totalAmountUsd": 127.47, "amount": 10601, "amountUsd": 127.47, "originalAmount": 10601.214, "originalAmountUsd": 127.47, "amountPerAdult": 10601.214, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }, { "code": "gotogate.com", "price": { "totalAmount": 9404, "totalAmountUsd": 113.08, "amount": 9404, "amountUsd": 113.08, "originalAmount": 9404.45, "originalAmountUsd": 113.08, "amountPerAdult": 9404.45, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }, { "code": "flightnetwork.com.us", "price": { "totalAmount": 9468, "totalAmountUsd": 113.85, "amount": 9468, "amountUsd": 113.85, "originalAmount": 9468.488, "originalAmountUsd": 113.85, "amountPerAdult": 9468.488, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }, { "code": "bravofly.com", "price": { "totalAmount": 10020, "totalAmountUsd": 120.48, "amount": 10020, "amountUsd": 120.48, "originalAmount": 10019.882, "originalAmountUsd": 120.48, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }, { "code": "english.ctrip.com", "price": { "totalAmount": 10255, "totalAmountUsd": 123.30709, "amount": 10255, "amountUsd": 123.30709, "originalAmount": 10255, "originalAmountUsd": 123.30709, "amountPerAdult": 10255, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 0, "taxAmountUsd": 0, "totalTaxAmount": 0, "totalTaxAmountUsd": 0, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }], "stopoverAirports": [], "stopoverDurations": { "min": 0, "max": 0 }, "originAirports": [{ "code": "AGR", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }], "destinationAirports": [{ "code": "BLR", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }], "tripDurations": { "min": 135, "max": 135 }, "legs": [{ "departureAirportCode": "AGR", "arrivalAirportCode": "BLR", "departureCityCode": "AGR", "arrivalCityCode": "BLR", "index": 0, "departureTimes": { "min": 890, "max": 890 }, "arrivalTimes": { "min": 1025, "max": 1025 }, "durations": { "min": 135, "max": 135 }, "stops": [{ "code": "DIRECT", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }], "stopoverDurations": { "min": 0, "max": 0 }, "stopoverAirports": [], "airlines": [{ "code": "6E", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }] }], "alliances": [{ "code": "lcc", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 } }], "fareConditions": [] }, "routeSponsors": [{ "priority": 0, "fare": { "paymentFees": [{ "paymentMethodId": 10, "currencyCode": "INR", "amount": 0, "amountUsd": 0, "totalAmount": 0, "totalAmountUsd": 0 }, { "paymentMethodId": 15, "currencyCode": "INR", "amount": 662.41, "amountUsd": 7.9649158, "totalAmount": 662.41, "totalAmountUsd": 7.9649158 }], "id": "6745d08ea0489a91msr:wingie.com:e028ae30dad2bc41", "price": { "totalAmount": 8990, "totalAmountUsd": 108.09528, "amount": 8990, "amountUsd": 108.09528, "originalAmount": 8989.89, "originalAmountUsd": 108.09528, "amountPerAdult": 0, "amountPerChild": 0, "amountPerInfant": 0, "taxAmount": 411.68, "taxAmountUsd": 4.9500794, "totalTaxAmount": 411.68, "totalTaxAmountUsd": 4.9500794, "currencyCode": "INR", "paymentFeeAmountUsd": 0, "bookingFee": 0, "bookingFeeUsd": 0, "totalBookingFee": 0, "totalBookingFeeUsd": 0 }, "providerCode": "wingie.com", "handoffUrl": "https://handoff.wego.com/flights/continue?currency=INR&url_locale=en&site_code=US&device_type=desktop&app_type=WEB_APP&domain=www.wego.com&fare_id=6745d08ea0489a91msr:wingie.com:e028ae30dad2bc41&route=AGR-BLR&search_id=6745d08ea0489a91msr&trip_id=AGR:BLR:2023-10-27&pwa=false&api_version=2&integration_code=enuygun.com&placement_type=metasearch", "ecpc": 1.21106, "remainingSeatsCount": 2, "conditionIds": [], "legConditionIds": [], "refundable": false, "exchangeable": false, "tags": [], "score": 891.9047, "tripId": "6745d08ea0489a91msr:6E5917~27" } }], "scores": { "6745d08ea0489a91msr:6E5917~27": 1000 }, "paymentMethods": [{ "id": 10, "name": "MasterCard Credit" }, { "id": 15, "name": "Visa Credit" }, { "id": 3, "name": "American Express" }, { "id": 13, "name": "PayPal" }], "fareConditions": [], "faresCount": { "6745d08ea0489a91msr:6E5917~27": 6 }, "promosCount": {}, "count": 6, "sponsors": [] }
    )

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
                    {flightdetails.legs === '' ?
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

