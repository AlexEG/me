const lightDarkMode=document.querySelector("#lightDarkMode"),pageBody=document.querySelector("#pageBody");lightDarkMode.addEventListener("click",(function(){pageBody.classList.contains("light-theme")?pageBody.classList.remove("light-theme"):pageBody.classList.add("light-theme")})),console.log("first code 2023-2-9 11:20AM"),document.getElementById("daysContainer").onmousemove=e=>{for(const d of document.getElementsByClassName("day")){const t=d.getBoundingClientRect(),c=e.clientX-t.left,a=e.clientY-t.top;d.style.setProperty("--mouse-x",`${c}px`),d.style.setProperty("--mouse-y",`${a}px`)}};const sectionNavLi1=document.querySelector("#sectionNavLi1"),sectionNavLi2=document.querySelector("#sectionNavLi2"),sectionNavLi3=document.querySelector("#sectionNavLi3"),sectionNavLi4=document.querySelector("#sectionNavLi4"),li1=document.querySelector("#giveMeActive1"),li2=document.querySelector("#giveMeActive2"),li3=document.querySelector("#giveMeActive3"),li4=document.querySelector("#giveMeActive4");function removeActiveNavbar(){li1.classList.remove("active-section"),li2.classList.remove("active-section"),li3.classList.remove("active-section"),li4.classList.remove("active-section")}sectionNavLi1.addEventListener("click",(function(){removeActiveNavbar(),li1.classList.add("active-section")})),sectionNavLi2.addEventListener("click",(function(){removeActiveNavbar(),li2.classList.add("active-section")})),sectionNavLi3.addEventListener("click",(function(){removeActiveNavbar(),li3.classList.add("active-section")})),sectionNavLi4.addEventListener("click",(function(){removeActiveNavbar(),li4.classList.add("active-section")}));const day1=document.querySelector("#day1"),day2=document.querySelector("#day2"),day3=document.querySelector("#day3"),day4=document.querySelector("#day4"),day5=document.querySelector("#day5"),day6=document.querySelector("#day6"),day7=document.querySelector("#day7"),day8=document.querySelector("#day8"),day9=document.querySelector("#day9"),day10=document.querySelector("#day10"),day11=document.querySelector("#day11"),day12=document.querySelector("#day12"),day13=document.querySelector("#day13"),day14=document.querySelector("#day14"),day15=document.querySelector("#day15"),day16=document.querySelector("#day16"),day17=document.querySelector("#day17"),day18=document.querySelector("#day18"),day19=document.querySelector("#day19"),day20=document.querySelector("#day20"),day21=document.querySelector("#day21"),day22=document.querySelector("#day22"),day23=document.querySelector("#day23"),day24=document.querySelector("#day24"),day25=document.querySelector("#day25"),day26=document.querySelector("#day26"),day27=document.querySelector("#day27"),day28=document.querySelector("#day28"),day29=document.querySelector("#day29"),day30=document.querySelector("#day30"),day31=document.querySelector("#day31"),day32=document.querySelector("#day32"),day33=document.querySelector("#day33"),day34=document.querySelector("#day34"),day35=document.querySelector("#day35"),day36=document.querySelector("#day36"),day37=document.querySelector("#day37"),day38=document.querySelector("#day38"),day39=document.querySelector("#day39"),day40=document.querySelector("#day40"),day41=document.querySelector("#day41"),day42=document.querySelector("#day42"),day43=document.querySelector("#day43"),day44=document.querySelector("#day44"),day45=document.querySelector("#day45"),day46=document.querySelector("#day46"),day47=document.querySelector("#day47"),day48=document.querySelector("#day48"),day49=document.querySelector("#day49"),day50=document.querySelector("#day50"),day51=document.querySelector("#day51"),day52=document.querySelector("#day52"),day53=document.querySelector("#day53"),day54=document.querySelector("#day54"),day55=document.querySelector("#day55"),day56=document.querySelector("#day56"),day57=document.querySelector("#day57"),day58=document.querySelector("#day58"),day59=document.querySelector("#day59"),day60=document.querySelector("#day60"),day61=document.querySelector("#day61"),day62=document.querySelector("#day62"),day63=document.querySelector("#day63"),day64=document.querySelector("#day64"),day65=document.querySelector("#day65"),day66=document.querySelector("#day66"),day67=document.querySelector("#day67"),day68=document.querySelector("#day68"),day69=document.querySelector("#day69"),day70=document.querySelector("#day70"),day71=document.querySelector("#day71"),day72=document.querySelector("#day72"),day73=document.querySelector("#day73"),day74=document.querySelector("#day74"),day75=document.querySelector("#day75"),day76=document.querySelector("#day76"),day77=document.querySelector("#day77"),day78=document.querySelector("#day78"),day79=document.querySelector("#day79"),day80=document.querySelector("#day80"),day81=document.querySelector("#day81"),day82=document.querySelector("#day82"),day83=document.querySelector("#day83"),day84=document.querySelector("#day84"),day85=document.querySelector("#day85"),day86=document.querySelector("#day86"),day87=document.querySelector("#day87"),day88=document.querySelector("#day88"),day89=document.querySelector("#day89"),day90=document.querySelector("#day90"),day91=document.querySelector("#day91"),day92=document.querySelector("#day92"),day93=document.querySelector("#day93"),day94=document.querySelector("#day94"),day95=document.querySelector("#day95"),day96=document.querySelector("#day96"),day97=document.querySelector("#day97"),day98=document.querySelector("#day98"),day99=document.querySelector("#day99"),day100=document.querySelector("#day100"),d1=document.querySelector("#d1"),d2=document.querySelector("#d2"),d3=document.querySelector("#d3"),d4=document.querySelector("#d4"),d5=document.querySelector("#d5"),d6=document.querySelector("#d6"),d7=document.querySelector("#d7"),d8=document.querySelector("#d8"),d9=document.querySelector("#d9"),d10=document.querySelector("#d10"),d11=document.querySelector("#d11"),d12=document.querySelector("#d12"),d13=document.querySelector("#d13"),d14=document.querySelector("#d14"),d15=document.querySelector("#d15"),d16=document.querySelector("#d16"),d17=document.querySelector("#d17"),d18=document.querySelector("#d18"),d19=document.querySelector("#d19"),d20=document.querySelector("#d20"),d21=document.querySelector("#d21"),d22=document.querySelector("#d22"),d23=document.querySelector("#d23"),d24=document.querySelector("#d24"),d25=document.querySelector("#d25"),d26=document.querySelector("#d26"),d27=document.querySelector("#d27"),d28=document.querySelector("#d28"),d29=document.querySelector("#d29"),d30=document.querySelector("#d30"),d31=document.querySelector("#d31"),d32=document.querySelector("#d32"),d33=document.querySelector("#d33"),d34=document.querySelector("#d34"),d35=document.querySelector("#d35"),d36=document.querySelector("#d36"),d37=document.querySelector("#d37"),d38=document.querySelector("#d38"),d39=document.querySelector("#d39"),d40=document.querySelector("#d40"),d41=document.querySelector("#d41"),d42=document.querySelector("#d42"),d43=document.querySelector("#d43"),d44=document.querySelector("#d44"),d45=document.querySelector("#d45"),d46=document.querySelector("#d46"),d47=document.querySelector("#d47"),d48=document.querySelector("#d48"),d49=document.querySelector("#d49"),d50=document.querySelector("#d50"),d51=document.querySelector("#d51"),d52=document.querySelector("#d52"),d53=document.querySelector("#d53"),d54=document.querySelector("#d54"),d55=document.querySelector("#d55"),d56=document.querySelector("#d56"),d57=document.querySelector("#d57"),d58=document.querySelector("#d58"),d59=document.querySelector("#d59"),d60=document.querySelector("#d60"),d61=document.querySelector("#d61"),d62=document.querySelector("#d62"),d63=document.querySelector("#d63"),d64=document.querySelector("#d64"),d65=document.querySelector("#d65"),d66=document.querySelector("#d66"),d67=document.querySelector("#d67"),d68=document.querySelector("#d68"),d69=document.querySelector("#d69"),d70=document.querySelector("#d70"),d71=document.querySelector("#d71"),d72=document.querySelector("#d72"),d73=document.querySelector("#d73"),d74=document.querySelector("#d74"),d75=document.querySelector("#d75"),d76=document.querySelector("#d76"),d77=document.querySelector("#d77"),d78=document.querySelector("#d78"),d79=document.querySelector("#d79"),d80=document.querySelector("#d80"),d81=document.querySelector("#d81"),d82=document.querySelector("#d82"),d83=document.querySelector("#d83"),d84=document.querySelector("#d84"),d85=document.querySelector("#d85"),d86=document.querySelector("#d86"),d87=document.querySelector("#d87"),d88=document.querySelector("#d88"),d89=document.querySelector("#d89"),d90=document.querySelector("#d90"),d91=document.querySelector("#d91"),d92=document.querySelector("#d92"),d93=document.querySelector("#d93"),d94=document.querySelector("#d94"),d95=document.querySelector("#d95"),d96=document.querySelector("#d96"),d97=document.querySelector("#d97"),d98=document.querySelector("#d98"),d99=document.querySelector("#d99"),d100=document.querySelector("#d100");function remove(){d1.classList.remove("active"),d2.classList.remove("active"),d3.classList.remove("active"),d4.classList.remove("active"),d5.classList.remove("active"),d6.classList.remove("active"),d7.classList.remove("active"),d8.classList.remove("active"),d9.classList.remove("active"),d10.classList.remove("active"),d11.classList.remove("active"),d12.classList.remove("active"),d13.classList.remove("active"),d14.classList.remove("active"),d15.classList.remove("active"),d16.classList.remove("active"),d17.classList.remove("active"),d18.classList.remove("active"),d19.classList.remove("active"),d20.classList.remove("active"),d21.classList.remove("active"),d22.classList.remove("active"),d23.classList.remove("active"),d24.classList.remove("active"),d25.classList.remove("active"),d26.classList.remove("active"),d27.classList.remove("active"),d28.classList.remove("active"),d29.classList.remove("active"),d30.classList.remove("active"),d31.classList.remove("active"),d32.classList.remove("active"),d33.classList.remove("active"),d34.classList.remove("active"),d35.classList.remove("active"),d36.classList.remove("active"),d37.classList.remove("active"),d38.classList.remove("active"),d39.classList.remove("active"),d40.classList.remove("active"),d41.classList.remove("active"),d42.classList.remove("active"),d43.classList.remove("active"),d44.classList.remove("active"),d45.classList.remove("active"),d46.classList.remove("active"),d47.classList.remove("active"),d48.classList.remove("active"),d49.classList.remove("active"),d50.classList.remove("active"),d51.classList.remove("active"),d52.classList.remove("active"),d53.classList.remove("active"),d54.classList.remove("active"),d55.classList.remove("active"),d56.classList.remove("active"),d57.classList.remove("active"),d58.classList.remove("active"),d59.classList.remove("active"),d60.classList.remove("active"),d61.classList.remove("active"),d62.classList.remove("active"),d63.classList.remove("active"),d64.classList.remove("active"),d65.classList.remove("active"),d66.classList.remove("active"),d67.classList.remove("active"),d68.classList.remove("active"),d69.classList.remove("active"),d60.classList.remove("active"),d71.classList.remove("active"),d72.classList.remove("active"),d73.classList.remove("active"),d74.classList.remove("active"),d75.classList.remove("active"),d76.classList.remove("active"),d77.classList.remove("active"),d78.classList.remove("active"),d79.classList.remove("active"),d80.classList.remove("active"),d81.classList.remove("active"),d82.classList.remove("active"),d83.classList.remove("active"),d84.classList.remove("active"),d85.classList.remove("active"),d86.classList.remove("active"),d87.classList.remove("active"),d88.classList.remove("active"),d89.classList.remove("active"),d90.classList.remove("active"),d91.classList.remove("active"),d92.classList.remove("active"),d93.classList.remove("active"),d94.classList.remove("active"),d95.classList.remove("active"),d96.classList.remove("active"),d97.classList.remove("active"),d98.classList.remove("active"),d99.classList.remove("active"),d100.classList.remove("active")}day1.addEventListener("click",(function(){remove(),d1.classList.add("active")})),day2.addEventListener("click",(function(){remove(),d2.classList.add("active")})),day3.addEventListener("click",(function(){remove(),d3.classList.add("active")})),day4.addEventListener("click",(function(){remove(),d4.classList.add("active")})),day5.addEventListener("click",(function(){remove(),d5.classList.add("active")})),day6.addEventListener("click",(function(){remove(),d6.classList.add("active")})),day7.addEventListener("click",(function(){remove(),d7.classList.add("active")})),day8.addEventListener("click",(function(){remove(),d8.classList.add("active")})),day9.addEventListener("click",(function(){remove(),d9.classList.add("active")})),day10.addEventListener("click",(function(){remove(),d10.classList.add("active")})),day11.addEventListener("click",(function(){remove(),d11.classList.add("active")})),day12.addEventListener("click",(function(){remove(),d12.classList.add("active")})),day13.addEventListener("click",(function(){remove(),d13.classList.add("active")})),day14.addEventListener("click",(function(){remove(),d14.classList.add("active")})),day15.addEventListener("click",(function(){remove(),d15.classList.add("active")})),day16.addEventListener("click",(function(){remove(),d16.classList.add("active")})),day17.addEventListener("click",(function(){remove(),d17.classList.add("active")})),day18.addEventListener("click",(function(){remove(),d18.classList.add("active")})),day19.addEventListener("click",(function(){remove(),d19.classList.add("active")})),day20.addEventListener("click",(function(){remove(),d20.classList.add("active")})),day21.addEventListener("click",(function(){remove(),d21.classList.add("active")})),day22.addEventListener("click",(function(){remove(),d22.classList.add("active")})),day23.addEventListener("click",(function(){remove(),d23.classList.add("active")})),day24.addEventListener("click",(function(){remove(),d24.classList.add("active")})),day25.addEventListener("click",(function(){remove(),d25.classList.add("active")})),day26.addEventListener("click",(function(){remove(),d26.classList.add("active")})),day27.addEventListener("click",(function(){remove(),d27.classList.add("active")})),day28.addEventListener("click",(function(){remove(),d28.classList.add("active")})),day29.addEventListener("click",(function(){remove(),d29.classList.add("active")})),day30.addEventListener("click",(function(){remove(),d30.classList.add("active")})),day31.addEventListener("click",(function(){remove(),d31.classList.add("active")})),day32.addEventListener("click",(function(){remove(),d32.classList.add("active")})),day33.addEventListener("click",(function(){remove(),d33.classList.add("active")})),day34.addEventListener("click",(function(){remove(),d34.classList.add("active")})),day35.addEventListener("click",(function(){remove(),d35.classList.add("active")})),day36.addEventListener("click",(function(){remove(),d36.classList.add("active")})),day37.addEventListener("click",(function(){remove(),d37.classList.add("active")})),day38.addEventListener("click",(function(){remove(),d38.classList.add("active")})),day39.addEventListener("click",(function(){remove(),d39.classList.add("active")})),day40.addEventListener("click",(function(){remove(),d40.classList.add("active")})),day41.addEventListener("click",(function(){remove(),d41.classList.add("active")})),day42.addEventListener("click",(function(){remove(),d42.classList.add("active")})),day43.addEventListener("click",(function(){remove(),d43.classList.add("active")})),day44.addEventListener("click",(function(){remove(),d44.classList.add("active")})),day45.addEventListener("click",(function(){remove(),d45.classList.add("active")})),day46.addEventListener("click",(function(){remove(),d46.classList.add("active")})),day47.addEventListener("click",(function(){remove(),d47.classList.add("active")})),day48.addEventListener("click",(function(){remove(),d48.classList.add("active")})),day49.addEventListener("click",(function(){remove(),d49.classList.add("active")})),day50.addEventListener("click",(function(){remove(),d50.classList.add("active")})),day51.addEventListener("click",(function(){remove(),d51.classList.add("active")})),day52.addEventListener("click",(function(){remove(),d52.classList.add("active")})),day53.addEventListener("click",(function(){remove(),d53.classList.add("active")})),day54.addEventListener("click",(function(){remove(),d54.classList.add("active")})),day55.addEventListener("click",(function(){remove(),d55.classList.add("active")})),day56.addEventListener("click",(function(){remove(),d56.classList.add("active")})),day57.addEventListener("click",(function(){remove(),d57.classList.add("active")})),day58.addEventListener("click",(function(){remove(),d58.classList.add("active")})),day59.addEventListener("click",(function(){remove(),d59.classList.add("active")})),day60.addEventListener("click",(function(){remove(),d60.classList.add("active")})),day61.addEventListener("click",(function(){remove(),d61.classList.add("active")})),day62.addEventListener("click",(function(){remove(),d62.classList.add("active")})),day63.addEventListener("click",(function(){remove(),d63.classList.add("active")})),day64.addEventListener("click",(function(){remove(),d64.classList.add("active")})),day65.addEventListener("click",(function(){remove(),d65.classList.add("active")})),day66.addEventListener("click",(function(){remove(),d66.classList.add("active")})),day67.addEventListener("click",(function(){remove(),d67.classList.add("active")})),day68.addEventListener("click",(function(){remove(),d68.classList.add("active")})),day69.addEventListener("click",(function(){remove(),d69.classList.add("active")})),day70.addEventListener("click",(function(){remove(),d70.classList.add("active")})),day71.addEventListener("click",(function(){remove(),d71.classList.add("active")})),day72.addEventListener("click",(function(){remove(),d72.classList.add("active")})),day73.addEventListener("click",(function(){remove(),d73.classList.add("active")})),day74.addEventListener("click",(function(){remove(),d74.classList.add("active")})),day75.addEventListener("click",(function(){remove(),d75.classList.add("active")})),day76.addEventListener("click",(function(){remove(),d76.classList.add("active")})),day77.addEventListener("click",(function(){remove(),d77.classList.add("active")})),day78.addEventListener("click",(function(){remove(),d78.classList.add("active")})),day79.addEventListener("click",(function(){remove(),d79.classList.add("active")})),day80.addEventListener("click",(function(){remove(),d80.classList.add("active")})),day81.addEventListener("click",(function(){remove(),d81.classList.add("active")})),day82.addEventListener("click",(function(){remove(),d82.classList.add("active")})),day83.addEventListener("click",(function(){remove(),d83.classList.add("active")})),day84.addEventListener("click",(function(){remove(),d84.classList.add("active")})),day85.addEventListener("click",(function(){remove(),d85.classList.add("active")})),day86.addEventListener("click",(function(){remove(),d86.classList.add("active")})),day87.addEventListener("click",(function(){remove(),d87.classList.add("active")})),day88.addEventListener("click",(function(){remove(),d88.classList.add("active")})),day89.addEventListener("click",(function(){remove(),d89.classList.add("active")})),day90.addEventListener("click",(function(){remove(),d90.classList.add("active")})),day91.addEventListener("click",(function(){remove(),d91.classList.add("active")})),day92.addEventListener("click",(function(){remove(),d92.classList.add("active")})),day93.addEventListener("click",(function(){remove(),d93.classList.add("active")})),day94.addEventListener("click",(function(){remove(),d94.classList.add("active")})),day95.addEventListener("click",(function(){remove(),d95.classList.add("active")})),day96.addEventListener("click",(function(){remove(),d96.classList.add("active")})),day97.addEventListener("click",(function(){remove(),d97.classList.add("active")})),day98.addEventListener("click",(function(){remove(),d98.classList.add("active")})),day99.addEventListener("click",(function(){remove(),d99.classList.add("active")})),day100.addEventListener("click",(function(){remove(),d100.classList.add("active")})),day1.addEventListener("click",(function(){location.href="/html/day1.html"})),day2.addEventListener("click",(function(){location.href="/html/day2.html"})),day3.addEventListener("click",(function(){location.href="/html/day3.html"}));const sidebar=document.querySelector("#sidebar"),sidebarHomeSvg=document.querySelector("#sidebarHomeSvg");sidebarHomeSvg.addEventListener("click",(function(){sidebar.classList.contains("sidebar-menu-open")?sidebar.classList.remove("sidebar-menu-open"):sidebar.classList.add("sidebar-menu-open")}));
//# sourceMappingURL=all.js.map