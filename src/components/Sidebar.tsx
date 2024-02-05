import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export default function Sidebar() {
  const data = [
    {
      name: "User 1",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Yazid Akbar",
      img: "/images/icon-user.png",
    },
    {
      name: "Sutaro Putra",
      img: "/images/icon-user.png",
    },
    {
      name: "Khairul Rasyid",
      img: "/images/icon-user.png",
    },
    {
      name: "Mulki Hafiz",
      img: "/images/icon-user.png",
    },
    {
      name: "Djalu Galang",
      img: "/images/icon-user.png",
    },
    {
      name: "Siapa yah",
      img: "/images/icon-user.png",
    },
  ];
  return (
    <section className="px-5 py-8 fixed top-0 bottom-0 border-r-[0.5px] border-stone-700 w-60">
      <h3 className="font-semibold mb-10">IG Ceritanya</h3>

      <div className="h-[60%] overflow-y-scroll">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex gap-3 mb-3 hover:bg-white/10 rounded-md py-2 px-1"
          >
            <Image
              src={item.img}
              width={250}
              height={250}
              alt={item.name}
              className="w-[25px] h-[25px] border rounded-full object-cover"
            />
            <p className="font-light truncate">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-8 px-1">
        <FontAwesomeIcon icon={faSquarePlus} className="w-[25px] text-white" />
        <p className="font-light truncate">Create</p>
      </div>
      <div className="flex gap-3 mt-8 px-1">
        <Image
          src="/images/PhotoProfile.jpg"
          width={250}
          height={250}
          alt="PP User"
          className="w-[25px] h-[25px] border rounded-full object-cover"
        />
        <p className="font-semibold truncate">Profile</p>
      </div>
    </section>
  );
}
