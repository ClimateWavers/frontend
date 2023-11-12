"use client"
import { Apple, DocumentCopy, GooglePlay, Link2 } from 'iconsax-react';
import Image from 'next/image';
import React from 'react'
import { toast } from 'react-hot-toast';
import iphonePic from '../../../public/iphone14.png'

const page = () => {
  return (
    <>
    <h1 className='text-3xl text-primary font-Ordinary '>Referrals</h1>
    <div className=' w-[100%] p-2 flex flex-col sm:flex-row font-SF gap-16'>
      <div className='flex flex-col gap-8'>
        <div className='bg-secondary2 h-[100px] p-3 flex flex-row items-center gap-6 '>
          <div className='bg-secondary rounded-full p-2 '>
            <Link2 color="#135549" size={32} />
          </div>
          <div>
            referral link
            <p>app.valuxbox/refer/ayo</p>
          </div>
          <DocumentCopy
            className="mx-2 my-1 "
            size={22}
            onClick={() => {
              toast.success("Copied!");
              // Copy function
            }} />
        </div>
        <p className='text-primary font-semibold '>
          🎉 Get N500 for every user that successfully signs up
        </p>
        <div>
          <p className='text-primary font-semibold'>Referred users</p>
          <table className='border-gray table-auto border-2 border-spacing-[30px] w-[100%] h-[100%] '>
            <thead className='border-b-2 border-gray  '>
              <tr className=''>
                <th scope="col" className="pl-7 py-6">SN</th>
                <th scope="col" className=" py-6">User</th>
                <th scope="col" className="pr-7 py-6">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' border-b-2 border-gray '>
                <td scope="col" className="pl-7 py-6">1</td>
                <td scope="col" className=" py-6">John Boyega <br/> jboyega@gmail.com</td>
                <td scope="col" className="pr-7 py-6">Pending</td>
              </tr>
              <tr className=' border-b-2 border-gray '>
                <td scope="col" className="pl-7 py-6">2</td>
                <td scope="col" className=" py-6">John Boyega <br/> jboyega@gmail.com</td>
                <td scope="col" className="pr-7 py-6">Success</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-row gap-3  slef-end w-[100%] '>
          <div className='bg-secondary text-primary h-[100px] p-3 w-[100%] '>
            Referral Bonus
            <p className='font-semibold text-lg'>N5,000.00</p>
          </div>
          <div className='bg-secondary text-primary  h-[100px] p-3 pb-3 w-[100%] '>
            Referred users
            <p className='font-semibold text-lg'>22</p>
          </div>
        </div>
        <div className='bg-secondary2 pt-12 px-6  border-1 border-transparent rounded-t-3xl'>
          <Image
            src={iphonePic}
            quality
            width={70}
            height={70}
            className='w-[100%]'
          />
        </div>
        <div className='flex flex-row gap-8 '>
            <p>Download our app now</p>
            <div className='flex flex-row p-2 border-2 border-primary '>
              <GooglePlay size={22} color='#135549' />
              <p>Google Playstore</p>
            </div>
            <div className='flex flex-row p-2 border-2 border-primary '>
              <Apple size={22} color='#135549' />
              <p>Apple Appstore</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page