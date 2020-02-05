import React from "react";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nuovaLista: props.data
    };
  }
  handleSearch = e => {
    let campoCerca = e.target.value.toLowerCase();
    if (campoCerca !== "") {
      this.setState({
        nuovaLista: this.props.data.filter(dato => {
          return dato.name.toLowerCase().includes(campoCerca);
        })
      });
    } else {
      this.setState({
        nuovaLista: this.props.data
      });
    }
    console.log(this.state.nuovaLista, "ok?", campoCerca);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearch}></input>
        <ol>
          {this.state.nuovaLista.map((dato, i) => {
            return (
              <li key={i}>
                {dato.name}, {dato.country}, {dato.img}
              </li>
            );
          })}
        </ol>
        <form>
            <input type="text" ></input>
        </form>
      </div>
    );
  }
}

export default Cities;
