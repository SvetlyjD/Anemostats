import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { About_route, Anemostat_hamam_route, Anemostat_lite_route, Anemostat_route, Contact_route, Main_route, Partners_route } from "../Utils/const";


function NavBar() {
    return (
        <Navbar expand="lg" className="bgNavbar" >
            <Navbar.Brand href={Main_route} className="brandClass">Анемостаты "Квазар"</Navbar.Brand>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ padding: "0px" }} />
                <Navbar.Collapse id="basic-navbar-nav" className="navbarVn" >
                    <Nav className="me-auto">
                        <NavDropdown.Item className="mainRoute" href={Main_route}>На главную</NavDropdown.Item>
                        <NavDropdown className="droppdownNav" title="Продукция" id="basic-nav-dropdown" style={{ marginTop: "-1px" }}>
                            <NavDropdown.Item href={Anemostat_route}>Анемостаты AIRGLASS</NavDropdown.Item>
                            <NavDropdown.Item href={Anemostat_lite_route}>Анемостаты AIRGLASS Lite</NavDropdown.Item>
                            <NavDropdown.Item href={Anemostat_hamam_route}>Анемостаты AIRGLASS Hamam</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <NavDropdown.Item className="mainRoute" href={Partners_route} >Где купить</NavDropdown.Item>
                        <NavDropdown.Item className="mainRoute" href={Contact_route} >Контакты</NavDropdown.Item>
                        <NavDropdown.Item className="mainRoute" href={About_route} >О нас</NavDropdown.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;