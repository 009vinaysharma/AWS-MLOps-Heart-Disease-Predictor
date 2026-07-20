const form = document.getElementById("predictionForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    resultDiv.className = "result loading";
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "⏳ Predicting...";

    const data = {
        age: parseInt(document.getElementById("age").value),
        sex: parseInt(document.getElementById("sex").value),
        cp: parseInt(document.getElementById("cp").value),
        trestbps: parseInt(document.getElementById("trestbps").value),
        chol: parseInt(document.getElementById("chol").value),
        fbs: parseInt(document.getElementById("fbs").value),
        restecg: parseInt(document.getElementById("restecg").value),
        thalach: parseInt(document.getElementById("thalach").value),
        exang: parseInt(document.getElementById("exang").value),
        oldpeak: parseFloat(document.getElementById("oldpeak").value),
        slope: parseInt(document.getElementById("slope").value),
        ca: parseInt(document.getElementById("ca").value),
        thal: parseInt(document.getElementById("thal").value)
    };

    try {
        const response = await fetch("http://13.63.35.246:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.detail || "Prediction Failed");
        }

        if (result.prediction === 0) {
            resultDiv.className = "result danger";
            resultDiv.innerHTML = `
                <div style="font-size:40px;">❤️</div>
                <h2>${result.result}</h2>
                <p><strong>Risk Level:</strong> ${result.risk}</p>
                <p>${result.note}</p>
            `;
        } else {
            resultDiv.className = "result success";
            resultDiv.innerHTML = `
                <div style="font-size:40px;">💚</div>
                <h2>${result.result}</h2>
                <p><strong>Risk Level:</strong> ${result.risk}</p>
                <p>${result.note}</p>
            `;
        }

    } catch (error) {
        resultDiv.className = "result danger";
        resultDiv.innerHTML = `
            <div style="font-size:40px;">❌</div>
            <h2>Prediction Failed</h2>
            <p>${error.message}</p>
        `;
    }
});