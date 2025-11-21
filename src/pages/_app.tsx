import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 로그인 페이지에서는 Sidebar 숨기기
  const hideSidebarRoutes = ["/login"];
  const shouldHideSidebar = hideSidebarRoutes.includes(router.pathname);

  return (
    <div className="flex">
      {!shouldHideSidebar && <Sidebar />}  {/* login에서는 안 보임 */}
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
