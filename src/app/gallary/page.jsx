import React from "react";
import Image from "next/image";

import img1 from "./../../assets/formal01.jpg";
import icon from "../../assets/logo.png";

export const metadata = {
  title: ` Gallary`,
  description: "This is gallary",
};

const page = () => {
  return (
    <div>
      <h2 className="text-3xl text-center">Imae Optimization</h2>
      <h2 className="text-center text-xl my-3">Using Link Next.js</h2>
      <Image
        className="mx-auto"
        src="https://i.ibb.co.com/jZ9y8vB/formal01.jpg"
        height={300}
        width={300}
        alt="Picture of the author"
      ></Image>
      <h2 className="text-center text-xl my-3">Local Image</h2>
      <Image
        className="mx-auto"
        src={img1}
        height={300}
        width={300}
        alt="Picture of the author"
      ></Image>
    </div>
  );
};

export default page;
