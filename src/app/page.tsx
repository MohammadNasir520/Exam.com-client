import FreeExams from "@/components/Views/FreeExams/page";
import Navbar from "@/components/ui/Navbar/Navbar";
import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

      <FreeExams></FreeExams>
    </div>
  );
}
