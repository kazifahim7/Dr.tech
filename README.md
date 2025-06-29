
# Doctor–Patient Appointment Management API

This RESTful API facilitates doctor registration, service management, availability scheduling, and patient appointments for a hospital appointment management system.

## Base URL

```
https://drtechlatest.vercel.app/api
```

---

## 🔐 Authentication

- All sensitive operations (services, availability, appointments) require a valid **JWT token**.
- Tokens are received after a successful login and must be passed in the `Authorization` header as:  
  ```
  Authorization:  <your_token_here>
  ```

---

## 📋 API Endpoints

### 1. Doctor Registration

```
POST /auth/register-doctor
```

**Request Body:**
```json
{
  "name": "Dr. Ayesha Rahman",
  "email": "ayesha.rahman@example.com",
  "phone": "+8801712345678",
  "password": "SecurePass123!",
  "specialization": "Cardiology",
  "hospitalName": "Dhaka Medical College Hospital",
  "hospitalFloor": "3rd Floor"
}
```

---

### 2. Patient Registration

```
POST /auth/register-patient
```

**Request Body:**
```json
{
  "name": "Rafiul Islam",
  "email": "kazifahim661@gmail.com",
  "phone": "+8801787654321",
  "password": "123456",
  "age": "29",
  "gender": "Male"
}
```

---

### 3. User Login (Doctor/Patient)

```
POST /auth/login
```

**Request Body:**
```json
{
  "email": "kazifahim661@gmail.com",
  "password": "123456"
}
```

---

## 🩺 Doctor APIs

### 4. Create Service

```
POST /doctor/services
```
**Headers:** `Authorization: <doctor_token>`

**Request Body:**
```json
{
  "title": "Diabetes Consultation",
  "description": "Comprehensive heart screening including ECG and blood pressure monitoring.",
  "price": 2500,
  "duration": 30
}
```

---

### 5. Update Service

```
PATCH /doctor/services/:serviceId
```
**Example:**  
`PATCH /doctor/services/685ee7b6d90411f92401a49e`  
**Headers:** `Authorization: <doctor_token>`

**Request Body:**
```json
{
  "title": "Diabetes Consultation pro"
}
```

---

### 6. Delete Service

```
DELETE /doctor/services/:serviceId
```
**Example:**  
`DELETE /doctor/services/685ee7b6d90411f92401a49e`  
**Headers:** `Authorization:  <doctor_token>`

---

### 7. Create Availability

```
POST /available/create-availability
```
**Headers:** `Authorization:  <doctor_token>`

**Request Body:**
```json
{
  "doctorId": "6860dbc8164e4eb424561b2b",
  "serviceId": "6860dc34164e4eb424561b38",
  "day": "Tuesday",
  "timeSlots": [
    { "startTime": "10:00", "endTime": "12:00" },
    { "startTime": "16:00", "endTime": "18:00" }
  ]
}
```

---

### 8. Get All Doctors (with optional hospital filter)

```
GET /doctor?hospitalName=Dhaka Medical College Hospital
```

---

### 9. Get Single Doctor

```
GET /doctor/:doctorId
```
**Example:**  
`GET /doctor/6860dbc8164e4eb424561b2b`

---

## 👨‍⚕️ Patient APIs

### 10. Create Appointment

```
POST /appoint/appointments
```
**Headers:** `Authorization:  <patient_token>`

**Request Body:**
```json
{
  "doctorId": "6860dbc8164e4eb424561b2b",
  "serviceId": "6860dc34164e4eb424561b38",
  "selectedDate": "2025-07-01",
  "timeSlot": {
    "startTime": "10:00",
    "endTime": "12:00"
  }
}
```

---

### 11. Get My Appointments (Patient)

```
GET /appoint/patient/appointments
```
**Headers:** `Authorization:  <patient_token>`

---

## 👨‍⚕️ Doctor Appointment Management

### 12. Get Doctor Appointments (Pending Only)

```
GET /appoint/doctor/appointments?status=pending
```
**Headers:** `Authorization:  <doctor_token>`

---

### 13. Update Appointment Status

```
PATCH /appoint/doctor/appointments/:appointmentId/status
```
**Example:**  
`PATCH /appoint/doctor/appointments/6860c9d5449c35725819a6a4/status`  
**Headers:** `Authorization:  <doctor_token>`

**Request Body:**
```json
{
  "status": "accept"
}
```

---

## ✅ Status Codes

- `200 OK` – Success
- `201 Created` – Resource created
- `400 Bad Request` – Validation or input error
- `401 Unauthorized` – Missing or invalid token
- `404 Not Found` – Resource not found
- `500 Internal Server Error` – Server error

---

## 📌 Notes

- Ensure the frontend uses appropriate headers (especially `Authorization`) where required.
- You must use the `doctorId` and `serviceId` returned from creation responses when making availability and appointment requests.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Auth**: JWT
- **Hosted on**: Vercel

---
