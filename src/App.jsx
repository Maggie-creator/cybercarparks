import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import React Router
import ContactForm from "./pages/ContactForm";
import CommercialBuildings from "./pages/CommercialBuildings";
import ResidentialComplexes from "./pages/ResidentialComplexes";
import Schools from "./pages/Schools";
import Churches from "./pages/Churches";
import "./App.css";
import heroImage from "./assets/heroimage.jpg";
import CyberCarparksLogo from "./assets/CyberCarparksLogo.png";
import commercialBuilding from "./assets/commercialBuilding.jpg";
import residential from "./assets/residential.jpg";
import school from "./assets/school.jpg";
import church from "./assets/church.jpg";
import churchlogo from "./assets/churchlogo.png";
import channel4logo from "./assets/channel4logo.png";
import car from "./assets/car.jpg";
import parkingentry from "./assets/parkingentry.jpg";
import peoplecar1 from "./assets/peoplecar1.jpg";
import peoplecar2 from "./assets/peoplecar2.jpg";
import parkinglot from "./assets/parkinglot.jpg";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />} />

        {/* Standalone ContactForm Page */}
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/commercial-buildings" element={<CommercialBuildings />} />
        <Route
          path="/residential-complexes"
          element={<ResidentialComplexes />}
        />
        <Route path="/schools" element={<Schools />} />
        <Route path="/churches" element={<Churches />} />
      </Routes>
    </Router>
  );
}

// Main Layout Component
const MainLayout = () => {
  return (
    <>
      {/* NAV */}
      <Helmet>
        <title>Cyber Carparks - Home</title>
        <meta
          name="description"
          content="Cyber Carparks provides cutting-edge solutions for efficient parking management. Integrating advanced hardware and software, our systems streamline operations, enhance revenue, and ensure seamless experiences for operators and users.scription of my page"
        />
      </Helmet>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <img
              src={CyberCarparksLogo}
              alt="Cyber Carparks Logo"
              className="h-12 object-cover hover:scale-105 transition-transform duration-300 ease-in-out" // Increased logo height
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold text-indigo-900">
              <a href="#home">Home</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#about">About</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#our-services">Our Services</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#features">Features</a>
            </li>
            <li className="font-bold text-indigo-900">
              <a href="#use-cases">Use Cases</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="btn btn-primary text-white"
            style={{ marginRight: "20px" }}
            href="https://portal.spacegenie.com.au/register"
          >
            SIGN UP
          </a>
          <a
            className="btn btn-outline btn-primary"
            href="https://portal.spacegenie.com.au/signin"
          >
            SIGN IN
          </a>
        </div>
      </div>
      {/* HERO Section */}
      <div
        className="hero min-h-[1000px]"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-slate-50">
              Optimising Parking Spaces for a Better Workplace
            </h1>
            <p className="text-xl mb-5 text-slate-50">
              Utilise <b className="font-bold">Cyber Carparks</b> system to
              allocate spaces, enhance operational efficiency, and ensure a
              seamless parking experience for tenants, customers, and employees.
            </p>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-white"
            >
              REQUEST DEMO
            </a>
          </div>
        </div>
      </div>

      {/*TRUSTED BY*/}
      <h4 className="text-center text-orange-400 text-xl font-semibold mb-4 mt-20">
        TRUSTED BY
      </h4>

      <div className="flex items-center justify-center mt-10">
        <div className="card bg-violet-300 text-primary-content w-[500px]">
          <div className="card-body">
            <div className="flex justify-center items-center gap-6">
              {/* Adjusted styles to maintain aspect ratio */}
              <img
                src={churchlogo}
                alt="Archdiocese Logo"
                className="w-20 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <img
                src={channel4logo}
                alt="Logo 2"
                className="w-20 object-contai hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-16 mt-20">
        <div className="container mx-auto px-12">
          {/* Increased padding from sides */}
          <h4 className="text-center text-orange-400 text-xl font-semibold mb-4">
            ABOUT US
          </h4>
          <h1 className="text-center text-indigo-800 font-bold text-4xl mb-10">
            Empowering Cyber Parking Solutions
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            {/* IMAGE SECTION */}
            <div className="w-full lg:w-1/3 flex justify-center items-stretch">
              <img
                src={car}
                alt="Car on a parking lot"
                className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            {/* TEXT SECTION */}
            <div className="w-full lg:w-2/3 pr-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <b>
                  <b className="font-bold text-indigo-800">Cyber Carparks</b>{" "}
                  systems are cutting-edge technological solutions designed to
                  efficiently manage parking areas and elevate the overall
                  parking experience. By integrating advanced hardware and
                  software components, these systems streamline parking
                  operations, enhance revenue generation, and ensure a seamless
                  experience for both parking lot operators and users.
                </b>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card text-primary-content">
                  <div className="card-body flex flex-col justify-start items-start text-left">
                    <i className="fas fa-solid fa-car text-4xl text-orange-400 mb-4 self-center"></i>
                    <h2 className="card-title font-bold text-violet-500">
                      Maximize the use of your parking space
                    </h2>
                    <p className="text-gray-700">
                      Efficiently utilise every inch of your parking area,
                      ensuring no space goes to waste.
                    </p>
                  </div>
                </div>

                <div className="card text-primary-content">
                  <div className="card-body flex flex-col justify-start items-start text-left">
                    <i className="fas fa-cogs text-4xl text-orange-400 mb-4 self-center"></i>
                    <h2 className="card-title font-bold text-violet-500">
                      Customise for any car park
                    </h2>
                    <p className="text-gray-700">
                      Simplify parking tasks and save time with our
                      user-friendly system.
                    </p>
                  </div>
                </div>

                <div className="card text-primary-content">
                  <div className="card-body flex flex-col justify-start items-start text-left">
                    <i className="fas fa-chart-line text-4xl text-orange-400 mb-4 self-center"></i>
                    <h2 className="card-title font-bold text-violet-500">
                      Minimize parking management
                    </h2>
                    <p className="text-gray-700">
                      Streamline administrative tasks and reduce the time spent
                      managing parking operations.
                    </p>
                  </div>
                </div>

                <div className="card text-primary-content">
                  <div className="card-body flex flex-col justify-start items-start text-left">
                    <i className="fas fa-wallet text-4xl text-orange-400 mb-4 self-center"></i>
                    <h2 className="card-title font-bold text-violet-500">
                      Unlock a new revenue channel
                    </h2>
                    <p className="text-gray-700">
                      Give tenants the flexibility to buy casual parking spaces
                      or sell available spaces to the public.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*FEATURES*/}
      <section id="features" className="py-16 mt-20">
        <div className="container mx-auto px-12">
          {" "}
          {/* Increased padding from sides */}
          <h4 className="text-center text-orange-400 text-xl font-semibold mb-4">
            FEATURES
          </h4>
          <h1 className="text-center text-indigo-800 font-bold text-4xl mb-10">
            Park Smart, Not Hard
          </h1>
          {/* Feature Cards */}
          <div className="flex flex-wrap items-center lg:flex-nowrap gap-12 mb-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={car}
                alt="Car on a parking lot"
                className="rounded-lg shadow-lg w-full lg:w-3/4 hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-indigo-600 font-bold text-3xl mb-4">
                Smooth Hardware Integration
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The <b className="font-bold text-indigo-800">Cyber Carparks</b>{" "}
                system seamlessly integrates with your existing hardware,
                delivering effortless operation and streamlined control over
                your parking spaces.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:flex-nowrap gap-12 mb-10">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-indigo-600 font-bold text-3xl mb-4">
                Visitor Parking Optimisation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The <b className="font-bold text-indigo-800">Cyber Carparks</b>{" "}
                system empowers you to maximize visitor space efficiency,
                effortlessly managing allocation and controlling parking
                durations with precision.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <img
                src={parkingentry}
                alt="Parking entry"
                className="rounded-lg shadow-lg w-full lg:w-3/4 hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:flex-nowrap gap-12 mb-10">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={peoplecar2}
                alt="People and the car"
                className="rounded-lg shadow-lg w-full lg:w-3/4 hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-indigo-600 font-bold text-3xl mb-4">
                Safe Parking Space Share
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With the{" "}
                <b className="font-bold text-indigo-800">Cyber Carparks</b>{" "}
                system, building occupants can seamlessly share spaces, enabling
                optimal utilization of every parking spot.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:flex-nowrap gap-12 mb-10">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-indigo-600 font-bold text-3xl mb-4">
                Parking Space Resell
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Not enough car park occupants? No problem! The{" "}
                <b className="font-bold text-indigo-800">Cyber Carparks</b>{" "}
                system lets you effortlessly resell unused spaces to outside
                visitors, maximizing usage without any hassle.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <img
                src={peoplecar1}
                alt="People and the car"
                className="rounded-lg shadow-lg w-full lg:w-3/4 hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center lg:flex-nowrap gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={parkinglot}
                alt="Parking lot"
                className="rounded-lg shadow-lg w-full lg:w-3/4 hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-indigo-600 font-bold text-3xl mb-4">
                Efficient Parking Space Utilisation
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With the{" "}
                <b className="font-bold text-indigo-800">Cyber Carparks</b>{" "}
                system, you can ensure every parking space is used to its
                fullest potential. Take control of your car park’s utilization,
                optimizing space for all occupants to maximize convenience and
                efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*OUR SERVICES*/}
      <section id="our-services" className="mt-20">
        <h4 className="text-center text-orange-400 text-xl font-semibold mb-4">
          OUR SERVICES
        </h4>
        <h1 className="text-center text-indigo-800 font-bold m-12 text-4xl">
          Enhance Your Parking Operations with{" "}
          <b className="font-bold text-indigo-800">Cyber Carparks</b> system
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-20">
          <div className="card bg-violet-300 w-80 shadow-xl">
            <div className="card-body flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16  bg-white rounded-full mb-4 shadow">
                <i className="fas fa-user text-4xl text-orange-400"></i>
              </div>
              <h2 className="card-title text-center font-bold text-violet-500">
                Tenants Portal
              </h2>
              <ul className="list-disc list-outside pl-5 text-start font-semibold">
                <li>
                  Tenants to manage their allocated spaces and their visitors
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-violet-300 w-80 shadow-xl">
            <div className="card-body flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow">
                <i className="fas fa-list-check text-4xl text-orange-400"></i>
              </div>
              <h2 className="card-title text-center font-bold text-violet-500">
                Management Portal
              </h2>
              <ul className="list-disc list-outside pl-5 text-start font-semibold">
                <li>Manage your boomgate opening and closing times</li>
                <li>Manage your whitelist</li>
                <li>Access Insightful Reports</li>
              </ul>
            </div>
          </div>

          <div className="card bg-violet-300 w-80 shadow-xl">
            <div className="card-body flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow">
                <i className="fas fa-credit-card text-4xl text-orange-400"></i>
              </div>
              <h2 className="card-title text-center font-bold text-violet-500">
                Payment Solutions
              </h2>
              <ul className="list-disc list-outside pl-5 text-start font-semibold">
                <li>Stripe Online Payment integrated</li>
                <li>Unattended Payment Terminals</li>
              </ul>
            </div>
          </div>

          <div className="card bg-violet-300 w-80 shadow-xl">
            <div className="card-body flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow">
                <i className="fas fa-key text-4xl text-orange-400"></i>
              </div>
              <h2 className="card-title text-center font-bold text-violet-500">
                Access System Options
              </h2>
              <ul className="list-disc list-outside pl-5 text-start font-semibold">
                <li>
                  Tenants to manage their allocated spaces and their visitors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*USE CASES*/}
      <section id="use-cases" className="mt-20">
        <h4 className="text-center text-orange-400 text-xl font-semibold mb-4">
          USE CASES
        </h4>
        <h1 className="text-center text-indigo-800 font-bold m-12 text-4xl">
          Discover Parking System Made For You
        </h1>
        <div className="flex flex-wrap justify-center mt-10 gap-8">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={commercialBuilding}
                alt="Commercial Building"
                className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-indigo-700 font-bold mb-5">
                Commercial Buildings
              </h2>
              <div className="card-actions justify-center">
                <a
                  href="/commercial-buildings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={residential}
                alt="Residential Building"
                className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-indigo-700 font-bold mb-5">
                Residential Complexes
              </h2>
              <div className="card-actions justify-center">
                <a
                  href="/residential-complexes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={school}
                alt="School"
                className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-indigo-700 font-bold mb-5">
                Schools
              </h2>
              <div className="card-actions justify-center">
                <a
                  href="/schools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={church}
                alt="Church"
                className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center text-indigo-700 font-bold mb-5">
                Churches
              </h2>
              <div className="card-actions justify-center">
                <a
                  href="/churches"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-white"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*JUMBO TEXT*/}

      <div className="flex items-center justify-center mt-20 mb-10">
        <div className="card bg-orange-400 text-primary-content w-90 p-4">
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title text-3xl font-bold text-center text-white">
              Maximise your space allocation.
            </h2>

            <p className="text-lg font-bold text-center text-white mt-5">
              Effortlessly streamline bookings and space allocations, and
              empower your parking operations with our comprehensive system.
            </p>

            <div className="card-actions justify-center mt-5">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer bg-neutral text-neutral-content pt-5 pb-5 pl-10">
        <aside>
          <img
            src={CyberCarparksLogo}
            alt="Cyber Carparks Logo"
            className="h-16 hover:scale-105 transition-transform duration-300 ease-in-out" // Increased logo height
          />
          <p>
            Cyber Carparks
            <br />
            All rights reserved 2025
          </p>
        </aside>
        <div className="navbar-center hidden lg:flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#our-services">Our Services</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#use-cases">Use Cases</a>
            </li>
          </ul>
        </div>
        <nav>
          <h6 className="footer-title">CONNECT WITH US</h6>
          <div className="grid grid-flow-col gap-5 justify-end">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default App;
