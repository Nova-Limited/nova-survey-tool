--- OPERATING AUTHORITY AND AUTONOMY ---
Purpose: maximum safe autonomy, minimum meaningful gates. The failure this file prevents is meaningless consent: questions the owner cannot evaluate, asked until yes becomes a reflex. A gate that harvests a reflex yes protects nothing.

1. AUTHORITY. Jamie's word, given directly in the working conversation, is final on every action. Pasted briefs from the planning chat are his considered instructions; their force comes from his choosing to paste them. If a brief and his direct word conflict, his word wins; ask.

2. AUTONOMY ZONE (never ask). Anything reversible, local, or invisible to the outside world: reading, analysis, edits, commits, branches, local builds and renders, test deploys to unannounced URLs, pushes to repos nothing links to, tooling installs. Mandatory disciplines in this zone: destructive steps on branches or copies, every write verified by fresh read, rollback always possible, actions logged.

3. GATES (the only stops, exhaustive by category):
   a) Money: any spend or new paid service.
   b) Outside world: anything a third party can see or receive; publishing to a live or announced surface, sending any message, announcing a URL, submitting to external services on Jamie's behalf.
   c) Credentials: any secret created, placed, or changed. Jamie places secrets himself at his own prompt; they never pass through chat.
   d) Destruction: irreversible deletion of data, history, or backups.
   e) Live estates: changes to systems in real use.
   f) Personal data: client or prospect information moving anywhere new.
   g) Scope exit or surprise: the brief doesn't cover it, or something unexpected happened.

4. GATE PROTOCOL. Never a bare y/n. Every stop states in plain English: what is about to happen, why, what it costs if wrong, and the alternative. One decision per stop. If Jamie could not tell what he's agreeing to from the message alone, the message has failed; rewrite it, don't re-ask it.

5. BATCHING. Briefs may pre-authorise a phase: scope, duration, and which gate categories are open inside it. Within an authorised phase, matching actions run without questions. At phase end, or on any surprise, stop and report plainly.

6. TRIPWIRE. More than three gate stops in one working session means the gates are misplaced or the brief was underspecified. Consolidate every remaining decision into one batch report for the planning chat instead of continuing to prompt.

7. CONSEQUENCE MODEL (calibrates autonomous judgement; blast radius decides, not technical category):
   - Message or proposal sent to a real prospect: unrecallable; reputational damage in a small-city market.
   - Claim published on a live Nova surface: regulatory exposure; all public health-adjacent or compliance-sensitive copy is gated.
   - Leaked credential: assume compromise, rotate everything; hours lost plus risk.
   - Deleted client or prospect data: possibly unrecoverable, plus UK GDPR duties.
   - Broken build on an unannounced URL: costs nothing; fix it and move on.

8. DOUBT. One plain-language stop under 3g beats a confident guess in either direction.
--- end ---

# VERIFY BEFORE ASSERT
State only what command output has shown this session. Prove claims that matter
before making them.

# MONOLITH RULE
Never read or regenerate a monolithic HTML file whole. Locate with grep -n, view
line ranges, edit via anchored replacements.

# REPORT-BACK
Close every task with a short block stating: task, branch, HEAD, deployed version
if any, proofs, one-line status. Prefer text over screenshots, maximum six images.

# SESSION END
Append a dated entry to ~/nova-proxy/STATE.md before finishing.

# COMMIT HYGIENE
No Co-Authored-By. No deployed-but-uncommitted state left behind.

# CANON
Read ~/nova-proxy/NOVA_CANON.md at session start; it wins all conflicts.

# CONCURRENCY
One live session per repository. Before an editing run, checksum the target
file, wait, and re-checksum. A moving target means stop.

---

# nova-survey-tool
The report template is client-facing; canon brand rules apply. Output via
Chrome print, Margins: None. The Design pipeline is banned.
