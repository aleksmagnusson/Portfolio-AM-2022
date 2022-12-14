import { Link } from "react-router-dom"
// import { BrowserRouter as Router, Route } from "react-router-dom"
import frontVideo from '../assets/aleksEdit1.mp4'
import '../Pages/front.css'

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
                            <Link to="/mainpage">
                                <button>Dive in to my adventure</button>
                            </Link>
                            <Link to="/mainpage#contact">
                                <button>Contact me</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Front;