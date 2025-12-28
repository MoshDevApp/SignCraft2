import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import AIChat from "@/components/AIChat";

export default function AIPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <Header title="AI Assistant" />

        <AIChat />

        <div className="mt-6 border p-4 text-sm text-gray-600">
          <h3 className="font-semibold mb-2">How AI Works</h3>
          <ul className="list-disc pl-4 space-y-1">
            <li>Uses Google Gemini 1.5 Flash (free tier)</li>
            <li>Strict rate limiting to protect quota</li>
            <li>No training on your data</li>
            <li>AI suggests — humans decide</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
