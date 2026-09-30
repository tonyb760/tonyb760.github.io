# BlackMagic — sanitised lab example

Author: Bhavesh Manhar / 0xTonyb

## Provenance and scope

Retrospective summary derived from saved BlackMagic artifacts for a DVWA training-app assessment. This document is rewritten for public presentation. Evidence labels are illustrative. It is not a raw report, an execution transcript or an independently reproduced test result.

Original infrastructure, credentials, payloads, timestamps, private paths and screenshots are excluded.

## Objective

Evaluate which tests were blocked, which reached the application, and which responses supported an actual security impact.

## Workflow represented

Preserve assessment context → compare baseline and replay behaviour → reconcile evidence → record a reviewable conclusion.

The saved artifacts include assessment state, command history, an operator checkpoint, structured finding records, screenshots and generated HTML reports. This sequence is an editorial reconstruction.

## Illustrative finding: DEMO-01

**Title:** Conflicting query-input evidence

**Status:** Review required

**Observation:** A saved manual observation describes application record retrieval. An automated verifier separately rejected a query-input test because it detected no error, boolean difference or timing signal. The artifacts do not establish that the tests were identical.

**Evidence references:**

- LAB-QUERY-01 — rewritten manual observation.
- LAB-VERIFY-01 — rewritten verifier result.

These are public presentation labels, not original artifact identifiers.

**Potential impact:** Access beyond the intended query boundary. Exact scope and reproducibility require a controlled replay.

**Next validation:** Match test conditions, compare baseline and test responses, and establish whether data access exceeded intended application behaviour.

**Remediation direction:** Use parameterised queries and application-side input constraints. Validate the change against the original behaviour once the discrepancy is resolved.

**Retest status:** No remediation closure claimed.

## Additional control observations

- Some earlier command-test replays recorded accepted requests. A later retest recorded no command-execution output and noted application-side input validation. Request acceptance alone does not prove execution.
- XSS retest notes describe edge blocks and non-executing DOM cases, with no triggered execution recorded in the documented test set. This does not establish universal XSS prevention.

## Operator value

Keep automated verdicts alongside observations. Separate blocked tests, accepted requests and demonstrated impact. Record changing behaviour, evidence conflicts and the next validation step.

## Limits

This record demonstrates saved checkpoints and evidence review. It does not establish enforcement of human approval gates, a completed remediation programme or production engagement results.
