import { Link } from "react-router-dom";
import frontVideo from "../assets/aleksEdit1.mp4";
import "../components/front.css";

function Front() {
  return (
    <main>
      <div className="frontpage">
        <div className="frontOverlay">
          <video src={frontVideo} autoPlay loop muted />
          <div className="frontContent">
            <h2>Aleks Magnusson</h2>
            <br />
            <h4>Photographer | content creator | frontend dev student</h4>
            <br />
            <div>
              <Link to="/showcase" as="button">showcase</Link>
              <button as={Link} to="/showcase">
                {" "}
                Dive into my adventure.
              </button>
              <button as={Link} to="/contact">
                {" "}
                Contact me.
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Front;
