import React, { Component } from "react";
import style from "../styles/impressum.module.css";

class Imprint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className={style.section}>
        <h1>Kontakt</h1>
        <h2>
          Kritik, Fragen oder Anregungen? Dann schreib mir unter
          johannes.seitz@sternenspringer.net
        </h2>
      </section>
    );
  }
}

export default Imprint;
