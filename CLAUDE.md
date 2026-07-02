# Approval policy
Proceed automatically, without asking, for safe reversible local actions:
- read-only / inspection: git status, git diff, git log, grep, view, ls, cat
- local syntax checks and dry-runs (e.g. wrangler deploy --dry-run)
- creating NEW files
- edits to a working file that will be tested before any deploy
- npm install

ALWAYS stop and ask for explicit approval before consequential or hard-to-undo actions:
- any deploy (e.g. wrangler deploy) or any git push
- deleting anything: files, branches (local or remote), or data
- force-push or history rewrites (rebase, reset --hard, push --force)
- changing secrets, permissions, or access
- writing to or deleting production or Airtable data
- sending anything externally

The test is reversibility and blast radius, not whether the user understands the
command. When in doubt, treat it as needing approval.

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
