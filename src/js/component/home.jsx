import React from "react";

//create your first component
const Home = () => {
  const cardComponent =
    <div className="card">
      <img src="https://picsum.photos/500/325" className="card-img-top" alt="..."/>
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title d-flex justify-content-center">Card title</h5>
        <p className="card-text d-flex justify-content-center ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary mx-5">Go somewhere</a>
      </div>
    </div>;

  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* body */}
      <div className="fluid-container">
        <div className="p-5 m-5 grayBackground">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">A Warm Welcome</h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
              officiis voluptate fuga quibusdam dignissimos, cum, earum, tempore
              obcaecati cumque doloribus exercitationem pariatur quia eum? Atque
              aperiam quidem aut assumenda quis.
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Call to action!
            </button>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="container-fluid p-5">
        <div className="col-12 d-flex flex-wrap">
          <div className="col-12 col-md-6 col-lg-3 p-2">
            {cardComponent}
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-2">
            {cardComponent}
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-2">
            {cardComponent} 
          </div>
          <div className="col-12 col-md-6 col-lg-3 p-2">
            {cardComponent}
          </div>
        </div>
      </div>
        
      {/* footer */}
      <footer className="footer">
        <p>© 2024 Mi Sitio Web</p>
      </footer>
    </div>
  );
};

export default Home;
