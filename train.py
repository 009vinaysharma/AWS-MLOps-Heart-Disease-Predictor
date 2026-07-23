import os
import glob
import joblib
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report


def main():
    train_dir = os.environ["SM_CHANNEL_TRAIN"]
    model_dir = os.environ["SM_MODEL_DIR"]

    # Find CSV file
    csv_files = glob.glob(os.path.join(train_dir, "*.csv"))

    if not csv_files:
        raise FileNotFoundError("No CSV file found in training channel")

    data_path = csv_files[0]
    print("Loading dataset from:", data_path)

    # Load data
    df = pd.read_csv(data_path)

    print("Dataset shape:", df.shape)
    print("Columns:", df.columns.tolist())

    # Features and target
    X = df.drop("target", axis=1)
    y = df["target"]

    # Split
    X_train, X_test, y_train, y_test = train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42,
        stratify=y
    )

    # Train
    model = RandomForestClassifier(
        n_estimators=100,
        random_state=42
    )

    model.fit(X_train, y_train)

    # Evaluate
    predictions = model.predict(X_test)
    accuracy = accuracy_score(y_test, predictions)

    print("Model Accuracy:", accuracy)
    print(classification_report(y_test, predictions))

    # Save model in SageMaker model directory
    model_path = os.path.join(model_dir, "model.joblib")
    joblib.dump(model, model_path)

    print("Model saved successfully:", model_path)


if __name__ == "__main__":
    main()
