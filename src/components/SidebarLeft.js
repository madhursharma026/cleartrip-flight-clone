import '../styles/SidebarLeft.css'

function SidebarLeft() {
  return (
    <>
      <div className='leftSidebarBeforeLGScrn'>
        <p className={`px-2 py-1 text-primary selectedSidebarOptions`}><i className="fa fa-plane"></i> <span className='optionName'>Flights</span></p>
        <p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-hotel"></i> <span className='optionName'>Hotels</span></p>
        <p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-dot-circle-o"></i> <span className='optionName'>Offers</span></p>
        <p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-shopping-bag"></i> <span className='optionName'>My trips</span></p>
        <p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-star-o"></i> <span className='optionName'>Cleartrip for Business</span></p>
        <p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-headphones"></i> <span className='optionName'>Support</span></p>
      </div>
      <div className='leftSidebarAfterLGScrn'>
        <div className="row">
          <div className="col text-center m-1 w-auto"><p className={`px-2 py-1 text-primary selectedSidebarOptions`}><i className="fa fa-plane"></i> <span className='optionName'>Flights</span></p></div>
          <div className="col text-center m-1 w-auto"><p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-hotel"></i> <span className='optionName'>Hotels</span></p></div>
          <div className="col text-center m-1 w-auto"><p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-dot-circle-o"></i> <span className='optionName'>Offers</span></p></div>
          <div className="col text-center m-1 w-auto"><p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-shopping-bag"></i> <span className='optionName'>My trips</span></p></div>
          <div className="col text-center m-1 w-auto"><p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-star-o"></i> <span className='optionName'>Cleartrip for Business</span></p></div>
          <div className="col text-center m-1 w-auto"><p className={`px-2 py-1 sidebarOptions`}><i className="fa fa-headphones"></i> <span className='optionName'>Support</span></p></div>
        </div>
      </div>
    </>
  );
}

export default SidebarLeft;
