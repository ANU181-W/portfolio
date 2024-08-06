import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import ExpData from "./Data/Experience";
import { ExitExpDetails } from "./components/Experience";
// import Projects from "./components/projects";

function App() {
  return (
    <>
      <div className="ExpDetails>">
        {ExpData.map((e) => {
          let newIdImg = "expdetails--img expdetails--img" + e.id;
          let newIdDetails = "expdetails--details expdetails--details" + e.id;
          return (
            <div className="expdetails">
              <div className={newIdImg} style={{ background: e.color }}>
                <div className="exp--details--img">
                  <img
                    className="exp--details--img"
                    alt={e.title}
                    src={e.img}
                  ></img>
                  <div className="exp--img--details">{e.title}</div>
                </div>
              </div>
              <div className={newIdDetails}>
                <div
                  className="haburger--btn"
                  onClick={(r) => {
                    ExitExpDetails(e.id);
                  }}
                >
                  <div className="hamburger--dis dis4 exp-exit"></div>
                  <div className="hamburger--dis dis5 exp-exit"></div>
                </div>
                <div className="exp--details--main">
                  <div className="exp--main--role">
                    <b>{e.role}</b>
                  </div>
                  <div className="exp--main--date">{e.date}</div>
                  <div
                    className="exp--main--dis"
                    dangerouslySetInnerHTML={{ __html: e.details }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
