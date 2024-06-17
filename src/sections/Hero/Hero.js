import "./Hero.css";
import { PrimaryButton } from "../../components";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h3 className="hero-subtitle">Wellcome To Cyborg</h3>
        <h4 className="hero-title"><em>Browse</em> Our Popular Games Here</h4>
        <PrimaryButton>
            Browse Now
        </PrimaryButton>
        {/* <button type="button" className="main-button">
          <a href="browse.html">Browse Now</a>
        </button>  */}
      </div>
    </div>
  )
}

export default Hero;
