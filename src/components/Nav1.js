import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function Nav1() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/");
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Invoice</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/addinvoice">Add invoice</Nav.Link>
                        <Nav.Link href="/settings">Settings</Nav.Link>
                        <Nav.Link href="/generatepdf">Generate</Nav.Link>
                        <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
