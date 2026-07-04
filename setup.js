const fs = require('fs');
const path = require('path');

const files = {
  'src/components/layout/PhoneFrame.jsx': `export default function PhoneFrame({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-200 py-8">
      <div className="w-[390px] h-[844px] bg-background rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden relative flex flex-col">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-50"></div>
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
`,

  'src/components/layout/TopAppBar.jsx': `export default function TopAppBar({ points = "1,250" }) {
  return (
    <header className="bg-surface/70 backdrop-blur-xl sticky top-0 border-b border-white/20 flex justify-between items-center w-full px-container-margin py-base z-40">
      <div className="flex items-center gap-sm">
        <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-primary-fixed"></div>
      </div>
      <h1 className="font-headline text-2xl font-black text-primary tracking-tighter">
        ACOPI
      </h1>
      <span className="font-label text-sm text-primary bg-primary-container/30 px-3 py-1 rounded-full border border-primary-fixed/50">
        {points} PTS
      </span>
    </header>
  );
}
`,

  'src/components/layout/BottomNav.jsx': `import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: "🏠" },
  { to: "/chat", label: "Chat", icon: "🤖" },
  { to: "/scan", label: "Scan", icon: "📷" },
  { to: "/market", label: "Market", icon: "🏪" },
  { to: "/perfil", label: "Profile", icon: "👤" },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-[390px] rounded-t-2xl bg-surface/80 backdrop-blur-2xl shadow-[0px_-8px_40px_rgba(0,0,0,0.08)] flex justify-around items-center px-4 pb-6 pt-2 z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            \`flex flex-col items-center justify-center p-3 rounded-full transition-all \${
              isActive
                ? "bg-primary-container text-on-primary-container scale-110 -translate-y-2 shadow-md"
                : "text-on-surface-variant"
            }\`
          }
        >
          <span className="text-xl">{item.icon}</span>
        </NavLink>
      ))}
    </nav>
  );
}
`,
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log('Creado:', filePath);
}

console.log('\\n✅ Listo! Archivos creados.');