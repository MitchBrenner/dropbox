import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-4xl font-bold">Welcome to DropBox <br />
            <br /> Storing everything you need for your business needs. All in one place.
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo illo quidem minus! Blanditiis harum error ex tempore delectus eos! Velit dignissimos accusantium repellendus quia aperiam.</p>
          <Link href="/dashboard" className="flex bg-blue-500 p-5 w-fit rounded-sm"> 
            Try for free
            <ArrowRightIcon className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg"> 
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
