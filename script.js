let Expenses = [];
let totalAmount = 0;

const category = document.getElementById("Category-selection");
const amount = document.getElementById("amount-input");
const date = document.getElementById("date-input");
const addbtn = document.getElementById("add-btn");
const expensebody = document.getElementById("expense-tabel-body");
const TotalAmountCell = document.getElementById("total-amount");
addbtn.addEventListener("click", function () {
  const Category = category.value;
  const Amount = Number(amount.value);
  const Date = date.value;

  if (Category === "") {
    alert("Please Enter the Category");
    return;
  }
  if (Amount <= 0 || isNaN(Amount)) {
    alert("Please Enter the Amount");
    return;
  }
  if (Date === "") {
    alert("Please Enter the Date");
    return;
  }
  Expenses.push({ Category, Amount, Date });

  totalAmount += Amount;
  TotalAmountCell.textContent = totalAmount;

  const newRow = expensebody.insertRow();
  const CategoryCell = newRow.insertCell();
  const AmountCell = newRow.insertCell();
  const DateCell = newRow.insertCell();
  const DeleteCell = newRow.insertCell();
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.classList.add("delete-btn");

  const expense = Expenses[Expenses.length - 1];
  CategoryCell.textContent = expense.Category;
  AmountCell.textContent = expense.Amount;
  DateCell.textContent = expense.Date;
  DeleteCell.appendChild(deletebtn);
  deletebtn.addEventListener("click", function () {
    Expenses.splice(Expenses.indexOf(expense), 1);
    totalAmount -= expense.Amount;
    TotalAmountCell.textContent = totalAmount;
    expensebody.removeChild(newRow);
  });
});
