const HelperConnectSection = () => {
  return (
    <div className="bg-[#0C0C0C] py-11 md:py-0 md:h-[820px] flex flex-col justify-center items-center">
      <div className="w-full max-w-[1200px] mx-auto text-white md:h-[680px] flex flex-col justify-between ">
        <div className="w-full text-center flex flex-col items-center justify-center h-[112px]">
          <h2 className="text-2xl md:text-[3rem] leading-[100%] font-bold tracking-[-2%] mb-3">
            How Helper Connect You
          </h2>
          <p className="text-[#E9E9E9] px-5 md:px-0 md:w-[396px] mx-auto md:mx-0 leading-[140%] tracking-[-1.5%]">
            A simple step-by-step process to get instant local help whether for
            errands, moving, or more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:h-[520px] px-4 md:px-4 lg:px-0">
          {/* Step 1 */}
          <div className="col-span-1 w-full flex flex-col justify-around space-y-3 md:space-y-0 items-start h-full  p-6 md:p-6 text-[#3D3D3D] bg-[#FFFFFF] rounded-[12px]">
            <p>Step 1</p>
            <h2 className="text-[1.2rem] md:text-[2rem] leading-[100%] font-bold tracking-[-2%] text-[#0C0C0C]">
              Make a request
            </h2>
            <p className="text-[#3D3D3D] md:text-[1.75rem] md:leading-[140%] font-normal md:tracking-[-1.5%]">
              Post a task with all the details and set your tip amount.
            </p>
          </div>

          {/* Step 2 */}
          <div className="col-span-1 w-full flex flex-col justify-around  space-y-3 md:space-y-0 items-start h-full p-6 md:p-6 text-[#3D3D3D] bg-[#FFFFFF] rounded-[12px]">
            <p>Step 2</p>
            <h2 className="text-[1.2rem] md:text-[2rem] leading-[100%] font-bold tracking-[-2%] text-[#0C0C0C]">
              Get matched
            </h2>
            <p className="text-[#3D3D3D] md:text-[1.75rem] md:leading-[140%] font-normal md:tracking-[-1.5%]">
              Helpers near you get notified and choose the task.
            </p>
          </div>

          {/* Step 3 */}
          <div className="col-span-1 w-full flex flex-col justify-around space-y-3 md:space-y-0 items-start h-full p-6 md:p-6 text-[#3D3D3D] bg-[#FFFFFF] rounded-[12px]">
            <p>Step 3</p>
            <h2 className="text-[1.2rem] md:text-[2rem] leading-[100%] font-bold tracking-[-2%] text-[#0C0C0C]">
              Get help
            </h2>
            <p className="text-[#3D3D3D] md:text-[1.75rem] md:leading-[140%] font-normal md:tracking-[-1.5%]">
              The task is completed in real-time, and you supervise the process.
            </p>
          </div>

          {/* Step 4 */}
          <div className="col-span-1 w-full flex flex-col justify-around space-y-3 md:space-y-0 items-start h-full p-6 md:p-6 text-[#3D3D3D] bg-[#FFFFFF] rounded-[12px]">
            <p>Step 4</p>
            <h2 className="text-[1.2rem] md:text-[2rem] leading-[100%] font-bold tracking-[-2%] text-[#0C0C0C]">
              Complete the task
            </h2>
            <p className="text-[#3D3D3D] md:text-[1.75rem] md:leading-[140%] font-normal md:tracking-[-1.5%]">
              Once the job is done, leave a review and pay the tip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperConnectSection;
