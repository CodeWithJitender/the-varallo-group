import React from "react";

function OverviewCard({icon,title, description, classBorder}) {
  return (
    <div className="h-full">
      <div  className={`py-6 md:py-10 flex flex-col gap-4 border-white h-full ${classBorder}`}>
        <div className="">
          <img
            src={icon}
            alt="calendar icon"
            className="w-16 h-w-16"
          />
        </div>
        <h3 className="text-lg font-manrope md:text-[28px] font-medium">
          {title}
        </h3>
        <p className="text-sm text-white md:text-xl font-manrope">
          {description}
        </p>
      </div>
    </div>
  );
}

export default OverviewCard;
