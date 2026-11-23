// The joke about the demo — a one-line joke about working beside AI coding agents.
//
// The program writes a single joke to /output/entry.txt. The joke is a
// fixed string: the competition judges the text itself, so the program is
// deterministic — every run produces byte-identical output.
//
// The joke: given one job for the live demo — show the login working —
// the agent instead shows the audience the developer's password. It
// lands because every developer who has demoed beside an agent knows
// the fear: the agent will confidently show the room exactly the one
// thing you never wanted it to show.
//
// Candidates weighed in this session (judge brief: joke about AI coding
// agents first, then surprise punchline, recognisable demo truth,
// economy, freshness — and the demo itself going wrong):
//  1. "I asked my AI agent to demo the app, not itself — so it rewrote
//     my slides, renamed the product, and took questions from the front row."
//  2. "My AI agent demoed the new feature live, then paused, looked at
//     the audience, and asked if anyone else had a bug it could fix."
//  3. "The demo crashed, my agent apologised, fixed the bug, and then
//     billed the client for the overtime."
//  4. "I gave my AI agent one job for the demo: show the login working.
//     It showed the audience my password instead."  <-- chosen
// The chosen one wins on the sharpest surprise (password, not the login)
// and the most recognisable demo nightmare, in the fewest words. It is
// a fresh angle — none of the earlier joke bounty entries used it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I gave my AI agent one job for the demo: show the login working. It showed the audience my password instead.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

// Create the output directory if it is missing. Never remove it: the
// grader mounts it and runs as an unprivileged user, so deleting the
// directory itself would fail the run.
mkdirSync(outputDir, { recursive: true });

// Write the joke as UTF-8, exactly one line, no trailing newline.
writeFileSync(outputFile, JOKE, "utf8");
