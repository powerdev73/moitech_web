import React from "react";
const NavigationComp = () => {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{ fontWeight: "bolder" }}>
            측정시험페이지
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/projectTest1">
                  시험항목 #1
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="/projectTest2">
                  시험항목 #2
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="/projectTest3">
                  시험항목 #3
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="/projectTest4">
                  시험항목 #4
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link " href="/projectTest5">
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
