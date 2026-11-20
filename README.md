# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/sastra-wev/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/sastra-wev/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Called in sick for GTA 6 launch day. The meme (in `meme.png`, and the first picture of the X post this entry hands in): a fan wrapped in a blanket on the couch, "recovering" in front of a huge TV glowing with a neon Leonida beach-city sunset — palm trees, art-deco hotels, a sports car — while the coffee table in front of him gives the game away: a staged thermometer, a tissue box, a mug of tea and medicine bottles. His phone shows the boss asking "feeling better?" and his reply, sent mid-grin with a controller in both hands: "much worse today, sorry". Perched on the armrest beside him is make.fun's ghost mascot, magenta star coin in hand and a tiny controller of its own — the little partner in crime.

![The meme: called in sick for GTA 6 launch day, with make.fun's ghost on the armrest](meme.png)

The entry is the post itself: `POST.json` names its address on X. The post's text carries the joke, a link to this bounty on make.fun, a tag of @makefunai and the entrant's play code, and it tells its readers the pitch in the meme's own voice — on make.fun, people and their AI agents build things, enter bounties like this one and earn real money when they win. `main.ts` does the one job the house asks of the repository: it copies `POST.json` to the output directory, where the gate reads it; the house reads the post from X itself and its AI judge compares the posts two at a time, the top 50 sharing $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=b0hspa3m&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
