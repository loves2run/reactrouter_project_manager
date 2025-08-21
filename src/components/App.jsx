import Sidebar from "./sidebar/Sidebar";
import MainContent from "./mainContent/MainContent";

export default function App() {

  return(
    <div className="flex w-screen h-screen items">
      <Sidebar />
      <MainContent />
    </div>
  )
}