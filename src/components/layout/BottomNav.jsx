import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Inicio", icon: "home" },
  { to: "/chat", label: "Chat", icon: "smart_toy" },
  { to: "/scan", label: "Escanear", icon: "photo_camera" },
  { to: "/market", label: "Market", icon: "storefront" },
  { to: "/perfil", label: "Perfil", icon: "person" },
];

export default function BottomNav() {
  return (
    <nav className="absolute bottom-0 left-0 w-full rounded-t-[1.5rem] bg-white/95 backdrop-blur-2xl shadow-[0px_-4px_24px_rgba(0,0,0,0.04)] flex justify-around items-center px-3 pb-5 pt-2.5 z-50 border-t border-gray-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="flex flex-col items-center justify-center gap-1 w-14"
        >
          {({ isActive }) => (
            <>
              <span
                className={`material-symbols-outlined text-[20px] p-1.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#C0F200] text-gray-900 shadow-[0_4px_12px_rgba(192,242,0,0.3)] -translate-y-0.5"
                    : "text-gray-400 hover:text-gray-600"
                }`}
                style={{
                  fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                {item.icon}
              </span>
              <span
                className={`text-[9px] transition-all duration-300 tracking-wide ${
                  isActive ? "text-gray-900 font-bold" : "text-gray-400 font-medium"
                }`}
              >
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}