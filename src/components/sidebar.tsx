export default function Sidebar(){
  return (
    <nav className="w-[311px] h-screen bg-[#fff6eb] flex flex-col px-6 py-6">
      
      {/* 로고 + 제목 */}
      <div className="mb-10">
      
        <h1 className="justify-start text-black text-3xl font-bold">도미터리</h1>
      </div>

      {/* 메뉴 리스트 */}
      <ul className="flex flex-col gap-6 mt-4">
        
        {/* 대시보드 */}
        <li>
          <a className="flex items-center gap-3 text-[18px] text-black cursor-pointer hover:opacity-80">
            <img src="/icons/dashboardIcon.svg" className="w-6 h-6" />
            대시보드
          </a>
        </li>

        {/* 예약하기 */}
        <li>
          <a className="flex items-center gap-3 text-[18px] text-black cursor-pointer hover:opacity-80">
            <img src="/icons/reserveIcon.svg" className="w-6 h-6" />
            예약하기
          </a>
        </li>

        {/* 마이페이지 */}
        <li>
          <a className="flex items-center gap-3 text-[18px] text-black cursor-pointer hover:opacity-80">
            <img src="/icons/myPageIcon.svg" className="w-6 h-6" />
            마이페이지
          </a>
        </li>

        {/* 이용안내 */}
        <li>
          <a className="flex items-center gap-3 text-[18px] text-black cursor-pointer hover:opacity-80">
            <img src="/icons/infoIcon.svg" className="w-6 h-6" />
            이용안내
          </a>
        </li>

      </ul>

    </nav>

  );
}