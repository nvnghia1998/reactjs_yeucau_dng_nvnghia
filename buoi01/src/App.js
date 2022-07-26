import Hello from "./components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DemoButtonComp from "./demo/DemoButtonComp";
import DemoTitleComp from "./demo/DemoTitleComp";
import Dombasic from "./DomBasic";
import DomDice from "./DomDice";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<>
		{/* <DemoButtonComp/> */}
		<div className="wrapper-content">
			{/* <DemoTitleComp isButton={true}>llllll</DemoTitleComp> */}
			<LoginPage/>
			<Header/>
			
			<HomePage/>
			<Footer/>
		</div>
		</>
		
	);
}

export default App;

