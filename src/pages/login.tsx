// pages/login.tsx
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 여기는 나중에 실제 로그인 로직 넣고,
    // 지금 당장은 그냥 바로 dashboard로 이동
    router.push("/dashBoard");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#FFF6EB]">

      {/* 로고 */}
      <img 
        src="/icons/logo.svg"
        className="w-52 mb-10"
        alt="logo"
      />

      {/* 입력 박스 1 - 학번 */}
      <input
        type="text"
        placeholder="학번"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="
          w-[500px] h-[60px] rounded-md border border-[#F2C4A7]
          px-4 text-lg bg-white mb-4
        "
      />

      {/* 입력 박스 2 - 비밀번호 */}
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="
          w-[500px] h-[60px] rounded-md border border-[#F2C4A7]
          px-4 text-lg bg-white mb-6
        "
      />

      {/* 저장 옵션 */}
      <div className="flex gap-10 mb-6 text-sm text-gray-600">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          ID 저장하기
        </label>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          비밀번호 저장하기
        </label>
      </div>

      {/* 로그인 버튼 */}
      <button
        onClick={handleLogin}
        className="
          w-[150px] h-[50px] bg-[#EB6600] text-white text-lg
          font-bold rounded-md hover:opacity-90 hover:cursor-pointer
        "
      >
        로그인
      </button>
    </div>
  );
}
