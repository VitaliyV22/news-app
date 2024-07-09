import "./App.css";
import { Navbar } from "./components/Navbar";
import { Top_Headlines } from "./components/Top_Headlines";
import { Hero} from "./components/Heroes/Hero";
import { Hero_2 } from "./components/Heroes/Hero_2";

function App() {
  return (
    <>
      <Navbar />
      <div className="p-5 h-62">
        <div className="flex gap-4 w-full flex-col lg:flex-row ">
          <div className="card bg-base-300 h-full w-72 rounded-box grid flex-grow place-items-center hover:opacity-90 hover:text-white hover:cursor-pointer">
           <Hero />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
            
            <ul>
              
            </ul>
          </div>
        </div>
      </div>
      <Top_Headlines />
    </>
  );
}

export default App;
