# 🛰 Orbital - Video File Browser

Orbital is a local-first desktop app that allows you to search, filter, and preview video (and image) files on your computer. It turns your computer's file browser into YouTube.

Orbital is available for 👉 [purchase on Gumroad]() for $10 USD.

## How does it work?

You select a main folder, and Orbital will load the supported media files in that folder (and all sub-folders) and allow you to easily search, filter, and preview them.

## Demo

- Choose root directory
- Scroll down to load all files
- Search for a video file
- Preview a video on hover
- Show video preview display
- Show keybindings in action
- Change color themes

## Features

- #### Gallery view of videos and images.

  <img src="/pics/theme_gruvbox.png" width=600>

- #### Search files through all sub-folders with filename.

  <img src="/pics/image_search.png" width=600>

- #### Preview media files and traverse them with keybindings.

  <img src="/pics/image_preview.png" width=600>

- #### Choose between light, dracula (shown below), and gruvbox (shown above) color themes.

  <img src="/pics/theme_preview.png" width=600>

# 📖 Gumroad Guide 👉 [Purchase Now]()

First of all, thank you. Seriously - thanks a bunch! I recently quit my job to become a YouTuber + indie hacker and I really appreciate your support.

## What's Included?

- Downloadable .dmg to run Orbital on Mac OS.
- Gallery view of videos and images.
- Search files through all sub-folders with filename.
- Preview media files and traverse them with keybindings.
- Choose between light, dracula, and gruvbox color themes.
- Lifetime updates.

## Mac OS Installation Guide

- First download the DMG file.
- Open it and you will see this popup.
- Whoa that looks scary, why is it there?

## Frequently Asked Questions (FAQ)

- What media file types are supported?

  - Video: .mov, .mp4, .webm
  - Image: .ico, .jpeg, .jpg, .png, .webp

- Is there going to be support for Windows?

  - I would love to release this on Windows, but I just do not have access to windows computer right now. I will add it to the road-map when I get one.

- How do I get the latest version of Orbital?

  - For the time being, I will update the downloadable DMG file on Gumroad whenever a new version comes out. You should be able to re-download it and follow the installation guide. You can follow me on [Twitter](https://www.twitter.com/SuboptimalEng) to get the news about any recent updates.

- Why can't Orbital automatically update like other desktop apps (Spotify, Notion, Discord, etc)?

  - This requires me to set up an LLC and get an Apple developer license. This is a viable option for companies that have lots of resources, but since I'm a solo-developer (making less than $100 a month), setting this up will cost time and money which I'd rather spend on adding new features.

- What is your refund policy?

  - I can give a full refund if you don't like your purchase (within 14 days). Just send me a message on Twitter [@SuboptimalEng](https://twitter.com/SuboptimalEng).

- Want to get in touch?

  - For personal inquiries, send me a message on Twitter [@SuboptimalEng](https://www.twitter.com/SuboptimalEng).
  - For business inquiries, send me an email at suboptimaleng at gmail dot com.

# 💻 Developer Guide

This part of the README is dedicated to anyone who wishes to get into the technical details of Orbital. For what it's worth, I started learning React and TypeScript two months ago so I would really appreciate any feedback on the code!

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
