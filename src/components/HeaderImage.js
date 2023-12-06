function HeaderImage() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/pickleballCourt.jpg)`,
          height: "100vh",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white w-75">
            <h1 className="mb-3">Crazy Apes</h1>
            <h4 className="mb-3">
              Dive into the Wild World of Pickleball with Crazy Apes: Where Fun
              Meets Fierce Competition on the Court!
            </h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Tell Me More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderImage;
