import Image from "next/image";
import Logo from "../assets/logo.svg";
import Main from "../assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const HomePage = () => {
  return (
    <main>
      <header className="max-w-[1280px] mx-auto px-4 py-8 sm:px-6">
        <Image src={Logo} alt="logo" />
      </header>
      <section className="max-w-[1280px] mx-auto h-screen -mt-[120px]  px-4 py-8 md:px-8 grid sm:grid-cols-[1fr,300px] md:grid-cols-[1fr,350px] lg:grid-cols-[1fr,400px] items-center justify-center gap-10">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
            Jobify <span className="text-primary">Tracking</span> App
          </h1>
          <p className="max-w-md text-xl font-medium  leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, rerum
            soluta aliquid sed laudantium officiis totam nesciunt velit adipisci
            officia perferendis repellat dolore quos maxime dolor et dignissimos
            asperiores fugiat.
          </p>
          <Button asChild className="mt-4 ">
            <Link href={"/add-job"}>Get start</Link>
          </Button>
        </div>
        <Image
          src={Main}
          alt="main-logo"
          className="sm:block md:block hidden"
        />
      </section>
    </main>
  );
};
export default HomePage;
