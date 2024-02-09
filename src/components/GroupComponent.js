const GroupComponent = () => {
  return (
    <section className="self-stretch bg-black flex flex-col items-center justify-start pt-[2.94rem] px-[2.94rem] pb-[3rem] box-border gap-[3.19rem] max-w-full shrink-0 z-[2] text-left text-[3.44rem] text-white font-cormorant-garamond mq750:gap-[3.19rem] mq750:py-[1.94rem] mq750:px-[1.44rem] mq750:box-border">
      <img
        className="w-[96.5rem] relative max-h-full hidden max-w-full"
        alt=""
        src="/rectangle-20.svg"
      />
      <div className="flex flex-row items-start justify-start relative max-w-full">
        <b className="h-[3.83rem] relative inline-block z-[1] mq450:text-[2.06rem] mq1050:text-[2.75rem]">
          IT’s Your Turn
        </b>
        <div className="h-[2.63rem] absolute my-0 mx-[!important] bottom-[-1.76rem] left-[1.03rem] text-[2.29rem] font-alex-brush text-peru-200 inline-block z-[2] mq450:text-[1.38rem] mq1050:text-[1.81rem]">
          Events and Weddings
        </div>
      </div>
      <div className="w-[33.25rem] flex flex-col items-center justify-start gap-[1.88rem] max-w-full shrink-0 text-center text-[1.49rem] font-nunito-sans">
        <div className="w-[31.52rem] h-[1.42rem] relative flex items-end justify-center shrink-0 max-w-full z-[1] mq450:text-[1.19rem]">{`Let’s get in touch `}</div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.88rem] max-w-full text-left text-[1.73rem] font-cormorant-garamond">
          <div className="self-stretch rounded-3xs-7 box-border flex flex-row items-end justify-start pt-[0.31rem] pb-[0.13rem] pr-[14.44rem] pl-[12.44rem] max-w-full z-[3] border-[1px] border-solid border-gray-200 mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[6.19rem] mq750:pr-[7.19rem] mq750:box-border">
            <b className="h-[1.89rem] flex-1 relative hidden items-end z-[2] mq450:text-[1.38rem]">{` `}</b>
            <input
              className="w-[4.56rem] [border:none] [outline:none] font-nunito-sans text-[1.5rem] bg-[transparent] h-[2.06rem] relative tracking-[0.1em] text-white text-left flex items-end z-[1] mq450:text-[1.19rem]"
              placeholder="NAME "
              type="text"
            />
            <div className="h-[2.5rem] w-[33.27rem] relative rounded-3xs-7 box-border hidden max-w-full z-[3] border-[1px] border-solid border-gray-200" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-[1.5rem] font-nunito-sans">
            <div className="self-stretch rounded-3xs-7 box-border flex flex-row items-center justify-center pt-[0.19rem] pb-[0.25rem] pr-[1.25rem] pl-[1.31rem] max-w-full z-[2] border-[1px] border-solid border-gray-200">
              <div className="h-[2.06rem] relative tracking-[0.1em] flex items-end z-[1] mq450:text-[1.19rem]">
                CONTACT NO.
              </div>
              <div className="h-[2.5rem] w-[33.27rem] relative rounded-3xs-7 box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
            </div>
            <div className="self-stretch rounded-3xs-7 box-border flex flex-row items-center justify-center pt-[0.19rem] pb-[0.25rem] pr-[1.38rem] pl-[1.25rem] max-w-full z-[2] border-[1px] border-solid border-gray-200">
              <div className="h-[2.06rem] relative tracking-[0.1em] flex items-end z-[1] mq450:text-[1.19rem]">
                EMAIL
              </div>
              <div className="h-[2.5rem] w-[33.27rem] relative rounded-3xs-7 box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
            </div>
            <div className="self-stretch rounded-3xs-7 box-border flex flex-row items-center justify-center pt-[0.19rem] px-[0.19rem] pb-[0.25rem] max-w-full z-[2] border-[1px] border-solid border-gray-200">
              <div className="h-[2.06rem] relative tracking-[0.1em] flex items-end z-[1] mq450:text-[1.19rem]">
                YOUR QUESTIONS
              </div>
              <div className="h-[2.5rem] w-[33.27rem] relative rounded-3xs-7 box-border hidden max-w-full border-[1px] border-solid border-gray-200" />
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[0.44rem] px-[0.44rem] pb-[0.5rem] bg-white w-[8.56rem] h-[2.38rem] rounded-[9.19px] flex flex-row items-center justify-center box-border z-[1] hover:bg-gainsboro-100">
        <div className="h-[2.36rem] w-[8.56rem] relative rounded-[9.19px] bg-white hidden" />
        <div className="relative text-[1.15rem] tracking-[0.12em] font-medium font-jost text-black text-left z-[1]">
          Submit
        </div>
      </button>
    </section>
  );
};

export default GroupComponent;
