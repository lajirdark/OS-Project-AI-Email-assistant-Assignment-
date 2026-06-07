# ✉ AEG — AI Email Agent

> **OS Project** | Student ID: 24013565 | Name: Lim Artyom

An AI-powered web app that generates professional emails instantly — **no API key, no backend, no installation required.** Just open `index.html` in a browser and go.

---

## 🌍 Real-World Problem It Solves

Many students and professionals struggle to write formal, clear, and professional emails. Writing to professors, employers, or companies can be stressful and time-consuming — especially for **non-native English speakers**.

**AEG** solves this by automatically generating a professional, properly structured email based on the user's situation, recipient, purpose, tone, and language.

---

## 🖥 System Diagram

```
┌─────────────────────────────────────────────────────────┐
│                        STEP 1                           │
│  User fills in: recipient · purpose · tone · language   │
│                   + situation description               │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                        STEP 2                           │
│         Intent & Tone Analysis  (templates.js)          │
│   Selects subject, greeting, opener, body, closing      │
│       based on recipient + purpose + tone + lang        │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                        STEP 3                           │
│         Smart Email Builder  (buildEmail fn)            │
│    Assembles full email: Subject → Greeting →           │
│       Opener → Body → Closing → Signature               │
└────────────────────────┬────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                        STEP 4                           │
│           Final Email Draft displayed to user           │
│     Options: Copy to clipboard / Download .txt /        │
│                    Regenerate                           │
└─────────────────────────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎯 Recipient selector | Professor, Employer, Company, Colleague, Client |
| 📋 Purpose selector | Request, Apology, Follow-up, Complaint, Application, Thank-you, Inquiry |
| 🎨 Tone control | Formal / Semi-formal / Friendly |
| 🌐 Multi-language | English & Korean (한국어) |
| 👤 Name fields | Optional sender name & recipient name for personalization |
| ⚡ Quick examples | One-click fill for 6 common scenarios |
| 📋 Copy button | Copy full email to clipboard instantly |
| ⬇ Download | Save email as `.txt` file |
| 🔄 Regenerate | Get a new variant with one click |
| ⌨️ Keyboard shortcut | `Ctrl + Enter` to generate |
| 🚫 No API needed | Runs 100% in the browser — no key, no server |

---

## 🚀 How to Run

**No installation. No server. No API key.**

1. Download or clone this repository
2. Open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari)
3. Fill in the form → click **Generate Email**

```bash
git clone https://github.com/YOUR_USERNAME/AEG-AI-Email-Agent.git
cd AEG-AI-Email-Agent
# Open index.html in your browser
```

---

## 📁 Project Structure

```
AEG-AI-Email-Agent/
├── index.html          ← Main app page (structure & layout)
├── css/
│   └── style.css       ← All visual styles
├── js/
│   ├── templates.js    ← Email template engine (greetings, bodies, closings)
│   └── app.js          ← UI logic (generate, copy, download)
└── README.md
```

---

## 🛠 Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** — zero dependencies, zero frameworks
- **Smart template engine** — purpose × tone × language × recipient matrix
- **Clipboard API + Blob API** — for copy and download
- Runs entirely in the browser — works offline after download

---

## 📋 Implementation Phases

| Phase | Status | Description |
|---|---|---|
| Phase 1 | ✅ Done | Input form — recipient, purpose, tone, language, situation |
| Phase 2 | ✅ Done | Template engine — intent & tone analysis, prompt selection |
| Phase 3 | ✅ Done | Tone/language variants + Regenerate button |
| Phase 4 | ✅ Done | Copy to clipboard + Download as .txt |

---

## 🤖 AI Tool Used

This project was developed with the assistance of **Claude (Anthropic)** as specified in the project requirements.

---

## 👤 Author

**Lim Artyom** — Student ID: 24013565  
OS Course Project
