import React, {Component} from 'react';

class GirdiEkle extends Component {
    //Liste durumuna göre uyarı gösterme
    yardimci(){
        if(this.props.girdiler.length === 0) return <span className="badge badge-success">Hiç tamamlanacak göreviniz yok!</span>;

        return <span className="badge badge-primary m-1">Tamamlanan görevleri silmek için üzerlerine tıklayınız!</span>
    }

    render() {
        //Liste gösterme
        const items = this.props.girdiler.map((elem, i) => {
            return (
                <li key={i} className="list-group-item list-group-item-action"
                    onClick={this.props.girdiSil.bind(this, elem)}>
                    <span className="badge badge-pill badge-primary">{i + 1}</span> {elem}
                </li>
            )
        });

        return (
            <div>
                <ul className="list-group m-1">{items}</ul>
                <div className="text-center">{ this.yardimci() }</div>
            </div>
        );
    }
}

export default GirdiEkle;