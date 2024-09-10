
import Counter from "@/components/Counter/Counter";

const HomePage = () => {
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex-row items-center bg-slate-200 px-16 py-16 rounded-md">
        <h2 className="text-center text-2xl font-bold mb-5">Counter</h2>
        <Counter></Counter>
      </div>
    </div>
  );
};

export default HomePage;
