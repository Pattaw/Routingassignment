export default function Footer() {
  return (
    <>
      <footer className=" d-flex justify-content-center flex-column align-items-center text-light">
        <div className="container p-5 d-flex align-items-center justify-content-center">
          <div className="contact row w-100 d-flex  justify-content-between">
            <div className="location col-md-4 text-center">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
            <div className="social col-md-4 text-center">
              <h3>AROUND THE WEB</h3>
              <ul className="list-unstyled d-flex align-content-center justify-content-between w-50 m-auto">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="about col-md-4 text-center">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="copyright text-center p-3 w-100">
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
