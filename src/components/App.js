import React, {Component} from 'react';
import '../styles/App.css';

import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
    render() {
        return (
            <div className="row navbar navbar-default">
                <h1 className="">Books N' Roses: Appetite for Instruction</h1>
                <BookList/>
                <BookDetail/>
            </div>
        );
    }
}

export default App;
