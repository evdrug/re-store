import React, {Component} from 'react';
import './book-list.css';
import { connect } from 'react-redux';

import BookListItem from "../book-list-item";
import { withAPIServices } from '../hoc';
import { booksLoaded } from "../../actions";
import { compose } from '../../utils';
import MyLink from "../my-link";

class BookList extends Component {
    componentDidMount() {
        const { apiService } = this.props;
        const data = apiService.getBooks();
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
                <MyLink to={'/xxx/'}  >test</MyLink>
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return {
        books
    }
};

const mapDispatchToProps =  {
        booksLoaded,
};

export default compose(
    withAPIServices(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList)

