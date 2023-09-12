import img4 from "../../Assests/Images/avataaars.svg";
function Home() {
  return (
    <>
      <div className="parent py-4 Color">
        <div className="home">
          <div className="img m-auto">
            <img src={img4} alt="home image" />
          </div>
          <div className="greyColor mb-4 shared text-center mt-3">
            <h1 className="text-uppercase fw-bold text-light">
              start frameowrk
            </h1>
            <div className="text-light  lines m-auto d-flex align-items-center justify-content-between">
              <div className="bg-light"></div>
              <i className="fa-solid fa-star"></i>
              <div className="bg-light"></div>
            </div>
          </div>
          <div className="text-light skills text-center">
            Graphic Artist - Web Designer - Illustrator
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
