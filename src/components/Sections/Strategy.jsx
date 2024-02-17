import Strt from "../../assets/strt.jpg"
import Image from "next/image";
const Strategy = () => {
  return (
    <div className=" flex">
      <div className="bg-black flex flex-col gap-5 lg:p-20">
        <h1 className="text-4xl text-white">
          Winning strategy, expertise, and relentless innovation.
        </h1>
        <div className="text-gray-500 lg:flex justify-between">
          <div className="lg:1/3">
            <div className="py-2 text-lg">
              <a href="">Strategy</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Branding</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Creative</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Content</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">OTT & Connected TV</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Paid Social</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Paid Search</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Amazon</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Display & Retargeting</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Retail media</a>
            </div>
          </div>

          <div className="lg:w-2/4">
            <div className="py-2 text-lg">
              <a href="">Streaming Audio</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Grocery eCommerce Marketing</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Influencer</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">SEO</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Email, SMS, & CRM</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">Social Media</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">data Science & Analytics</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">UX Design</a>
            </div>
            <div className="py-2 text-lg">
              <a href="">eCommerce</a>
            </div>
          </div>
        </div>
        <div className=" w-fit">
          <button className="text-white text-xl py-4 px-10 border hover:bg-blue-800 hover:border-red-700">Let&apos;s Connect</button>
        </div>
      </div>

      <div className=" lg:w-1/2 h-auto   flex items-center justify-center">
        <Image
          src={Strt}
          alt="digital marketing"
          className=" lg:-ml-32 lg:h-3/4 flex justify-center"
        />
      </div>
    </div>
  );
};

export default Strategy;
