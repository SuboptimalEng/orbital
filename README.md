# 🛰 Orbital - Video File Browser

Orbital is a local-first desktop app that allows you to search, filter, and preview video (and image) files on your computer. It turns your computer's file browser into YouTube.

<!-- Orbital is available to 👉 [purchase on Gumroad](https://suboptimaleng.gumroad.com/l/orbital-app) for $10 USD.  -->
All love (hate, questions, and suggestions) can be directed to me on Twitter 👉 [@SuboptimalEng](https://www.twitter.com/SuboptimalEng).

## How does it work?

https://user-images.githubusercontent.com/70355008/138158479-9d322fd6-487b-48d0-82e1-9ea141a1ce61.mp4

## Features

- Gallery view of videos and images.

  <img src="/pics/theme_gruvbox.png" width=480>

- Search files through all sub-folders with filename.

  <img src="/pics/image_search.png" width=480>

- Preview media files and traverse them with keybindings.

  <img src="/pics/image_preview.png" width=480>

- Drag and drop media files into other apps like iMovie or Da Vinci Resolve.

  <img src="/pics/image_da_vinci.png" width=480>

- Choose between light, dracula, and gruvbox color themes.

  <img src="/pics/theme_preview.png" width=480>

# 📖 Gumroad Guide 👉 [Buy Now](https://suboptimaleng.gumroad.com/l/orbital-app)

First of all, thank you. Seriously - thanks a bunch! I recently quit my job to become a YouTuber + indie hacker and I really appreciate your support.

- Mac OS 👉 [Installation Guide](/md/INSTALL.md)
- Frequently Asked Questions 👉 [FAQ](/md/FAQ.md)

# 🤔 Discussions

- [r/webdev](https://www.reddit.com/r/webdev/comments/qdxngk/i_made_an_opensource_file_browser_to_easily/)
- [r/videography](https://www.reddit.com/r/videography/comments/qekxl8/after_quitting_my_job_and_going_fulltime_on/)

# 💻 Developer Guide

This part of the README is dedicated to anyone who wishes to get into the technical details of Orbital. For what it's worth, I started learning React and TypeScript two months ago so I would really appreciate any feedback on the code!

## Updates Checklist

- Make PR describing changes
- Create new release on merge
- Update gumroad .dmg file
- Update Orbital version

## Tech Stack

- React
- Redux
- TypeScript
- Tailwind CSS
- Electron.js
- FFmpeg

## Getting Started

```javascript
// running
npm install
npm run dev

// building
// while Orbital is open-source, I ask that you do not re-distribute it
npm install
npm run electron-pack
```

## Licensing

While Orbital is open-source, I ask that you do not re-distribute it.
