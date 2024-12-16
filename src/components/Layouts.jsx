import { Link } from "react-router-dom";

const Layouts = ({ children }) => {


    return (
        <div>
        <ul>
            <li>
            
                <Link to="/">Home</Link>
                </li>
            <li>
                <Link to="/page2">Page 2</Link>
                </li>
        </ul>
        <main>{children}</main>
        </div>
    )

};

export default Layouts;