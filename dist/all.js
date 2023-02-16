console.log("first code 2023-2-9 11:20AM"),document.getElementById("daysContainer").onmousemove=n=>{for(const d of document.getElementsByClassName("day")){const a=d.getBoundingClientRect(),e=n.clientX-a.left,c=n.clientY-a.top;d.style.setProperty("--mouse-x",`${e}px`),d.style.setProperty("--mouse-y",`${c}px`)}};const sidebarHomeSvg=document.querySelector("#sidebarHomeSvg"),sidebar=document.querySelector("#sidebar");sidebarHomeSvg.addEventListener("click",(function(){sidebar.classList.contains("sidebar-menu-open")?sidebar.classList.remove("sidebar-menu-open"):sidebar.classList.add("sidebar-menu-open")}));const lightDarkMode=document.querySelector("#lightDarkMode"),pageBody=document.querySelector("#pageBody");lightDarkMode.addEventListener("click",(function(){pageBody.classList.contains("light-theme")?pageBody.classList.remove("light-theme"):pageBody.classList.add("light-theme")}));const sectionNavLi1=document.querySelector("#sectionNavLi1"),sectionNavLi2=document.querySelector("#sectionNavLi2"),sectionNavLi3=document.querySelector("#sectionNavLi3"),li1=document.querySelector("#giveMeActive1"),li2=document.querySelector("#giveMeActive2"),li3=document.querySelector("#giveMeActive3");function removeActiveNavbar(){li1.classList.remove("active-section"),li2.classList.remove("active-section"),li3.classList.remove("active-section")}sectionNavLi1.addEventListener("click",(function(){removeActiveNavbar(),li1.classList.add("active-section")})),sectionNavLi2.addEventListener("click",(function(){removeActiveNavbar(),li2.classList.add("active-section")})),sectionNavLi3.addEventListener("click",(function(){removeActiveNavbar(),li3.classList.add("active-section")}));const StatisticsTitle=document.querySelector("#StatisticsTitle"),ResourcesTitle=document.querySelector("#ResourcesTitle"),ProjectsUpdateTitle=document.querySelector("#ProjectsUpdateTitle");function createSectionsTitleHTML(){StatisticsTitle.innerHTML='\n  <h2>\n  <span class="magic">\n  <span class="magic-star">\n    <svg viewBox="0 0 512 512">\n    <path\n    d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n    />\n    </svg>\n    </span>\n    <span class="magic-star">\n    <svg viewBox="0 0 512 512">\n    <path\n    d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n    />\n    </svg>\n    </span>\n    <span class="magic-star">\n    <svg viewBox="0 0 512 512">\n    <path\n    d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n    />\n    </svg>\n  </span>\n  <span class="magic-text">Statistics Section</span>\n  </span>\n  </h2>',ResourcesTitle.innerHTML=' \n  <h2>\n  <span class="magic">\n    <span class="magic-star">\n      <svg viewBox="0 0 512 512">\n        <path\n          d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n        />\n      </svg>\n    </span>\n    <span class="magic-star">\n      <svg viewBox="0 0 512 512">\n        <path\n          d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n        />\n      </svg>\n    </span>\n    <span class="magic-star">\n      <svg viewBox="0 0 512 512">\n        <path\n          d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n        />\n      </svg>\n    </span>\n    <span class="magic-text">Resources Section</span>\n  </span>\n</h2>',ProjectsUpdateTitle.innerHTML='\n<h2>\n<span class="magic">\n  <span class="magic-star">\n    <svg viewBox="0 0 512 512">\n      <path\n        d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n      />\n    </svg>\n  </span>\n  <span class="magic-star">\n    <svg viewBox="0 0 512 512">\n      <path\n        d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n      />\n    </svg>\n  </span>\n  <span class="magic-star">\n    <svg viewBox="0 0 512 512">\n      <path\n        d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"\n      />\n    </svg>\n  </span>\n  <span class="magic-text">Projects Update</span>\n</span>\n</h2>\n  '}createSectionsTitleHTML();let index=0,interval=1e3;const rand=(n,d)=>Math.floor(Math.random()*(d-n+1))+n,animate=n=>{n.style.setProperty("--star-left",`${rand(-10,100)}%`),n.style.setProperty("--star-top",`${rand(-40,80)}%`),n.style.animation="none",n.offsetHeight,n.style.animation=""};for(const n of document.getElementsByClassName("magic-star"))setTimeout((()=>{animate(n),setInterval((()=>animate(n)),1e3)}),index++*(interval/3));const daysContainer=document.querySelector("#daysContainer");function createDaysHTML(){daysContainer.innerHTML='\n  \x3c!-- DAY [1] --\x3e\n  <div id="day1" class="day">\n    <div class="day-number">\n      <span>DAY 1</span>\n    </div>\n  </div>\n  \x3c!-- DAY [2] --\x3e\n  <div id="day2" class="day">\n    <div class="day-number">\n      <span>DAY 2</span>\n     </div>\n  </div>\n  \x3c!-- DAY [3] --\x3e\n  <div id="day3" class="day">\n    <div class="day-number">\n      <span>DAY 3</span>\n    </div>\n  </div>\n  \x3c!-- DAY [4] --\x3e\n  <div id="day4" class="day">\n    <div class="day-number">\n      <span>DAY 4</span>\n    </div>\n  </div>\n  \x3c!-- DAY [5] --\x3e\n  <div id="day5" class="day">\n    <div class="day-number">\n      <span>DAY 5</span>\n    </div>\n  </div>\n  \x3c!-- DAY [6] --\x3e\n  <div id="day6" class="day">\n    <div class="day-number">\n      <span>DAY 6</span>\n    </div>\n  </div>\n  \x3c!-- DAY [7] --\x3e\n  <div id="day7" class="day">\n    <div class="day-number">\n      <span>DAY 7</span>\n    </div>\n  </div>\n  \x3c!-- DAY [8] --\x3e\n  <div id="day8" class="day">\n    <div class="day-number">\n      <span>DAY 8</span>\n    </div>\n  </div>\n  \x3c!-- DAY [9] --\x3e\n  <div id="day9" class="day">\n    <div class="day-number">\n      <span>DAY 9</span>\n    </div>\n  </div>\n  \x3c!-- DAY [10] --\x3e\n  <div id="day10" class="day">\n    <div class="day-number">\n      <span>DAY 10</span>\n    </div>\n  </div>\n  \x3c!-- DAY [11] --\x3e\n  <div id="day11" class="day">\n    <div class="day-number">\n      <span>DAY 11</span>\n    </div>\n  </div>\n  \x3c!-- DAY [12] --\x3e\n  <div id="day12" class="day">\n    <div class="day-number">\n      <span>DAY 12</span>\n    </div>\n  </div>\n  \x3c!-- DAY [13] --\x3e\n  <div id="day13" class="day">\n    <div class="day-number">\n      <span>DAY 13</span>\n    </div>\n  </div>\n  \x3c!-- DAY [14] --\x3e\n  <div id="day14" class="day">\n    <div class="day-number">\n      <span>DAY 14</span>\n    </div>\n  </div>\n  \x3c!-- DAY [15] --\x3e\n  <div id="day15" class="day">\n    <div class="day-number">\n      <span>DAY 15</span>\n    </div>\n  </div>\n  \x3c!-- DAY [16] --\x3e\n  <div id="day16" class="day">\n    <div class="day-number">\n      <span>DAY 16</span>\n    </div>\n  </div>\n  \x3c!-- DAY [17] --\x3e\n  <div id="day17" class="day">\n    <div class="day-number">\n      <span>DAY 17</span>\n    </div>\n  </div>\n  \x3c!-- DAY [18] --\x3e\n  <div id="day18" class="day">\n    <div class="day-number">\n      <span>DAY 18</span>\n    </div>\n  </div>\n  \x3c!-- DAY [19] --\x3e\n  <div id="day19" class="day">\n    <div class="day-number">\n      <span>DAY 19</span>\n    </div>\n  </div>\n  \x3c!-- DAY [20] --\x3e\n  <div id="day20" class="day">\n    <div class="day-number">\n      <span>DAY 20</span>\n    </div>\n  </div>\n  \x3c!-- DAY [20] --\x3e\n  <div id="day20" class="day">\n    <div class="day-number">\n      <span>DAY 20</span>\n    </div>\n  </div>\n  \x3c!-- DAY [21] --\x3e\n  <div id="day21" class="day">\n    <div class="day-number">\n      <span>DAY 21</span>\n    </div>\n  </div>\n  \x3c!-- DAY [22] --\x3e\n  <div id="day22" class="day">\n    <div class="day-number">\n      <span>DAY 22</span>\n    </div>\n  </div>\n  \x3c!-- DAY [23] --\x3e\n  <div id="day23" class="day">\n    <div class="day-number">\n      <span>DAY 23</span>\n    </div>\n  </div>\n  \x3c!-- DAY [24] --\x3e\n  <div id="day24" class="day">\n    <div class="day-number">\n      <span>DAY 24</span>\n    </div>\n  </div>\n  \x3c!-- DAY [25] --\x3e\n  <div id="day25" class="day">\n    <div class="day-number">\n      <span>DAY 25</span>\n    </div>\n  </div>\n  \x3c!-- DAY [26] --\x3e\n  <div id="day26" class="day">\n    <div class="day-number">\n      <span>DAY 26</span>\n    </div>\n  </div>\n  \x3c!-- DAY [27] --\x3e\n  <div id="day27" class="day">\n    <div class="day-number">\n      <span>DAY 27</span>\n    </div>\n  </div>\n  \x3c!-- DAY [28] --\x3e\n  <div id="day28" class="day">\n    <div class="day-number">\n      <span>DAY 28</span>\n    </div>\n  </div>\n  \x3c!-- DAY [29] --\x3e\n  <div id="day29" class="day">\n    <div class="day-number">\n      <span>DAY 29</span>\n    </div>\n  </div>\n  \x3c!-- DAY [30] --\x3e\n  <div id="day30" class="day">\n    <div class="day-number">\n      <span>DAY 30</span>\n    </div>\n  </div>\n  \x3c!-- DAY [31] --\x3e\n  <div id="day31" class="day">\n    <div class="day-number">\n      <span>DAY 31</span>\n    </div>\n  </div>\n  \x3c!-- DAY [32] --\x3e\n  <div id="day32" class="day">\n    <div class="day-number">\n      <span>DAY 32</span>\n    </div>\n  </div>\n  \x3c!-- DAY [33] --\x3e\n  <div id="day33" class="day">\n    <div class="day-number">\n      <span>DAY 33</span>\n    </div>\n  </div>\n  \x3c!-- DAY [34] --\x3e\n  <div id="day34" class="day">\n    <div class="day-number">\n      <span>DAY 34</span>\n    </div>\n  </div>\n  \x3c!-- DAY [35] --\x3e\n  <div id="day35" class="day">\n    <div class="day-number">\n      <span>DAY 35</span>\n    </div>\n  </div>\n  \x3c!-- DAY [36] --\x3e\n  <div id="day36" class="day">\n    <div class="day-number">\n      <span>DAY 36</span>\n    </div>\n  </div>\n  \x3c!-- DAY [37] --\x3e\n  <div id="day37" class="day">\n    <div class="day-number">\n      <span>DAY 37</span>\n    </div>\n  </div>\n  \x3c!-- DAY [38] --\x3e\n  <div id="day38" class="day">\n    <div class="day-number">\n      <span>DAY 38</span>\n    </div>\n  </div>\n  \x3c!-- DAY [39] --\x3e\n  <div id="day39" class="day">\n    <div class="day-number">\n      <span>DAY 39</span>\n    </div>\n  </div>\n  \x3c!-- DAY [40] --\x3e\n  <div id="day40" class="day">\n    <div class="day-number">\n      <span>DAY 40</span>\n    </div>\n  </div>\n  \x3c!-- DAY [41] --\x3e\n  <div id="day41" class="day">\n    <div class="day-number">\n      <span>DAY 41</span>\n    </div>\n  </div>\n  \x3c!-- DAY [42] --\x3e\n  <div id="day42" class="day">\n    <div class="day-number">\n      <span>DAY 42</span>\n    </div>\n  </div>\n  \x3c!-- DAY [43] --\x3e\n  <div id="day43" class="day">\n    <div class="day-number">\n      <span>DAY 43</span>\n    </div>\n  </div>\n  \x3c!-- DAY [44] --\x3e\n  <div id="day44" class="day">\n    <div class="day-number">\n      <span>DAY 44</span>\n    </div>\n  </div>\n  \x3c!-- DAY [45] --\x3e\n  <div id="day45" class="day">\n    <div class="day-number">\n      <span>DAY 45</span>\n    </div>\n  </div>\n  \x3c!-- DAY [46] --\x3e\n  <div id="day46" class="day">\n    <div class="day-number">\n      <span>DAY 46</span>\n    </div>\n  </div>\n  \x3c!-- DAY [47] --\x3e\n  <div id="day47" class="day">\n    <div class="day-number">\n      <span>DAY 47</span>\n    </div>\n  </div>\n  \x3c!-- DAY [48] --\x3e\n  <div id="day48" class="day">\n    <div class="day-number">\n      <span>DAY 48</span>\n    </div>\n  </div>\n  \x3c!-- DAY [49] --\x3e\n  <div id="day49" class="day">\n    <div class="day-number">\n      <span>DAY 49</span>\n    </div>\n  </div>\n  \x3c!-- DAY [50] --\x3e\n  <div id="day50" class="day">\n    <div class="day-number">\n      <span>DAY 50</span>\n    </div>\n  </div>\n  \x3c!-- DAY [51] --\x3e\n  <div id="day51" class="day">\n    <div class="day-number">\n      <span>DAY 51</span>\n    </div>\n  </div>\n  \x3c!-- DAY [52] --\x3e\n  <div id="day52" class="day">\n    <div class="day-number">\n      <span>DAY 52</span>\n    </div>\n  </div>\n  \x3c!-- DAY [53] --\x3e\n  <div id="day53" class="day">\n    <div class="day-number">\n      <span>DAY 53</span>\n    </div>\n  </div>\n  \x3c!-- DAY [54] --\x3e\n  <div id="day54" class="day">\n    <div class="day-number">\n      <span>DAY 54</span>\n    </div>\n  </div>\n  \x3c!-- DAY [55] --\x3e\n  <div id="day55" class="day">\n    <div class="day-number">\n      <span>DAY 55</span>\n    </div>\n  </div>\n  \x3c!-- DAY [56] --\x3e\n  <div id="day56" class="day">\n    <div class="day-number">\n      <span>DAY 56</span>\n    </div>\n  </div>\n  \x3c!-- DAY [57] --\x3e\n  <div id="day57" class="day">\n    <div class="day-number">\n      <span>DAY 57</span>\n    </div>\n  </div>\n  \x3c!-- DAY [58] --\x3e\n  <div id="day58" class="day">\n    <div class="day-number">\n      <span>DAY 58</span>\n    </div>\n  </div>\n  \x3c!-- DAY [59] --\x3e\n  <div id="day59" class="day">\n    <div class="day-number">\n      <span>DAY 59</span>\n    </div>\n  </div>\n  \x3c!-- DAY [60] --\x3e\n  <div id="day60" class="day">\n    <div class="day-number">\n      <span>DAY 60</span>\n    </div>\n  </div>\n  \x3c!-- DAY [61] --\x3e\n  <div id="day61" class="day">\n    <div class="day-number">\n      <span>DAY 61</span>\n    </div>\n  </div>\n  \x3c!-- DAY [62] --\x3e\n  <div id="day62" class="day">\n    <div class="day-number">\n      <span>DAY 62</span>\n    </div>\n  </div>\n  \x3c!-- DAY [63] --\x3e\n  <div id="day63" class="day">\n    <div class="day-number">\n      <span>DAY 63</span>\n    </div>\n  </div>\n  \x3c!-- DAY [64] --\x3e\n  <div id="day64" class="day">\n    <div class="day-number">\n      <span>DAY 64</span>\n    </div>\n  </div>\n  \x3c!-- DAY [65] --\x3e\n  <div id="day65" class="day">\n    <div class="day-number">\n      <span>DAY 65</span>\n    </div>\n  </div>\n  \x3c!-- DAY [66] --\x3e\n  <div id="day66" class="day">\n    <div class="day-number">\n      <span>DAY 66</span>\n    </div>\n  </div>\n  \x3c!-- DAY [67] --\x3e\n  <div id="day67" class="day">\n    <div class="day-number">\n      <span>DAY 67</span>\n    </div>\n  </div>\n  \x3c!-- DAY [68] --\x3e\n  <div id="day68" class="day">\n    <div class="day-number">\n      <span>DAY 68</span>\n    </div>\n  </div>\n  \x3c!-- DAY [69] --\x3e\n  <div id="day69" class="day">\n    <div class="day-number">\n      <span>DAY 69</span>\n    </div>\n  </div>\n  \x3c!-- DAY [70] --\x3e\n  <div id="day70" class="day">\n    <div class="day-number">\n      <span>DAY 70</span>\n    </div>\n  </div>\n  \x3c!-- DAY [71] --\x3e\n  <div id="day71" class="day">\n    <div class="day-number">\n      <span>DAY 71</span>\n    </div>\n  </div>\n  \x3c!-- DAY [72] --\x3e\n  <div id="day72" class="day">\n    <div class="day-number">\n      <span>DAY 72</span>\n    </div>\n  </div>\n  \x3c!-- DAY [73] --\x3e\n  <div id="day73" class="day">\n    <div class="day-number">\n      <span>DAY 73</span>\n    </div>\n  </div>\n  \x3c!-- DAY [74] --\x3e\n  <div id="day74" class="day">\n    <div class="day-number">\n      <span>DAY 74</span>\n    </div>\n  </div>\n  \x3c!-- DAY [75] --\x3e\n  <div id="day75" class="day">\n    <div class="day-number">\n      <span>DAY 75</span>\n    </div>\n  </div>\n  \x3c!-- DAY [76] --\x3e\n  <div id="day76" class="day">\n    <div class="day-number">\n      <span>DAY 76</span>\n    </div>\n  </div>\n  \x3c!-- DAY [77] --\x3e\n  <div id="day77" class="day">\n    <div class="day-number">\n      <span>DAY 77</span>\n    </div>\n  </div>\n  \x3c!-- DAY [78] --\x3e\n  <div id="day78" class="day">\n    <div class="day-number">\n      <span>DAY 78</span>\n    </div>\n  </div>\n  \x3c!-- DAY [79] --\x3e\n  <div id="day79" class="day">\n    <div class="day-number">\n      <span>DAY 79</span>\n    </div>\n  </div>\n  \x3c!-- DAY [80] --\x3e\n  <div id="day80" class="day">\n    <div class="day-number">\n      <span>DAY 80</span>\n    </div>\n  </div>\n  \x3c!-- DAY [81] --\x3e\n  <div id="day81" class="day">\n    <div class="day-number">\n      <span>DAY 81</span>\n    </div>\n  </div>\n  \x3c!-- DAY [82] --\x3e\n  <div id="day82" class="day">\n    <div class="day-number">\n      <span>DAY 82</span>\n    </div>\n  </div>\n  \x3c!-- DAY [83] --\x3e\n  <div id="day83" class="day">\n    <div class="day-number">\n      <span>DAY 83</span>\n    </div>\n  </div>\n  \x3c!-- DAY [84] --\x3e\n  <div id="day84" class="day">\n    <div class="day-number">\n      <span>DAY 84</span>\n    </div>\n  </div>\n  \x3c!-- DAY [85] --\x3e\n  <div id="day85" class="day">\n    <div class="day-number">\n      <span>DAY 85</span>\n    </div>\n  </div>\n  \x3c!-- DAY [86] --\x3e\n  <div id="day86" class="day">\n    <div class="day-number">\n      <span>DAY 86</span>\n    </div>\n  </div>\n  \x3c!-- DAY [87] --\x3e\n  <div id="day87" class="day">\n    <div class="day-number">\n      <span>DAY 87</span>\n    </div>\n  </div>\n  \x3c!-- DAY [88] --\x3e\n  <div id="day88" class="day">\n    <div class="day-number">\n      <span>DAY 88</span>\n    </div>\n  </div>\n  \x3c!-- DAY [89] --\x3e\n  <div id="day89" class="day">\n    <div class="day-number">\n      <span>DAY 89</span>\n    </div>\n  </div>\n  \x3c!-- DAY [90] --\x3e\n  <div id="day90" class="day">\n    <div class="day-number">\n      <span>DAY 90</span>\n    </div>\n  </div>\n  \x3c!-- DAY [91] --\x3e\n  <div id="day91" class="day">\n    <div class="day-number">\n      <span>DAY 91</span>\n    </div>\n  </div>\n  \x3c!-- DAY [92] --\x3e\n  <div id="day92" class="day">\n    <div class="day-number">\n      <span>DAY 92</span>\n    </div>\n  </div>\n  \x3c!-- DAY [93] --\x3e\n  <div id="day93" class="day">\n    <div class="day-number">\n      <span>DAY 93</span>\n    </div>\n  </div>\n  \x3c!-- DAY [94] --\x3e\n  <div id="day94" class="day">\n    <div class="day-number">\n      <span>DAY 94</span>\n    </div>\n  </div>\n  \x3c!-- DAY [95] --\x3e\n  <div id="day95" class="day">\n    <div class="day-number">\n      <span>DAY 95</span>\n    </div>\n  </div>\n  \x3c!-- DAY [96] --\x3e\n  <div id="day96" class="day">\n    <div class="day-number">\n      <span>DAY 96</span>\n    </div>\n  </div>\n  \x3c!-- DAY [97] --\x3e\n  <div id="day97" class="day">\n    <div class="day-number">\n      <span>DAY 97</span>\n    </div>\n  </div>\n  \x3c!-- DAY [98] --\x3e\n  <div id="day98" class="day">\n    <div class="day-number">\n      <span>DAY 98</span>\n    </div>\n  </div>\n  \x3c!-- DAY [99] --\x3e\n  <div id="day99" class="day">\n    <div class="day-number">\n      <span>DAY 99</span>\n    </div>\n  </div>\n  \x3c!-- DAY [100] --\x3e\n  <div id="day100" class="day">\n    <div class="day-number">\n      <span>DAY 100</span>\n    </div>\n  </div>\n  \x3c!-- DAYs container  --\x3e\n\n\n'}createDaysHTML();const day1=document.querySelector("#day1"),day2=document.querySelector("#day2"),day3=document.querySelector("#day3"),day4=document.querySelector("#day4"),day5=document.querySelector("#day5"),day6=document.querySelector("#day6"),day7=document.querySelector("#day7"),day8=document.querySelector("#day8"),day9=document.querySelector("#day9"),day10=document.querySelector("#day10"),day11=document.querySelector("#day11"),day12=document.querySelector("#day12"),day13=document.querySelector("#day13"),day14=document.querySelector("#day14"),day15=document.querySelector("#day15"),day16=document.querySelector("#day16"),day17=document.querySelector("#day17"),day18=document.querySelector("#day18"),day19=document.querySelector("#day19"),day20=document.querySelector("#day20"),day21=document.querySelector("#day21"),day22=document.querySelector("#day22"),day23=document.querySelector("#day23"),day24=document.querySelector("#day24"),day25=document.querySelector("#day25"),day26=document.querySelector("#day26"),day27=document.querySelector("#day27"),day28=document.querySelector("#day28"),day29=document.querySelector("#day29"),day30=document.querySelector("#day30"),day31=document.querySelector("#day31"),day32=document.querySelector("#day32"),day33=document.querySelector("#day33"),day34=document.querySelector("#day34"),day35=document.querySelector("#day35"),day36=document.querySelector("#day36"),day37=document.querySelector("#day37"),day38=document.querySelector("#day38"),day39=document.querySelector("#day39"),day40=document.querySelector("#day40"),day41=document.querySelector("#day41"),day42=document.querySelector("#day42"),day43=document.querySelector("#day43"),day44=document.querySelector("#day44"),day45=document.querySelector("#day45"),day46=document.querySelector("#day46"),day47=document.querySelector("#day47"),day48=document.querySelector("#day48"),day49=document.querySelector("#day49"),day50=document.querySelector("#day50"),day51=document.querySelector("#day51"),day52=document.querySelector("#day52"),day53=document.querySelector("#day53"),day54=document.querySelector("#day54"),day55=document.querySelector("#day55"),day56=document.querySelector("#day56"),day57=document.querySelector("#day57"),day58=document.querySelector("#day58"),day59=document.querySelector("#day59"),day60=document.querySelector("#day60"),day61=document.querySelector("#day61"),day62=document.querySelector("#day62"),day63=document.querySelector("#day63"),day64=document.querySelector("#day64"),day65=document.querySelector("#day65"),day66=document.querySelector("#day66"),day67=document.querySelector("#day67"),day68=document.querySelector("#day68"),day69=document.querySelector("#day69"),day70=document.querySelector("#day70"),day71=document.querySelector("#day71"),day72=document.querySelector("#day72"),day73=document.querySelector("#day73"),day74=document.querySelector("#day74"),day75=document.querySelector("#day75"),day76=document.querySelector("#day76"),day77=document.querySelector("#day77"),day78=document.querySelector("#day78"),day79=document.querySelector("#day79"),day80=document.querySelector("#day80"),day81=document.querySelector("#day81"),day82=document.querySelector("#day82"),day83=document.querySelector("#day83"),day84=document.querySelector("#day84"),day85=document.querySelector("#day85"),day86=document.querySelector("#day86"),day87=document.querySelector("#day87"),day88=document.querySelector("#day88"),day89=document.querySelector("#day89"),day90=document.querySelector("#day90"),day91=document.querySelector("#day91"),day92=document.querySelector("#day92"),day93=document.querySelector("#day93"),day94=document.querySelector("#day94"),day95=document.querySelector("#day95"),day96=document.querySelector("#day96"),day97=document.querySelector("#day97"),day98=document.querySelector("#day98"),day99=document.querySelector("#day99"),day100=document.querySelector("#day100");day1.addEventListener("click",(function(){location.href="./html/day1.html"})),day2.addEventListener("click",(function(){location.href="./html/day2.html"})),day3.addEventListener("click",(function(){location.href="./html/day3.html"})),day4.addEventListener("click",(function(){location.href="./html/day4.html"})),day5.addEventListener("click",(function(){location.href="./html/day5.html"})),day6.addEventListener("click",(function(){location.href="./html/day6.html"})),day7.addEventListener("click",(function(){location.href="./html/day7.html"})),day8.addEventListener("click",(function(){location.href="./html/day8.html"})),day9.addEventListener("click",(function(){location.href="./html/day9.html"})),day10.addEventListener("click",(function(){location.href="./html/day10.html"})),day11.addEventListener("click",(function(){location.href="./html/day11.html"})),day12.addEventListener("click",(function(){location.href="./html/day12.html"})),day13.addEventListener("click",(function(){location.href="./html/day13.html"})),day14.addEventListener("click",(function(){location.href="./html/day14.html"})),day15.addEventListener("click",(function(){location.href="./html/day15.html"})),day16.addEventListener("click",(function(){location.href="./html/day16.html"})),day17.addEventListener("click",(function(){location.href="./html/day17.html"})),day18.addEventListener("click",(function(){location.href="./html/day18.html"})),day19.addEventListener("click",(function(){location.href="./html/day19.html"})),day20.addEventListener("click",(function(){location.href="./html/day20.html"})),day21.addEventListener("click",(function(){location.href="./html/day21.html"})),day22.addEventListener("click",(function(){location.href="./html/day22.html"})),day23.addEventListener("click",(function(){location.href="./html/day23.html"})),day24.addEventListener("click",(function(){location.href="./html/day24.html"})),day25.addEventListener("click",(function(){location.href="./html/day25.html"})),day26.addEventListener("click",(function(){location.href="./html/day26.html"})),day27.addEventListener("click",(function(){location.href="./html/day27.html"})),day28.addEventListener("click",(function(){location.href="./html/day28.html"})),day29.addEventListener("click",(function(){location.href="./html/day29.html"})),day30.addEventListener("click",(function(){location.href="./html/day30.html"})),day31.addEventListener("click",(function(){location.href="./html/day31.html"})),day32.addEventListener("click",(function(){location.href="./html/day32.html"})),day33.addEventListener("click",(function(){location.href="./html/day33.html"})),day34.addEventListener("click",(function(){location.href="./html/day34.html"})),day35.addEventListener("click",(function(){location.href="./html/day35.html"})),day36.addEventListener("click",(function(){location.href="./html/day36.html"})),day37.addEventListener("click",(function(){location.href="./html/day37.html"})),day38.addEventListener("click",(function(){location.href="./html/day38.html"})),day39.addEventListener("click",(function(){location.href="./html/day39.html"})),day40.addEventListener("click",(function(){location.href="./html/day40.html"})),day41.addEventListener("click",(function(){location.href="./html/day41.html"})),day42.addEventListener("click",(function(){location.href="./html/day42.html"})),day43.addEventListener("click",(function(){location.href="./html/day43.html"})),day44.addEventListener("click",(function(){location.href="./html/day44.html"})),day45.addEventListener("click",(function(){location.href="./html/day45.html"})),day46.addEventListener("click",(function(){location.href="./html/day46.html"})),day47.addEventListener("click",(function(){location.href="./html/day47.html"})),day48.addEventListener("click",(function(){location.href="./html/day48.html"})),day49.addEventListener("click",(function(){location.href="./html/day49.html"})),day50.addEventListener("click",(function(){location.href="./html/day50.html"})),day51.addEventListener("click",(function(){location.href="./html/day51.html"})),day52.addEventListener("click",(function(){location.href="./html/day52.html"})),day53.addEventListener("click",(function(){location.href="./html/day53.html"})),day54.addEventListener("click",(function(){location.href="./html/day54.html"})),day55.addEventListener("click",(function(){location.href="./html/day55.html"})),day56.addEventListener("click",(function(){location.href="./html/day56.html"})),day57.addEventListener("click",(function(){location.href="./html/day57.html"})),day58.addEventListener("click",(function(){location.href="./html/day58.html"})),day59.addEventListener("click",(function(){location.href="./html/day59.html"})),day60.addEventListener("click",(function(){location.href="./html/day60.html"})),day61.addEventListener("click",(function(){location.href="./html/day61.html"})),day62.addEventListener("click",(function(){location.href="./html/day62.html"})),day63.addEventListener("click",(function(){location.href="./html/day63.html"})),day64.addEventListener("click",(function(){location.href="./html/day64.html"})),day65.addEventListener("click",(function(){location.href="./html/day65.html"})),day66.addEventListener("click",(function(){location.href="./html/day66.html"})),day67.addEventListener("click",(function(){location.href="./html/day67.html"})),day68.addEventListener("click",(function(){location.href="./html/day68.html"})),day69.addEventListener("click",(function(){location.href="./html/day69.html"})),day70.addEventListener("click",(function(){location.href="./html/day70.html"})),day71.addEventListener("click",(function(){location.href="./html/day71.html"})),day72.addEventListener("click",(function(){location.href="./html/day72.html"})),day73.addEventListener("click",(function(){location.href="./html/day73.html"})),day74.addEventListener("click",(function(){location.href="./html/day74.html"})),day75.addEventListener("click",(function(){location.href="./html/day75.html"})),day76.addEventListener("click",(function(){location.href="./html/day76.html"})),day77.addEventListener("click",(function(){location.href="./html/day77.html"})),day78.addEventListener("click",(function(){location.href="./html/day78.html"})),day79.addEventListener("click",(function(){location.href="./html/day79.html"})),day80.addEventListener("click",(function(){location.href="./html/day80.html"})),day81.addEventListener("click",(function(){location.href="./html/day81.html"})),day82.addEventListener("click",(function(){location.href="./html/day82.html"})),day83.addEventListener("click",(function(){location.href="./html/day83.html"})),day84.addEventListener("click",(function(){location.href="./html/day84.html"})),day85.addEventListener("click",(function(){location.href="./html/day85.html"})),day86.addEventListener("click",(function(){location.href="./html/day86.html"})),day87.addEventListener("click",(function(){location.href="./html/day87.html"})),day88.addEventListener("click",(function(){location.href="./html/day88.html"})),day89.addEventListener("click",(function(){location.href="./html/day89.html"})),day90.addEventListener("click",(function(){location.href="./html/day90.html"})),day91.addEventListener("click",(function(){location.href="./html/day91.html"})),day92.addEventListener("click",(function(){location.href="./html/day92.html"})),day93.addEventListener("click",(function(){location.href="./html/day93.html"})),day94.addEventListener("click",(function(){location.href="./html/day94.html"})),day95.addEventListener("click",(function(){location.href="./html/day95.html"})),day96.addEventListener("click",(function(){location.href="./html/day96.html"})),day97.addEventListener("click",(function(){location.href="./html/day97.html"})),day98.addEventListener("click",(function(){location.href="./html/day98.html"})),day99.addEventListener("click",(function(){location.href="./html/day99.html"})),day100.addEventListener("click",(function(){location.href="./html/day100.html"}));
//# sourceMappingURL=all.js.map