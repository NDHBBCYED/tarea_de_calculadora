
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}


function clearDisplay() {
    document.getElementById("display").value = "";
}


function calculateResult() {
    const expression = document.getElementById("display").value;
    if (expression) {
        try {
            const result = eval(expression);
            document.getElementById("display").value = result;
            saveToHistory(expression + " = " + result);
        } catch (error) {
            alert("Error en la expresión.");
        }
    }
}


function saveToHistory(calculation) {
    const historyList = JSON.parse(localStorage.getItem("calcHistory")) || [];
    historyList.push(calculation);
    localStorage.setItem("calcHistory", JSON.stringify(historyList));
    updateHistoryList();
}


function updateHistoryList() {
    const historyList = JSON.parse(localStorage.getItem("calcHistory")) || [];
    const historyUl = document.getElementById("history-list");
    historyUl.innerHTML = "";
    historyList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyUl.appendChild(li);
    });
}


function clearHistory() {
    localStorage.removeItem("calcHistory");
    updateHistoryList();
}


window.onload = function () {
    updateHistoryList();
};
