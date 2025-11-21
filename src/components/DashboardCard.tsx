import { cancelReservationApi } from "@/api/reserveAPI";

interface DashboardCardProps {
  date: string;
  roomNumber: number;
  onCancel: () => void;  // ← 이거 꼭 추가해야 함
}

export default function DashboardCard({ date, roomNumber, onCancel  }: DashboardCardProps) {

  const handleCancel = async () => {
    if (!confirm("정말로 예약을 취소하시겠습니까?")) return;

    try {
      await cancelReservationApi(roomNumber, date);
      alert("예약이 취소되었습니다.");
      onCancel(); // Dashboard 새로 로드
    } catch (err) {
      alert("취소 실패 (서버 오류)");
    }
  };

  return (
    <div className="w-[900px] bg-white rounded-xl shadow p-6 flex justify-between items-center mb-10">

      {/* 왼쪽 정보 */}
      <div>
        <p className="text-2xl font-black">은혜관 {roomNumber}호</p>

        <div className="mt-4 space-y-2">
          <div className="flex gap-4 items-center">
            <span className="px-2 py-1 bg-gray-200 rounded text-sm font-bold">입실</span>
            <span>{date} 오후 3시</span>
          </div>

          <div className="flex gap-4 items-center">
            <span className="px-2 py-1 bg-gray-200 rounded text-sm font-bold">퇴실</span>
            <span>{date} 오전 11시</span>
          </div>
        </div>
      </div>

      {/* 오른쪽 버튼 */}
      <button 
      onClick={handleCancel}
      className="px-4 py-2 bg-orange-400 text-white font-black rounded-md hover:opacity-80 hover:cursor-pointer">
        예약취소
      </button>
    </div>
  );
}
