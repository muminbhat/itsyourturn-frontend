import Navbar from "../components/Navbar";
import BackgroundFrame from "../components/BackgroundFrame";
import FrameComponent from "../components/FrameComponent";
import EmailInputFrame from "../components/EmailInputFrame";
import ParentFrame from "../components/ParentFrame";
import Insta from "../components/Insta";
import GroupComponent from "../components/GroupComponent";

const HomeScreen = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start tracking-[normal] overflow-x-hidden">
      <div className="w-[1.8rem] h-[1.81rem] relative overflow-hidden shrink-0 hidden" />
      <div className="w-[6.25rem] h-[6.25rem] relative overflow-hidden shrink-0 hidden" />
      <section className="self-stretch flex flex-row flex-wrap items-start justify-start pt-[0rem] px-[0.25rem] pb-[0.5rem] box-border [row-gap:20px] max-w-full shrink-0 mb-16">
        <Navbar />
        <div className="flex-1 flex flex-row items-end justify-start py-[4rem] px-[3.5rem] box-border relative min-w-[46.94rem] min-h-[44.88rem] max-w-full mq450:pt-[2.63rem] mq450:pb-[2.63rem] mq450:box-border mq750:pl-[1.75rem] mq750:pr-[1.75rem] mq750:box-border mq1050:min-w-full">
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/rectangle-7@2x.png"
          />
          {/* Large Screen Hero CTA Start*/}
          <div className="w-[34.69rem] hidden xl:flex flex-col items-center justify-start pt-[0.69rem] px-[0rem] pb-[0rem] box-border relative gap-[0.44rem] max-w-full text-center text-[2.02rem] text-indigo font-allura">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0rem] bottom-[0rem] left-[-0.03rem] bg-white shadow-[9px_8px_7.1px_3px_rgba(0,_0,_0,_0.25)] z-[1]" />
      <div className="self-stretch h-[5rem] relative tracking-[0.05em] inline-block z-[2] mq450:text-[1.19rem] mq1050:text-[1.63rem]">
        <p className="m-0">Extra-ordinary Event delivered here....</p>
        <p className="m-0">{`Let us create magic for you! `}</p>
      </div>
      <div className="w-[30.88rem] flex flex-row items-start justify-start py-[0rem] pr-[0.38rem] pl-[0rem] box-border max-w-full text-[1.5rem] text-black font-jost">
        <div className="flex-1 flex flex-col items-center justify-start min-h-[8.5rem] max-w-full">
          <div className="self-stretch h-[8.5rem] relative whitespace-pre-wrap inline-block shrink-0 z-[3] mq450:text-[1.19rem]">
            We are here to design your special days and
            <span className="tracking-[0.08em]">{` `}</span>creates
            unforgettable memories..
            <span className="tracking-[-0.03em]">.</span>
          </div>
          <button className="cursor-pointer [border:none] py-[0.5rem] pr-[2.25rem] pl-[2.56rem] bg-indigo h-[2.5rem] shadow-[6px_6px_7.3px_-2px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center box-border whitespace-nowrap z-[2] mt-[-3.56rem] hover:bg-darkmagenta">
            <div className="h-[2.49rem] w-[10.22rem] relative bg-indigo shadow-[6px_6px_7.3px_-2px_rgba(0,_0,_0,_0.25)] hidden" />
            <div className="relative text-[1.26rem] font-medium font-cormorant-garamond text-white text-left z-[1]">
              Book Now
            </div>
          </button>
        </div>
      </div>
    </div>
          {/* Large Screen Hero CTA End */}

           {/* Large Screen Hero CTA Start*/}
           {/* Large Screen Hero CTA End */}
        
        </div>
      </section>
      <section className="w-[91.56rem] flex flex-col items-center justify-start pt-[0rem] px-[1.25rem] pb-[2.06rem] box-border gap-[0.69rem] max-w-full shrink-0 text-center text-[4.25rem] text-black font-cinzel-decorative">
        <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.25rem] box-border max-w-full">
          <h1 className="m-0 relative text-inherit leading-[3.44rem] capitalize font-normal font-inherit mq450:text-[2.56rem] mq450:leading-[3.13rem] mq1050:text-[3.38rem] mq1050:leading-[4.13rem]">
            Our Services
          </h1>
        </div>
        <div className="w-[43.31rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[2.63rem] box-border max-w-full text-[1.13rem] text-darkslategray font-jost">
          <div className="flex-1 relative leading-[1.91rem] inline-block max-w-full z-[1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>
        </div>
        <BackgroundFrame />
        <div className="w-[67.69rem] flex flex-row items-start justify-start py-[0rem] pr-[1.06rem] pl-[0rem] box-border max-w-full">
          <FrameComponent />
        </div>
        <h1 className="m-0 w-[20.13rem] h-[5.13rem] relative text-inherit tracking-[0.1em] font-normal font-inherit text-left inline-block max-w-full mq450:text-[2.56rem] mq1050:text-[3.38rem]">
          GALLERY
        </h1>
      </section>
      <EmailInputFrame />
      <ParentFrame />
      <Insta />
      <GroupComponent />
    </div>
  );
};

export default HomeScreen;
