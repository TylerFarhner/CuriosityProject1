# Curiosity Project 1 

## **Work it Out**
### A Web application that allows users to view exercises by muscle group.

---
---

## **Technologies used**
- HTML
- Javascript
- CSS
- jQuery
---
---

## **WireFrame**
![Photo1](wireframes\1.jpg)
![photo2](wireframes/2.jpg)
![Photo3](wireframes/3.jpg)
![Photo4](wireframes/4.jpg)
---
---

## **Approach**
### I started off with the basic card layout idea from the PokeGallery site we had built in class. I knew I wanted to use a Google Sheet API to pull info from a spreadsheet I made as it would be easy to input my own exercises and descriptions without scouring the web for a workout API. Once I had solidified these two ideas I then began with a single page idea in mind (seen here);
![original frame](wireframes/og.jpg)

### After discussing with a fellow classmate about their project I realized a multi-page approach wouldn't be all that hard to put together and began thinking of how I would do that. Since the cards wouldn't auto populate, rather id tell them what exercise to display respectively, I figured I would just need to create a style page for the home, and then a seperate one for each muscle group, with the same layout, only changing the exercises displayed per page. A few cross page links later and I have a working site!
---
---

## **MVPS**
- HTML/JS/CSS/jQuery
- Multi page design
- Three cards per page
- Modal pop up for each card containing an image, description, and recommended reps/sets.
---
---
## **Post-MVPS**
- 5 cards per page
- Carousel for the cards
- Responsive design showing one card on the page in mobile at a time, and three at a time on desktop.