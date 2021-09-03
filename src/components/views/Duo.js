import React from "react";
import { connect } from "react-redux";
import Categories from '../buttons/Categories'
import DuoList from "./DuoList";

function Home(props) {
  return (
    <div>
      <Categories position={props.value}/>
      <DuoList />
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        value: state.position.value
    }
}

export default connect(mapStateToProps)(Home);
