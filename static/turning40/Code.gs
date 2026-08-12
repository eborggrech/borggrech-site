/*
  Edward · 40 — RSVP backend
  Google Apps Script + Google Sheet

  IMPORTANT:
  1) Paste your Google Sheet ID below.
     It is the long value between /d/ and /edit in the Sheet URL.
  2) Save.
  3) Deploy > Manage deployments > Edit > New version > Deploy.
  4) Keep "Execute as: Me".
  5) Access must allow anonymous guests if you don't want guests to sign in.
*/

const SPREADSHEET_ID = "1kQ12loQakJDpLhcV9lD5R5DjWtRHCayIdNvXDe3f_X0";
const SHEET_NAME = "RSVP";

function doGet() {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    return HtmlService.createHtmlOutput(
      "<!doctype html><html><body style='font-family:Arial,sans-serif;padding:24px'>" +
      "<h2>RSVP endpoint ready</h2>" +
      "<p>Connected to: <strong>" + escapeHtml_(ss.getName()) + "</strong></p>" +
      "<p>You can now test the RSVP form.</p>" +
      "</body></html>"
    );
  } catch (err) {
    return HtmlService.createHtmlOutput(
      "<!doctype html><html><body style='font-family:Arial,sans-serif;padding:24px'>" +
      "<h2>RSVP setup error</h2>" +
      "<p>" + escapeHtml_(String(err)) + "</p>" +
      "</body></html>"
    );
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const p = e && e.parameter ? e.parameter : {};

    // Honeypot: silently ignore likely bots.
    if (p.website) {
      return response_("turning40-rsvp-success", "");
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Attendance",
        "Number Attending",
        "Guest Names",
        "Dietary Requirements",
        "Message"
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      clean_(p.name),
      clean_(p.attendance),
      clean_(p.guests),
      clean_(p.guest_names),
      clean_(p.dietary),
      clean_(p.message)
    ]);

    SpreadsheetApp.flush();

    return response_("turning40-rsvp-success", "");

  } catch (err) {
    console.error(err);
    return response_("turning40-rsvp-error", "The RSVP could not be saved. Please try again.");
  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}

function response_(type, message) {
  const payload = JSON.stringify({
    type: type,
    message: message || ""
  }).replace(/</g, "\\u003c");

  return HtmlService.createHtmlOutput(
    "<!doctype html><html><body>" +
    "<script>" +
    "window.parent.postMessage(" + payload + ", '*');" +
    "</script>" +
    "</body></html>"
  );
}

function clean_(value) {
  if (value === null || value === undefined) return "";
  return String(value).trim().slice(0, 2000);
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
