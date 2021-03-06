var position = [null, null, null, null, null, null, null, null, null];
var change;
var xCounter = 0;
var oCounter = 0;
var tie = false;
var hasWon = false;
var aiMode = false;

function gamemodeCoop() {
  document.getElementById("menu-parent").style.visibility = "hidden";
  document.getElementById("choose-parent").style.visibility = "visible";
}

function gamemodeAI() {
  document.getElementById("menu-parent").style.visibility = "hidden";
  document.getElementById("choose-parent").style.visibility = "visible";
  aiMode = true;
}

function xStart() {
  disableImg();
  change = false;
  opacityChange("o");
  fadeOutEffect("choose-parent");
}

function oStart() {
  disableImg();
  change = true;
  opacityChange("x");
  fadeOutEffect("choose-parent");
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
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

  if (aiMode) {
    disablePositions();
    aiNextMove();
  }
}

function aiPos(pos) {
  let tablePos = document.getElementById("position" + pos);

  if (change == false) {
    xSelect(tablePos, pos);
  } else {
    oSelect(tablePos, pos);
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
        position[0] == choice &&
        position[1] == choice &&
        position[2] == choice
      ) {
        horizontalLine("top");
        victoryMessage(choice);
        return;
      } else if (
        position[0] == choice &&
        position[4] == choice &&
        position[8] == choice
      ) {
        diagonalLine("up-down");
        victoryMessage(choice);
        return;
      } else if (
        position[0] == choice &&
        position[3] == choice &&
        position[6] == choice
      ) {
        verticalLine("left");
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
        position[0] == choice &&
        position[1] == choice &&
        position[2] == choice
      ) {
        horizontalLine("top");
        victoryMessage(choice);
        return;
      } else if (
        position[1] == choice &&
        position[4] == choice &&
        position[7] == choice
      ) {
        verticalLine("mid");
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
        position[0] == choice &&
        position[1] == choice &&
        position[2] == choice
      ) {
        horizontalLine("top");
        victoryMessage(choice);
        return;
      } else if (
        position[2] == choice &&
        position[4] == choice &&
        position[6] == choice
      ) {
        diagonalLine("down-up");
        victoryMessage(choice);
        return;
      } else if (
        position[2] == choice &&
        position[5] == choice &&
        position[8] == choice
      ) {
        verticalLine("right");
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
        position[0] == choice &&
        position[3] == choice &&
        position[6] == choice
      ) {
        verticalLine("left");
        victoryMessage(choice);
        return;
      } else if (
        position[3] == choice &&
        position[4] == choice &&
        position[5] == choice
      ) {
        horizontalLine("mid");
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
        position[0] == choice &&
        position[4] == choice &&
        position[8] == choice
      ) {
        diagonalLine("up-down");
        victoryMessage(choice);
        return;
      } else if (
        position[2] == choice &&
        position[4] == choice &&
        position[6] == choice
      ) {
        diagonalLine("down-up");
        victoryMessage(choice);
        return;
      } else if (
        position[3] == choice &&
        position[4] == choice &&
        position[5] == choice
      ) {
        horizontalLine("mid");
        victoryMessage(choice);
        return;
      } else if (
        position[1] == choice &&
        position[4] == choice &&
        position[7] == choice
      ) {
        verticalLine("mid");
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
        position[2] == choice &&
        position[5] == choice &&
        position[8] == choice
      ) {
        verticalLine("right");
        victoryMessage(choice);
        return;
      } else if (
        position[3] == choice &&
        position[4] == choice &&
        position[5] == choice
      ) {
        horizontalLine("mid");
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
        position[0] == choice &&
        position[3] == choice &&
        position[6] == choice
      ) {
        verticalLine("left");
        victoryMessage(choice);
        return;
      } else if (
        position[6] == choice &&
        position[4] == choice &&
        position[2] == choice
      ) {
        diagonalLine("down-up");
        victoryMessage(choice);
        return;
      } else if (
        position[6] == choice &&
        position[7] == choice &&
        position[8] == choice
      ) {
        horizontalLine("bottom");
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
        position[1] == choice &&
        position[4] == choice &&
        position[7] == choice
      ) {
        verticalLine("mid");
        victoryMessage(choice);
        return;
      } else if (
        position[6] == choice &&
        position[7] == choice &&
        position[8] == choice
      ) {
        horizontalLine("bottom");
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
        position[2] == choice &&
        position[5] == choice &&
        position[8] == choice
      ) {
        verticalLine("right");
        victoryMessage(choice);
        return;
      } else if (
        position[0] == choice &&
        position[4] == choice &&
        position[8] == choice
      ) {
        diagonalLine("up-down");
        victoryMessage(choice);
        return;
      } else if (
        position[6] == choice &&
        position[7] == choice &&
        position[8] == choice
      ) {
        horizontalLine("bottom");
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

function aiNextMove() {
  var move = Math.floor(Math.random() * position.length);

  if (position[move] == null && !hasWon && !tie) {
    delay(function () {
      aiPos(move + 1);

      switch (move) {
        case 0:
          if (change == true) {
            victoryState.pos1("x");
          } else {
            victoryState.pos1("o");
          }

          break;
        case 1:
          if (change == true) {
            victoryState.pos2("x");
          } else {
            victoryState.pos2("o");
          }

          break;
        case 2:
          if (change == true) {
            victoryState.pos3("x");
          } else {
            victoryState.pos3("o");
          }

          break;
        case 3:
          if (change == true) {
            victoryState.pos4("x");
          } else {
            victoryState.pos4("o");
          }

          break;
        case 4:
          if (change == true) {
            victoryState.pos5("x");
          } else {
            victoryState.pos5("o");
          }

          break;
        case 5:
          if (change == true) {
            victoryState.pos6("x");
          } else {
            victoryState.pos6("o");
          }
          break;
        case 6:
          if (change == true) {
            victoryState.pos7("x");
          } else {
            victoryState.pos7("o");
          }

          break;
        case 7:
          if (change == true) {
            victoryState.pos8("x");
          } else {
            victoryState.pos8("o");
          }

          break;
        case 8:
          if (change == true) {
            victoryState.pos9("x");
          } else {
            victoryState.pos9("o");
          }

          break;
      }

      activateAvailablePositions();
    }, 700);
  } else {
    if (!hasWon && !tie) {
      aiNextMove();
    }
  }
}

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
  }, 800);
}

function tieState() {
  playSound("sounds/selection.wav", 0.8);

  if (!position.includes(null) && !hasWon) {
    tie = true;
    document.getElementById("x-turn").style.opacity = ".25";
    document.getElementById("o-turn").style.opacity = ".25";

    delay(function () {
      playSound("sounds/tie.wav", 0.8);
      document.getElementById("tie-parent").style.visibility = "visible";
    }, 200);
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

function activateAvailablePositions() {
  for (let i = 0; i < position.length; i++) {
    if (position[i] == null) {
      $("#position" + (i + 1)).css("pointer-events", "all");
    }
  }
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

function horizontalLine(pos) {
  var line = document.getElementById("line-" + pos + "-hori");
  line.style.visibility = "visible";
}

function verticalLine(pos) {
  var line = document.getElementById("line-" + pos + "-ver");
  line.style.visibility = "visible";
}

function diagonalLine(pos) {
  var line = document.getElementById("line-" + pos + "-dig");
  line.style.visibility = "visible";
}

function disableLines() {
  document.getElementById("line-top-hori").style.visibility = "hidden";
  document.getElementById("line-mid-hori").style.visibility = "hidden";
  document.getElementById("line-bottom-hori").style.visibility = "hidden";
  document.getElementById("line-left-ver").style.visibility = "hidden";
  document.getElementById("line-mid-ver").style.visibility = "hidden";
  document.getElementById("line-right-ver").style.visibility = "hidden";
  document.getElementById("line-up-down-dig").style.visibility = "hidden";
  document.getElementById("line-down-up-dig").style.visibility = "hidden";
}

function fadeOutEffect(id) {
  playSound("sounds/PlayerSelect.wav", 0.8);

  var fadeTarget = document.getElementById(id);

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
  disableLines();
  playSound("sounds/selection.wav", 0.8);

  if (hasWon) {
    document.getElementById("victory-parent").style.visibility = "hidden";
    document.getElementById("restart").remove();

    hasWon = false;
  } else {
    tie = false;
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
