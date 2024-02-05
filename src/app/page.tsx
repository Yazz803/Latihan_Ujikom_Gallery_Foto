import Image from "next/image";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faTableCells } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const dataPosts = [
    {
      id: 1,
      image: "/images/project1.png",
      caption: "Caption 1",
    },
    {
      id: 2,
      image: "/images/project2.png",
      caption: "Caption 2",
    },
    {
      id: 3,
      image: "/images/project3.png",
      caption: "Caption 3",
    },
    {
      id: 4,
      image: "/images/project4.png",
      caption: "Caption 4",
    },
    {
      id: 5,
      image: "/images/project5.png",
      caption: "Caption 5",
    },
  ];
  return (
    <main className="overflow-x-hidden">
      <Sidebar />
      <section className="container mx-auto px-52 ms-32 mt-12">
        <div className="flex items-start">
          <Image
            src="/images/PhotoProfile.jpg"
            width={250}
            height={250}
            alt="PP User"
            className="mx-20 w-[150px] h-[150px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <p className="me-4 text-lg">_akbyzd</p>
              <button className="font-medium text-sm rounded-md bg-[#262626] px-4 py-1">
                Edit Profile
              </button>
              <FontAwesomeIcon icon={faGear} className="w-[25px] text-white" />
            </div>

            <div className="text-[15px] flex gap-5 items-center">
              <p className="">
                <strong>33</strong> posts
              </p>
              <p className="">
                <strong>187</strong> followers
              </p>
              <p className="">
                <strong>342</strong> following
              </p>
            </div>

            <div className="text-[15px] flex flex-col gap-1">
              <p className="font-semibold text-[13px]">Muhammad Yazid Akbar</p>
              <p className="text-[13px]">Bisa karena terbiasa</p>
            </div>
          </div>
        </div>

        <section className="border-t border-stone-800 mt-10">
          <div className="flex items-center justify-center gap-3">
            <span className="flex gap-2 pt-[5px] font-semibold uppercase text-xs text-center border-t border-stone-300">
              <FontAwesomeIcon
                icon={faTableCells}
                className="w-[15px] text-white"
              />
              posts
            </span>
          </div>
        </section>

        <section className="mt-4">
          <div className="grid grid-cols-3 gap-2">
            {dataPosts.map((post, i) => (
              <Image
                key={i}
                src={post.image}
                width={750}
                height={750}
                alt={post.caption}
                className="w-full h-[250px] object-cover"
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
