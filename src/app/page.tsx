import CoursesByDiamond from "@/components/Views/CoursesByDiamond/page";
import FreeExams from "@/components/Views/FreeExams/page";
import LiveExams from "@/components/Views/LiveExams/LiveExams";
import Practices from "@/components/Views/Practices/Practices";
import Navbar from "@/components/ui/Navbar/Navbar";
import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <LiveExams></LiveExams>
      <Practices></Practices>
      <FreeExams></FreeExams>
      <CoursesByDiamond></CoursesByDiamond>
    </div>
  );
}
