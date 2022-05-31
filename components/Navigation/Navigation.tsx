import React, { VFC } from "react";
import Link from "next/link";

const style: any = { textShadow: "0px 0px 25px yellow" };

const Navigation: VFC = () => {
  return (
    <nav className=" p-4">
      <Link href="/">
        <h1 style={style} className="ml-16 text-3xl text-font-accent font-bold">
          Random posts
        </h1>
      </Link>
    </nav>
  );
};

export default Navigation;
