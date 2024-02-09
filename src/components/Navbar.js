const Navbar = () => {
  return (
    <div className="w-[23.75rem] lg:hidden md:flex rounded-br-[3rem] bg-white shadow-[3.2px_0px_15.28px_rgba(0,_0,_0,_0.25)]  flex-col items-center justify-start pt-[2.13rem] pb-[8.75rem] pr-[3.06rem] pl-[3.94rem] box-border gap-[2.75rem] max-w-full text-left text-[1.68rem] text-indigo font-cinzel-decorative mq450:gap-[2.75rem] mq450:pt-[1.25rem] mq450:px-[1.25rem] mq450:pb-[1.56rem] mq450:box-border mq1050:pt-[1.38rem] mq1050:pb-[2.44rem] mq1050:box-border">
      <img
        className="w-[23.78rem] h-[54.28rem] relative hidden max-w-full"
        alt=""
        src="/rectangle-1.svg"
      />
      <div className="flex flex-col items-center justify-start pt-[0rem] px-[0rem] pb-[2.13rem] gap-[1.38rem] text-black">
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.38rem] pl-[0rem]">
          <button className="cursor-pointer [border:none] pt-[2.25rem] pb-[2.19rem] pr-[1.44rem] pl-[1.19rem] bg-indigo h-[7.25rem] w-[7.31rem] rounded-[61.65px] flex flex-row items-center justify-center box-border z-[1]">
            <img
              className="h-[7.23rem] w-[7.23rem] relative rounded-[61.65px] hidden"
              alt=""
              src="/vector.svg"
            />
            <img
              className="h-[2.77rem] w-[4.66rem] relative z-[2]"
              alt=""
              src="/components.svg"
            />
          </button>
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.69rem]">
            <b className="relative z-[1] mq450:text-[1.31rem]">
              IT’s Your Turn
            </b>
          </div>
          <h2 className="m-0 relative text-[2rem] font-normal font-allura text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.2),_rgba(0,_0,_0,_0.2)),_#5b0076] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap z-[1] mq450:text-[1.19rem] mq1050:text-[1.63rem]">
            Social Event Specialists
          </h2>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-[0rem] pb-[6.81rem] pr-[1rem] pl-[0rem] text-[1.26rem] font-nunito-sans">
        <div className="flex flex-col items-center justify-start gap-[0.81rem]">
          <div className="h-[1.69rem] relative inline-block z-[1] mq450:text-[1rem]">
            Home
          </div>
          <div className="h-[1.69rem] relative inline-block z-[1] mq450:text-[1rem]">
            Services
          </div>
          <div className="h-[1.69rem] relative inline-block z-[1] mq450:text-[1rem]">
            About
          </div>
          <div className="relative z-[1] mq450:text-[1rem]">Blog</div>
          <div className="h-[1.69rem] relative inline-block z-[1] mq450:text-[1rem]">
            Contact
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[2.19rem] pl-[1.25rem] text-center text-[1.21rem] font-cormorant-garamond">
        <div className="flex flex-col items-center justify-start gap-[0.69rem]">
          <div className="w-[4.93rem] h-[0rem] relative box-border opacity-[0.6] z-[1] border-t-[0.4px] border-solid border-peru-100" />
          <div className="flex flex-col items-center justify-start gap-[0.06rem]">
            <div className="relative font-medium whitespace-nowrap z-[1]">
              +91 8080332299
            </div>
            <div className="relative font-medium whitespace-nowrap z-[1]">
              itsyourturn.in@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.13rem] pl-[0.31rem]">
        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem]">
          <div className="h-[1.81rem] w-[1.81rem] relative rounded-[4.02px] box-border z-[1] border-[0.4px] border-solid border-peru-100">
            <div className="absolute top-[-0.01rem] left-[0.01rem] rounded-[4.02px] box-border w-full h-full hidden border-[0.4px] border-solid border-peru-100" />
            <img
              className="absolute top-[0.31rem] left-[0.5rem] w-[0.71rem] h-[1.12rem] z-[2]"
              alt=""
              src="/frame-container.svg"
            />
          </div>
          <div className="h-[1.81rem] w-[1.81rem] relative rounded-[4.02px] box-border z-[2] border-[0.4px] border-solid border-peru-100">
            <img
              className="absolute top-[0.38rem] left-[0.31rem] w-[1.11rem] h-[1.02rem] z-[1]"
              loading="eager"
              alt=""
              src="/vector-1.svg"
            />
            <div className="absolute top-[0rem] left-[0rem] rounded-[4.02px] box-border w-full h-full hidden border-[0.4px] border-solid border-peru-100" />
          </div>
          <div className="h-[1.81rem] w-[1.81rem] relative rounded-[4.02px] box-border z-[2] border-[0.4px] border-solid border-peru-100">
            <img
              className="absolute top-[0.25rem] left-[0.39rem] w-[1.06rem] h-[1.12rem] z-[1]"
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
            <div className="absolute top-[0rem] left-[0rem] rounded-[4.02px] box-border w-full h-full hidden border-[0.4px] border-solid border-peru-100" />
          </div>
          <div className="h-[1.81rem] w-[1.81rem] relative rounded-[4.02px] box-border z-[2] border-[0.4px] border-solid border-peru-100">
            <img
              className="absolute top-[0.38rem] left-[0.28rem] w-[1.26rem] h-[0.98rem] z-[1]"
              loading="eager"
              alt=""
              src="/vector-3.svg"
            />
            <div className="absolute top-[0rem] left-[0rem] rounded-[4.02px] box-border w-full h-full hidden border-[0.4px] border-solid border-peru-100" />
          </div>
          <div className="h-[1.81rem] w-[1.81rem] relative rounded-[4.02px] box-border z-[2] border-[0.4px] border-solid border-peru-100">
            <img
              className="absolute top-[0.44rem] left-[0.44rem] w-[0.96rem] h-[0.93rem] z-[1]"
              loading="eager"
              alt=""
              src="/vector-4.svg"
            />
            <div className="absolute top-[0rem] left-[0.02rem] rounded-[4.02px] box-border w-full h-full hidden border-[0.4px] border-solid border-peru-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
