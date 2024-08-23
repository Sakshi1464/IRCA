# Integrated Rehabilitation Centre for Addicts (IRCA)

![image](https://github.com/user-attachments/assets/c03c1ce7-6686-4835-a18d-0fc037a56bb7)
  <!-- Add a logo image here -->

## Overview

The *Integrated Rehabilitation Centre for Addicts (IRCA)* is a web-based system designed to manage and analyze diverse aspects of patient information for addiction rehabilitation. The system provides a holistic approach by integrating modules to capture essential patient data including medical history, family background, treatment plans, and more. Built using the MEAN stack (MongoDB, Express.js, Angular, Node.js), IRCA offers a user-friendly interface and real-time updates to facilitate effective patient care.

## Table of Contents

1. [Introduction](#introduction)
2. [Functional Requirements](#functional-requirements)
3. [Non-Functional Requirements](#non-functional-requirements)
4. [System Design & Implementation](#system-design--implementation)
   - [MVC Architecture](#mvc-architecture)
   - [MEAN Framework](#mean-framework)
   - [Database Description](#database-description)
   - [Modules Description](#modules-description)
   - [Services](#services)
5. [Results and Discussions](#results-and-discussions)
6. [Testing of Medical form](#testing-of-medical-form)
7. [Conclusion & Future Scope](#conclusion--future-scope)
8. [Snapshots](#snapshots)
9. [Reports](#reports)

## Introduction

The IRCA system addresses the limitations of traditional rehabilitation approaches by providing a unified platform that integrates various aspects of a patient's background. This includes personal details, family history, medical history, educational background, and treatment records. The system aims to enhance the efficiency and effectiveness of addiction rehabilitation through a comprehensive and user-friendly interface.

## Functional Requirements

- *User Interface:* Interface for adding, updating, and managing patient entries.
- *Authentication:* Secure mechanisms to protect user accounts and data.
- *Data Entry:* Sections for basic information, family history, medical history, treatment plans, and more.
- *Validation:* Error messages and guidance for correcting invalid entries.
- *Real-Time Updates:* Immediate reflection of changes in the database.
- *Printing:* Option to print medical history forms.
- *User Experience:* Intuitive navigation, tooltips, and confirmation screens.

## Non-Functional Requirements

- *Performance:* Response to user input within 20 seconds.
- *Loading Time:* Web page loading should not exceed 10 seconds for 90% of users.
- *Usability:* Minimal text inputs and user-friendly design.

## System Design & Implementation

### MVC Architecture

The system follows the *MVC (Model-View-Controller)* architecture:

- *Model:* Represents patient data, treatment plans, and therapy information.
- *View:* Interfaces such as dashboards and forms for data entry and display.
- *Controller:* Manages interactions between models and views, including patient data updates and progress tracking.

![image](https://github.com/user-attachments/assets/03c323c9-f44e-4507-86d5-3e43953746c5)

### MEAN Framework

- *MongoDB:* NoSQL database for storing patient information and other data.
- *Express.js:* Server-side framework for handling application logic.
- *Angular:* Frontend framework for creating dynamic user interfaces.
- *Node.js:* JavaScript runtime for server-side operations and API management.

![image](https://github.com/user-attachments/assets/7baf256d-f86c-4833-b454-3ad7bbbdbd8b)


### Database Description

The database schema includes collections and models for:

- *Patients Collection:* Personal and demographic details.
- *Family Details Model:* Information about family members.
- *Experience Model:* Personal experiences.
- *Legal History Model:* Legal incidents and their occurrences.

### Modules Description

- *CSS:* Styles for tables, forms, buttons, and UI components.
- *Node.js:* Manages CRUD operations and RESTful API endpoints using Express.js.
- *Angular Component:* Manages medical information with form handling, validation, and CRUD operations.

### Services

The MedicalService Angular service handles CRUD operations for medical records:

- *POST /details:* Create new medical records.
- *GET /details:* Retrieve medical records.
- *PUT /details/:id:* Update existing records.
- *DELETE /details/:id:* Remove records.

## Results and Discussions

![image](https://github.com/user-attachments/assets/60a4cce6-ee00-4f7e-95d0-a0c8f09ccaa2)

Family History:
![image](https://github.com/user-attachments/assets/22fdbfd4-e804-467b-9e87-ce9e758270d6)

Sexual History:
![image](https://github.com/user-attachments/assets/883bb5e7-87e6-442c-b64d-1332a4886092)

Medical Form:
![image](https://github.com/user-attachments/assets/3e520350-3051-479c-b8eb-d9fa82e275af)


![image](https://github.com/user-attachments/assets/3409d373-7761-437d-83e9-7a6c7b022aad)

# Testing of Medical form:
The fields included in medical form are reg_no, age, name and Date of registration. It also
 includes information about drinking and drug history where features included are Drug, Age
 of first use, Years of use, Years of excessive use, Specific type of drugs, Route of
 administration, frequency of use in last 30 days, quantity used in last 30 days, past use if
 any. The below mentioned test cases provide correct validation through selenium tool. Only
 if the valid inputs are given for reg_no, age, name and date of registration the form is
 submitted successfully and user can navigate to next respective form, else an alert message
 is displayed to fill valid credentials. The test cases also check if any field in drinking/drug
 history is filled then user has to fill all fields in particular tuple else alert message is displayed to fill all fields in a tuple.
 
![image](https://github.com/user-attachments/assets/73aa184e-f294-40fb-99b9-cfadbc8a73ac)


![image](https://github.com/user-attachments/assets/5a8bd1eb-7f2b-4a92-935b-6b2b788cf48d)

![image](https://github.com/user-attachments/assets/528ee163-2d7e-4375-9910-3efc54ec35b4)
Fig4:Reg.no,NameandDateofRegistrationfieldsarevalid.Age is fieldwith letters.Alert
 message isdisplayedand message isdisplayedonconsole(Agecontains letters .Invalid
 Age)

## Conclusion & Future Scope

### Conclusion

The IRCA system simplifies the management and storage of patient data, offering a comprehensive and interactive platform for healthcare professionals. By leveraging the MEAN stack, the system ensures efficient data management, real-time updates, and a user-friendly interface.

### Future Scope

Future enhancements include:

- *Data Analysis:* Implementing smart tools for predictive analysis and trend spotting.
- *Telehealth Integration:* Enabling remote consultations and monitoring.
- *Machine Learning:* Using AI for personalized treatment plans.
- *Mobile Application:* Developing a mobile app for easier access.
- *Advanced Reporting:* Providing detailed and customizable reports.
- *Patient Engagement:* Features to enhance patient involvement in their treatment.
- *Multi-Language Support:* Expanding language options for diverse populations.
- *Interoperability:* Ensuring seamless data sharing with other healthcare systems.
- *Security:* Enhancing data protection and user privacy.

## Reports and Downloads

The system allows downloading of patient details from all modules, including family history, medical records, and more, in PDF format. This feature facilitates easy access to comprehensive patient data.

You can view or download the full report of all modules from the following link:
https://github.com/Sakshi1464/IRCA/blob/main/irca%20report.pdf
---
