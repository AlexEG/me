![Alt text](../IMAGES/HTML/NAV/Screenshot%202023-02-16%20at%2009-21-26%20Me%20-%20DAY%207.png)

(1) ![Alt text](../IMAGES/HTML/NAV/Screenshot%202023-02-16%20at%2009-23-02%20Me%20-%20DAY%207.png)

(2) ![Alt text](../IMAGES/HTML/NAV/Screenshot%202023-02-16%20at%2009-22-51%20Me%20-%20DAY%207.png)

(3) ![Alt text](../IMAGES/HTML/NAV/Screenshot%202023-02-16%20at%2009-23-09%20Me%20-%20DAY%207.png)

```html
<!--!----- NAV [START] nochange -----!-->

<!-- Here is: 
    (1) menu icon on the left side
    (2) The search bar in the center
    (3) light/Dark mode button on the right side -->

<nav>
  <!-- IMAGE[1] -->
  <button
    id="sidebarHomeSvg"
    class="hamburger-btn"
    aria-controls="sidebar-navigation"
    aria-expanded="false"
  >
    <div class="svg">
      <img src="../src/assets/svg/bars-solid.svg" alt="menu icon" />
    </div>
  </button>

  <!-- IMAGE[2] -->
  <div class="search-bar">
    <input id="search" type="search" placeholder="Search in All days at once" />
    <div class="search-bun">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
    </div>
  </div>

  <!-- IMAGE[3] -->
  <div class="top-navbar-left-contaner">
    <div id="lightDarkMode" class="light-dark-btn">
      <div class="circle"></div>
    </div>
  </div>
</nav>

<!--!----- NAV [END] nochange -----!-->
```

<hr>

[GO BACK](../HTML%20COMMENTS.md)
