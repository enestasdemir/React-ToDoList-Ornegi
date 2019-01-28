import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="row m-2">
                <div className="col-sm-2">
                    <img src="note.png"/>
                </div>
                <div className="col-sm-10">
                    <h1>Not Defteri</h1>
                </div>
            </div>
        );
    }
}

export default Header;