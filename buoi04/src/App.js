import BudgetForm from "./components/form/BudgetForm";
import BudgetHeader from "./components/header/BudgetHeader";
import BudgetList from "./components/list/BudgetList";

function App() {
  return (
    <>
    <BudgetHeader/>
    <div className="bottom">
      <BudgetForm/>
      <BudgetList/>
    </div>
    </>
  );
}

export default App;
