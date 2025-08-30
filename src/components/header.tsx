import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { App as AntdApp } from "antd";
import {
  Leaf,
  TreePine,
  Menu,
  X,
  LogOut,
  User,
  Settings,
  TrendingUp,
  Upload,
  Eye,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    () => !!localStorage.getItem("token")
  );
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { message } = AntdApp.useApp();

  useEffect(() => {
    const syncAuth = () => setIsLoggedIn(!!localStorage.getItem("token"));
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("storage", syncAuth);
    window.addEventListener("auth:changed", syncAuth as EventListener);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("auth:changed", syncAuth as EventListener);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("auth:changed"));
    message.success("登出成功");
    navigate("/");
  };

  const navItems = [
    { to: "/carbon-trading", text: "碳匯交易", icon: TrendingUp },
    { to: "/upload-carbon", text: "上架碳匯", icon: Upload },
    { to: "/state", text: "查看狀態", icon: Eye },
    { to: "/admin", text: "管理員審核", icon: Settings },
    { to: "/account", text: "帳號管理", icon: User },
    { text: "登出", isButton: true, onClick: handleLogout, icon: LogOut },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-20 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-green-800/5 to-teal-900/5" />
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-1/3 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      <header
        className={`site-header fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-green-100/50"
            : "bg-gradient-to-r from-white/80 via-green-50/60 to-emerald-50/80 backdrop-blur-md"
        }`}
      >
        <div className="h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />

        <nav className="container mx-auto flex justify-between items-center px-6 py-4">
          <a
            className="flex items-center gap-3 group hover:scale-105 transition-all duration-300 cursor-pointer"
            href="/"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 p-2.5 rounded-xl shadow-lg">
                <TreePine className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ESG 碳匯平台
              </h1>
              <p className="text-xs text-green-600/80 font-medium">
                Carbon Trading Platform
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {isLoggedIn &&
              navItems.map((item, index) => (
                <div key={index}>
                  {item.isButton ? (
                    <button
                      onClick={item.onClick}
                      className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 "
                    >
                      {item.text}
                    </button>
                  ) : (
                    <a
                      href={item.to}
                      className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200"
                    >
                      {item.text}
                    </a>
                  )}
                </div>
              ))}

            {!isLoggedIn && (
              <div className="ml-4">
                <a
                  href="/auth"
                  className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Leaf className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">開始使用</span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                </a>
              </div>
            )}
          </div>

          <div className="flex items-center lg:hidden">
            <button
              className="relative p-3 text-slate-700 hover:text-emerald-600 focus:outline-none rounded-xl hover:bg-green-50/80 transition-all duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? "opacity-0 rotate-90" : "opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? "opacity-100" : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
              menuOpen ? "visible" : "invisible"
            }`}
          >
            <div
              className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setMenuOpen(false)}
            />

            <div
              className={`absolute top-[81px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl ring-1 ring-green-100/50 overflow-hidden transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />

              <div className="py-3">
                {isLoggedIn &&
                  navItems.map((item, index) => (
                    <div key={index} className="px-2">
                      {item.isButton ? (
                        <button
                          onClick={() => {
                            setMenuOpen(false);
                            if (typeof item.onClick === "function") {
                              item.onClick();
                            }
                          }}
                          className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-left text-slate-700 hover:text-emerald-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 group"
                        >
                          <span className="font-medium">{item.text}</span>
                        </button>
                      ) : (
                        <a
                          href={item.to}
                          className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-200 group cursor-pointer"
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="font-medium">{item.text}</span>
                        </a>
                      )}
                    </div>
                  ))}

                {!isLoggedIn && (
                  <div className="px-2 pt-3 pb-1">
                    <a
                      href="/auth"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                      <Leaf className="w-5 h-5" />
                      開始使用
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
