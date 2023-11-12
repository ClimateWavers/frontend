"use client";

import React, { useState } from "react";
import {
  Eye,
  EyeSlash,
  DocumentCopy,
  WalletAdd,
  Receipt2,
  Monitor,
  Flash,
  ArrowSwapHorizontal,
  Link2,
  Send2,
  ArrowRight,
} from "iconsax-react";
import { recentTransactions } from "@/utils/recentTransactData";
import Button from "@/components/Button";
import { toast } from "react-hot-toast";
import { createPortal } from "react-dom";
import SendMoney from "@/components/SendMoney";
import OverLayScreen from "@/components/OverLayScreen";
import Pin from "@/components/Pin";
import BuyAirTimeOrData from "@/components/BuyAirTimeOrData";
import CableTv from "@/components/CableTv";


const Home = () => {
  // Need Code Review
  const [view, setView] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isAirtimeOpen, setAirtimeOpen] = useState(false)
  const [isCableTvOpen, setCableTvOpen] = useState(false)

  
  // Time
  const dayTime = () => {
    const time = new Date().getHours();
    if (time >= 1 && time <= 11) {
      return "Morning";
    } else if (time >= 12 && time < 16) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  return (
    <div className=" pr-0 sm:pr-16 ">
      {/* Name and Acct Bal */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0  ">
        <div className=" w-[100%] sm:w-[30%] text-[30px] sm:text-[50px] flex flex-row sm:flex-col items-baseline  text-primary ">
          <span className="text-[18px] pr-3 ">Good {dayTime()},</span>
          Ayo
          {/* Replace with API Details */}
        </div>
        <div className="bg-light-primary border-l-[30px] border-secondary2 w-[100%] sm:w-[70%]">
          <div className="bg-[url('/balancemap.png')] bg-center bg-cover p-6 pr-8 ">
            <div className="flex flex-row relative ">
              {/* Balance Card */}
              <div className="text-secondary2 text-[18px] sm:text-[28px] mb-32  ">
                <span className="text-[18px] ">Balance</span>
                <br />
                <div className="flex flex-row items-center ">
                  {view ? "3,000,000.00 " : "******"}
                  {view ? (
                    <Eye
                      className="px-2 text-secondary "
                      size={30}
                      onClick={() => setView(!view)}
                    />
                  ) : (
                    <EyeSlash
                      className="px-2 text-secondary "
                      size={30}
                      onClick={() => setView(!view)}
                    />
                  )}
                </div>
              </div>
              <div className="text-white self-end absolute bottom-0 right-0 ">
                Providus bank
                <div className="flex flex-row ">
                  012345678
                  <DocumentCopy
                    className="mx-2 my-1 "
                    size={18}
                    onClick={() => {
                      toast.success("Copied!");
                      // Copy function
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end gap-2 sm:gap-4 mb-8  ">
        <Button
          label={"Fund Wallet"}
          className={
            "text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary "
          }
          icon={WalletAdd}
          color="secondary"
          center={true}
        />
        <Button
          label={"Send Money"}
          icon={Send2}
          className={
            "text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-Ordinary "
          }
          color="primary"
          center={true}
          onClick={() => setIsOpen(!isOpen) }
        />
        {/* Portal for Send Money Button */}
        {
          isOpen &&
            <OverLayScreen component={<SendMoney />} isRightOrLeft={'right'} header={'Send Money'} setCloser={() => setIsOpen(!isOpen)} />
        }
        
        {
          isAirtimeOpen &&
            <OverLayScreen component={<BuyAirTimeOrData />} isRightOrLeft={'left'} header={'Buy Airtime or Data'} setCloser={() => setAirtimeOpen(!isAirtimeOpen)} />
        }
        {
          isCableTvOpen &&
            <OverLayScreen component={<CableTv />} isRightOrLeft={'left'} header={'Cable TV subscription'} setCloser={() => setCableTvOpen(!isCableTvOpen)} />
        }
      </div>
      {/* Recent Transactions */}
      <div>
        <div className="flex flex-row gap-2 sm:gap-7 text-[10px] sm:text-base ">
          <div className="flex flex-col justify-center items-center font-SF  ">
            <div className="bg-sky-100 rounded-full p-2 sm:p-4 mx-auto " onClick={() => setAirtimeOpen(true)} >
              <Receipt2 color="#00CFE8" size={20} />
            </div>
            Airtime/Data
          </div>
          <div className="flex flex-col justify-center items-center font-SF">
            <div className="bg-pink-100 rounded-full p-2 sm:p-4 mx-auto " onClick={() => setCableTvOpen(true)} >
              <Monitor color="#F66667" size={20} />
            </div>
            Cable TV
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="bg-orange-100 rounded-full p-2 sm:p-4 mx-auto font-SF text-[20px]">
              <Flash color="#FFB064" size={20} />
            </div>
            Electricity
          </div>
          <div className="flex flex-col justify-center items-center font-SF ">
            <div className="bg-purple-100 rounded-full p-2 sm:p-4 mx-auto ">
              <ArrowSwapHorizontal color="#7367F0" size={20}  />
            </div>
            Airtime to cash
          </div>
          <div className="flex flex-col justify-center items-center font-SF">
            <div className="bg-green-100 rounded-full p-2 sm:p-4 mx-auto ">
              <Link2 color="#38CB7A" size={20} />
            </div>
            Referral Link
          </div>
        </div>
        {/* Transaction details. */}
        <div className="pl-0 sm:pl-16 pt-4">
          <div className="flex flex-row justify-between pb-3">
            <h2 className="font-bold text-lg">Recent Transactions</h2>
            <p className="flex flex-row items-center gap-2 ">view all <ArrowRight size={20} /> </p>
          </div>
          <div className=" font-SF text-sm sm:text-base ">
            {
              recentTransactions.map(({amount, category, narration, debitOrCredit, icon, id}) => {
                return(
                  <div className="py-3 flex flex-row items-center justify-between " key={id} > 
                    <div className="flex flex-row items-center ">
                      {/* icon */}
                      <div className="bg-[#F5FAFD] p-2 rounded-full place-self-center ">{icon}</div>
                      {/* Content */}
                      <div className="ml-2 mr-5 sm:mr-10 ">{narration}</div>
                    </div>
                    {/* Amouunt */}
                    <div className={` justify-self-end mr-0 font-semibold first-letter text-xs sm:text-base ${debitOrCredit == 'debit' ? 'text-red-600' : 'text-green-500' } `}>{amount}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
