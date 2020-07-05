import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
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
                                    Top 5 Diagnosed Codes of 2019
                                </DropdownItem>
                                <DropdownItem href="/groupByLocation/">
                                    Number of hospitals per Base Hospital
                                </DropdownItem>
                                <DropdownItem href="/avgPatientsPerDoctor/">
                                    Average Patients per Doctor
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
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