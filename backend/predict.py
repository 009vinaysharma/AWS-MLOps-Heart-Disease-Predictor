import json
import boto3
import os
from dotenv import load_dotenv

load_dotenv()

runtime = boto3.client(
    "sagemaker-runtime",
    region_name=os.getenv("AWS_REGION")
)

ENDPOINT_NAME = os.getenv("ENDPOINT_NAME")


def predict(data):

    payload = {
        "instances": [[
            data.age,
            data.sex,
            data.cp,
            data.trestbps,
            data.chol,
            data.fbs,
            data.restecg,
            data.thalach,
            data.exang,
            data.oldpeak,
            data.slope
        ]]
    }

    response = runtime.invoke_endpoint(
        EndpointName=ENDPOINT_NAME,
        ContentType="application/json",
        Body=json.dumps(payload)
    )

    result = json.loads(response["Body"].read().decode())

    return result