import React, {Component} from 'react';
import Girdiler from "./comp/girdiler";
import GirdiEkle from "./comp/girdiekle";
import Header from "./comp/header";

class App extends Component {
    constructor(props) {
        super(props);

        //Data Binding
        this.gorevEkle = this.gorevEkle.bind(this);
        this.girdiTut = this.girdiTut.bind(this);
        this.girdiSil = this.girdiSil.bind(this);

        //Görev dizisi
        this.state = {
            girdiler: ['Kitap oku', 'Erken yat'],
            mevcutGirdi: ''
        }
    }

    //Yeni görev ekleme
    gorevEkle(e) {
        e.preventDefault(); //Sayfa refresh önle
        this.setState({girdiler: [...this.state.girdiler, this.state.mevcutGirdi]}); //Diziye yeni görev ekle
        document.getElementById('girdi').value = ''; //Text alanı temizle
    }

    //Text alanına girilen girdiyi yakalama
    girdiTut(e) {
        const textGirdi = e.target.value; //Text alanındaki değeri yakala
        this.setState({mevcutGirdi: textGirdi}); //Text alanındaki değeri mevcutGirdi değişkenine set et
    }

    //Listeden girdi silme
    girdiSil(i) {
        this.setState(eskiState => ({
            girdiler: eskiState.girdiler.filter(elem => elem !== i)
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    </div>
                    <div className="col-sm">
                        <Header/>
                        <Girdiler gorevEkle={this.gorevEkle}
                                  girdiTut={this.girdiTut}
                                  mevcutGirdi={this.state.mevcutGirdi}
                        />
                        <GirdiEkle girdiSil={this.girdiSil}
                                   girdiler={this.state.girdiler}/>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
