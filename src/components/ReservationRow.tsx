import { cancelReservationApi } from "@/api/reserveAPI";

interface ReservationRowProps {
  data: {
    roomNumber: number;
    reserveRoomId: number;
    roomId: number;
    date: string;
    floor: number;
  };
  index: number;
  onCancel: () => void;
}

export default function ReservationRow({ data, index, onCancel  }: ReservationRowProps) {
  const handleCancel = async () => {
  try {
    await cancelReservationApi(data.roomNumber, data.date);
    alert("예약이 취소되었습니다!");
    onCancel();
  } catch (err) {
    alert("예약취소 실패 (서버 오류)");
  }
};

  return (
      <div className="w-[1167px] grid grid-cols-5 items-center py-4 mb-8 pl-5">
        {/* No */}
        <div className="text-left text-xl text-neutral-800">{index + 1}</div>

        {/* 날짜 */}
        <div className="text-left text-xl text-neutral-800">{data.date}</div>

        {/* 호실 */}
        <div className="text-left text-xl text-neutral-800">
          은혜관 {data.roomNumber}호
        </div>

        {/* 예약취소 가능 시간 */}
        <div className="text-left text-xl text-neutral-800">
          ~ {data.date} 12:00pm
        </div>

        {/* 버튼 */}
        <div className="flex justify-end pl-10">
          <button 
            onClick={handleCancel}
          className="px-4 py-2 bg-orange-400 text-white font-black text-xl rounded-md hover:cursor-pointer">
            예약취소
          </button>
        </div>
      </div>
  );
}
