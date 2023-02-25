const daysContainer = document.querySelector("#daysContainer");
function createDAYsHTML() {
  // start days with day one
  let days = `
  <div id="day1" class="day">
  <div class="day-number">
    <span>DAY 1</span>
  </div>
  </div>`;
  for (let i = 2; i < 101; i++) {
    // to save the added 1 in span & id
    b = `
    <div id="day${i}" class="day">
    <div class="day-number">
      <span>DAY ${i}</span>
    </div>
    </div>`;
    // cuz when I added i to days it alaways gave me the last one 100 just one
    // so by save and + each loop to the save point outside  and then innerHTML it all at once
    days = days + b;
  }
  daysContainer.innerHTML = days;
}
createDAYsHTML();

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const day4 = document.querySelector("#day4");
const day5 = document.querySelector("#day5");

const day6 = document.querySelector("#day6");
const day7 = document.querySelector("#day7");
const day8 = document.querySelector("#day8");
const day9 = document.querySelector("#day9");
const day10 = document.querySelector("#day10");

const day11 = document.querySelector("#day11");
const day12 = document.querySelector("#day12");
const day13 = document.querySelector("#day13");
const day14 = document.querySelector("#day14");
const day15 = document.querySelector("#day15");

const day16 = document.querySelector("#day16");
const day17 = document.querySelector("#day17");
const day18 = document.querySelector("#day18");
const day19 = document.querySelector("#day19");
const day20 = document.querySelector("#day20");

const day21 = document.querySelector("#day21");
const day22 = document.querySelector("#day22");
const day23 = document.querySelector("#day23");
const day24 = document.querySelector("#day24");
const day25 = document.querySelector("#day25");

const day26 = document.querySelector("#day26");
const day27 = document.querySelector("#day27");
const day28 = document.querySelector("#day28");
const day29 = document.querySelector("#day29");
const day30 = document.querySelector("#day30");

const day31 = document.querySelector("#day31");
const day32 = document.querySelector("#day32");
const day33 = document.querySelector("#day33");
const day34 = document.querySelector("#day34");
const day35 = document.querySelector("#day35");

const day36 = document.querySelector("#day36");
const day37 = document.querySelector("#day37");
const day38 = document.querySelector("#day38");
const day39 = document.querySelector("#day39");
const day40 = document.querySelector("#day40");

const day41 = document.querySelector("#day41");
const day42 = document.querySelector("#day42");
const day43 = document.querySelector("#day43");
const day44 = document.querySelector("#day44");
const day45 = document.querySelector("#day45");

const day46 = document.querySelector("#day46");
const day47 = document.querySelector("#day47");
const day48 = document.querySelector("#day48");
const day49 = document.querySelector("#day49");
const day50 = document.querySelector("#day50");

const day51 = document.querySelector("#day51");
const day52 = document.querySelector("#day52");
const day53 = document.querySelector("#day53");
const day54 = document.querySelector("#day54");
const day55 = document.querySelector("#day55");

const day56 = document.querySelector("#day56");
const day57 = document.querySelector("#day57");
const day58 = document.querySelector("#day58");
const day59 = document.querySelector("#day59");
const day60 = document.querySelector("#day60");

const day61 = document.querySelector("#day61");
const day62 = document.querySelector("#day62");
const day63 = document.querySelector("#day63");
const day64 = document.querySelector("#day64");
const day65 = document.querySelector("#day65");

const day66 = document.querySelector("#day66");
const day67 = document.querySelector("#day67");
const day68 = document.querySelector("#day68");
const day69 = document.querySelector("#day69");
const day70 = document.querySelector("#day70");

const day71 = document.querySelector("#day71");
const day72 = document.querySelector("#day72");
const day73 = document.querySelector("#day73");
const day74 = document.querySelector("#day74");
const day75 = document.querySelector("#day75");

const day76 = document.querySelector("#day76");
const day77 = document.querySelector("#day77");
const day78 = document.querySelector("#day78");
const day79 = document.querySelector("#day79");
const day80 = document.querySelector("#day80");

const day81 = document.querySelector("#day81");
const day82 = document.querySelector("#day82");
const day83 = document.querySelector("#day83");
const day84 = document.querySelector("#day84");
const day85 = document.querySelector("#day85");
const day86 = document.querySelector("#day86");
const day87 = document.querySelector("#day87");
const day88 = document.querySelector("#day88");
const day89 = document.querySelector("#day89");
const day90 = document.querySelector("#day90");

const day91 = document.querySelector("#day91");
const day92 = document.querySelector("#day92");
const day93 = document.querySelector("#day93");
const day94 = document.querySelector("#day94");
const day95 = document.querySelector("#day95");

const day96 = document.querySelector("#day96");
const day97 = document.querySelector("#day97");
const day98 = document.querySelector("#day98");
const day99 = document.querySelector("#day99");
const day100 = document.querySelector("#day100");
