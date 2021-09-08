import React from "react";
const NavigationComp = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontWeight: "bolder" }}>
            측정시험페이지
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/projectTest1">
                  시험항목 #1
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/projectTest2">
                  시험항목 #2
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/projectTest3">
                  시험항목 #3
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/projectTest4">
                  시험항목 #4
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " href="/projectTest5">
                  시험항목 #5
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationComp;
