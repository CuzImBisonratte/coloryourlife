var colors = [
    [1, "black"],
    [2, "white"],
    [3, "red"],
    [4, "green"],
    [5, "blue"],
    [6, "purple"],
    [7, "orange"]
];
var c = 0;
const interval = setInterval(function() {
    if (c > 7) {
        c = 0;
    }
    // console.log(document.getElementById("time").value);
    c++;
    colors.forEach(element => {
        if (c == element[0]) {
            document.body.style.backgroundColor = element[1];
        }
    });
}, 250);