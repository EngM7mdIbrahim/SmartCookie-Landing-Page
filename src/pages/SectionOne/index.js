import React from "react";
import logo from "../../assets/logo.png";
import appStore from "../../assets/app-store.png";
import playStore from "../../assets/play-store.png";
import phones from "../../assets/phones.png";
import './index.css'
export default function SectionOne() {
  return (
    <div
      style={{ background: "linear-gradient(to bottom, #212F53, #5468FF)" }}
      className="text-white w-screen min-h-screen flex flex-col p-4 pb-0 gap-5 justify-start"
    >
      <div className="flex w-screen px-5" id="header">
        <div className="flex-1 flex justify-start">
          <img className="h-11 object-contain" src={logo} alt="logo" />
        </div>
        <button
          style={{ backgroundColor: "#5468FF" }}
          className="hidden px-7 py-2 rounded-xl mr-10 sm:block"
        >
          Download
        </button>
      </div>
      <div className="flex flex-wrap flex-row flex-1" id="body">
        <div
          id="details-panel"
          className="flex flex-1 flex-col p-4 gap-5 justify-start px-5 sm:justify-center"
        >
          <h1
            className=" text-4xl title-line-height font-bold sm:text-6xl"
          >
            You need to earn{" "}
            <span
              className="px-4 rounded-2xl"
              style={{ backgroundColor: "#5468FF" }}
            >
              TikTok
            </span>
          </h1>
          <p style={{ lineHeight: "40px" }} className="text-2xl">
            SmartHabits blocks distracting apps until you've achieved your
            fitness, learning, or sleep goals
          </p>
          <div id="stores" className="flex gap-5">
            <img className="h-11 object-contain" src={appStore} alt="logo" />
            <img className="h-11 object-contain" src={playStore} alt="logo" />
          </div>
        </div>
        <div
          id="phone-panel"
          className="flex relative top-8 items-center flex-col p-4 pb-0 w-full justify-center sm:w-5/12 sm:top-0 "
        >
          <img className="object-contain w-4/5 sm:w-full" src={phones} alt="" />
        </div>
      </div>
    </div>
  );
}
