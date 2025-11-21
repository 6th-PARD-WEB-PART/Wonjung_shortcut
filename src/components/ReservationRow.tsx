interface ReservationRowProps {
  data: {
    reserveRoomId: number;
    roomId: number;
    date: string;
    floor: number;
  };
  index: number;
}

export default function ReservationRow({ data, index }: ReservationRowProps) {
  return (
      <div className="w-[1609px] text-left grid grid-cols-5 items-center py-4 mb-8">
        {/* No */}
        <div className="text-left text-xl text-neutral-800">{index + 1}</div>

        {/* 날짜 */}
        <div className="text-left text-xl text-neutral-800">{data.date}</div>

        {/* 호실 */}
        <div className="text-left text-xl text-neutral-800">
          은혜관 {data.roomId}호
        </div>

        {/* 예약취소 가능 시간 */}
        <div className="text-left text-xl text-neutral-800">
          ~ {data.date} 12:00pm
        </div>

        {/* 버튼 */}
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-orange-400 text-white font-black text-xl rounded-md">
            예약취소
          </button>
        </div>
      </div>
  );
}
