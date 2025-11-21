import { useState } from "react";
import Sidebar from "@/components/sidebar";
import generateCalendar from "@/components/generateCalender";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Reservation() {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  const [year, setYear] = useState(todayYear);
  const [month, setMonth] = useState(todayMonth);

  const [selectedDate, setSelectedDate] = useState<number | null>(todayDate);

  const calendarData = generateCalendar(year, month);

  const handlePrevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className="flex w-full h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 pt-0 p-10 overflow-auto">
        {/* 상단 제목 영역 */}
        <div className="w-full h-36 pl-7 pt-14 bg-white/90 border-b-2 border-zinc-300 flex items-start">
          <div className="text-3xl font-black">예약하기</div>
        </div>

        {/* 캘린더 + 좌석도 나란히 */}
        <div className="flex gap-10 mt-10">
          {/* 캘린더 */}
          <div className="bg-white shadow-[0px_0px_10px_0px_rgba(166,166,166,0.25)] rounded-xl p-6 w-[589px] h-[820px]">
            <h2 className="text-xl font-bold mb-2">
              공실을 예약하고 싶은 날짜
            </h2>

            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400 font-semibold text-xl">
                {year}년 {month + 1}월
              </p>
              <div className="flex gap-4 text-2xl">
                <button onClick={handlePrevMonth} className="hover:opacity-60">
                  &lt;
                </button>
                <button onClick={handleNextMonth} className="hover:opacity-60">
                  &gt;
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 mb-3">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="w-10 h-10 flex items-center justify-center text-lg font-bold"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-4 text-center">
              {calendarData.map((week, i) =>
                week.map((date, j) => {
                  const isSelected = date === selectedDate;

                  return (
                    <button
                      key={`${i}-${j}`}
                      onClick={() => date !== 0 && setSelectedDate(date)}
                      className={`
                        w-10 h-10 flex items-center justify-center rounded-full transition
                        ${date !== 0 ? "text-black" : "text-gray-300"}
                        ${isSelected ? "bg-orange-400 text-white" : ""}
                      `}
                    >
                      {date !== 0 ? date : ""}
                    </button>
                  );
                })
              )}
            </div>

            <button className="mt-8 bg-orange-400 text-white px-8 py-3 rounded-xl text-xl font-bold hover:opacity-90">
              예약하기
            </button>
          </div>

          {/* 👉👉👉 여기부터 너가 준 '피그마 방배치도' 그대로 들어간 부분 */}
          <div className="w-[904px] h-[820px] bg-white border-2 p-6 relative overflow-hidden">
            <div className="w-60 h-12 text-black text-xl font-bold">
              1층
            </div>
            <div className="absolute left-[342px] top-[12px] text-black text-xl font-bold">
              2층
            </div>
            <div className="absolute left-[578px] top-[12px] text-black text-xl font-bold">
              3층
            </div>

            <div className="absolute left-[53px] top-[118px] text-black text-3xl font-black">
              은혜관 1층
            </div>

            <div className="absolute w-[801.62px] h-[400px] left-[56px] top-[170px]">
              {/* ← 너가 준 좌석/출입문 코드 그대로 복사본 */}
              <div className="absolute left-[750px] top-[150px] text-zinc-700 text-xl">
                출입문
              </div>

              <div className="absolute w-16 h-10 left-0 top-[150px] border border-neutral-400 flex items-center justify-center text-xl">
                120
              </div>
              <div className="absolute w-16 h-10 left-[66px] top-[230px] border border-neutral-400 flex items-center justify-center text-xl">
                119
              </div>
              <div className="absolute w-16 h-10 left-0 top-[230px] border border-neutral-400 flex items-center justify-center text-xl">
                121
              </div>

              {/* 중간 책상 / 자리들 */}
              <div className="absolute w-16 h-10 left-[198px] top-[150px] border border-neutral-400"></div>
              <div className="absolute w-16 h-10 left-[198px] top-[230px] border border-neutral-400"></div>
              <div className="absolute w-16 h-10 left-[264px] top-[190px] border border-neutral-400 rotate-180"></div>

              <div className="absolute w-16 h-10 left-[301px] top-[150px] border border-neutral-400"></div>
              <div className="absolute w-16 h-10 left-[301px] top-[230px] border border-neutral-400"></div>
              <div className="absolute w-16 h-10 left-[367px] top-[190px] border border-neutral-400 rotate-180"></div>

              <div className="absolute w-16 h-10 left-[433px] top-[150px] border border-neutral-400"></div>
              <div className="absolute w-16 h-10 left-[433px] top-[230px] border border-neutral-400"></div>
              <div className="absolute w-16 h-10 left-[499px] top-[190px] border border-neutral-400 rotate-180"></div>

              <div className="absolute w-[112px] h-10 left-[654px] top-[0px] border border-neutral-400"></div>
              <div className="absolute w-[112px] h-10 left-[654px] top-[66px] border border-neutral-400"></div>
              <div className="absolute w-[112px] h-10 left-[654px] top-[143px] border border-neutral-400"></div>
              <div className="absolute w-[112px] h-10 left-[700px] top-[230px] border border-neutral-400 rotate-180"></div>
            </div>

            {/* 예약 버튼 */}
            <div className="absolute left-[692px] top-[716px] w-40 px-7 py-3 bg-orange-400 rounded-[10px] flex justify-center items-center">
              <div className="text-white text-2xl font-black">예약하기</div>
            </div>
          </div>
          {/* 여기까지 피그마 코드 끝 */}
        </div>
      </main>
    </div>
  );
}
