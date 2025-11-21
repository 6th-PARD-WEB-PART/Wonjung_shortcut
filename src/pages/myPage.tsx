import { useEffect, useState } from "react";
import { getAllReservationsApi } from "@/api/reserveAPI";
import ReservationRow from "@/components/ReservationRow";
import { Reservation } from "@/types/reservation";

export default function myPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const loadReservations = async () => {
    const data = await getAllReservationsApi();
    setReservations(data);
  };

  useEffect(() => {
    loadReservations();
  }, []);

  return (
    <div className="w-[1609px] px-16 py-12">
      {/* ===== 상단 프로필 & 인사 ===== */}
      <div className="flex items-center justify-between mb-[117px]">
        {/* 프로필 + 텍스트 */}
        <div className="flex items-center gap-6">
          {/* 프로필 이미지 */}
          <img
            src="/icons/profile.svg"
            alt="profile"
            className="w-24 h-24 rounded-full"
          />

          {/* 인사 텍스트 */}
          <div>
            <p className="text-black text-2xl">안녕하세요,</p>
            <p className="text-black text-5xl font-bold">
              김파드<span className="text-4xl font-bold"> 님</span>
            </p>
          </div>
        </div>
      </div>

      {/* ===== 예약 조회 제목 ===== */}
      <h2 className="text-neutral-800 text-3xl font-black mb-12">예약 조회</h2>

      {/* ===== 테이블 헤더 ===== */}
      <div className="grid grid-cols-5 w-[1167px] text-start text-xl font-bold text-neutral-800 mb-6 pl-5">
        <div>No</div>
        <div className="pl-8">날짜</div>
        <div className="pl-5">호실</div>
        <div className="pl-5">예약취소가능시간</div>
        <div className="text-right pr-5">바로가기</div>
      </div>

      {/* 데이터 리스트 (map 사용 -> 반복) */}
      {reservations.map((item, index) => (
        <ReservationRow
          key={`${item.roomNumber}-${item.date}`}
          data={item}
          index={index}
          onCancel={loadReservations}
        />
      ))}
    </div>
  );
}
