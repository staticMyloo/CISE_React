import { IoMdArrowDropdown } from "react-icons/io";
import NavItem from "./nav/NavItem";
import NavDropdown from "./nav/NavDropdown";
import NavBarNew from "./nav/NavBarNew";

const PopulatedNavBar = () => {
    return (
        <NavBarNew>
            <NavItem>SPEED</NavItem>
            <NavItem route="/" end>
                Home
            </NavItem>
            <NavItem dropdown route="/articles">
                Articles <IoMdArrowDropdown />
                <NavDropdown>
                    <NavItem route="/articles">View articles</NavItem>
                    <NavItem route="/articles/new">Submit new</NavItem>
                </NavDropdown>
            </NavItem>
        </NavBarNew>
    );
};
export default PopulatedNavBar;