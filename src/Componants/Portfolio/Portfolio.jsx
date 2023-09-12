import img1 from "../../Assests/Images/poert1.png";
import img2 from "../../Assests/Images/port2.png";
import img3 from "../../Assests/Images/port3.png";

function Portfolio() {
  return (
    <>
      <div className="parent py-5">
        <div className="container">
          <div className="greyColor mb-4 shared text-center">
            <h1 className="text-uppercase fw-bold">portfolio section</h1>
            <div className="lines m-auto d-flex align-items-center justify-content-between">
              <div className="greyColor"></div>
              <i className="fa-solid fa-star"></i>
              <div className="greyColor"></div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-md-4 item position-relative ">
              <img className="w-100" src={img1} alt="portfolio image" />
              <div className="overflow left-0 position-absolute d-flex align-items-center justify-content-center  top-0 h-100 ">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative">
              <img className="w-100" src={img1} alt="portfolio image" />
              <div className="overflow position-absolute d-flex align-items-center justify-content-center left-0 top-0 h-100 ">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative">
              <img className="w-100" src={img3} alt="portfolio image" />
              <div className="overflow position-absolute d-flex align-items-center justify-content-center left-0  top-0 h-100 ">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative ">
              <img className="w-100" src={img1} alt="portfolio image" />
              <div className="overflow left-0 position-absolute d-flex align-items-center justify-content-center  top-0 h-100 ">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative">
              <img className="w-100" src={img1} alt="portfolio image" />
              <div className="overflow position-absolute d-flex align-items-center justify-content-center left-0 top-0 h-100 ">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="col-md-4 item position-relative">
              <img className="w-100" src={img3} alt="portfolio image" />
              <div className="overflow position-absolute d-flex align-items-center justify-content-center left-0  top-0 h-100 ">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
