import bapLogo from "../assets/clients-logo/bap.png";
import logitechLogo from "../assets/clients-logo/logitech.png";
import schneiderLogo from "../assets/clients-logo/schneider.png";

const Clients = () => {
  return (
    <div className="py-28 px-2 max-w-7xl mx-auto">
      <div className="mb-10 flex justify-center items-center">
        <h2 className="px-4 py-2 text-4xl font-bold text-center after:content-[''] after:block after:py-2 after:border-b after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition">
          Our Clients
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-5 grid-rows-1 items-center justify-center">
        <img src={bapLogo} alt="" className="w-1/2 h-auto mx-auto" />
        <img src={logitechLogo} alt="" className="w-1/2 h-auto mx-auto" />
        <img src={schneiderLogo} alt="" className="w-1/2 h-auto mx-auto" />
        <div className="flex flex-col justify-center items-center">
          <a href="" className="btn btn-circle btn-outline btn-primary mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <span className="text-xs text-primary">See All</span>
        </div>
      </div>
    </div>
  );
};

export default Clients;
