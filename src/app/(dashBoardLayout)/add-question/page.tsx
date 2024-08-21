"use client";
import { useState } from "react";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";

const AddQuestion = () => {
  const [options, setOptions] = useState(["1", "2", "3", "4"]);
  const addOption = () => {
    // Get the last number, convert it to an integer, and increment by 1
    const lastOptionNumber = parseInt(options[options.length - 1], 10) + 1;
    // Update the state with the new option
    setOptions([...options, lastOptionNumber.toString()]);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleCorrectAnswerChange = (option: string) => {
    console.log(`Selected correct answer for Option ${option}: ${option}`);
  };
  const SelectOptions = [{ label: "BCS", value: "bcs" }];
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-center text-2xl font-bold">
        {" "}
        Input Question and select Correct Answer
      </h1>
      {/* <div>
        <FormSelectField
          name="a"
          label="Select Topic"
          size="large"
          options={SelectOptions}
        ></FormSelectField>
      </div> */}
      <Form submitHandler={onSubmit}>
        <div className="my-3 ">
          <FormInput
            name={"Question"}
            label={`Question`}
            type="text"
          ></FormInput>
        </div>
        <p>Options...</p>
        <div className="flex justify-center flex-col w-full min-w-[400px] ">
          {options?.map((option) => (
            <div key={option} className="my-3 flex items-center gap-2">
              <div className="mr-2 block">
                <input
                  className="cursor-pointer "
                  type="radio"
                  name="correctAnswer"
                  value={option}
                  onChange={() => handleCorrectAnswerChange(option)}
                />
              </div>
              <FormInput
                name={option}
                label={` ${option}`}
                type="text"
              ></FormInput>
            </div>
          ))}
        </div>

        <div className="flex justify-end ">
          <button
            className="inline-flex  text-sm items-center bg-[#2A6F97] hover:bg-[#013a63] text-white border-0 py-1 px-2 focus:outline-none rounded  mt-4 md:mt-0"
            onClick={() => addOption()}
          >
            {" "}
            Add Option
          </button>
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
