import Navbar from "../components/navbar";
import marc from "../assets/images/marc.png";

function Home() {
  return (
    <div className="bg-[#061222] text-white min-h-screen">
      <Navbar />
      <div>
        <div className="flex flex-col items-center justify-center text-center mt-20 px-4 relative">
          <h1 className="text-[8rem] text-center font-bold mb-6">
            EMMANUEL
            <span
              className="bg-clip-text text-transparent ml-7 "
              style={{
                backgroundImage: "linear-gradient(90deg, #4477FF, #6C5BFF, #C75DFF, #FF5DA0)",
              }}
            >
              BROU
            </span>
          </h1>
          <h2 className="absolute  text-3xl top-50 left-46 text-left">DEVELOPPEUR <br /> FRONT<br />END</h2>




        </div>
        <div className="absolute top-2 w-full bottom-0 z-10 h-auto flex justify-center">
          <img src={marc} alt="" className=" w-[70%] h-auto" />
        </div>
        <div className="absolute -bottom-15 z-20 w-full h-30 bg-[#061222] blur-xl"></div>
        <a href="#" className="absolute left-46 bottom-20 text-white text-2xl bg-[#4477FF] p-6 rounded-[50px] ">Découvrez Moi</a>
      </div>

      <div className="h-screen w-full bg-[#061222]">

      </div>


    </div>
  );
}

export default Home;
