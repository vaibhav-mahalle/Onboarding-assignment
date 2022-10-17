import "./App.css";
import { InitialDetails } from "./routes/InitialDetails";
import { WorkspaceDetails } from "./routes/WorkspaceDetails";
import { SelectPlan } from "./routes/SelectPlan";
import { LaunchPage } from "./routes/LaunchPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<InitialDetails/>}/>
        <Route path="workdetails" element ={<WorkspaceDetails/>}/>
        <Route path="selectplans" element ={<SelectPlan/>}/>
        <Route path="launch" element ={<LaunchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
