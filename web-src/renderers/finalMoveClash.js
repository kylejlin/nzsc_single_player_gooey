import { ctx } from '../canvas';
import { BACKGROUND, OVERLAY, SCORE_COLOR, LOSING_SCORE_COLOR } from './helpers/colors';
import { noSpace } from '../logos';
import images from '../images';
import getBackgroundColorOf from '../getBackgroundColorOf';
import { nthCircle } from '../circle';
import { playButtonCircle, playButtonTriangle } from '../buttons';
import { getPhase, getPhaseTime } from '../phases';
import lerp from '../lerp';

const finalMoveClash = ({
  previouslyAvailableMoves: previouslyAvailableMovesWithSpaces,
  humanMove,
  computerMove,
  whoGetsThePoint,
  humanPoints,
  computerPoints,
  completionFactor,
}) => {
  // This animation is divided into 5 phases:
  //
  // 0. Grow - Human move circle expands from starting position into end position.
  // 1. Oppose - Computer move circle enters from the right and moves to the end position.
  // 2. Clash - One, none, or both of the circles disappears.
  // 3. Exit - Human move circle exits left, computer move circle exits right. Overlay is removed.

  // This is the amount of time apportioned to each phase:
  const PHASE_LENGTHS = [0.2, 0.2, 0.4, 0.2];

  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, 1800, 1000);

  const previouslyAvailableMoves = previouslyAvailableMovesWithSpaces.map(noSpace);

  const selectedHumanMoveIndex = previouslyAvailableMoves.findIndex(move => move === noSpace(humanMove));

  if (completionFactor !== 1) {
    for (let i = 0; i < previouslyAvailableMoves.length; i++) {
      // Don't draw selected human move.
      if (i === selectedHumanMoveIndex) {
        continue;
      }

      ctx.fillStyle = getBackgroundColorOf(previouslyAvailableMoves[i]);

      const circle = nthCircle(i);
      const x = circle[0];
      const [, y, r] = circle;
      const d = 2 * r;

      ctx.fillStyle = getBackgroundColorOf(previouslyAvailableMoves[i]);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[previouslyAvailableMoves[i]], x - r, y - r, d, d);
    }

    ctx.fillStyle = OVERLAY;
    ctx.fillRect(0, 0, 1800, 1000);
  } else {
    // Draw human score
    ctx.fillStyle = humanPoints > computerPoints
      ? SCORE_COLOR
      : LOSING_SCORE_COLOR;

    for (let i = 0; i < humanPoints; i++) {
      ctx.fillRect(100 + i * 120, 300, 80, 400);
    }

    // Draw computer score
    ctx.fillStyle = computerPoints > humanPoints
      ? SCORE_COLOR
      : LOSING_SCORE_COLOR;

    for (let i = 0; i < computerPoints; i++) {
      ctx.fillRect(1620 - i * 120, 300, 80, 400);
    }

    // Draw play again button
    ctx.fillStyle = playButtonCircle.color;
    ctx.beginPath();
    ctx.arc(900, 500, playButtonCircle.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = playButtonTriangle.color;
    ctx.beginPath();
    ctx.moveTo(playButtonTriangle.vertices[0][0], playButtonTriangle.vertices[0][1]);
    ctx.lineTo(playButtonTriangle.vertices[1][0], playButtonTriangle.vertices[1][1]);
    ctx.lineTo(playButtonTriangle.vertices[2][0], playButtonTriangle.vertices[2][1]);
    ctx.closePath();
    ctx.fill();
  }

  const phase = getPhase(completionFactor, PHASE_LENGTHS);
  const phaseLength = PHASE_LENGTHS[phase];
  const phaseTime = getPhaseTime(completionFactor, PHASE_LENGTHS);

  switch (phase) {
    case 0: {
      // Draw human move
      const selectedHumanMoveStartCircle = nthCircle(selectedHumanMoveIndex);
      const selectedHumanMoveEndCircle = [490, 500, 360];
      const selectedHumanMoveCurrentCircle = selectedHumanMoveStartCircle.map((n, i) => lerp(n, selectedHumanMoveEndCircle[i], phaseTime / phaseLength));

      const x = selectedHumanMoveCurrentCircle[0];
      const [, y, r] = selectedHumanMoveCurrentCircle;
      const d = 2 * r;

      ctx.fillStyle = getBackgroundColorOf(humanMove);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[noSpace(humanMove)], x - r, y - r, d, d);

      break;
    }

    case 1: {
      // Draw human move
      {
        const selectedHumanMoveEndCircle = [490, 500, 360];

        const x = selectedHumanMoveEndCircle[0];
        const [, y, r] = selectedHumanMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(humanMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(humanMove)], x - r, y - r, d, d);
      }

      // Draw computer move
      const selectedComputerMoveStartCircle = [1800, 500, 360];
      const selectedComputerMoveEndCircle = [1310, 500, 360];

      const selectedComputerMoveCurrentCircle = selectedComputerMoveStartCircle.map((n, i) => lerp(n, selectedComputerMoveEndCircle[i], phaseTime / phaseLength));
      const x = selectedComputerMoveCurrentCircle[0];
      const [, y, r] = selectedComputerMoveCurrentCircle;
      const d = 2 * r;

      ctx.fillStyle = getBackgroundColorOf(computerMove);

      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();

      ctx.drawImage(images[noSpace(computerMove)], x - r, y - r, d, d);

      break;
    }

    case 2: {
      // Draw human move
      const FADE_RATE = 5;

      {
        if (whoGetsThePoint === 'COMPUTER' || whoGetsThePoint === 'BOTH') {
          ctx.globalAlpha = lerp(1, 0, Math.min(phaseTime * FADE_RATE, 1));
        }

        const selectedHumanMoveEndCircle = [490, 500, 360];

        const x = selectedHumanMoveEndCircle[0];
        const [, y, r] = selectedHumanMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(humanMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(humanMove)], x - r, y - r, d, d);

        ctx.globalAlpha = 1;
      }

      // Draw computer move
      {
        if (whoGetsThePoint === 'HUMAN' || whoGetsThePoint === 'BOTH') {
          ctx.globalAlpha = lerp(1, 0, Math.min(phaseTime * FADE_RATE, 1));
        }

        const selectedComputerMoveEndCircle = [1310, 500, 360];

        const x = selectedComputerMoveEndCircle[0];
        const [, y, r] = selectedComputerMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(computerMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(computerMove)], x - r, y - r, d, d);

        ctx.globalAlpha = 1;
      }

      break;
    }

    case 3: {
      if (!(whoGetsThePoint === 'COMPUTER' || whoGetsThePoint === 'BOTH')) {
        const selectedHumanMoveEndCircle = [490, 500, 360];

        const x = selectedHumanMoveEndCircle[0] - 850 * (phaseTime / phaseLength);
        const [, y, r] = selectedHumanMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(humanMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(humanMove)], x - r, y - r, d, d);
      }

      // Draw computer move
      if (!(whoGetsThePoint === 'HUMAN' || whoGetsThePoint === 'BOTH')) {
        const selectedComputerMoveEndCircle = [1310, 500, 360];

        const x = selectedComputerMoveEndCircle[0] + 850 * (phaseTime / phaseLength);
        const [, y, r] = selectedComputerMoveEndCircle;
        const d = 2 * r;

        ctx.fillStyle = getBackgroundColorOf(computerMove);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        ctx.drawImage(images[noSpace(computerMove)], x - r, y - r, d, d);
      }

      break;
    }
  }
};

export default finalMoveClash;
