import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="px-2 h-full w-10/12 mx-auto">
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2
          gap-4 mt-4 w-full
        "
      >
        <Link className="relative w-full" href="/category/horske">
          <Image
            className="w-full h-auto rounded-2xl"
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
            className="w-full h-auto rounded-2xl"
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
            className="w-full h-auto rounded-2xl"
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
            className="w-full h-auto rounded-2xl"
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
        <Link className="relative w-full" href="/komponenty">
          <Image
            className="w-full h-full rounded-2xl"
            src="/images/100pr.jpg"
            alt="100pr"
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
            className="w-full h-full rounded-2xl"
            src="/images/100pr.jpg"
            alt="100pr"
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
}
