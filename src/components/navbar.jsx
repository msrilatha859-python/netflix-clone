function Navbar() {
  return (
    <div className="d-flex justify-content-between nav mx-5">
      <img className="logo"
        src="/movie-logo-removebg-preview.png"
        alt="movie"
       
      />

      <div className="d-flex align-items-center gap-3 fw-bold">
        <div className="border px-1 py-1 rounded text-white">
          <i className="bi bi-translate me-2"></i>
          <select className="bg-transparent text-white border-0">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        <button className="btn red text-white">Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;