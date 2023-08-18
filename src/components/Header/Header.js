import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div className="py-2" style={{ background: 'white', boxShadow: '0 2px 24px rgba(0,0,0,.04)' }}>
            <Navbar className='px-4' style={{ maxWidth: '1300px', margin: 'auto' }}>
                <Navbar.Brand>
                    <Link to="/">
                        <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1673950430/exr8cexlojj0mnjc7vph.png" alt="#ImgNotFound" width='110px' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="primary" style={{ fontSize: '15px' }}><b>Login / Sign up</b></Button>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;
