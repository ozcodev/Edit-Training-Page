import React, { useState } from 'react';

function IncrementDecrementCard({
  title,
  value,
  onIncrement,
  onDecrement,
  unit,
  imgUrl,
  onToggle,
}) {
  const handleDecrement = () => {
    if (value > 0) {
      onDecrement();
    }
  };

  return (
    <div className="flex flex-col items-end justify-center rounded-5 shadow-bs1 w-full">
      <div className="flex-shrink-0 w-56 p-2">
        <div className="bg-white-A700 flex flex-col items-end justify-center p-[7px] rounded-[5px] shadow-bs1 w-full my-2">
          <img
            className="h-4 mt-[3px] w-4"
            src="images/img_info.svg"
            alt="info"
          />
          <div className="flex flex-col gap-4 items-center justify-start mb-[9px] mr-1 mt-[3px] w-[95%] ">
            {imgUrl && <img className="h-[34px] w-[34px]" src={imgUrl} />}

            <h4 className="text-blue_gray-900 font-[600px] text-[14px] font-semibold">
              {title}
            </h4>
            <div className="flex flex-row items-center justify-evenly w-full">
              {onToggle ? ( 
                // Toggle Switch
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={onToggle}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#cde4d0] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#47CA5B] after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#47CA5B]"></div>
                </label>
              ) : (
                <>
                  <div className="bg-blue_gray-50 flex flex-col items-center justify-start p-[9px] rounded-[5px] w-[23%]">
                    <div
                      className="bg-gray-400_07 h-0.5 my-[5px] rounded-[1px] w-full cursor-pointer "
                      onClick={handleDecrement}
                    ></div>
                  </div>
                  <div className="font-semibold leading-[normal] min-w-[76px] text-center text-sm">
                    {value}
                    {unit}
                  </div>
                  <div
                    className="bg-blue_gray-50 flex cursor-pointer flex-col items-center justify-start p-[7px] rounded-[5px] w-[23%]"
                    onClick={onIncrement}
                  >
                    <img
                      className="h-4 w-4"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Parameters = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [timePerQuestion, setTimePerQuestion] = useState(30);
  const [passingScore, setPassingScore] = useState(80);
  const [attempts, setAttempts] = useState(3);
  const [switchToggle, setSwitchToggle] = useState(false);

  return (
    <div className="bg-gray-50 flex items-start justify-start w-full overflow-x-auto white-space-no-wrap">
      <IncrementDecrementCard
        title="Random questions"
        value={questionCount}
        onIncrement={() => setQuestionCount(questionCount + 1)}
        onDecrement={() => setQuestionCount(questionCount - 1)}
        imgUrl="images/img_television.svg"
      />
      <IncrementDecrementCard
        title="Time per question"
        value={timePerQuestion}
        onIncrement={() => setTimePerQuestion(timePerQuestion + 1)}
        onDecrement={() => setTimePerQuestion(timePerQuestion - 1)}
        unit="s"
        imgUrl="images/img_clock.svg"
      />
      <IncrementDecrementCard
        title="Passing score"
        value={passingScore}
        onIncrement={() => setPassingScore(passingScore + 5)}
        onDecrement={() => setPassingScore(passingScore - 5)}
        unit="%"
        imgUrl="images/img_checkmark.svg"
      />
      <IncrementDecrementCard
        title="Webcam validation "
        onToggle={() => setSwitchToggle(!switchToggle)}
        imgUrl="images/img_photo.svg"
      />

      <IncrementDecrementCard
        title="Attempts"
        value={attempts}
        onIncrement={() => setAttempts(attempts + 5)}
        onDecrement={() => setAttempts(attempts - 5)}
        imgUrl="images/img_contrast.svg"
      />
      <IncrementDecrementCard
        title="Passing score"
        value={passingScore}
        onIncrement={() => setPassingScore(passingScore + 5)}
        onDecrement={() => setPassingScore(passingScore - 5)}
        unit="%"
        imgUrl="images/img_checkmark.svg"
      />
    </div>
  );
};

export default Parameters;
