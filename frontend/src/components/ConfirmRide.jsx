import React from "react";
import { Link } from "react-router-dom";
const ConfirmRide = (props) => {
  return (
    <div>
      <div
        onClick={() => props.setCofirmPanelOpen(false)}
        className=" text-center text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </div>

      <div className="p-2 h-full w-full">
        <div className="flex flex-col items-center justify-center py-1 ">
          <img
            src={props.selectedVehicle?.image}
            alt=""
            className=" text-center w-1/2"
          />
        </div>
        <div className=" flex gap-2 items-center">
          <div className=" flex justify-center items-center w-1/6">
            <i className="  text-2xl ri-map-pin-3-line"></i>
          </div>
          <div className=" py-2 border-b-2 border-gray-300 w-5/6">
            <div>
              <h1 className="text-xl font-bold">25 Shiv sundar Vihar</h1>
              <p className="text-gray-500 text-lg">goner road ,jaipur</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <div className=" flex justify-center items-center w-1/6">
          <i className=" text-xl ri-stop-large-fill"></i>
          </div>
          <div className=" py-2 border-b-2 border-gray-300 w-5/6">
            <div>
              <h1 className="text-xl font-bold">21 B4</h1>
              <p className="text-gray-500 text-lg">Bani Park ,jaipur</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-2 items-center">
          <div className=" flex justify-center items-center w-1/6">
          <i className=" text-2xl ri-wallet-2-fill"></i>
          </div>
          <div className=" py-2  w-5/6">
            <div>
              <h1 className="text-2xl font-bold"> ₹{props.selectedVehicle?.price}</h1>
              <p className="text-gray-500 text-lg">Cash Cash</p>
            </div>
          </div>
        </div>

      </div>
        <div onClick={(e) => {
          e.preventDefault();
          props.setCofirmPanelOpen(false);
          props.setVehicleConfirmed(true);
        }} className=' w-[90%] absolute left-5  p-2 mt-3 bg-green-300 text-black inline-block text-center font-semibold rounded-md cursor-pointer'>
          <Link className=" text-xl " > Confirm </Link>
        </div>
    </div>
  );
};

export default ConfirmRide;
