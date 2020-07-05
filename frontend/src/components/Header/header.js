import React, {useState} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">Home</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/mainHospitals">Hospitals</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/createCheckUp/">Create Check Up</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Statistics
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/groupByCode/">
                                    Frequency of diagnosed ICD codes of 2019
                                </DropdownItem>
                                <DropdownItem href="/groupByLocation/">
                                    Number of hospitals per Base Hospital
                                </DropdownItem>
                                <DropdownItem href="/monthly-report-doctor">
                                    Monthly Report per Doctor
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;