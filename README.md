# ❤️ AWS MLOps Heart Disease Prediction System

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.11-blue?style=for-the-badge&logo=python">
  <img src="https://img.shields.io/badge/FastAPI-REST_API-green?style=for-the-badge&logo=fastapi">
  <img src="https://img.shields.io/badge/AWS-SageMaker-orange?style=for-the-badge&logo=amazonaws">
  <img src="https://img.shields.io/badge/Docker-Container-blue?style=for-the-badge&logo=docker">
  <img src="https://img.shields.io/badge/EC2-Cloud-yellow?style=for-the-badge&logo=amazonaws">
  <img src="https://img.shields.io/badge/Nginx-Reverse_Proxy-success?style=for-the-badge&logo=nginx">
</p>

---

# 📌 Project Description

The AWS MLOps Heart Disease Prediction System is a complete end-to-end Machine Learning deployment project developed using modern MLOps practices on Amazon Web Services (AWS).

The objective of this project is to predict whether a patient has a high risk of heart disease based on various medical parameters such as age, cholesterol, blood pressure, chest pain type, maximum heart rate, etc.

Instead of running the model only inside Jupyter Notebook, this project demonstrates how a trained Machine Learning model can be deployed on AWS SageMaker and accessed through REST APIs using FastAPI. The application is containerized using Docker, hosted on Amazon EC2, served through Nginx, and secured with HTTPS using Let's Encrypt SSL.

This project represents a production-style deployment workflow similar to real-world industry applications.

---

# 🎯 Problem Statement

Heart disease is one of the leading causes of death worldwide. Early prediction can help doctors and patients make better clinical decisions.

This project provides a web-based application where users can enter medical information and instantly receive a prediction indicating whether the patient is likely to have heart disease.

---

# 🚀 Live Application

## 🌐 Frontend

https://heart.vinaysharmatech.xyz

## 📖 Swagger API Documentation

https://heart.vinaysharmatech.xyz/docs

## ❤️ Prediction API

POST

https://heart.vinaysharmatech.xyz/predict

## 🩺 Health Endpoint

GET

https://heart.vinaysharmatech.xyz/health

---

# 🏗️ Complete System Architecture

```
                    User
                      │
                      ▼
          HTML • CSS • JavaScript
                      │
                      ▼
          HTTPS (Custom Domain)
                      │
                      ▼
                  Nginx
                      │
                      ▼
             FastAPI REST API
                      │
                      ▼
          Docker Container (EC2)
                      │
                      ▼
        AWS SageMaker Endpoint
                      │
                      ▼
      Random Forest Classification Model
                      │
                      ▼
              Prediction Result
```

---

# 🛠️ Technologies Used

## Programming Languages

- Python
- HTML
- CSS
- JavaScript

## Machine Learning

- Scikit-Learn
- Pandas
- NumPy
- Joblib

## Backend

- FastAPI
- Uvicorn
- Pydantic

## Cloud Services

- Amazon EC2
- Amazon SageMaker
- Amazon S3
- IAM

## DevOps

- Docker
- Git
- GitHub
- Nginx
- Certbot SSL

---

# 📊 Dataset

Dataset Used

Heart Disease UCI Dataset

Number of Features

13

Target Variable

Heart Disease (0/1)

Features

- Age
- Sex
- Chest Pain Type
- Resting Blood Pressure
- Cholesterol
- Fasting Blood Sugar
- Rest ECG
- Maximum Heart Rate
- Exercise Induced Angina
- Oldpeak
- Slope
- Number of Major Vessels
- Thalassemia

---

# 🤖 Machine Learning Model

Model Used

Random Forest Classifier

Why Random Forest?

- High prediction accuracy
- Handles nonlinear relationships
- Resistant to overfitting
- Works well on tabular medical datasets
- Fast prediction speed

---

# 🚀 Complete Project Journey

## Step 1 — Dataset Collection

The project started with collecting the Heart Disease UCI dataset. The dataset contains patient medical records and corresponding labels indicating whether heart disease is present.

---

## Step 2 — Data Preparation

The dataset was cleaned before training.

Tasks performed

- Removed unnecessary values
- Checked missing values
- Verified feature consistency
- Prepared the final CSV dataset

Final Dataset

heart_prepared.csv

---

## Step 3 — Model Training

The prepared dataset was used to train a Random Forest Classification model.

Training Process

- Split dataset into training and testing sets
- Trained the model
- Evaluated prediction accuracy
- Saved the trained model using Joblib

Output

model.joblib

---

## Step 4 — Amazon S3

The prepared dataset was uploaded to Amazon S3.

Purpose

- Store training dataset
- Provide data to SageMaker training jobs
- Store model artifacts

AWS Service Used

Amazon S3

---

## Step 5 — SageMaker Training

A custom training script (train.py) was created.

Responsibilities

- Load dataset
- Train Random Forest model
- Evaluate model
- Save trained model

Output

model.tar.gz

---

## Step 6 — SageMaker Inference

A custom inference.py script was written.

Responsibilities

- Load trained model
- Parse JSON requests
- Convert request into NumPy arrays
- Generate predictions
- Return JSON responses

---

## Step 7 — SageMaker Endpoint Deployment

The trained model was deployed as a real-time endpoint on Amazon SageMaker.

Now predictions can be requested through cloud APIs instead of running locally.

---

## Step 8 — Backend Development

A REST API was developed using FastAPI.

Endpoints

GET /

GET /health

POST /predict

Swagger Documentation

/docs

---

## Step 9 — Dockerization

The backend application was containerized using Docker.

Benefits

- Easy deployment
- Consistent environment
- Portable application
- Simplified dependency management

---

## Step 10 — EC2 Deployment

An Ubuntu EC2 instance was launched.

Tasks Performed

- Installed Docker
- Installed Git
- Cloned GitHub repository
- Built Docker image
- Started Docker container

---

## Step 11 — Nginx Configuration

Nginx was configured as a reverse proxy.

Responsibilities

- Route frontend requests
- Forward API calls to FastAPI
- Serve static files
- Handle HTTPS traffic

---

## Step 12 — Custom Domain

A custom domain was connected.

Domain

heart.vinaysharmatech.xyz

DNS records were configured to point towards the EC2 instance.

---

## Step 13 — HTTPS Security

Let's Encrypt SSL certificates were installed using Certbot.

Benefits

- Secure communication
- Browser trust
- HTTPS encryption
- Production-ready deployment

---

# 📁 Project Structure

```
AWS-MLOps-Heart-Disease-Predictor/

backend/

frontend/

training/

dataset/

model/

screenshots/

README.md
```

---

# 📷 Project Screenshots

Include screenshots for

- Homepage
- Prediction Form
- Low Risk Prediction
- High Risk Prediction
- Swagger Documentation
- EC2 Dashboard
- Docker Container
- SageMaker Endpoint
- Amazon S3 Bucket
- Domain Configuration
- SSL Certificate

---

# 💪 Challenges Faced

During the project, several real-world deployment challenges were encountered.

✔ Preparing the dataset for SageMaker training

✔ Creating custom training scripts

✔ Building Docker containers

✔ Configuring FastAPI APIs

✔ Connecting FastAPI with SageMaker Endpoint

✔ Docker networking issues

✔ EC2 permission issues

✔ GitHub push protection

✔ Managing AWS IAM permissions

✔ Nginx reverse proxy configuration

✔ HTTPS SSL installation

✔ Mixed Content (HTTP vs HTTPS)

✔ DNS propagation delays

✔ JavaScript API integration

✔ Endpoint debugging and deployment issues

These challenges helped in understanding practical cloud deployment and MLOps workflows.

---

# 🚀 Future Improvements

- User Authentication
- Prediction History
- Database Integration
- CloudWatch Monitoring
- CI/CD Pipeline
- Kubernetes Deployment
- Auto Scaling
- Model Monitoring
- Multiple Disease Prediction

---

# 👨‍💻 Author

**Vinay Sharma**

B.Tech Computer Science with Artificial Intelligence

Arya College of Engineering & IT, Jaipur

GitHub

https://github.com/009vinaysharma

Portfolio

https://vinaysharmatech.xyz

---

# ⭐ Support

If you found this project helpful, please consider giving this repository a ⭐ on GitHub.

It motivates me to build more real-world AI, Machine Learning, Cloud, and MLOps projects.
