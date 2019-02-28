import React from 'react';
import { connect } from "react-redux";
import {visibleSubmenu} from "../../actions/menu";

const MySubLink = (props) => {
    const {visibleSubmenu, children, item, ...prop } = props;
    const click = (e) =>  {
        e.preventDefault();
        visibleSubmenu(item)
    };

    return (
        <div {...prop} onClick={click}>
            {children}
        </div>
    );
};


const mapDispatchToProps = {
    visibleSubmenu
};

export default connect(null, mapDispatchToProps)(MySubLink);