import { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
function NavBar() {
  const [menuButton, setMenuButton] = useState(false);
  console.log(menuButton);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Products",
      path: "/products",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
    },
  ];

  return (
    <nav className="flex justify-between items-center py-8 px-20 relative bg-zinc-700">
      <h1 className="text-2xl font-bold">PowerUp</h1>
      <ul
        className={`md:flex absolute md:static gap-12 items-center  border-t-[1px] md:border-t-0 border-zinc-900 
        ${menuButton? 
            "flex flex-col gap-3 w-1/3 py-10 top-[6rem] rounded-bl-3xl right-0 bg-zinc-700"
            : 
            "-right-60 top-[6rem]"
        }`}
      >
        {routes.map((item) => (
          <li key={item.id}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 text-xl">
        <div className="w-8 h-8 bg-zinc-200 text-zinc-900 flex justify-center items-center rounded-full">
          <CiUser />
        </div>
        <div className="md:hidden" onClick={() => setMenuButton(!menuButton)}>
          {menuButton == false ? <AiOutlineMenuFold /> : <RxCross2 />}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
