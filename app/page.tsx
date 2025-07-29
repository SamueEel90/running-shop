import Image from 'next/image';
import Link from 'next/link';
const Home = () => {

  const imageClass = "w-full h-120 object-cover rounded-2xl"; 

  return (
    <div className="px-2 py-6 h-full w-10/12 mx-auto">
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2
          gap-4 mt-4 w-full
        "
      >
        <Link className="relative w-full" href="/category/horske">
          <Image
            className={imageClass}
            src="/images/MTB.jpg"
            alt="MTB"
            width={1920}
            height={1080}
            priority
          />
          <p className="absolute inset-0 flex items-center justify-center font-light text-white text-6xl rounded-2xl">
            Horské Bycikle
          </p>
        </Link>
        <Link className="relative w-full" href="/category/cestne">
          <Image
            className={imageClass}
            src="/images/Road.jpg"
            alt="Road"
            width={1920}
            height={1080}
            priority
          />
          <p className="absolute inset-0 flex items-center justify-center font-light text-white text-6xl rounded-2xl">
            Cestné Bycikle
          </p>
        </Link>
        <Link className="relative w-full" href="/beh">
          <Image
            className={imageClass}
            src="/images/Run.jpg"
            alt="Run"
            width={1920}
            height={1080}
            priority
          />
          <p className="absolute inset-0 flex items-center justify-center font-light text-white text-6xl  rounded-2xl">
            Bežecké Topanky
          </p>
        </Link>
        <Link className="relative w-full" href="/prislusenstvo">
          <Image
            className={imageClass}
            src="/images/100pr.jpg"
            alt="100pr"
            width={1920}
            height={1080}
            priority
          />
          <p className="absolute inset-0 flex items-center justify-center font-light text-white text-6xl rounded-2xl">
            Príslušenstvo
          </p>
        </Link>
        <Link className="relative w-full " href="/komponenty">
          <Image
            className={imageClass}
            src="/images/crankset.jpg"
            alt="Crankset"
            width={1920}
            height={1080}
            priority
          />
          <p className="absolute inset-0 flex items-center justify-center font-light text-white text-6xl rounded-2xl">
            Komponenty
          </p>
        </Link>
        <Link className="relative w-full" href="/vyziva">
          <Image
            className={imageClass}
            src="/images/sis2.jpeg"
            alt="SIS"
            width={1920}
            height={1080}
            priority
          />
          <p className="absolute inset-0 flex items-center justify-center font-light text-white text-6xl rounded-2xl">
            Vyživa
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Home;