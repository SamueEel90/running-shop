import Link from "next/link";

const BazarFormRedirect = () => {
  return (
    <div className="flex justify-center items-center">
      <Link href="/bazar/formular" passHref>
        <p className="flex justify-center items-center pb-2 w-14 h-14 bg-caribean-light rounded-full shadow-md hover:scale-105 transition text-5xl text-white cursor-pointer">
          +
        </p>
      </Link>
    </div>
    
  );
};

export default BazarFormRedirect;