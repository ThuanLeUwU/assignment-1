import Dropdown from 'react-bootstrap/Dropdown';

function LoginComponent() {
  return (
    <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='top-login no-background'>
      <span className="fa fa-sign-in fa-lg"></span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LoginComponent;