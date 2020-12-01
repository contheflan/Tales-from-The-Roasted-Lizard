import React from "react";
import { Link } from "react-router-dom";
import rainytown from "../../assets/images/rainytown.gif";
function Intro() {
  return (
    <div className="intro">
      <div className="intro-image-container">
        <img className="intro-img" src={rainytown} alt="whew its cold out here!"></img>
      </div>
      <div className="intro-container">
        <p className="intro-text">
        The wind howls and the drains swell with the heavy rainfall. You pull your collar up over your face as the cold bites your nose. Pushing your way through an especially crowded market district, your eyes level on your destination. A steady stream of patrons flow in and out of the large wooden doors under a bright green and yellow sign. "THE ROASTED LIZARD INN: Drink and Quests inquire within" You tighten your grip on your sword and mutter a protection ward as you push through the rainsoaked flow of patrons into the smoke filled tavern.
        </p>
      </div>
      <Link className="intro-button" to={"/Login"}>
        What are ya after?
      </Link>
    </div>
  );
}

export default Intro;
