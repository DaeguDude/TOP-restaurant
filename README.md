## TOP - Restaurant

## 0819

I'm going through the project instruction of The Odin Project. I am not too sure what this all webpack thing is working, but I will complete first and try to understand little details using [Feynman Technique](https://www.youtube.com/watch?v=FrNqSLPaZLc)

> Create a bare-bons homepage for a restaurant. Include an image, headline, and save copy about how wonderful the restaurant is. It's okay to hard-code these into the HTML for now just to see how they look on the page.

Okay, now I'm at the task4 written above. Let's list the things that I need to do.

1. Decide how your layout will look like(Find a simple restaurant website you want to copy)

2. What type of food your website is about?

3. Prototyping using Figma

  - What device?

### Decide how your layout will look like(Find a simple restaurant website you want to copy)

I've looked at some examples for simple restaurnat websites from [sitebuilderreport](https://www.sitebuilderreport.com/inspiration/restaurant-websites?a=ga&gclid=CjwKCAjwm_P5BRAhEiwAwRzSO8z_wiSp2CKY2-GcbwUferZ04n2apNvlLB1e45rG1X-2hAR8G5_l-RoCAZ0QAvD_BwE), and I decided to do this one.

Landing Page
![landing-page](./img/landing-page.png)

Other Main Pages
![ohter-pages](./img/other-pages.png)

### What type of food your website is about?

My website will be about Korean food since I'm a Korean. I guess I will need to find some quality photos for Korean food.

### Prototype using Figma

#### Home
![home](./img/prototype/home.png)

#### About
![about](./img/prototype/about.png)

#### Menu
![menu](./img/prototype/menu.png)

#### Contact
![contact](./img/prototype/contact.png)

So this is how my website will look like! Now it is time for actual coding!

### 08/19 REVIEW

I have finished up until making prototype of my hard code html and css. Tomorrow I will hard code them with html and css.

## 08/20

**HARD CODE HTML AND CSS**

Today, I'm going to hard code the prototype that I made starting from Landing page to About, Menu, and Contact lastly. I am not too sure if I can make it today, but that doesn't matter. I'll just focus on doing it and learn as much as I can!

### TODAY REVIEW

So today, I have made a basic layout and started working on the header. Here's the finished product??? of today.

![08-20](./img/08-20.png)

I have been little stuck at making flex items(`#nav-bar li`) to fit in the flex container(`#nav-bar`). And I have found a weird behaviour. When you give flex items the percentage as their padding value, it will overflow the flex container. However, when you give the pixel as their padding value, it doesn't overflow and the flex container stretches to be the total width of flex items.

I don't know what the differences between them are, I hope someone answer my [post](https://stackoverflow.com/questions/63501553/why-doesnt-flex-container-to-be-the-width-of-flex-items-when-flex-items-paddin?noredirect=1#comment112289357_63501553) that I posted in the stackoverflow.

### UPDATE

Someone answer me with this [link](https://stackoverflow.com/questions/53536266/why-does-percentage-padding-break-my-flex-item). Have a look at it tomorrow.

## 08/21

Today, I started with the [question](https://stackoverflow.com/questions/63501553/why-doesnt-flex-container-to-be-the-width-of-flex-items-when-flex-items-paddin?noredirect=1#comment112289357_63501553) that I had yesterday, and I was finally able to solve it. And I'm going to write a post about it.

Today, I was able to finish landing page and about page, it was easy after done making landing page, because I just had to change the image regarding to the page.


