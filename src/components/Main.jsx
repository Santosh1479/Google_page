import React from "react";

const Main = () => {
  return (
    <div className="min-h-[575px]">
      <div className="logo h-[192px] flex justify-center place-items-end">
        <img className="w-72" src="icons/google.png" alt="googel" />
      </div>
      <div className="search h-[180px] flex flex-col gap-4 justify-between items-center p-8">
        <div className="srchholder flex items-centre justify-center mx-auto rounded-full p-3 gap-4 bg-slate-50 border hover:border-gray-600">
            <img className="w-6 h-6 ml-2" src="icons/search.png"  alt="Search" />
          <input className="h-[30px] w-[500px] bg-slate-50 " type="text" placeholder="" />
          <button><img className="w-6 h-6" src="icons/mic.png" alt="Talk" /></button>
          <button><img className="w--6 h-6 mr-2" src="icons/camera.png" alt="Lens" /></button>
        </div>
        <div className="butholder flex justify-center items-end gap-3">
          <button className="bg-gray-200  rounded-sm h-8 w-36 text-sm text-center">Google Search</button>
          <button className="bg-gray-200  rounded-sm h-8 w-36 text-sm text-center">I'm Feeling Lucky</button>
        </div>
      </div>
      <div className="langs flex justify-center items-center">
        <span className="text-sm">Google offered in:</span>
        <ul className=" pl-2 flex text-sm  gap-3 text-blue-500">
          <li>English</li>
          <li>বাংলা</li>
          <li>తెలుగు</li>
          <li> मराठी</li>
          <li> தமிழ் </li>
          <li> ગુજરાતી </li>
          <li>ಕನ್ನಡ </li>
          <li>മലയാളം</li>
          <li> ਪੰਜਾਬੀ</li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
