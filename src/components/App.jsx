import Sidebar from "./sidebar/Sidebar";
import MainContent from "./mainContent/MainContent";

export default function App() {

  return(
    <div className="flex h-screen w-screen min-w-[320]">
      <Sidebar />
      <MainContent />
    </div>
  )
}