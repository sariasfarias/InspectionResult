<h1 align="center">
  Socrata API with Data Visualizations
  <br>
</h1>


<p align="center">
  <a href="#key-features">How to Run</a> •
  <a href="#how-to-use">How To Use</a> •
</p>

Answer to [Issue #1](https://github.com/bevy-interviews/stefania-arias-fe-sse-project/issues/1)

## How to Run

* Run locally

```bash
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

* Run tests
```bash
npm test
```

## How To Use

**This app supports desktop and mobile view**.

<p align="center">
  <a href="#home-page">Home Page</a> •
  <a href="#filter-by-field">Filter by field</a> •
  <a href="#navigate-between-pages">Navigate between pages</a> •
</p>

### Home Page

At first sight you can distinguish two sections:
* A doughnut chart showing the restaurant inspections by restaurant result. The diagram will be redraw each time the list is modified.
* A list of restaurants from Seattle about Food Establishment inspections. At the end of the list, navigation buttons will appear to switch between pages.

On Desktop view there are displayed as columns, on Mobile these section are displayed as rows instead of columns.

Desktop

![Screenshot 2023-04-27 at 12 58 20](https://user-images.githubusercontent.com/46817386/234919147-e44934a2-cfd7-4cdf-9592-4ca0a9ef1b39.png)


Mobile

![Screenshot 2023-04-27 at 12 58 50](https://user-images.githubusercontent.com/46817386/234919291-7b2cf103-0142-47d4-8112-e16bed60b053.png)


### Filter by field

**The SearchContainer component allows to filter by different fields at the same time**
![Screenshot 2023-04-27 at 15 08 32](https://user-images.githubusercontent.com/46817386/234953827-76afc780-6614-4252-917a-333220728813.png)


* Add a filter:
  1. Select the field you want to filter by.
  2. Write the text.
  3. Press enter or click the search button.

  _A tag will be created below the search bar showing the filter that was just added._

  To add a new search repeat the steps.

* Clean a filter:

  1. Press the x on the tag that you want to remove.

### Navigate between pages

* To advance:
  1. Click the Next button.
  _The page number is going to be updated_

* To go back:
  1. Click the Prev button.
  _The page number is going to be updated_
