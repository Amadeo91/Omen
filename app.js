const ButtonRandomOmen = props => <button onClick={props.click}>Losuj Wróżbę</button>
const ButtonAddOmens = props => <button onClick={props.click}>Dodaj Wróżbę</button>
const Input = props => <input onChange={props.change} value={props.value} />
const Result = props => <h2>{props.result}</h2>
class App extends React.Component {

    state = {
        omen: ['Wróżba 1', 'Wróżba 2', 'Wróżba 3'],
        newOmen: "",
        value: ""
    }

    handleShowOmen = () => {
        const i = Math.floor(Math.random() * this.state.omen.length)
        const randomOmen = this.state.omen[i]
        this.setState({
            newOmen: randomOmen
        })
    }
    handleAddOmen = () => {
        const omensArr = this.state.omen
        const value = this.state.value
        omensArr.push(value)
        alert(`Dodano wróżbę ! Liczba różb: ${omensArr.length}. Aktualne wróżby : ${omensArr}`)
        this.setState({
            value: ""
        })
    }
    handleInput = e => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="container" >
                <h1>Wylosuj swoją wróżbę</h1>
                <div className="input">
                    <Input change={this.handleInput} value={this.state.value} />
                    <ButtonAddOmens click={this.handleAddOmen} />
                </div>
                <ButtonRandomOmen click={this.handleShowOmen} />
                <Result result={this.state.newOmen} />


            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))