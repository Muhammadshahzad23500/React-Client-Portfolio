import React from "react";
import contactImg from "../image/contact.jpg";
import { Link } from "react-router-dom";
import HomeIcons from "./HomeIcons";

const ContactImage = () => {
  return (
    <div className=" w-full lg:w-[35%] text-lg flex flex-col gap-4 p-8 rounded-xl group dark:shadow-shadowOne shadow-shadowTwo overflow-hidden">
      <img
        className=" w-full rounded-xl  mb-6 group-hover:scale-110 duration-300"
        src={contactImg}
        alt="Contact"
      />
      <h3 className=" text-4xl font-bold text-gray-500 dark:text-white capitalize">
        Azaz ali
      </h3>
      <p>Full stack developer</p>
      <p>
        'No Stack to Full stack'. Full stack development with technlogoies and
        languages are React js for frontend and Firebase for backend.
      </p>
      <div className=" flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <p className=" capitalize text-xl">phone :</p>
        <Link
          className=" text-gray-500 dark:text-lightText"
          to={"tel:+923163516009"}
        >
          +923163516009
        </Link>
      </div>
      <div className=" flex flex-col sm:flex-row sm:items-center  sm:gap-2">
        <p className=" capitalize text-xl">Email:</p>
        <Link
          className=" text-gray-500 dark:text-lightText"
          to={"mailto:azazalideveloper@gmail.com"}
        >
          azazalideveloper@gmail.com
        </Link>
      </div>
      <HomeIcons />
    </div>
  );
};

export default ContactImage;
