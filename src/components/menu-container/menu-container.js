import React, {Component} from 'react';
import './menu-container.css';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {activeLink, menuLoaded, menuRequest, menuError} from "../../actions/menu";
import {compose, traceMenu, subMenu} from '../../utils';
import Menu from "../menu";
import {withAPIServices} from "../hoc";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";



class MenuContainer extends Component {
    componentDidMount() {
        this.props.fetchMenu();
    }

    render() {
        const { menu, menuLoading, menuErrorMessage, menuActive} = this.props;
        return (
            <nav className={menuActive ? 'my_navbar active-menu' : 'my_navbar' }>
                {menuLoading &&(<Spinner />)}
                {menuErrorMessage &&(<ErrorIndicator />)}
                {!menuLoading && !menuErrorMessage &&(<Menu menu={subMenu(menu)} />)}
            </nav>
        );
    }
}

const mapStateToProps = ({menuState:{menu, menuLoading, menuErrorMessage, menuActive}}) => {
    return {
        menu,
        menuLoading,
        menuErrorMessage,
        menuActive,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchMenu: () => {
            dispatch(menuRequest());
            ownProps.apiService.getMenu()
                .then((res) => {
                    dispatch(menuLoaded(traceMenu(res)));
                    dispatch(activeLink(ownProps.location.pathname));
                })
                .catch((err) => {
                    dispatch(menuError(err));
                    console.warn(err);
                });
        }
    }
};


export default compose(
    withRouter,
    withAPIServices(),
    connect(mapStateToProps, mapDispatchToProps),
)(MenuContainer)
