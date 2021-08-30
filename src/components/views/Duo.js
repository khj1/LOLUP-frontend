import React from "react";
import { connect } from "react-redux";
import Categories from '../buttons/Categories'
import DuoList from "./DuoList";

function Home(state) {
  return (
    <div>
      <Categories position={state.value}/>
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
