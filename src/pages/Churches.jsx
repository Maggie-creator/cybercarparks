import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import React Router
import Church from "./img/church2.jpg";

const Churches = () => {
  return (
    <div className="container mx-auto my-8 px-4 lg:px-10">
      <Helmet>
        <title>Cyber Carparks - Churches</title>
        <meta
          name="description"
          content="Cyber Carparks provides cutting-edge solutions for efficient parking management for churches."
        />
      </Helmet>
      {/* Navigation Header */}
      <h3 className="text-center text-2xl text-orange-600 pb-10">
        <Link
          to="/"
          className="flex items-center justify-center text-orange-600 hover:underline"
        >
          <i className="fas fa-arrow-left text-orange-600 mr-2"></i> Home
        </Link>
      </h3>

      {/* Page Title */}
      <h1 className="text-center text-indigo-800 font-bold text-4xl mb-10">
        Cyber Carparks for Churches: Simplifying Parking and Creating Revenue
      </h1>
      <div className="card lg:card-side">
        <figure className="lg:w-1/2 w-full">
          <img
            src={Church}
            alt="Church"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </figure>
        <div className="card-body w-1/2 p-8">
          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Many churches face parking challenges, especially when hosting
            multiple services, special programmes, or events throughout the
            week. Whether it is accommodating parishioners during regular Masses
            or providing parking for church employees and volunteers, efficient
            management of limited space can be a daunting task.{" "}
            <b className="font-bold text-indigo-600"> Cyber Carparks</b> offers
            a tailored solution for churches, ensuring smooth parking operations
            while maximising convenience and flexibility.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Customised Management for Every Church
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            CWe understand that each church’s facilities and requirements are
            unique. That is why we work closely with you to customise a system
            that fits your hardware setup and operational needs—whether you have
            existing parking equipment or no hardware infrastructure at all. Our
            intuitive platform allows you to allocate parking spaces to
            different groups (e.g., church staff, volunteers, or visitors) and
            easily adjust these allocations as programmes and events change
            throughout the week.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Efficient Allocation and Booking
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            With <b className="font-bold text-indigo-600"> Cyber Carparks</b>,
            you can set up a booking system so that spaces are used only when
            needed. This ensures a hassle-free experience for worshippers and
            staff, eliminating confusion over parking spots and reducing the
            risk of unauthorised usage. By assigning spots based on priority or
            booking requests, your church can run more smoothly, especially on
            busy days or during special occasions.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Generate Extra Revenue with Cyber Carparks
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            When your church car park is not in use, why not make the most of
            this valuable resource? Our marketplace,{" "}
            <b className="font-bold text-indigo-600"> Cyber Carparks</b>,
            enables you to list and sell your parking spaces to the public on a
            casual or daily basis—creating an additional revenue stream for your
            church. You retain complete control, determining when and how your
            spaces are made available for public booking.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Seamless Support and Ongoing Assistance
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you are new to parking management technology or looking to
            upgrade an existing system, our team is here to help. We offer
            comprehensive support—from planning and installation to ongoing
            maintenance and troubleshooting—so you can focus on your church’s
            mission while we take care of the parking.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Embrace the future of parking with{" "}
            <b className="font-bold text-indigo-600"> Cyber Carparks</b>. Create
            a welcoming environment for your congregation and staff while
            exploring new revenue opportunities through{" "}
            <b className="font-bold text-indigo-600"> Cyber Carparks</b>. With
            our customised approach and commitment to service, you can be
            assured that your church’s parking management is in good hands.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Let Us Help You Transform Your Church’s Parking
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Embrace the future of parking with{" "}
            <b className="font-bold text-indigo-600">Cyber Carparks</b>. Create
            a welcoming environment for your congregation and staff while
            exploring new revenue opportunities. Contact us today for a free
            consultation and discover how our tailored solutions can make
            parking management stress-free and profitable for your church.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACT US FOR A FREE CONSULTATION
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Churches;
