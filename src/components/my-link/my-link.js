import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import {activeLink} from "../../actions/menu";

const MyLink = (props) => {
    const { to, activeLink, children,  ...prop } = props;
    const click = () => {
        activeLink(to);
    };

    return (
        <Link to={to} onClick={click} {...prop}>
            {children}
        </Link>
    );
};

const mapDispatchToProps = {
    activeLink
};

export default connect(null, mapDispatchToProps)(MyLink);