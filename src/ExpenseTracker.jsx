import CurrentBalance from "./CurrentBalance";
import ExpenseBar from "./ExpenseBar";
import TotalSpendings from "./TotalSpendings";

function ExpenseTracker() {
  const sevenDaysSpending = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];

  const maxValue = Math.max(...sevenDaysSpending.map((day) => day.amount));

  return (
    <div className="expense-chart">
      <CurrentBalance />
      <div className="spending-details">
        <p className="spending-title">Spending - Last 7 days</p>
        <ExpenseBar sevenDaysSpending={sevenDaysSpending} maxValue={maxValue} />
        <hr />
        <TotalSpendings />
      </div>
    </div>
  );
}

export default ExpenseTracker;
