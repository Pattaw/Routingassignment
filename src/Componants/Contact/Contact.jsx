function Contact() {
  return (
    <>
      <div className="parent p-5">
        <div className="greyColor mb-4 shared text-center">
          <h1 className="text-uppercase fw-bold">contact section</h1>
          <div className="lines m-auto d-flex align-items-center justify-content-between">
            <div className="greyColor"></div>
            <i className="fa-solid fa-star"></i>
            <div className="greyColor"></div>
          </div>
        </div>
        <div className="container ">
          <form
            action="#"
            className="w-50 m-auto d-flex flex-column justify-content-center"
          >
            <label htmlFor="userName">userName</label>
            <input type="text" placeholder="userName" id="userName" />
            <label htmlFor="userAge">userAge</label>
            <input type="number" placeholder="userAge" id="userAge" />
            <label htmlFor="userEmail">userEmail</label>
            <input type="email" placeholder="userEmail" id="userEmail" />
            <label htmlFor="userPassword">userPassword</label>
            <input
              type="password"
              placeholder="userPassword"
              id="userPassword"
            />
            <button className="btn ">Send message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
