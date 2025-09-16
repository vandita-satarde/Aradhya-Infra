import React from "react";
import chairman from "../assets/images/chairmanimg.jpg";

function StoryandBelief({
  subtitle,
  title,
  description,
  subtitle1,
  heading1,
  content1,
  heading2,
  content2,
  heading3,
  content3,
  heading4,
  content4,
  heading5,
  content5,
  heading6,
  content6,
  subtitle2,
  subtitle2content,
}) {
  return (
    <>
      <div>
        <p className="text-[12px] md:text-[13px] lg:text-[15px] text-[#048886] pt-5 md:pt-3 ">
          {subtitle}{" "}
        </p>
        <p className="pr-4 md:pr-24 lg:pr-90 text-[23px] md:text-[31px] lg:text-[45px] text-[#2D2D2D] font-bold font-[abril] my-2 md:my-4  leading-6 md:leading-8 lg:leading-14 ">
          {title}{" "}
        </p>
        <p className=" text-[#6E6E6E] text-[11px] md:text-[15px] lg:text-[18px] leading-4 md:leading-5">
          {description}{" "}
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6 mt-6 md:mt-9 lg:mt-10 mx-4 md:mx-0 font-[abril]">
          <div className="w-full md:w-1/2 bg-[#F9F9F9] rounded-4xl p-5 md:p-6 lg:p-10 shadow-2xs ">
            <p className="font-semibold text-[#2D2D2D] text-[22px] md:text-[23px] lg:text-[25px]">
              {subtitle1}{" "}
            </p>
            <hr className="my-4 lg:my-8" />
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-10 font-[abril]">
              <div className="flex gap-4 lg:gap-8">
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-[#048886]">
                  01
                </p>
                <div>
                  <p className="text-[18px] md:text-[21px] font-bold text-[#2D2D2D]">
                    {heading1}{" "}
                  </p>
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] md:leading-4.5 lg:leading-7 font-sans text-[#6E6E6E]">
                    {content1}{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 lg:gap-8">
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-[#048886] ">
                  02
                </p>
                <div>
                  <p className="text-[18px] md:text-[21px] font-bold text-[#2D2D2D]">
                    {heading2}{" "}
                  </p>
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] md:leading-4.5 lg:leading-7 font-sans text-[#6E6E6E]">
                    {content2}{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 lg:gap-8">
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-[#048886] ">
                  03
                </p>
                <div>
                  <p className="text-[18px] md:text-[21px] font-bold text-[#2D2D2D] ">
                    {heading3}{" "}
                  </p>
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] md:leading-4.5 lg:leading-7 font-sans text-[#6E6E6E]">
                    {content3}{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 lg:gap-8">
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-[#048886] ">
                  04
                </p>
                <div>
                  <p className="text-[18px] md:text-[21px] font-bold text-[#2D2D2D] ">
                    {heading4}{" "}
                  </p>
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] md:leading-4.5 lg:leading-7 font-sans text-[#6E6E6E]">
                    {content4}{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 lg:gap-8">
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-[#048886] ">
                  05
                </p>
                <div>
                  <p className="text-[18px] md:text-[21px] font-bold text-[#2D2D2D] ">
                    {heading5}{" "}
                  </p>
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] md:leading-4.5 lg:leading-7 font-sans text-[#6E6E6E]">
                    {content5}{" "}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 lg:gap-8">
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-bold text-[#048886] ">
                  06
                </p>
                <div>
                  <p className="text-[18px] md:text-[21px] font-bold text-[#2D2D2D] ">
                    {heading6}{" "}
                  </p>
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] md:leading-4.5 lg:leading-7 font-sans text-[#6E6E6E]">
                    {content6}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#F9F9F9] rounded-[30px] p-5 md:p-6 lg:p-10 shadow-2xs">
            <img src={chairman} alt="" />
            <p className="italic font-semibold text-[18px] md:text-[22px] py-2 md:py-3 lg:py-9 ">
              {subtitle2}{" "}
            </p>
            <p className="text-[12px] lg:text-[18px] font-sans md:leading-5 lg:leading-7">
              {subtitle2content}{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryandBelief;
