const seat = Number(prompt("Enter your seat number to see where you are"));
const seatRowNumber = Math.ceil(seat / 11);
const seatRow = String.fromCharCode(seatRowNumber + 64);
const seatColumn = (seat - 1) % 11;

const seatAssignment = seatRow + (seatColumn + 1);
alert(seatAssignment);
// alert(seatRow);
// alert(seatColumn);

// Martin's solution

// const columns = 11;
// const seat = Number(prompt("Enter your seat number"));
// const columnNum = ((seat - 1) % columns) + 1;
// const rowNum = Math.trunc((seat - 1) / columns);

// const seatID = String.fromCharCode(65 + rowNum) + columnNum;
// document.write(seatID);
