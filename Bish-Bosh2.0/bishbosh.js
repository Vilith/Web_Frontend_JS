function runBishBosh() {
    const bish = parseInt(document.getElementById("bish").value);
    const bosh = parseInt(document.getElementById("bosh").value);
    const loopLimit = parseInt(document.getElementById("loop").value);
    const resultArea = document.getElementById("result");


    if (bish <= 0 || bosh <= 0 || loopLimit <= 0) {
        resultArea.innerHTML = "<p style='color:red;'>Please use postive values!</p>";
        return;
    }

    let output = "";

    for (let i = 1; i <= loopLimit; i++) {
        let result = "";

        if (i % bish === 0) result += "Bish";
        if (i % bosh === 0) result += (result ? "-" : "") + "Bosh";

        output += `<p>${result || i}</p>`;
    }

    resultArea.innerHTML = output;
}