import style from "../styles/Home.module.css";

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.container}>
        <header>-header-</header>
        <section>-section-</section>
        <footer>-footer-</footer>
      </div>
    );
  }
}

export default Home;
