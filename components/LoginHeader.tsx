'use client';

import Image from 'next/image';

export default function LoginHeader() {
  return (
    <>
      <div className="w-full min-h-[30px] hidden relative items-center justify-between bg-transparent px-4 sm:px-15 py-4">
        <div className="flex items-center gap-3">
          <Image src="https://i.postimg.cc/136vp5VJ/Bof-A-rgb.png" width={230} height={28} className="" alt="logo" />
          <span>Log In</span>
        </div>
      </div>
    </>
  );
}
