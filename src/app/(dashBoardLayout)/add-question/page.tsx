"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";

// import Form from "@/components/Forms/Form";
// import FormInput from "@/components/Forms/FormInput";
// import { Button, Col, Collapse, Row } from "antd";
// import React from "react";

// const AddQuestion = () => {
//   const onSubmit = (data: any) => {
//     console.log(data);
//   };
//   return (
//     <div className="flex justify-center items-center flex-col">
//       <h1 className="text-center text-2xl font-bold">
//         {" "}
//         Input Question and select Correct Answer
//       </h1>
//       <Form submitHandler={onSubmit}>
//         <div className=" flex justify-center flex-col w-full min-w-[400px] ">
//           <div className="my-3">
//             <FormInput name="a" label="Option a" type="text"></FormInput>
//           </div>
//           <div className="my-3">
//             <FormInput name="b" label="Option b " type="text"></FormInput>
//           </div>
//           <div className="my-3">
//             <FormInput name="c" label="Option c" type="text"></FormInput>
//           </div>

//           <div className="my-3">
//             <FormInput name="d" label="Option d" type="text"></FormInput>
//           </div>
//         </div>

//         <button
//           className="inline-flex items-center  bg-[#2A6F97] hover:bg-[#013a63]  text-white border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
//           type="submit"
//         >
//           {" "}
//           Submit
//         </button>
//       </Form>
//     </div>
//   );
// };

// export default AddQuestion;

// // ... (imports remain the same)
// import { useState } from "react";
// import toast from "react-hot-toast";

// const AddQuestion = () => {
//   const [correctOption, setCorrectOption] = useState("");
//   const onSubmit = (data: any) => {
//     if (!correctOption) {
//       return toast.error("select correct option first");
//     }
//     console.log(data);
//   };

//   const handleCorrectAnswerChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setCorrectOption(e.target.value);
//   };

//   const options = ["a", "b", "c", "d", "e"];

//   return (
//     <div className="flex justify-center items-center flex-col">
//       <h1 className="text-center text-2xl font-bold">
//         {" "}
//         Input Question and select Correct Answer
//       </h1>
//       <Form submitHandler={onSubmit}>
//         <div className="flex justify-center flex-col w-full min-w-[400px] ">
//           {/* Options A, B, C, D */}
//           {options.map((option) => (
//             <div key={option} className="my-3">
//               <FormInput
//                 name={option}
//                 label={`Option ${option}`}
//                 type="text"
//               ></FormInput>
//             </div>
//           ))}

//           {/* Radio buttons for selecting correct answer */}
//           <div className="my-3">
//             <p>Select Correct Answer:</p>
//             {options.map((option) => (
//               <label key={option} className="ml-2">
//                 <input
//                   type="radio"
//                   name="correctAnswer"
//                   value={option}
//                   onChange={handleCorrectAnswerChange}
//                 />{" "}
//                 {`Option ${option}`}
//               </label>
//             ))}
//           </div>
//         </div>

//         <button
//           className="inline-flex items-center bg-[#2A6F97] hover:bg-[#013a63] text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
//           type="submit"
//         >
//           {" "}
//           Submit
//         </button>
//       </Form>
//     </div>
//   );
// };

// export default AddQuestion;

// ... (imports remain the same)

const AddQuestion = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleCorrectAnswerChange = (option: string) => {
    console.log(`Selected correct answer for Option ${option}: ${option}`);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center text-2xl font-bold">
        {" "}
        Input Question and select Correct Answer
      </h1>
      <Form submitHandler={onSubmit}>
        <div className="flex justify-center flex-col w-full min-w-[400px] ">
          {["1", "2", "3", "4"].map((option) => (
            <div key={option} className="my-3 flex items-center gap-2">
              <label className="mr-2 block">
                <input
                  className="cursor-pointer "
                  type="radio"
                  name="correctAnswer"
                  value={option}
                  onChange={() => handleCorrectAnswerChange(option)}
                />
              </label>
              <FormInput
                name={option}
                label={` ${option}`}
                type="text"
              ></FormInput>
            </div>
          ))}
        </div>

        <div className="flex justify-center ">
          <button
            className="inline-flex  items-center bg-[#2A6F97] hover:bg-[#013a63] text-white border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
            type="submit"
          >
            {" "}
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
};

export default AddQuestion;
