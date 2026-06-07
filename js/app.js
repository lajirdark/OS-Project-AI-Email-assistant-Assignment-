/* ============================================================
   AEG — AI Email Agent | app.js
   Author: Lim Artyom (24013565)
   ============================================================ */

"use strict";

function $(id) { return document.getElementById(id); }

function setStep(n) {
  [1, 2, 3].forEach(i => {
    const el = $("step" + i);
    el.className = "step" + (i < n ? " done" : i === n ? " active" : "");
  });
}

/* ── Quick fill ──────────────────────────────────────────── */
function fillExample(text) {
  $("situation").value = text;
  $("situation").focus();
}

/* ── Generate ────────────────────────────────────────────── */
function generateEmail() {
  const situation = $("situation").value.trim();
  if (!situation) {
    alert("Please describe your situation first.");
    return;
  }

  const email = buildEmail({
    recipient:     $("recipient").value,
    purpose:       $("purpose").value,
    tone:          $("tone").value,
    lang:          $("lang").value,
    sender:        $("sender").value.trim(),
    recipientName: $("recipient-name").value.trim(),
    situation:     situation,
  });

  $("output").textContent = email;
  $("output-card").style.display = "block";
  setStep(3);

  // Smooth scroll to result
  setTimeout(() => {
    $("output-card").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 80);
}

/* ── Copy ────────────────────────────────────────────────── */
function copyEmail() {
  const text = $("output").textContent.trim();
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const msg = $("copy-msg");
    msg.style.display = "inline";
    setTimeout(() => { msg.style.display = "none"; }, 2200);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  });
}

/* ── Download ────────────────────────────────────────────── */
function downloadEmail() {
  const text = $("output").textContent.trim();
  if (!text) return;

  const blob = new Blob([text], { type: "text/plain; charset=utf-8" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "email-draft.txt";
  a.click();
  URL.revokeObjectURL(url);
}

/* ── Keyboard shortcut: Ctrl+Enter ──────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  $("situation").addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key === "Enter") generateEmail();
  });
});
