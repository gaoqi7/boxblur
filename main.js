const btn = document.getElementById("createTable");

btn.addEventListener("click", () => {
	const size = Number.parseInt(document.getElementById("pNum").value);
	console.log(size);

	const myTable = document.createElement("table");
	for (let i = 1; i < size + 1; i++) {
		const tableRow = document.createElement("tr");
		for (let j = 1; j < size + 1; j++) {
			const tableData = document.createElement("td");
			tableData.innerHTML = `<div id="parkingLot"></div>`;
			tableRow.appendChild(tableData);
		}
		myTable.appendChild(tableRow);
	}
	document.getElementById("tableContainer").appendChild(myTable);
	document.getElementById("createTable").style.visibility = "hidden";
});

const cellBlock = document.getElementsByTagName("td");

cellBlock.addEventListener("mousehover", () => {
	console.log("hover");
});
