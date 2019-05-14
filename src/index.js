import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <>
      <nav className="shadow">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <h2 className="p-0 m-0 text-secondary">
            seek
            <span className="font-weight-bold text-info">Dev</span>
          </h2>
          <div className="d-flex align-items-center">
            <p className="p-0 m-0">Karolis</p>
            <span className="ml-1 pt-1 text-muted">
              <i class="fas fa-chevron-down" />
            </span>
            <span className="ml-3 text-info">
              <i class="fas fa-heart fa-lg" />
            </span>
          </div>
        </div>
      </nav>

      <section className="container mt-5 py-5">
        <div class="d-flex flex-column">
          <form className="row">
            <div class="col">
              <label for="select" className="font-weight-bold">
                Search
              </label>
              <div class="input-group input-group-seamless">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-search text-info" />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with checkbox"
                  placeholder="Search term"
                />
              </div>
            </div>
            <div class="col">
              <label for="select" className="font-weight-bold">
                Location
              </label>
              <div class="input-group input-group-seamless">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-map-marker text-info" />
                  </div>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with checkbox"
                  placeholder="Location"
                />
              </div>
            </div>

            <div className="col">
              <div class="form-group">
                <label for="select" className="font-weight-bold">
                  Job-type
                </label>
                <select class="form-control" id="select">
                  <option>full-time</option>
                  <option>part-time</option>
                  <option>flexible</option>
                  <option>remote</option>
                </select>
              </div>
            </div>
          </form>
          <button class="btn btn-outline-info btn-pill btn-lg mt-5 align-self-center">
            Go get it
          </button>
        </div>
      </section>

      <div className="container min-vh-100">
        <section className="pt-4">
          <ul>
            <li className="py-3">
              <h4 class="font-weight-bold">Awesome new job</h4>
              <p class="text-muted font-weight-bold">Sydney, Australia</p>
            </li>
            <li className="py-3">
              <h4 class="font-weight-bold">Awesome new job</h4>
              <p class="text-muted font-weight-bold">Sydney, Australia</p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
