const form = document.getElementById("predictionForm");
const resultDiv = document.getElementById("result");
const loadingDiv = document.getElementById("loading");


form.addEventListener("submit", async (e) => {

    e.preventDefault();

    loadingDiv.style.display = "block";
    resultDiv.innerHTML = "Analyzing patient data...";
    resultDiv.className = "result";


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


        // Added missing backend fields
        ca: 0,

        thal: 2

    };


    try {

        const response = await fetch(
            "http://13.63.35.246:8000/predict",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)
            }
        );


        const result = await response.json();


        loadingDiv.style.display = "none";


        if (!response.ok) {

            console.log("Backend Error:", result);

            let errorMessage = "Prediction Failed";


            if (result.detail) {

                if (Array.isArray(result.detail)) {

                    errorMessage = result.detail
                        .map(err => err.msg)
                        .join(", ");

                } else {

                    errorMessage = result.detail;

                }

            }


            throw new Error(errorMessage);

        }



        // Prediction Result

        if (result.prediction === 1) {


            resultDiv.className = "result danger";


            resultDiv.innerHTML = `

                <div style="font-size:55px;">🔴</div>

                <h2>High Risk</h2>

                <p style="margin-top:10px;">
                    ${result.result}
                </p>


                <hr style="margin:15px 0;">


                <p>
                    <strong>Risk Level :</strong>
                    ${result.risk}
                </p>


                <p style="margin-top:10px;">
                    ⚠ Please consult a cardiologist for further diagnosis.
                </p>


                <br>


                <small>
                    ${result.note}
                </small>

            `;


        } else {


            resultDiv.className = "result success";


            resultDiv.innerHTML = `

                <div style="font-size:55px;">🟢</div>

                <h2>Low Risk</h2>


                <p style="margin-top:10px;">
                    ${result.result}
                </p>


                <hr style="margin:15px 0;">


                <p>
                    <strong>Risk Level :</strong>
                    ${result.risk}
                </p>


                <p style="margin-top:10px;">
                    ✅ Maintain a healthy lifestyle and regular exercise.
                </p>


                <br>


                <small>
                    ${result.note}
                </small>

            `;

        }



    } catch(error) {


        loadingDiv.style.display = "none";


        resultDiv.className = "result danger";


        resultDiv.innerHTML = `

            <div style="font-size:50px;">❌</div>

            <h2>Prediction Failed</h2>


            <p style="margin-top:10px;">
                ${error.message}
            </p>

        `;


        console.error("Prediction Error:", error);

    }

});