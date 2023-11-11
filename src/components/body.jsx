import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import CustomOptionsDropdown from './CustomOptionsDropdown'


const Body = () => {
  const [formData, setFormData] = useState({
    category: '',
    topic: '',
    years: '',
    training: '',
    assign: '',
    department: '',
    functions: '',
    description: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onDrop = (acceptedFiles) => {
    // Handle the dropped files
    console.log(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const options = {
    category: [
      { value: 'option1', label: 'Option 1', image: 'images/info.svg' },
      { value: 'option2', label: 'Option 2', image: 'images/info.svg' },
      { value: 'option2', label: 'Option 2', image: 'images/info.svg' },
      
    ],
    topic: [
      { value: 'optionA', label: 'Option A', image: 'images/info.svg' },
      { value: 'optionB', label: 'Option B', image: 'images/info.svg' },
      { value: 'optionB', label: 'Option B', image: 'images/info.svg' },
      
    ],
    training: [
      { value: 'optionX', label: 'Option X', image: 'images/english.svg' },
      { value: 'optionY', label: 'Option Y', image: 'images/english.svg' },
      { value: 'optionY', label: 'Option Y', image: 'images/english.svg' },
     
    ],
  };

  return (
    <div className="flex justify-center mt-8 space-x-4">
      <div className="bg-white-A700 p-4 shadow-bs1 rounded-[5px] mb-4 w-[87%] md:w-full">
        <div className="mb-4">
          <div className="flex">
            <div className="w-1/3 mx-2">
              <div className="flex justify-between">
                <label className="mb-1">Category:</label>
                <div className="flex items-center justify-between">
                  <h5
                    className="text-blue-500 text-xs"
                    size="txtLatoSemiBold12Blue500"
                  >
                    <span className="text-blue-500 font-semibold">Add new</span>
                    <span className="text-blue-500  text-[13px] font-semibold">
                      {' '}
                      +
                    </span>
                  </h5>
                </div>
              </div>

            
              <CustomOptionsDropdown options={options.category} type="Category" />
            </div>

            <div className="w-[52%] mx-2">
              <div className="flex justify-between">
                <label className="mb-1">Topic:</label>
                <div className="flex items-center justify-between">
                  <h5
                    className="text-blue-500 text-xs"
                    size="txtLatoSemiBold12Blue500"
                  >
                    <span className="text-blue-500 font-semibold">Add new</span>
                    <span className="text-blue-500  text-[13px] font-semibold">
                      {' '}
                      +
                    </span>
                  </h5>
                </div>
              </div>
              <CustomOptionsDropdown options={options.topic} type="Topic" />
            </div>

            <div className="w-1/3 mx-2">
              <label className=" flex mb-1 items-center ">Valid for</label>

              <select className="border p-2 w-full rounded-md">
                <option value="">1 Year</option>
                
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="w-[70%] mx-2">
              <label className="mb-1">Training:</label>
              <CustomOptionsDropdown options={options.training} type="training" />
            </div>

            <div className="w-1/2 mx-2">
              <label className="mb-1">Assign To:</label>
              <select
                value={formData.assign}
                onChange={(e) => handleChange(e.target.value)}
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select Assign</option>
                
              </select>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex">
            <div className="w-[40%]">
              <div className="mb-2 mx-2">
                <label className="mb-1">Department:</label>
                <select
                  value={formData.department}
                  onChange={(e) => handleChange(e.target.value)}
                  className="border p-2 w-full rounded-md"
                >
                  <option value="">Select Department</option>
                  
                </select>
              </div>

              <div className="mb-2 mx-2">
                <label className="mb-1">Functions:</label>
                <select
                  value={formData.functions}
                  onChange={(e) => handleChange(e.target.value)}
                  className="border p-2 w-full rounded-md"
                >
                  <option value="">Select Functions</option>
                  
                </select>
              </div>
            </div>
            <div className="w-[60%] mx-2">
              <label className="mb-1">Description:</label>
              <textarea
                placeholder="write description"
                className="border p-2 w-full h-32 rounded-md"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white-A700 p-4 shadow-bs1 rounded-[5px] mb-4 w-[49%] md:w-full">
        <div className="flex flex-col gap-8 items-center justify-start my-1.5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-[95%] md:w-full">
            <h4
              className="text-[13px] text-gray-700"
             
            >
              Image
            </h4>
            <div
              className={`bg-white-A700 border-2 border-dashed border-gray-300 flex flex-col font-roboto items-center justify-end p-[62px] md:px-10 sm:px-5 rounded-[3px] w-full ${
                isDragActive ? 'bg-blue-200' : ''
              }`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                <img
                  className="h-[35px] md:h-auto object-cover cursor-pointer"
                  src="images/img_vector_35x50.png"
                  alt="vector"
                />
                <h4
                  className="leading-[17.00px] mt-1 text-center text-gray-400_03 text-xs"
                  
                >
                  <span className="text-gray-400_03 font-lato font-normal">
                    <>
                      {isDragActive
                        ? 'Drop the files here'
                        : 'Drag and drop your image here'}
                      <br />
                      Or{' '}
                    </>
                  </span>
                  <span className="text-blue-700 font-lato font-normal">
                    browse files
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <h5 className="text-[11px] text-gray-400_05" size="txtLatoSemiBold11">
            *Only JPG, PNG files are allowed. Image must be less than 2 MB
          </h5>
        </div>
      </div>

      <div className="bg-white-A700 p-4 shadow-bs1 rounded-[5px] mb-4 w-[30%] md:w-full">
        <div className="flex flex-col gap-2 items-center justify-start w-[98%] md:w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-[7px] items-start justify-start w-full">
              <h4
                className="text-[13px] text-gray-700"
                
              >
                Training file
              </h4>

              <div
                className={`bg-white-A700 border-2 border-dashed border-gray-300 flex flex-col font-roboto items-center justify-end p-[11px] rounded-[3px] w-full ${
                  isDragActive ? 'bg-blue-200' : ''
                }`}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
                  <img
                    className="h-[35px] md:h-auto object-cover cursor-pointer"
                    src="images/img_vector_35x50.png"
                    alt="vector_One"
                  />
                  <h4
                    className="leading-[17.00px] mt-1 text-center text-gray-400_03 text-xs"
                    
                  >
                    <span className="text-gray-400_03 font-lato font-normal">
                      <>
                        {isDragActive
                          ? 'Drop the files here'
                          : 'Drag and drop your file here'}
                        <br />
                        Or{' '}
                      </>
                    </span>
                    <span className="text-blue-700 font-lato font-normal">
                      browse files
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="h-[37px] md:h-[47px] mt-2.5 relative w-full">
              <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                <div className="bg-green-500 h-[37px] rounded-[5px] w-full"></div>
              </div>
              <div className="absolute bottom-[11%] flex flex-row gap-[34px] inset-x-[0] items-center justify-between mx-auto w-[91%]">
                <div className="flex flex-col items-start justify-start">
                  <h4 className="text-[10px] text-white-A700">Completed</h4>
                  <h4
                    className="text-[11px] text-white-A700"
                    
                  >
                    workingAtHeight.pdf
                  </h4>
                </div>
                <button className="flex h-[15px] bg-white-A700 rounded-full p-1 items-center justify-center w-[15px]">
                  <img
                    className="h-2"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </button>
              </div>
            </div>
            <h4
              className="mt-1.5 text-[11px] text-gray-400_05"
             
            >
              <>
                *Only Video, PDF and SlideShow
                <br />
                files are allowed.
              </>
            </h4>
          </div>
          <div className="flex flex-row items-start justify-evenly w-full">
            <hr className="bg-gray-200 h-px mb-[5px] mt-2 w-[43%]" />
            <h4
              className="text-[11px] text-gray-500_01"
              
            >
              OR
            </h4>
            <hr className="bg-gray-200 h-px mb-[5px] mt-2 w-[43%]" />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <h5
              className="text-[13px] text-gray-700"
              
            >
              Media URL
            </h5>
            <input
              className="!text-gray-400_06 border border-gray-300 border-solid font-semibold leading-[normal] min-w-[177px] mt-1 text-[11px] text-center h-[28px] "
              color="white_A700"
              size="sm"
              placeholder="https://youtu.be/1g4hoZx8-o4"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
