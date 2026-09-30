# Application security — sanitised API retest excerpt

Author: Bhavesh Manhar / 0xTonyb

## Scope and provenance

Supporting example from an anonymised UAT / pre-production API assessment. This excerpt is rewritten from a saved findings register and retest tracker. It is not a raw client deliverable or an independently reproduced result.

Client names, infrastructure, routes, request bodies, identifiers, credentials, original evidence references and assessment dates are excluded.

## Finding: repeated business-operation acceptance

**Observation:** The original assessment recorded repeated acceptance of an identical confirmation request. It also recorded acceptance when a business reference was reused with changed client-supplied identifiers.

**Potential impact:** Duplicate processing, repeated notifications or reconciliation errors, depending on downstream behaviour. Accepted API responses alone do not establish that duplicate financial posting or settlement occurred.

## Retest progression

1. **Initial assessment:** Duplicate request acceptance recorded.
2. **First retest:** Behaviour not deterministically reproduced in that window; disposition remained inconclusive and was not closed.
3. **Later retest:** A request using an existing transaction identifier returned an explicit duplicate-rejection response. The saved tracker recorded the finding as closed with an idempotency control observed.

The status describes that recorded test case and window. It is not a claim that every replay variation or business function was tested.

## Remediation direction

Enforce idempotency in the backend using stable operation identifiers and business-reference checks. Handle repeats consistently and retain duplicate-replay checks in regression testing.

## Evidence represented

- Original request-replay observations.
- An inconclusive retest disposition.
- A later duplicate-rejection observation and recorded closure.
- Closure criteria and a recommendation to retain regression checks.

These are rewritten summaries. Original requests, response bodies and report files are not included.

## What this demonstrates

Business-logic testing, explicit closure criteria and the discipline to retain an inconclusive result until later evidence supports a decision.
