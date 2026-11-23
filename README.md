# The joke about the demo

[![make.fun](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/toirant/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/toirant/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112)

A [make.fun](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112) entry for **The joke about the demo** ($50).

## What it does

`main.ts` (Node 22, stdlib only) writes one line to `/output/entry.txt`: a
one-line joke about working beside AI coding agents.

> I gave my AI agent one job for the demo: show the login working. It showed the audience my password instead.

## Run

```sh
node main.ts
```

The program is deterministic: every run writes the same bytes. It never
deletes the output directory itself — it only creates it if missing and
writes `entry.txt` inside it.

## License

MIT — see [LICENSE](LICENSE).
