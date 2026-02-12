import './herosection.css'
function Emailform() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <form className="d-flex w-100 gap-2" style={{ maxWidth: "560px" }}>
        <input
          type="email"
          className="form-control rounded-2 border-1"
          placeholder="Email address"
          style={{ height: "60px" }}
          required
        />

        <button
          type="submit"
          className="btn d-flex align-items-center rounded-2 px-4 flex-shrink-0 text-nowrap red text-white"
          style={{ height: "60px", fontSize: "25px" }}
        >
          Get Started
          <span className="ms-2 fs-3">›</span>
        </button>
      </form>
    </div>
  );
}

export default Emailform;