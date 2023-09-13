import ServiceLogo from "./ServiceLogo";

const servicesData = [
  {
    name: "Corporate",
    description:
      "Comprehensive support for your business in Indonesia, including corporate matters, licenses, compliance, IP, HR, taxes, and more.",
    logo: "corporate",
  },
  {
    name: "Permits & Licensing",
    description:
      "Streamlining your business journey by offering expert assistance with various licenses and permits.",
    logo: "license",
  },
  {
    name: "Commercial",
    description:
      "Handling a spectrum of commercial disputes and M&A transactions, including complex state-owned enterprise takeovers.",
    logo: "commercial",
  },
  {
    name: "Civil & Criminal Litigation",
    description:
      "We prioritize efficient and cost-effective legal solutions. Our experienced team is prepared to handle court cases when necessary.",
    logo: "civil",
  },
  {
    name: "Restructuring, Turnaround, and Insolvency",
    description:
      "We're your trusted partner for efficient commercial debt collection. You only pay when we succeed, preserving your customer relationships.",
    logo: "turnaround",
  },
];

const Services = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./src/assets/img-service.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-7xl mx-auto py-2 flex flex-col justify-center items-center">
          <h2 className="mb-16 text-5xl font-bold">Our Services</h2>
          <div className="grid grid-cols-5 grid-rows-1 gap-5">
            {servicesData.map((service) => (
              <div className="card w-full glass" key={service.name}>
                <figure className="w-min p-5 rounded-full mx-auto bg-primary -mt-10">
                  <ServiceLogo logo={service.logo} />
                </figure>
                <div className="card-body -mt-6">
                  <h2 className="card-title justify-center min-h-[5rem]">
                    {service.name}
                  </h2>
                  <p className="text-sm text-gray-300 text-justify">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
