const FrameComponent = () => {
  return (
    <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.06rem] pl-[0rem] box-border gap-[1.69rem] max-w-full text-left text-[1.25rem] text-black font-cinzel-decorative">
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.88rem] min-w-[15.69rem] max-w-full">
        <img
          className="self-stretch h-[18.02rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="eager"
          alt=""
          src="/rectangle-167@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[0.19rem]">
          <div className="relative leading-[2.12rem] capitalize whitespace-pre-wrap z-[1] mq450:text-[1rem] mq450:leading-[1.69rem]">{`Luxury &  Corporate gifting`}</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[15.81rem] max-w-full">
        <img
          className="self-stretch h-[18.02rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[2]"
          loading="eager"
          alt=""
          src="/rectangle-165-4@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <input
            className="[border:none] [outline:none] bg-white h-full w-full absolute my-0 mx-[!important] top-[0.06rem] bottom-[-0.09rem] left-[-11.84rem] shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)]"
            type="text"
          />
          <div className="flex-1 bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-center justify-center pt-[0.88rem] px-[0.88rem] pb-[1.13rem] box-border max-w-full whitespace-nowrap z-[1]">
            <div className="h-[3.71rem] w-[21.1rem] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
            <div className="relative leading-[1.68rem] z-[2]">
              Venue Sourcing
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start min-w-[15.81rem] max-w-full">
        <img
          className="self-stretch h-[18.02rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
          loading="eager"
          alt=""
          src="/rectangle-165-5@2x.png"
        />
        <div className="self-stretch bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-center justify-center pt-[0.88rem] px-[0.88rem] pb-[1.13rem] box-border max-w-full whitespace-nowrap">
          <div className="h-[3.71rem] w-[21.1rem] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <div className="relative leading-[1.68rem] z-[1]">Event Planning</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
