import Image from "next/image";
import Link from "next/link";
import { headerData1, headerData2 } from "@/utils/constant";
import HeaderLogo from "@/public/headerLogo.svg";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container py-5 flex justify-between relative drop-shadow-[#0C0C0D0D]">
        <div className="py-[15px] flex gap-6">
          {headerData1.map((item) => (
            <Link href={`/${item.id}`} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[35%]">
          <Image
            src={HeaderLogo}
            alt="logo"
            width={144}
            height={144}
            className="object-contain logo"
          />
        </div>
        <div className="py-[15px] flex gap-6">
          {headerData2.map((item) => (
            <Link href={`/${item.id}`} key={item.id}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
