import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav
      activeKey="/Homepage"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/Homepage">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/Projects">Projects</Nav.Link>
      </Nav.Item>
            <Nav.Item>
        <Nav.Link eventKey="/Contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;