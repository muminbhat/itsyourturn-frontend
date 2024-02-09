const BackgroundFrame = () => {
  return (
    <div className="self-stretch grid flex-row items-start justify-start gap-[1.44rem] max-w-full grid-cols-[repeat(4,_minmax(256px,_1fr))] text-left text-[1.25rem] text-black font-cinzel-decorative lg:justify-center lg:grid-cols-[repeat(2,_minmax(256px,_445px))] mq750:grid-cols-[minmax(256px,_1fr)]">
      <div className="h-[21.75rem] flex flex-col items-start justify-start gap-[0.06rem] max-w-full text-center">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="eager"
          alt=""
          src="/rectangle-165@2x.png"
        />
        <div className="self-stretch bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-start justify-start pt-[0.31rem] pb-[1.25rem] pr-[5.5rem] pl-[4.13rem] box-border max-w-full whitespace-nowrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[3.71rem] w-[21.1rem] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <div className="relative leading-[2.12rem] z-[1]">
            Wedding Parties
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[0.06rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.06rem] pl-[0.19rem] box-border max-w-full">
          <img
            className="h-[18.02rem] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="eager"
            alt=""
            src="/rectangle-165-1@2x.png"
          />
        </div>
        <div className="bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-start justify-center pt-[0.13rem] pb-[1.44rem] pr-[4.31rem] pl-[4.56rem] box-border max-w-full whitespace-nowrap mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[3.71rem] w-[21.1rem] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <div className="relative leading-[2.12rem] capitalize z-[1]">
            milestone events
          </div>
        </div>
      </div>
      <div className="h-[21.75rem] flex flex-col items-start justify-start gap-[0.06rem] max-w-full text-[1.19rem]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src="/rectangle-165-2@2x.png"
        />
        <div className="bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-start justify-center pt-[0.25rem] pb-[1.75rem] pr-[0.38rem] pl-[0.31rem] box-border max-w-full whitespace-nowrap">
          <div className="h-[3.71rem] w-[21.1rem] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <div className="relative leading-[1.68rem] whitespace-pre-wrap z-[1]">{`Photography  &  Videography`}</div>
        </div>
      </div>
      <div className="h-[21.75rem] flex flex-col items-end justify-start py-[0rem] pr-[0rem] pl-[0.06rem] box-border gap-[0.06rem] max-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="eager"
          alt=""
          src="/rectangle-165-3@2x.png"
        />
        <div className="self-stretch bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] flex flex-row items-start justify-center pt-[0.19rem] pb-[1.38rem] pr-[1.44rem] pl-[1.25rem] box-border max-w-full whitespace-nowrap">
          <div className="h-[3.71rem] w-[21.1rem] relative bg-white shadow-[0px_2.5px_12.72px_rgba(0,_0,_0,_0.06)] hidden max-w-full" />
          <div className="relative leading-[2.12rem] z-[1]">Luxury Decor</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundFrame;
