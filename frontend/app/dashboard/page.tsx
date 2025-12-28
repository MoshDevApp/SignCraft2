import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <Header title="Dashboard" />
        <p>Welcome to SignCraft 🎉</p>
      </main>
    </div>
  );
}
