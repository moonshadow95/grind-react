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

## 2. Tech Stack

<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="Firebase" src="https://img.shields.io/badge/firebase-%23039BE5.svg?&style=for-the-badge&logo=firebase"/>

## 3. Over View

<img width="49%" src="https://user-images.githubusercontent.com/73153617/117763195-60c69480-b265-11eb-932c-32e440daaaf8.png"><img width="49%" src="https://user-images.githubusercontent.com/73153617/117763186-5c01e080-b265-11eb-857b-27be7b5261f2.png"><img width="28%" src="https://user-images.githubusercontent.com/73153617/117763227-6e7c1a00-b265-11eb-9478-1631a83b11be.png"><img width="18%" src="https://user-images.githubusercontent.com/73153617/117763230-6fad4700-b265-11eb-8dc9-9775935850e6.png">

## 4. About Project

### 🔑 Login Page

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117763549-f5c98d80-b265-11eb-9d25-8b1ea7bd7569.gif">

    - Login with Google or Github or Facebook

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117763977-b485ad80-b266-11eb-9e75-08b8d95e2476.gif">

    - If you are logged in, you will be logged in automatically even if you return to the login page.

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117763677-2c070d00-b266-11eb-83a1-06339e595a79.gif">

    - Even if you log out, your card information will be shown again when you log in again.

### 📝 Maker Page

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117764255-29f17e00-b267-11eb-9829-67281714cb8c.gif"/>

    - Enter information on the left maker side, upload a image and press the add button, you will see the result on the right preview side.

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117764268-2f4ec880-b267-11eb-82cc-8fe31c925bdd.gif"/>

    - If you edit information in the left maker section, you can see a preview of your business card in the preview side at the same time.

<img width="100%" src="https://user-images.githubusercontent.com/73153617/117764264-2cec6e80-b267-11eb-93f3-6bca5b5407e7.gif"/>
    
    - Add and Delete 
    
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
