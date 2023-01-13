import { Container, Navbar, Nav as NavBs, Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
export function Nav() {
    return (
        <Navbar sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <NavBs className="me-auto">
                    <NavBs.Link to="/" as={NavLink}>
                       Home
                    </NavBs.Link>
                    <NavBs.Link to="/store" as={NavLink}>
                       Store
                    </NavBs.Link>
                    <NavBs.Link to="/about" as={NavLink}>
                       About
                    </NavBs.Link>
                </NavBs>
                <Button
                style={{
                    position:"relative",
                    width:"3rem",
                    height:"3rem"}}
                >Cart
                <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                    color:"white", position:"absolute", width:"1rem", height:"1rem", bottom:0, right:0, transform:"translate(15%, 15%",}}
                >
                    #
                </div>
                </Button>
            </Container>
        </Navbar>
    )
}