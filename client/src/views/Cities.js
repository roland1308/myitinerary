import React from "react";
import Foot from "../components/Foot";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // nuovaLista: props.data
      nuovaLista: [
        {
          _id: "5e397d918eb00d1260b2b350",
          name: "Milan",
          country: "Italy",
          url:
            "https://pixabay.com/get/55e5d7404d50ac14f6da8c7dda79367b1537dce156516c4870277bdc9548c05abb_1280.jpg",
          __v: 0
        },
        {
          _id: "5e397ea5ca823f2cecc44874",
          name: "Istanbul",
          country: "Turkey",
          url:
            "https://pixabay.com/get/52e0d1404a51ab14f6da8c7dda79367b1537dce156516c4870277bdc954bc55bbd_640.jpg",
          __v: 0
        },
        {
          _id: "5e397f0eca823f2cecc44875",
          name: "Barcelona",
          country: "Spain",
          url:
            "https://pixabay.com/get/57e5dd454857a814f6da8c7dda79367b1537dce156516c4870277bdc954bc751b1_640.jpg",
          __v: 0
        },
        {
          _id: "5e397f4aca823f2cecc44876",
          name: "Berlin",
          country: "Germany",
          url:
            "https://pixabay.com/get/52e4d34b4f55ac14f6da8c7dda79367b1537dce156516c4870277bdc954bc158bb_640.jpg",
          __v: 0
        },
        {
          _id: "5e397f70ca823f2cecc44877",
          name: "Rome",
          country: "Italy",
          url:
            "https://pixabay.com/get/52e7d641495bac14f6da8c7dda79367b1537dce156516c4870277bdc954bc15dbd_640.jpg",
          __v: 0
        },
        {
          _id: "5e397f96ca823f2cecc44878",
          name: "Florence",
          country: "Italy",
          url:
            "https://pixabay.com/get/50e9d444425bb108f5d084609629327e1d3ddae0534c704c7d2f73d69149cc5c_640.jpg",
          __v: 0
        },
        {
          _id: "5e397fb8ca823f2cecc44879",
          name: "Naples",
          country: "Italy",
          url:
            "https://pixabay.com/get/57e8d1414f52a514f6da8c7dda79367b1537dce156516c4870277bdc954bc05bb8_640.jpg",
          __v: 0
        },
        {
          _id: "5e397ff4ca823f2cecc4487a",
          name: "Madrid",
          country: "Spain",
          url:
            "https://pixabay.com/get/54e7d4404353aa14f6da8c7dda79367b1537dce156516c4870277bdc954bc05fbd_640.jpg",
          __v: 0
        }
      ],
      stile: { backgroundColor: "red" }
    };
  }

  render() {
    return (
      <div className="cities">
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
      </div>
    );
  }
}

export default Cities;
