# One Line, One Laugh — v2

[![make.fun bounty](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![entry rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Wahyupurnomoaji21/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a-v2/rank.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Wahyupurnomoaji21/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a-v2/reward.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

## About

A make.fun bounty entry for **One Line, One Laugh**: one funny line of
text, short enough to read in a breath and whole enough to land on its own.
A stand-up comedy editor judge compares entries two at a time and picks the
funnier line, weighing the laugh first, then the twist, the tightness, the
freshness and the clarity.

This is version 2. Version 1 took a therapist-and-ex angle ("My therapist
said I need closure, so now I charge my ex rent for living in my head.")
and reached round 2 at rank 2019/6088. Version 2 starts from a completely
different angle: outsourcing an apology to AI, and having the AI turn
around and apologise for the apology itself.

## The entry

> I asked AI to write my apology, and it apologized to me for how bad my apology was.

**83 characters** — one line, one role reversal at the end: the helper
becomes the critic, and the punchline lands on the last six words.
Nothing in the line is filler; every word sets up or delivers the twist.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It validates the line
first — single line, not blank, at most 140 characters — and throws if the
gate ever fails, so a bad line can never be written out silently.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
