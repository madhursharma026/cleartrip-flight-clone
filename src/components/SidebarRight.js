import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

function SidebarRight() {
  return (
    <div className='m-3'>
      <Carousel controls={false}>
        <Carousel.Item>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/BBD/CTUPI_RR_FLIGHTS_05022023.png" alt="#ImgNotFound" className='w-100' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/BBD/DOTW_Jaipur_RR_FLIGHTS_11082023.png" alt="#ImgNotFound" className='w-100' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/BBD/CTHSBC_RR_FLIGHTS_13072023.png" alt="#ImgNotFound" className='w-100' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/BBD/DOTW_ABUDHABI_RR_FLIGHTS_02082023_1.png" alt="#ImgNotFound" className='w-100' />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://fastui.cltpstatic.com/image/upload/f_auto,q_auto,w_260,h_205,dpr_2/offermgmt/images/BBD/CTNIYO_RR_FLIGHTS_07082023.png" alt="#ImgNotFound" className='w-100' />
        </Carousel.Item>
      </Carousel>

      <div className="row mt-2">
        <div className="col">
          <h6>More offers</h6>
        </div>
        <div className="col" style={{ textAlign: 'right' }}>
          <h6 className='text-primary'>View All</h6>
        </div>
      </div>


      <Carousel data-bs-theme="dark" controls={false} className='pb-3'>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <h6>Oman Air Offer!</h6>
              <h6>Cleartrip Exclusive Fares + Additional discount up to ₹10,000 on Oman Air!</h6>
              <p>Use Coupon Code CTOMAN</p>
              <h6 className="text-primary">Know More</h6>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <h6>Oman Air Offer!</h6>
              <h6>Cleartrip Exclusive Fares + Additional discount up to ₹10,000 on Oman Air!</h6>
              <p>Use Coupon Code CTOMAN</p>
              <h6 className="text-primary">Know More</h6>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Body>
              <h6>Oman Air Offer!</h6>
              <h6>Cleartrip Exclusive Fares + Additional discount up to ₹10,000 on Oman Air!</h6>
              <p>Use Coupon Code CTOMAN</p>
              <h6 className="text-primary">Know More</h6>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SidebarRight;