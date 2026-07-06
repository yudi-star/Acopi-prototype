import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: "dashboard", end: true },
  { to: "/admin/solicitudes", label: "Solicitudes", icon: "list_alt" },
  { to: "/admin/rutas", label: "Rutas", icon: "map" },
  { to: "/admin/estadisticas", label: "Estadísticas", icon: "bar_chart" },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-screen">
        <div className="px-6 py-6 border-b border-gray-100">
          <h1 className="text-xl font-extrabold text-[#536600] tracking-tight">
            ACOPI
          </h1>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
            Panel Admin
          </p>
        </div>

        <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#C0F200] text-gray-900"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Admin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-bold text-gray-800 truncate">
                Admin Global
              </p>
              <p className="text-[10px] text-gray-400 truncate">
                admin@acopi.pe
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Contenido */}
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}