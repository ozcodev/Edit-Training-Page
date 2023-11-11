import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AddQuestion = () => {
  const [questions, setQuestions] = useState([{ id: 1, text: '' }]);
  const [nextQuestionId, setNextQuestionId] = useState(2);

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: nextQuestionId, text: '' }]);
    setNextQuestionId(nextQuestionId + 1);
  };

  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const onDrop = (acceptedFiles) => {
    // Handle the dropped files here
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="bg-white-A700 flex flex-col items-start justify-start p-[18px] rounded-[5px] shadow-bs1 w-full">
      <div className="flex flex-col gap-[5px] items-start justify-start ml-1.5 md:ml-[0]">
        <h4
          className="text-[13px] text-gray-700"
          
        >
          Training quiz
        </h4>
        <h4
          className="text-[11px] text-gray-400_03"
         
        >
          Here you can manage the questions by clicking on the “Add Question”
          button and choose from the available types of question. You can add up
          to 100 questions.
        </h4>
      </div>
      <hr className="bg-gray-200 h-px ml-1.5 md:ml-[0] mt-2.5 w-[99%]" />

      {questions.map((question) => (
        <div className="bg-[#EBEBEB] flex flex-row gap-[26px] items-start justify-start ml-1.5 px-6 py-3 mt-[13px] rounded-[5px] w-full">
          
          <div className="w-[70%] md:w-[60%]">
            <div className="flex flex-row items-start justify-between mb-2">
              <div className="text-[15px] text-blue_gray-900 text-center">
                Question {question.id}
              </div>
              <button
                className="text-gray-400_02"
                onClick={() => handleRemoveQuestion(question.id)}
              >
                <img src="images/img_close.svg" alt="" />
              </button>
            </div>
            <input
              name="question"
              placeholder="Enter your question here "
              className="font-semibold rounded-[5px] text-xs h-[46px] w-full bg-white-A700 text-black placeholder:text-gray-400 leading-[normal] p-0 text-[13px]  pl-2 text-left"
            />
            <div className="flex flex-col gap-5 items-start justify-start my-5 w-full">
              <div className="bg-white-A700 border mb-[-14px] border-gray-200 border-solid flex flex-row items-start justify-between p-[5px] rounded-[5px] w-full">
                <h4
                  className="my-[5px] text-gray-700 text-xs itext-center"
                  
                >
                  True
                </h4>
                <img
                  className="h-[26px] md:h-auto object-cover cursor-pointer"
                  src="images/img_btns.png"
                  alt="True Button"
                  title="Upload image"
                />
              </div>
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-row items-start justify-between p-[5px] rounded-[5px] w-full">
                <h4
                  className="my-[5px] text-gray-700 text-xs itext-center"
                  
                >
                  False
                </h4>
                <img
                  className="h-[26px] md:h-auto object-cover cursor-pointer"
                  src="images/img_btns_green_500_01.png"
                  alt="Upload image"
                  title="Upload image"
                />
              </div>
            </div>
          </div>

          
          <div className="w-[35%] md:w-[40%]">
            <div className="flex flex-row items-start justify-between mb-2">
              <div className="text-[15px] text-blue_gray-900 text-start">
                Question Image
              </div>
              <h4 className="text-gray-400_02">
                Optional
              </h4>
            </div>
            <div className="flex sm:flex-col flex-row font-roboto justify-between">
              <div
                className={`bg-[#EBEBEB] cursor-pointer border-2 border-dashed border-gray-300 flex flex-col items-center justify-center mb-1 p-[43px] rounded-[3px] w-[100%] ${
                  isDragActive ? 'bg-blue-200' : ''
                }`}
                {...getRootProps()}
              >
                <input {...getInputProps()} />

                <img
                  className="h-[35px] md:h-auto object-cover"
                  src="images/img_vector_35x50.png"
                  alt="Vector Three"
                />
                <h4 className="leading-[17.00px] mt-1 text-center text-gray-400_03 text-xs">
                  <span className="text-gray-400_03 font-lato font-normal">
                    Drag and drop your image here
                    <br />
                    Or{' '}
                  </span>
                  <span className="text-blue-700 font-lato font-normal">
                    browse files
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        className=" my-4 bg-[#e1efff] text-blue-500 font-lato font-bold w-full h-[40px] rounded-[5px]  "
        onClick={handleAddQuestion}
      >
        Add Question +
      </button>
    </div>
  );
};

export default AddQuestion;
