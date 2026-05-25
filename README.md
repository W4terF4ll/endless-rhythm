# Endless Rhythm

> A browser-based, endless 4-key rhythm game — no downloads required.

**Play it now:** [aidanjozefiak.github.io/endless-rhythm](https://aidanjozefiak.github.io/endless-rhythm/)

---

## Table of Contents

- [Overview](#overview)
- [How to Play](#how-to-play)
- [Controls](#controls)
- [Scoring & Judgment](#scoring--judgment)
- [Difficulty & Stages](#difficulty--stages)
- [Settings](#settings)
- [Practice Mode](#practice-mode)
- [Project Structure](#project-structure)
- [Running Locally](#running-locally)
- [Changelog](#changelog)
- [License](#license)

---

## Overview

Endless Rhythm is a 4-key (4k) rhythm game that runs entirely in the browser using vanilla HTML, CSS, and JavaScript. Notes scroll down four vertical lanes and you press the corresponding key when a note reaches the hit zone at the bottom. The game never ends on its own — it gets progressively faster as you clear stages, challenging you to survive as long as possible.

**No installation, no sign-in, no dependencies.** Open `index.html` and play.

> ⚠️ **Note:** This game is not playable on mobile devices or low-end hardware, as it relies on precise keyboard input and CSS animations.

---

## How to Play

1. Open the game in a desktop browser.
2. Press **R** (or your configured start key) to begin.
3. Notes fall down four lanes. When a note reaches your buttons at the bottom, press the corresponding key.
4. Hit notes accurately to build combo and score. Miss too many and you'll lose all 9 lives — game over.
5. Survive long enough and you'll **Stage Up**, gaining a life and increasing the speed.
6. Press **F** (or your configured stop key) to end the current run at any time.

---

## Controls

### Default Keybinds

| Action       | Key |
|--------------|-----|
| Lane 1       | A   |
| Lane 2       | S   |
| Lane 3       | K   |
| Lane 4       | L   |
| Start Game   | R   |
| Stop Game    | F   |

All six keybinds are fully remappable in the **Settings** menu. Click a keybind button, then press any key to reassign it. Duplicate keybinds are automatically swapped to avoid conflicts. Settings (including keybinds) can be saved to and loaded from `localStorage`.

---

## Scoring & Judgment

Each note is judged based on how close to the hit zone it is when you press the key. Timing windows scale with your note scroll speed — faster notes require tighter timing.

| Judgment  | Color  | Score Multiplier | Accuracy Weight |
|-----------|--------|-----------------|-----------------|
| PERFECT!! | Yellow | 300×            | 1.00            |
| Great!    | Cyan   | 200×            | 0.66            |
| Good      | Green  | 100×            | 0.33            |
| Bad...    | Pink   | 50×             | 0.16            |
| MISS      | Red    | 0 (combo reset) | 0.00            |

Base score per note: `judgment_value × (1000 / noteSpacing) × noteDifficulty × (1 + combo / 1000)`

- **Combo** builds with consecutive non-miss hits and boosts score.
- **Accuracy** is the running weighted average of all judgments, displayed as a percentage.
- **High Score** is tracked for the session (not persisted between page reloads).

### Accuracy Bar

A horizontal bar at the bottom of the screen shows a history of recent hit timing. A line spawns at a position reflecting whether you were early or late on each note. This can be toggled on/off in Settings.

---

## Difficulty & Stages

The game uses an automatic difficulty scaling system — you never select a difficulty manually in the main mode (though you can set a starting stage).

**Stage progression:**
- Every N notes, the game **Stages Up**: note spacing decreases by 5%, the stage counter increments, and you gain one life (up to 9).
- The number of notes required to stage up increases by 10% each time, making later stages harder to reach.
- Every 4 stages, the **pattern difficulty** increases (1–4), unlocking more complex note patterns including double, triple, and quad notes.

**Pattern system:**
- Notes are selected from a built-in library of stream and jump patterns divided into 4 difficulty tiers.
- **Streams** (type 1): single notes in sequence, alternating hands.
- **Jumps** (type 2): sections featuring double notes (two lanes simultaneously).
- The game alternates between stream and jump sections, with stream sections lasting longer.
- Patterns are mirrored automatically when the last note of one pattern matches the first of the next, preventing awkward same-hand repeats.

**Note types (pattern notation):**
| Value | Meaning           |
|-------|-------------------|
| 1–4   | Single note in that lane |
| 5     | Double note (2 lanes)    |
| 6     | Triple note (3 lanes)    |
| 7     | Quad note (all 4 lanes)  |

---

## Settings

Open the settings menu via the **⚙** button in the bottom-right corner. All settings can be saved and reloaded.

| Setting       | Description |
|---------------|-------------|
| Note Speed    | Controls how fast notes scroll (50–200). Higher = faster scroll, tighter windows. |
| Audio         | Master volume for all sound effects (0–100). |
| Stage         | Starting stage for your next run (1–20). |
| Keybinds      | Remap all 6 keys (4 lanes + start + stop). |
| Color Fade    | When enabled, notes fade from the note color to the fade color as they scroll. |
| Note Color    | The primary note color (hex code, default `#ff2142`). |
| Fade Color    | The secondary/fade color (hex code, default `#3266a8`). |
| Accuracy Bar  | Toggle the timing history bar at the bottom of the screen. |

Use **Save** to persist settings to `localStorage` and **Load** to restore them. **Default** resets everything to factory values.

---

## Practice Mode

Accessible via the **Practice** button in the UI. Practice mode lets you drill specific patterns and speeds without the pressure of a full run.

| Option         | Description |
|----------------|-------------|
| Difficulty     | Set the pattern difficulty tier (1–4). Determines which pattern pool is used. |
| Start Spacing  | Starting note spacing in milliseconds (lower = faster). |
| Space Scaling  | When enabled, note spacing decreases over time just like a normal run. |
| Custom Pattern | Enable to enter a specific note pattern manually instead of using random patterns. |
| Pattern Input  | Space-separated note values, e.g. `1 2 3 4` or `5 1 2 5 3 4`. |

**Custom pattern syntax:** Use lane numbers 1–4 for singles, 5 for doubles, 6 for triples, 7 for quads. The lane numbers following a multi-note value specify which lanes to hit.

Examples:
- `1 2 3 2 3 4` — simple alternating stream
- `5 1 2` — double note followed by single notes in lanes 1 and 2
- `7 1 2 3 4` — quad note hitting all four lanes

The "PRACTICE MODE" banner displays during practice runs. Opening the practice menu mid-run ends the current game.

---

## Project Structure

```
endless-rhythm/
├── index.html          # Game HTML — layout, UI elements, settings & practice menus
├── src/
│   ├── main.js         # All game logic (patterns, scoring, input, difficulty, settings)
│   └── interface.css   # All visual styling and CSS animations
├── res/
│   ├── heart.png       # Life indicator icon & favicon
│   ├── cog.png         # Settings button icon
│   ├── hit.wav         # Note hit sound effect (10 instances pre-loaded for polyphony)
│   ├── miss.wav        # Miss sound effect
│   ├── stageup.wav     # Stage up sound effect
│   └── gameover.wav    # Game over sound effect
├── CHANGELOG.md        # Version history
└── LICENSE.md          # License
```

### Key Implementation Details

- **No build step** — pure HTML/CSS/JS, open `index.html` directly.
- **Audio polyphony** — 10 instances of `hit.wav` are pre-loaded and cycled through to avoid audio cutoff on fast streams.
- **Note spawning** — notes are `<div>` elements appended to lane containers and animated with CSS. When the animation ends (note scrolls past the bottom), the game registers a miss automatically.
- **Hit detection** — the game finds the closest note to a lane's button using `getBoundingClientRect()` and calculates pixel distance at the moment of keypress.
- **Settings persistence** — all settings are stored in browser `localStorage` and loaded on page start.
- **Pattern mirroring** — if consecutive patterns share a boundary note in the same lane, the second pattern is horizontally mirrored to enforce proper hand alternation.

---

## Running Locally

No build tools or server required for basic use:

```bash
git clone https://github.com/aidanjozefiak/endless-rhythm.git
cd endless-rhythm
# Open index.html in your browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

If you encounter audio issues with the `file://` protocol, serve the folder with a simple HTTP server:

```bash
# Python 3
python -m http.server 8080
# Then open http://localhost:8080
```

---

## Changelog

### v1.10 — May 14, 2024
- Added practice mode
- Fixed several settings save/load bugs
- Added changelog button in settings

### v1.00 — April 22, 2024
- Major overhaul to the pattern system (now split into stream and jump sections)
- Difficulty scaling rework
- Slight performance optimizations
- New audio
- Game over quotes
- Minor tweaks and bug fixes

### v0.95 — March 12, 2024
- Caps Lock no longer breaks the game
- Score now formats with commas
- Lives are regained on stage up
- Accuracy calculation adjusted

### v0.94 — February 21, 2024
- Settings menu now blocks game inputs while open
- Minor font size adjustments

### v0.93 — February 21, 2024
- Added accuracy bar (toggleable in settings)

### v0.92 — February 16, 2024
- Added game over screen

### v0.91 — February 15, 2024
- Changed default note button color

### v0.90 — February 15, 2024
- Overhauled settings UI
- Added stage-up text animation

### v0.85 — February 13, 2024
- Added custom start/stop keybinds
- Added custom note colors
- Added color fade toggle

### v0.81 — February 6, 2024
- Reworked difficulty scaling again

### v0.80 — February 6, 2024
- Added keybind system
- Settings can now be saved
- Major changes to scoring and difficulty scaling

---

## Planned Features

- More customization options
- Additional settings
- Bug fixes

---

## License

See [LICENSE.md](LICENSE.md) for details.

---

*Made by Aidan Jozefiak*
