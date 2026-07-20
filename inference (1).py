
import os
import joblib
import json
import numpy as np


def model_fn(model_dir):
    """
    Load the trained model from the SageMaker model directory.
    """
    model_path = os.path.join(model_dir, "model.joblib")
    model = joblib.load(model_path)
    return model


def input_fn(request_body, request_content_type):
    """
    Convert incoming JSON data into a NumPy array.
    """
    if request_content_type == "application/json":
        data = json.loads(request_body)

        if isinstance(data, dict) and "instances" in data:
            data = data["instances"]

        return np.array(data)

    raise ValueError(
        f"Unsupported content type: {request_content_type}"
    )


def predict_fn(input_data, model):
    """
    Generate prediction.
    """
    return model.predict(input_data)


def output_fn(prediction, accept):
    """
    Convert prediction to JSON response.
    """
    if accept == "application/json":
        return json.dumps({
            "predictions": prediction.tolist()
        })

    raise ValueError(
        f"Unsupported accept type: {accept}"
    )
