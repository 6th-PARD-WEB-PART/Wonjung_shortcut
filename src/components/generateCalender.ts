// 달력 생성 함수 (월/년마다 자동 생성)
export default function generateCalendar(year: number, month: number) {
  const dates: number[][] = [];
  let week: number[] = [];

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 앞쪽 빈 칸
  for (let i = 0; i < firstDay; i++) week.push(0);

  // 실제 날짜 채우기
  for (let day = 1; day <= lastDate; day++) {
    week.push(day);
    if (week.length === 7) {
      dates.push(week);
      week = [];
    }
  }

  // 마지막 줄 채우기
  if (week.length > 0) {
    while (week.length < 7) week.push(0);
    dates.push(week);
  }

  return dates;
}
