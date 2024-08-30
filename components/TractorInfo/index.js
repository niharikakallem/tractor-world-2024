import Image from 'next/image'
import React from 'react'

export default function TractorInfo({infoImg,title,heading,infoText}) {
    return (
        <>
            <div className="bg-white mt-4 lg:px-14 md:px-6 sm:px-3 px-2 sm:pt-4 pt-4 sm:pb-8 py-2">
                <div className="sm:flex sm:pb-0 pb-6">
                    <div className="sm:w-1/2 w-full">
                        <Image src={infoImg} alt="Tractor" className="w-full" />
                    </div>
                    <div className="sm:w-1/2 w-full sm:mt-[3.5%] relative">
                        <Image src="/images/about/icon.svg" width={93} height={70} className="sm:block hidden" alt='icon' />
                        <div className="px-3">
                            <p className="font-medium sm:text-[17px] sm:mt-4">{title}</p>
                            <div className="font-semibold sm:my-4 my-2 text-3xl">{heading}</div>
                            <p className="sm:text-[17px]">{infoText}</p>
                        </div>
                        <Image src='/images/about/arrow.svg' width={952} height={48} className="absolute right-0 sm:bottom-[27%] w-full" alt='arrow'/> 
                    </div>
                </div>
            </div>
        </>
    )
}
