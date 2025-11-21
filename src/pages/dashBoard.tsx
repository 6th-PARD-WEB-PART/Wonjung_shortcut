import { useEffect, useState } from "react";
import { getAllReservationsApi } from "@/api/reserveAPI";
import DashboardCard from "@/components/DashboardCard";

export default function Dashboard() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    loadReservations();
  }, []);

  const loadReservations = async () => {
    const data = await getAllReservationsApi();
    setReservations(data);
  };

  return (
    <div className="w-[1609px] px-16 py-12">
      {/* 제목 */}
      <h2 className="text-neutral-800 text-3xl font-black mb-12">대시보드</h2>

      {/* map으로 카드 나열 */}
      {reservations.map((item, index) => (
        <div
          key={`${item.roomNumber}-${item.date}`}
          className="flex gap-10 items-start"
        >
          {/* 왼쪽 날짜 영역 */}
          <div className="w-[80px] text-right mr-4">
            <p className="text-xl font-bold">{item.date.slice(8, 10)}</p>
            <p className="text-gray-500 text-sm">
              {new Date(item.date).toLocaleString("en-US", { month: "short" })}
            </p>
          </div>

          {/* 카드 */}
          <DashboardCard
            date={item.date}
            roomNumber={item.roomNumber}
            onCancel={loadReservations}
          />
        </div>
      ))}
    </div>
  );
}
