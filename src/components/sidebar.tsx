import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { label: "대시보드", href: "/dashBoard", icon: "/icons/dashBoardIcon.svg" },
  { label: "예약하기", href: "/reservation", icon: "/icons/reservationIcon.svg" },
  { label: "마이페이지", href: "/myPage", icon: "/icons/mypageIcon.svg" },
  { label: "이용안내", href: "/info", icon: "/icons/informationIcon.svg" },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <nav className="w-[311px] h-screen bg-[#FFF6EB] flex flex-col justify-between py-10">

      {/* ===== 상단 로고 + 이름 ===== */}
      <div>
        <div className="flex items-center gap-4 px-8">
          <Link href="/dashBoard">
            <img src="/icons/logo.svg" className="w-60 h-60 cursor-pointer" alt="logo"/>
          </Link>
          
        </div>

        {/* ===== 메뉴 리스트 ===== */}
        <ul className="flex flex-col">
          {menuItems.map((item) => {
            const isFocus = router.pathname === item.href;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`
                    w-full px-8 py-5 flex items-center gap-4 font-bold transition-all
                    ${
                      isFocus
                        ? "bg-white text-[#EB6600]"
                        : "bg-[#FFF6EB] text-black"
                    }
                    hover:bg-[#FFEBDB] active:bg-[#FFC7B4]
                  `}
                >
                  <img
                    src={item.icon}
                    className="w-7 h-7"
                  />
                  
                  <span
                    className={`
                      text-xl font-bold 
                      ${isFocus ? "text-[#EB6600]" : "text-black"}
                    `}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ===== 하단 아이콘 ===== */}
      <div className="flex flex-col gap-6 mb-6 self-start pl-8">
        <img
          src="/icons/NotificationIcon.svg"
          className="w-8 h-8 cursor-pointer hover:opacity-60"
        />
        <img
          src="/icons/SettingIcon.svg"
          className="w-8 h-8 cursor-pointer hover:opacity-60"
        />
      </div>
    </nav>
  );
}
