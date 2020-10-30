# Curiosity Project 1 

## **Work it Out**
### A Web application that allows users to view exercises by muscle group.

---
---

# **Check it out here!**
[Launch this bad boy](https://workitout.netlify.app/index.html)

## **Technologies used**
- HTML
- Javascript
- CSS
- jQuery
---
---

## **WireFrame**
![Photo1](wireframes/1.jpg)
![photo2](wireframes/2.jpg)
![Photo3](wireframes/3.jpg)
![Photo4](wireframes/4.jpg)
---
---

## **Approach**

I started off with the basic card layout idea from the PokeGallery site we had built in class. I knew I wanted to use a Google Sheet API to pull info from a spreadsheet I made as it would be easy to input my own exercises and descriptions without scouring the web for a workout API. Once I had solidified these two ideas I then began with a single page idea in mind (seen here);

![original frame](wireframes/og.jpg)

After discussing with a fellow classmate about their project I realized a multi-page approach wouldn't be all that hard to put together and began thinking of how I would do that. Since the cards wouldn't auto populate, rather id tell them what exercise to display respectively, I figured I would just need to create a style page for the home, and then a seperate one for each muscle group, with the same layout, only changing the exercises displayed per page. A few cross page links later and I have a working site!
---
---

## **The Process/Issues**
### Process
I started with creating all the HTML pages, then linking them and creating a stylesheet for the home page, then a seperate one for the remaining pages. Boiler plate implemented in all, added basic elements such as header, nav, main, footer. Originally I wanted to implement a photo in the header of each page but ended up deciding on just the home page. I then got the base styling for the home page done aside from coloring and sizing and moved onto the other pages. Once I had a basic color scheme and layout working I then populated static cards, thats when the fun stuff started.
---
### Problems
- HTML cross links, specifically routing back to the home page was not working **SOLUTION** Moved page hosting from github to Netlify.
- Figuring out the syntax to properly draw info from the Sheets API and get cards to start dynamically populating on the page **SOLUTION** Cody is an absolute god send, without him I wouldnt have this working and would've had to make static cards and switch APIs.


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
---
---
