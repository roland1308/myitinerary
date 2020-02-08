import React from "react";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import { connect } from "react-redux";

class Foot extends React.Component {

  render() {
    const { goBack } = this.props;
    return (
      <div className="row">
        <div className="col-sm-4 back">
        {goBack && (<a href="/cities">
          <ArrowBackIosTwoToneIcon
            style={{ fontSize: 100 }}
          />
          </a>)}
        </div>
        <div className="col-sm-4 home">
          <a href="/">
            <HomeTwoToneIcon style={{ fontSize: 100 }} />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  goBack: state.app.goBack
});

export default connect(mapStateToProps)(Foot);