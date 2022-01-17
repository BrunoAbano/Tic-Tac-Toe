var position = [null, null, null, null, null, null, null, null, null];
var change;
var xCounter = 0;
var oCounter = 0;
var hasWon = false;

function xStart() {
  disableImg();
  change = false;
  opacityChange("o");
  fadeOutEffect();
}

function oStart() {
  disableImg();
  change = true;
  opacityChange("x");
  fadeOutEffect();
}

function pos1(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos1("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos1("o");
  }

  tieState();
}

function pos2(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos2("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos2("o");
  }

  tieState();
}

function pos3(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos3("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos3("o");
  }

  tieState();
}

function pos4(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos4("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos4("o");
  }

  tieState();
}

function pos5(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos5("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos5("o");
  }

  tieState();
}

function pos6(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos6("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos6("o");
  }

  tieState();
}

function pos7(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos7("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos7("o");
  }

  tieState();
}

function pos8(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos8("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos8("o");
  }

  tieState();
}

function pos9(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);

    victoryState.pos9("x");
  } else {
    oSelect(tablePos, pos);

    victoryState.pos9("o");
  }

  tieState();
}

function xSelect(tablePos, pos) {
  tablePos.style.backgroundImage = "url(img/x.png)";
  $("#position" + pos).css("pointer-events", "none");
  change = true;
  xCounter++;
  position[pos - 1] = "x";
}

function oSelect(tablePos, pos) {
  tablePos.style.backgroundImage = "url(img/o.png)";
  $("#position" + pos).css("pointer-events", "none");
  change = false;
  oCounter++;
  position[pos - 1] = "o";
}

const victoryState = {
  pos1: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[1] == choice && position[2] == choice) ||
        (position[4] == choice && position[8] == choice) ||
        (position[3] == choice && position[6] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos2: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[0] == choice && position[2] == choice) ||
        (position[4] == choice && position[7] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos3: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[0] == choice && position[1] == choice) ||
        (position[4] == choice && position[6] == choice) ||
        (position[5] == choice && position[8] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos4: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[0] == choice && position[6] == choice) ||
        (position[4] == choice && position[5] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos5: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[0] == choice && position[8] == choice) ||
        (position[2] == choice && position[6] == choice) ||
        (position[3] == choice && position[5] == choice) ||
        (position[1] == choice && position[7] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos6: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[2] == choice && position[8] == choice) ||
        (position[3] == choice && position[4] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos7: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[0] == choice && position[3] == choice) ||
        (position[4] == choice && position[2] == choice) ||
        (position[7] == choice && position[8] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos8: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[1] == choice && position[4] == choice) ||
        (position[6] == choice && position[8] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
  pos9: function (choice) {
    if (xCounter >= 3) {
      positionCheck();
    } else if (oCounter >= 3) {
      positionCheck();
    }

    function positionCheck() {
      if (
        (position[2] == choice && position[5] == choice) ||
        (position[0] == choice && position[4] == choice) ||
        (position[6] == choice && position[7] == choice)
      ) {
        victoryMessage(choice);
        return;
      }
    }

    opacityChange(choice);
  },
};

var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();

function victoryMessage(choice) {
  hasWon = true;
  disablePositions();
  document.getElementById(choice + "-turn").style.opacity = ".25";

  delay(function () {
    playSound("sounds/win.wav", 0.7);
    document.getElementById("victory-parent").style.visibility = "visible";
    $(
      "<div id='restart'> <img id='playerVictory' alt='testImage' src='img/" +
        choice +
        ".png'> </img> <h3 id='victoryTitle'> has won!</h3> <span id='victory-btn'><a onclick='restart()'></a></span> </div>"
    ).appendTo("#victory");
  }, 150);
}

function tieState() {
  playSound("sounds/selection.wav", 0.8);

  if (!position.includes(null) && !hasWon) {
    document.getElementById("x-turn").style.opacity = ".25";
    document.getElementById("o-turn").style.opacity = ".25";

    delay(function () {
      playSound("sounds/tie.wav", 0.7);
      document.getElementById("tie-parent").style.visibility = "visible";
    }, 150);
  }
}

function opacityChange(choice) {
  if (!hasWon) {
    if (choice == "x") {
      document.getElementById("x-turn").style.opacity = ".25";
      document.getElementById("o-turn").style.opacity = "1";
    } else {
      document.getElementById("x-turn").style.opacity = "1";
      document.getElementById("o-turn").style.opacity = ".25";
    }
  }
}

function activatePositions() {
  $("#position1").css("pointer-events", "all");
  $("#position2").css("pointer-events", "all");
  $("#position3").css("pointer-events", "all");
  $("#position4").css("pointer-events", "all");
  $("#position5").css("pointer-events", "all");
  $("#position6").css("pointer-events", "all");
  $("#position7").css("pointer-events", "all");
  $("#position8").css("pointer-events", "all");
  $("#position9").css("pointer-events", "all");
}

function disablePositions() {
  $("#position1").css("pointer-events", "none");
  $("#position2").css("pointer-events", "none");
  $("#position3").css("pointer-events", "none");
  $("#position4").css("pointer-events", "none");
  $("#position5").css("pointer-events", "none");
  $("#position6").css("pointer-events", "none");
  $("#position7").css("pointer-events", "none");
  $("#position8").css("pointer-events", "none");
  $("#position9").css("pointer-events", "none");
}

function clearImagesPosition() {
  $("#position1").css("background-image", "none");
  $("#position2").css("background-image", "none");
  $("#position3").css("background-image", "none");
  $("#position4").css("background-image", "none");
  $("#position5").css("background-image", "none");
  $("#position6").css("background-image", "none");
  $("#position7").css("background-image", "none");
  $("#position8").css("background-image", "none");
  $("#position9").css("background-image", "none");
}

function disableImg() {
  $("#choose-x").css("pointer-events", "none");
  $("#choose-o").css("pointer-events", "none");
  activatePositions();
}

function activeImg() {
  $("#choose-x").css("pointer-events", "all");
  $("#choose-o").css("pointer-events", "all");
}

function fadeOutEffect() {
  playSound("sounds/PlayerSelect.wav", 0.8);

  var fadeTarget = document.getElementById("choose-parent");

  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.01;
    } else {
      clearInterval(fadeEffect);
      fadeTarget.style.visibility = "hidden";
    }
  }, 1);
}

function playSound(audio, volume) {
  var myAudio = new Audio(audio);
  myAudio.volume -= volume;
  myAudio.play();
}

function restart() {
  playSound("sounds/selection.wav", 0.8);

  if (hasWon) {
    document.getElementById("victory-parent").style.visibility = "hidden";
    document.getElementById("restart").remove();

    hasWon = false;
  } else {
    document.getElementById("tie-parent").style.visibility = "hidden";
  }

  clearImagesPosition();

  for (let i = 0; i < position.length; i++) {
    position[i] = null;
  }

  document.getElementById("choose-parent").style.visibility = "visible";
  document.getElementById("choose-parent").style.opacity = "1";
  activeImg();
}