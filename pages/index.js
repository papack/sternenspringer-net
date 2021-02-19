import style from "../styles/Home.module.css";

import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className={style.section}>
        <div className={style.textContainer}>
          <h1>Sternenspringer</h1>
          <h2>Die UniversalSchmiede</h2>
          <p>
            In der Fabula-Galaxie, wo moderne Technik selbstverständlich ist und
            Magie zum Alltag gehört, begibt sich der einfallsreiche Geheimagent
            John Rasbury auf eine abenteuerliche Reise, um eine mysteriöse
            Technologie zu bergen. Begleitet von seinem alten Kampfgefährten,
            dem Werwolf Arnulf, durchquert er auf seiner Reise zum
            abgeschiedenen Perlmond das Atlantische Imperium und dringt in die
            rechtsfreien Weiten des Niemandslands ein. Auf ihrem abenteuerlichen
            Weg bewältigen die Freunde gefährliche Dimensionssprünge und treffen
            auf hinterlistige Füchse, Cyborg-Piraten und gottgleiche Wesen.
          </p>
        </div>
        <div className={style.bookCoverContainer}>
          <img src="/bookCover.png"></img>
        </div>
      </section>
    );
  }
}

export default Home;
