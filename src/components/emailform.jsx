import './herosection.css'

function Emailform() {
  return (
    <div className="d-flex justify-content-center mt-4 text-center mx-4">
      <form className="email-form d-flex w-100 gap-2">
        
        <input
          type="email"
          className="form-control rounded-2 border"
          placeholder="Email address"
          required
        />

        <button
          type="submit"
          className="btn d-flex align-items-center justify-content-center rounded-2 px-4 text-nowrap red text-white"
        >
          Get Started
          <span className="ms-2">›</span>
        </button>

      </form>
    </div>
  );
}

export default Emailform;