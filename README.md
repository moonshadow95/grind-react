# 💪 Grind yourself.

_Record your body changes and diet_

Demo Link => https://60c08d2a9e5457c47d2ee2e5--grind-moonshadow.netlify.app

---

## 🔗 Index

1. [Purpose of this project](#1-Purpose-of-this-project)
2. [Tech Stack](#2-Tech-Stack)
3. [Over View](#3-Over-View)
4. [About Project](#4-About-Project)
5. [Architecture](#5-Architecture)
6. [What I've learned](#6--What-Ive-learned)
7. [Issue](#7--Issue)
8. [Things to Improvements](#8-Things-to-Improvements)

## 1. Purpose of this project

- Make application that is actually useful.
- Make application from scratch using the technology I have.
- Record body changes and diet.

## 2. Tech Stack

<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Firebase" src="https://img.shields.io/badge/firebase-%23039BE5.svg?&style=for-the-badge&logo=firebase"/>

## 3. Over View

<img width="49%" src="https://user-images.githubusercontent.com/73153617/121478696-43bbe780-ca04-11eb-93b4-9f25db8e3d08.png"><img width="49%" src="https://user-images.githubusercontent.com/73153617/121478718-474f6e80-ca04-11eb-827e-b79a58f8cb3b.png"><img width="49%" src="https://user-images.githubusercontent.com/73153617/121478726-49b1c880-ca04-11eb-93ba-e2ab129e5c08.png"> <img width="22%" src="https://user-images.githubusercontent.com/73153617/121478740-4d454f80-ca04-11eb-83b4-cef9d23b4ac2.png"> <img width="14%" src="https://user-images.githubusercontent.com/73153617/121478734-4b7b8c00-ca04-11eb-9b25-32941a8fb959.png">

## 4. About Project

### 🔑 Login & Upload

<img width="100%" src="https://user-images.githubusercontent.com/73153617/121480233-d01ada00-ca05-11eb-9572-1462311fd230.gif">

    - Login with Google or Facebook
    - If you are logged in, you will be logged in automatically even if you return to the login page.
    - You can upload your picture, write and record some information.
    - Even if you log out, your records will be shown again when you log in again.
    - You can cross-move the body page and diet page.

### 📝 Maker Page

## 5. Architecture

### Overall

<img width="100%" src="https://user-images.githubusercontent.com/73153617/118086560-20028300-b3ff-11eb-9864-22ebaa6ce778.png" />
<img width="100%" src="https://user-images.githubusercontent.com/73153617/118088132-91dbcc00-b401-11eb-855d-6d93da11a52d.gif"/>

    1. When the login button is clicked, run the login function.
    2. Firebase authenticates the user.
    3. React Router send the user to Maker page
    4-5-6. If the user has own data, Firebase's database get the data and get image from Cloudinary.
    7. Editor section and Preview section shows the data.
    8. When the user changes the data, it changes in the database as well as the data shown in Preview section.

## 6. 📝 What I've learned

    - How to route using React Router.
    - Understand what dependency injection is.
    - How to authenticate users with Firebase.
    - How to use Firebase SDK(Software Development Kit).
    - How to treat data in object form.
    - How to use Firebase Realtime database.
    - How to use Cloudinary to upload media files.

## 7. 💥 Issue

    - Unnecessary rending of components. (header, footer, buttons, cards)
        => Improve performance with memo() and useCallback()

## 8. 🚀 Things to Improvements
