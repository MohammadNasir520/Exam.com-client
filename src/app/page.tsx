import CoursesByDiamond from "@/components/Views/CoursesByDiamond/page";
import FAQs from "@/components/Views/FAQs/FAQs";
import FreeExams from "@/components/Views/FreeExams/page";
import LiveExams from "@/components/Views/LiveExams/LiveExams";
import Practices from "@/components/Views/Practices/Practices";
import StudentReviews from "@/components/Views/StudentsReview/StudentReviews";

import TeachersReview from "@/components/Views/TeachersReview/TeachersReview";
import TopTeachers from "@/components/Views/TopTeacher/TopTeachers";
import Navbar from "@/components/ui/Navbar/Navbar";
import TeachersCourses from "@/components/ui/Slider/Slider";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <LiveExams></LiveExams>
      <Practices></Practices>
      <FreeExams></FreeExams>
      <CoursesByDiamond></CoursesByDiamond>
      <TeachersCourses></TeachersCourses>
      <TopTeachers></TopTeachers>
      <StudentReviews></StudentReviews>
      <TeachersReview></TeachersReview>
    </div>
  );
}
