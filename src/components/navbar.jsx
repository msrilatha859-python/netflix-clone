function Navbar() {
  return (
    <div className="container-fluid px-3 px-md-5">
      <div className="d-flex justify-content-between align-items-center nav py-3">
        
        <img
          className="logo img-fluid"
          src="/movie-logo-removebg-preview.png"
          alt="movie"
        />

        <div className="d-flex align-items-center gap-2 gap-md-3 fw-bold">
          
          <div className="border px-2 py-1 rounded d-flex align-items-center">
            <i className="bi bi-translate me-1"></i>
            <select className="bg-transparent text-success border-0 small-select">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <button className="btn red text-white px-3 py-1">
            Sign In
          </button>

        </div>
      </div>
    </div>
  );
}

export default Navbar;