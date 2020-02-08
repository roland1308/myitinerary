import React from "react";

class AddItinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Nome Itinerario",
      city: "City",
      city_id: this.props.match.params.idcitta,
      country: "Paese",
      username: "Nome Utente",
      photo: "Foto Profilo",
      rating: 2.2,
      duration: 24,
      price: "$$",
      hashtags: "##"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  additinerary = () => {
    console.log(JSON.stringify(this.state));

    // (async () => {
    //   const rawResponse = await fetch("/itineraries/add", {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(this.state)
    //   });
    //   const content = await rawResponse.json();

    //   console.log(content);
    // })();

    fetch("/itineraries/add", {
      method: "post",
      headers: {
        Accept: "application/jso",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("Created:", data);
      });
      
  };

  render() {
    return (
      <div>
        <form>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <br></br>
          {this.state.city_id}
          <br></br>
          <input
            name="country"
            type="text"
            value={this.state.country}
            onChange={this.handleInputChange}
          />
          <input
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <input
            name="photo"
            type="text"
            value={this.state.photo}
            onChange={this.handleInputChange}
          />
          <input
            name="rating"
            type="number"
            value={this.state.rating}
            onChange={this.handleInputChange}
          />
          <input
            name="duration"
            type="number"
            value={this.state.duration}
            onChange={this.handleInputChange}
          />
          <input
            name="price"
            type="text"
            value={this.state.price}
            onChange={this.handleInputChange}
          />
          <input
            name="hashtags"
            type="text"
            value={this.state.hashtags}
            onChange={this.handleInputChange}
          />
        </form>
        <button onClick={this.additinerary}>SUBMIT</button>
      </div>
    );
  }
}

export default AddItinerary;

// import React from "react";

// class AddItinerary extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {

//         };
//     }

//     render(){
//     return (
//         <div>
//             <input type="text" name="name" placeholder="NOME ITINERARIO" />

//             <button onClick={this.additinerary()}>SUBMIT</button>
//         </div>
//     )
//   }
// }

// // name: req.body.name,
// //         city: req.body.city,
// //         city_id: req.body.city_id,
// //         country: req.body.country,
// //         username: req.body.username,
// //         photo: req.body.username,
// //         rating: req.body.rating,
// //         duration: req.body.duration,
// //         price: req.body.price,
// //         hashtags: req.body.hashtags
