import React, {Component} from 'react';

class Girdiler extends Component {
    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.props.gorevEkle}>
                    <div className="form-group">
                        <input type="text" className="form-control m-1" id="girdi" placeholder="Girdi"
                               autoComplete="off"
                               value={this.props.mevcutGirdi.text}
                               onChange={this.props.girdiTut}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary m-1">Gönder</button>
                </form>

            </div>
        );
    }
}

export default Girdiler;