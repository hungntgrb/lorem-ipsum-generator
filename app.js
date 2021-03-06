ps = [
  "anxiety resolution profession phone aspect cookie assistant coffee virus comparison data environment idea mood cell death ear president sample arrival insurance tea imagination moment wood permission reputation conclusion area property",
  "facade talk red motorcycle infect proclaim switch battle chew cutting navy wear tactic crossing inject medieval tension minister offend tire preparation conflict include vigorous transport morale conceive parallel map statement",
  "include hate dorm thread press recovery exercise hair miserable deliver occasion inspiration lend fashionable layer leave behave intention kit transfer wriggle peasant mystery staircase restaurant output agent key shelf round",
  "writer toast pipe youth guide disgrace tempt electronics subway lid apparatus chain cheese appreciate uncertainty grandmother confession excess investigation escape dominate smash charge expansion waterfall shareholder rush ankle implicit hospital",
  "mass appearance bomb charge deter accent reputation sale offend question respectable chart barrel disgrace commission date comfortable start pull shiver economy extend knit treat kit hen nature item arm prospect",
  "speech bed overlook loud feminist false hero decay chart basin copper give racism ally lend seize sport release resident aloof nest wheat official issue application technique lineage consciousness fossil dawn orientation text",
  "fixture preparation nervous budge practical deck infinite comedy wreck punish stock jelly fog calendar bishop rice pollution care happen slant inquiry treat nationalism report urgency wild perfect shell career chalk iron fast",
  "owl standard predict echo crude omission reward tempt folklore shock pound terms heroin advantage husband culture stop rape unique ensure pot double exaggerate unity flawed groan or volume coffee challenge retirement humor",
  "half Venus contrast wound ignore experience sight tactic host behave brainstorm butterfly catch virtue camp compact weed manual teacher forward nightmare soap detector remember length laser dose work discount cook man jump",
  "sensitive peanut boot distribute product rib farewell regulation lock agreement shaft graduate copper expose bread organ lift carry bargain trainer beach basic sofa rhetoric cemetery jealous crosswalk favourite context debut coffin criminal",
];

const input = document.getElementById("lorem");
const form = document.querySelector(".lorem");
const article = document.querySelector(".lorems");
const len = ps.length;
const loi = `Number is from 1 to ${len}`;
const errorDiv = document.querySelector(".error");
errorDiv.innerHTML = loi;
let num = 0;
setInterval(() => {
  num = Number(input.value);
}, 200);

function generateNParagraphs(n) {
  let l = ps.slice(0, n);
  return l.map((p) => `<p>${p}</p>`).join("");
}

function showError() {
  if (num < 1 || num > len) {
    errorDiv.classList.remove("hide");
  } else {
    errorDiv.classList.add("hide");
  }
}

setInterval(showError, 200);

function processInput() {
  if (num < 1 || num > len) {
    return 1;
  } else {
    return num;
  }
}

function showParagraphs(e) {
  e.preventDefault();
  const n = processInput();
  paras = generateNParagraphs(n);
  article.innerHTML = paras;
}

form.addEventListener("submit", showParagraphs);
