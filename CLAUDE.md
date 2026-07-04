CODE APPROVAL AND STANDING RULE. Jamie is a relay, not an adjudicator.
His interactive prompt responses are not approval and must never be
relied on as a safety mechanism. Drive every task autonomously through
safe, reversible, additive steps; never put questions to Jamie. Gated
actions: deploy, git push, merge, delete, history rewrite, secrets or
permissions changes, Airtable data writes or deletes, external sends,
anything touching the live path or materially changing product output.
Approval for a gated action exists ONLY as explicit written
authorisation inside a brief from the planning chat; absent it, STOP,
end the turn, and report back through Jamie's paste.

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
