## Website Performance Optimization portfolio project

I optimized this mobile portfolio as part of my Front-End Nanodegree. This project is part of Udacity's [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### Steps to solve the performance problems

#### Part 1: Optimize PageSpeed Insights score for index.html

- [x] Optimized the pictures that loaded as thumbnails next to the individual pages
- [x] Inlined CSS for performance gain
- [x] Got rid of rendering blocking css (print) as a seperate css
- [x] Rendering blocking JavaScript got moved to the end of the document and the tag "async"
- [x] For an additional performance gain the Google Analytics JS is stored locally and cached for 8 days (Google Recommendation)
- [x] Activating caching via CloudFlare for performance gain
- [x] Personalised the pages
- [x] Minified CSS, HTML and JavaScript files (via CloudFlare)

*I installed Gulp as a Build System but decided not to use it*

#### Part 2: Optimize Frames per Second in pizza.html

- [x] Included the will-change and transform property for the pizzas in the background to limit compositing & painting
- [x] In the respective loops I got rid of Forces Synchronous Layout (FSL)
- [x] Optimized main.js by using getElementById() and getElementsByClassName (Web API)
- [x] Moved variables out of the loop so they are not created with each interation
- [x] If possible variables are declared outside of the for loops
- [x] Reduced the number of pizzas to 24 for better performance
- [x] Used http://autoprefixer.github.io/ for the CSS in pizza.html

### Access the page

The page can be accessed at www.matthiasludwig.co