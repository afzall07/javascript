let price = 3.26;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

document.getElementById("purchase-btn").addEventListener("click", () => {
    let cash = Number(document.getElementById("cash").value);
    let changeDueEl = document.getElementById("change-due");

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (cash === price) {
        changeDueEl.textContent = "No change due - customer paid with exact cash";
        return;
    }

    let changeNeeded = Number((cash - price).toFixed(2));
    let totalCID = Number(
        cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2)
    );

    if (totalCID < changeNeeded) {
        changeDueEl.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    if (totalCID === changeNeeded) {
        // Drawer will be empty after transaction
        let result = "Status: CLOSED";
        cid.forEach(curr => {
            if (curr[1] > 0) {
                result += ` ${curr[0]}: $${curr[1]}`;
            }
        });
        changeDueEl.textContent = result;
        return;
    }

    // Otherwise, try to give change
    let changeArray = [];
    let remaining = changeNeeded;

    // Iterate from highest to lowest
    for (let i = cid.length - 1; i >= 0; i--) {
        let unit = cid[i][0];
        let unitValue = currencyUnit[unit];
        let unitAvailable = cid[i][1];
        let amountGiven = 0;

        while (remaining >= unitValue && unitAvailable > 0) {
            remaining = Number((remaining - unitValue).toFixed(2));
            unitAvailable = Number((unitAvailable - unitValue).toFixed(2));
            amountGiven = Number((amountGiven + unitValue).toFixed(2));
        }

        if (amountGiven > 0) {
            changeArray.push([unit, amountGiven]);
        }
    }

    if (remaining > 0) {
        changeDueEl.textContent = "Status: INSUFFICIENT_FUNDS";
        return;
    }

    // Format result
    let result = "Status: OPEN";
    changeArray.forEach(item => {
        result += ` ${item[0]}: $${item[1]}`;
    });

    changeDueEl.textContent = result;
});
