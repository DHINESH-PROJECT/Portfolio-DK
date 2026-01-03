import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className={`flex justify-center items-center fixed bottom-0 bg-white h-screen w-screen mx-auto z-50 `}
    >
      <HashLoader color="#A53DFF" speedMultiplier={2} size={80} />
    </div>
  );
};

export default Loading;
