function About() {
  return (
    <>
      <div className="about py-4 Color">
        <div className="parent d-flex align-items-center justify-content-center">
          <div className="container ">
            <div className="text-light mb-4 shared text-center">
              <h1 className="text-uppercase fw-bold">about component</h1>
              <div className="lines m-auto d-flex align-items-center justify-content-between">
                <div className="bg-light"></div>
                <i className="fa-solid fa-star"></i>
                <div className="bg-light"></div>
              </div>
            </div>
            <div className="row text-light py-0 px-0 g-0 m-auto  d-flex justify-content-evenly">
              <div className="col-md-6 ">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
              <div className="col-md-6">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
