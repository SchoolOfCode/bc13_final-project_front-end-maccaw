# final-project_front-end

**[DEMO LINK](https://home-grown.vercel.app/)**

[<img src="./home-grown/public/brand-images/Graphic Design (72 × 26in) (72 × 20in) (2).png" alt="banner" />](image.png)

<br/>

---

<br />

## List of Contents

1. [Introduction](#Care-Full)
2. [Demo](#App-Demo)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [Tech Stack](#tech-stack)
6. [Color Reference](#color-reference)
7. [Running Tests](#running-tests)
8. [The Team](#The-Team)
9. [Appendix](#appendix)

<br/>

---

<br />

# **_Home_Grown_App_** 🍇🍎🍅🥕🌽🧑🏻‍🌾

Welcome to Home-Grown!

Our team at the School of Code bootcamp came together with the goal of addressing real-world issues that are interconnected and impact our society. Through brainstorming and discussion, we identified climate change, the cost of living, and a lack of community as significant problems. In response, we developed an app to empower individuals to take steps towards a more sustainable, self-sufficient, and community-oriented future. Though our app may not solve these complex issues, it aims to provide guidance and resources to individuals looking to make a positive impact in their communities.

Elevator Pitch:

Are you looking to save money, eat more healthily, learn new skills and join a community? Home Grown connects you to your local food growing community whether you've got your own growing space or not! Find food friends, track your progress and gain access to our growing guide.

**This README is for the front-end of the Home-Grown app. If you would like to explore the back-end of the app please go to the [backend repository](https://github.com/SchoolOfCode/bc13_final-project_back-end-maccaw.git)**

<br/>

---

<br />

# **_App-Demo_**

[<img src=".\public\demo-home.gif" width="250" height="480"/>](demo-home.gif)
[<img src="./public\demo-addPet.gif" width="250" height="480"/>](demo-addPet.gif)
[<img src="./public\demo-modal.gif" width="250" height="480"/>](demo-modal.gif)
[<img src="./public\demo-colour.gif" width="250" height="480"/>](demo-colour.gif)
<br/>

<br />

## **_Features_** 📱

- Secure login and authorisation provided by FireBase
- Add multiple posts
- Update post information
- Delete post information
- search posts by postcode or crop you want to grow
- mobile, tablet responsiveness 
--
  <br/>

---

<br />

## **_Getting Started_** ✅

### **Front-end**

To run the front-end locally follow the steps below:

1. Git clone the front-end repository by pasting the following into your terminal:

```bash
  git clone https://github.com/SchoolOfCode/bc13_final-project_front-end-maccaw
```

2. Remember to navigate to the correct folder: home-grown

3. Install all necessary dependencies by running the following command in the terminal:

```bash
  npm i
```


4. Sign up to a firebase account and create a new project.

https://firebase.google.com/

5. create a .env.local file in the home-grown root folder and paste in these values from your firebase account.
```bash
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY = {YOUR KEY}
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN={UTH_DOMAIN}
NEXT_PUBLIC_FIREBASE_PROJECT_ID={YOUR PROJECT_ID}
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET={YOUR STORAGE_BUCKET}
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID={YOUR MESSAGING_SENDER_ID}
NEXT_PUBLIC_FIREBASE_APP_ID={YOUR FIREBASE_APP_ID}
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID={YOUR MEASUREMENT_ID}
```
6. Start the app using:

```bash
  npm run dev
```

<br/>

---

<br />

## **_Tech Stack⚙️_**

**Front-End:** Next.js, CSS, Firebase
</br>
**Front-End Testing:** React Testing Library, Cypress, Jest
</br>


## **_Colour Reference_** 🖌️

| Colour     | Hex                                                                    |
| ---------- | ---------------------------------------------------------------------- |
| Main White | ![#FBFBF9](https://via.placeholder.com/15/FBFBF9/FBFBF9.png) `#fbfbf9` |
| DarkText   | ![#081402](https://via.placeholder.com/15/081402/081402.png)`#081402`  |
| HighLight1 | ![#214e0b](https://via.placeholder.com/15/214e0b/214e0b.png) `#214e0b` |
| LowLight   | ![#3f5416](https://via.placeholder.com/15/3f5416/3f5416.png) `#3f5416` |
| HighLight2 | ![#d34401](https://via.placeholder.com/15/d34401/d34401.png)`#d34401`  |
| HighLight3 | ![#faa613](https://via.placeholder.com/15/faa613/faa613.png) `#faa613` |
| LightText  | ![#6d6d6d](https://via.placeholder.com/15/6d6d6d/6d6d6d.png) ` #6d6d6d`|


<br/>

---

<br />

## **_Running Tests_**

To run unit tests, run the following command

```bash
  npm run test
```
To run Cypress E2E tests, run the following command

```bash
  npm run cypress:open
```

<br/>

---

<br />

## **_The Team_**

We are Maccaw!

- [Amina Edmunds](https://github.com/edmundsamina)
- [Marwa Dawood](https://github.com/MarwaDawood)
- [Will Byrne](https://github.com/W1llB)
- [Alex Chappell](https://github.com/ajcoding7)
- [Chet Jogia](https://github.com/chetjogia)
- [Julio Camargo](https://github.com/jcamargoUK)

<br/>

---

<br />

## **_Appendix📝_**

</br>

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [JavaScript](https://www.javascript.com/)
- [Render](https://render.com//)
- [Vercel](https://vercel.com/)
