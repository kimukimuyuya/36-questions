import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-700 text-white p-4">
      <h1 className="text-2xl">
        <Link href="/">
          36の質問
        </Link>
      </h1>
    </header>
  );
}

export default Header;