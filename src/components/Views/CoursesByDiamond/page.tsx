import CourseByDiamondCard from "./CourseDiamondCard/CourseByDiamondCard";

const CoursesByDiamond = () => {
  const CourseByDiamondData = [
    { title: "English", id: 1, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 2, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 3, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 4, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 5, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 6, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 7, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 8, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 9, totalTopic: 20, totalQuestion: 687 },
    { title: "English", id: 10, totalTopic: 20, totalQuestion: 687 },
  ];
  return (
    <div className="my-10">
      <div className="my-10">
        <h1 className="text-2xl font-bold text-center">Course By Diamond</h1>

        <p className="text-base font-normal text-center my-5">
          If You have not any Diamond Please take Free exam First and Earn
          Diamond
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 space-y-6">
        {CourseByDiamondData?.map((courseDiamondData) => (
          <div
            className=" flex justify-center items-center"
            key={courseDiamondData?.id}
          >
            <CourseByDiamondCard
              courseDiamondData={courseDiamondData}
            ></CourseByDiamondCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesByDiamond;
