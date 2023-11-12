import Link from "next/link";

const MenuReal = ({ path, index, icon, label }) => {
    // const [isActive, setisActive] = useState(false);
    return (
      <Link
        className={`flex flex-row py-6 pl-[20px] sm:pl-[40px] hover:bg-gray-main text-sm sm:text-base`}
        href={path}
      >
        <span className="mr-3">{icon}</span> {label}
      </Link>
    );
  };

export default MenuReal