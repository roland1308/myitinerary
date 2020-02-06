import React from "react";
import FadeIn from "react-fade-in";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nuovaLista: props.data
    };
  }

  render() {
    return (
      <div className="cities">
        <FadeIn>
          {this.state.nuovaLista.map((dato, i) => {
            return (
              <div
                key={i}
                className="single"
                style={{ backgroundImage: "url(" + dato.url + ")" }}
              >
                <div>
                  <p className="nomeCitta">{dato.name}</p>
                </div>
              </div>
            );
          })}
      </FadeIn>
        </div>
    );
  }
}

export default Cities;
