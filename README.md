# ShopHook

A daily trending-products app for TikTok Shop affiliates. Shows niche-relevant
products with commission rate, estimated earnings, and an AI-generated
60-second video script for each one.

- 3-day free trial, then $9.99/week subscription
- iOS + Android via React Native (Expo)
- Supabase database / auth
- Anthropic Claude for script generation
- Mock product data initially; real data source plugged in later

## Status

Day-1 scaffold. The app boots to a **"Today's Trending"** feed showing 20
seed beauty/skincare products with brand, price, commission rate, trend
score, and an estimated daily-earnings figure per video. Tapping a card
logs to the console for now — script generation and detail screens come
next.

## How to run it on your phone (first-time setup)

You only do this once. Five-ish minutes.

1. Install **Node.js LTS** from https://nodejs.org/ (the green LTS button).
2. Install **Git for Windows** from https://git-scm.com/download/win.
3. Close and reopen VS Code so it sees the new tools.
4. Open VS Code, then `Terminal -> New Terminal`.
5. Clone this repo and enter it:
   ```
   git clone <your-repo-url>
   cd Example-Repo
   git checkout claude/shophook-app-setup-muxo9
   ```
6. Install the JavaScript packages (one-time, ~2 min):
   ```
   npm install
   ```
7. Start the dev server:
   ```
   npx expo start
   ```
8. On your iPhone, install **Expo Go** from the App Store.
9. Open the iPhone camera and point it at the QR code in the VS Code
   terminal. Tap the notification — Expo Go opens, and ShopHook loads on
   your phone.
10. Make sure your phone and PC are on the same Wi-Fi network. If they
    aren't, the QR code won't connect.

## Project structure

```
.
├── App.js                  # entry component (mounts the feed)
├── app.json                # app name, icon, splash, bundle IDs
├── assets/                 # icons + splash images (placeholder, we'll replace)
├── index.js                # entrypoint; do not edit
├── package.json            # dependencies
├── src/
│   ├── components/         # reusable UI pieces
│   │   └── ProductCard.js
│   ├── data/               # mock product data (swap for real API later)
│   │   └── seedProducts.js
│   ├── screens/            # full screens
│   │   └── FeedScreen.js
│   └── theme/              # colors, spacing, typography
│       └── colors.js
└── README.md
```
