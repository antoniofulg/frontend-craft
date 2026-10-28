# Checkout and form completion

Read when creating or reviewing checkout, purchase confirmation, lead forms or
signup completion. Apply objective, audience and source terms from
[commercial strategy](commercial-strategy.md); use
[interaction and accessibility](interaction-accessibility.md) for control,
validation and recovery contracts. Read [monetization](monetization.md) only when
the task changes pricing, payment options or trial terms.

## Locate the loss before shortening the form

Trace entry → required information → review/commitment → confirmation in the
requested scope. Identify abandonment, validation failures and payment errors
where evidence exists; aggregate abandonment benchmarks do not diagnose this
flow. Preserve necessary fulfillment, qualification and verification data.
For each field, name why it is needed now and whether it can be collected later,
inferred safely or prefilled for user review.

Assess perceived effort as well as field count: dense explanations, hidden
choices, warnings and repeated entry can make a short form feel expensive.
Group related fields and compare one-page versus staged completion against the
actual task. Show remaining necessary effort accurately. A shorter form that
produces unusable leads or failed deliveries can worsen the commercial outcome.

Choose controls from the values and device: visible choices for a small
comparable set, searchable selection for a large set, and appropriate input
modes/autocomplete for structured data. Avoid replacing established accessible
controls solely to follow a numerical option-count rule. Permit paste and
password managers, support password visibility, preserve valid input on errors,
and make the next corrective action clear.

Explain sensitive requests at the point of collection: why this phone number,
identity document or other detail is needed, and what happens next. Add specific
fraud-prevention copy at an evidenced risk moment, such as when a delivery code
could be shared too early. Verify the warning matches the actual service;
generic friction everywhere is not an effective substitute.

## Make the commitment understandable

Where the product permits, let buyers complete as guests and offer account
creation after purchase. If an account is necessary for delivery or access,
explain its purpose rather than silently forcing a registration detour.

Before commitment, display the product/plan, quantity, relevant image or preview,
billing period, total and known additional charges. Surface delivery timing,
refund/return conditions and recurring obligations while the buyer can still
choose. When tax or shipping depends on missing input, state that fact and update
the total before submission. Transparent itemized fees can be appropriate;
concealing them or changing approved prices to absorb them is not a layout fix.

Show genuine available discounts with their eligibility and updated total.
Use verifiable merchant identity, applicable registration details, support
availability and relevant proof where they resolve actual doubt. A decorative
padlock is not evidence of payment security; guarantees and certifications must
match the real offer. Keep reassurance readable without crowding the order
summary or covering it with an upsell.

## Recover the payment outcome

Distinguish a known failure, processing or unknown outcome, and confirmed success.
A timeout does not establish that an order is unpaid or that no charge occurred.
Where the existing contract distinguishes order acceptance, payment authorization/
capture, cancellation and refund completion, preserve those meanings. An accepted
refund request is not a completed refund.
For a known input rejection, identify the correction; offer another payment
method only when appropriate to the confirmed problem. For processing or an
uncertain outcome, check authoritative payment/order status and reconcile before
another charge attempt, including a changed payment method, through the existing
[idempotency and async contract](components.md#async-state-and-recovery).
Do not invent retry headers, workers or payment infrastructure.

Preserve valid non-sensitive inputs through the existing payment contract, never
by storing CVV or card data. State charges, success and refund status only when
confirmed; keep a successful payment from returning to a charge action.
For unresolved exceptions, offer a verified existing support channel with only
approved non-secret reference IDs, known status and necessary context. Exclude
card details, credentials, payment tokens and raw sensitive payloads; do not
invent support response times or collect diagnostic data indiscriminately.
Approved identifiers or diagnostic URLs can still be sensitive; share them only
through the authorized channel under the existing privacy contract.
Explain the current outcome and next action using
[interaction feedback](interaction-accessibility.md#trace-a-complete-interaction).

## Verify completion, not merely clicks

Exercise the supported mobile flow, review totals after changes, field errors,
back navigation, payment failure/retry and confirmation through approved test
mechanisms. Verify confirmed success stays successful after reload, Back and
return from authentication; check repeated submission for duplicate orders/charges.
Never place a live purchase solely to verify a design. Confirmation should state
what succeeded, fulfillment/access timing and the next useful action.

Report the affected step, observed friction or risk, proposed change and how to
validate it using [commercial findings](review.md#commercial-findings). Measure
completed valid orders or qualified leads with relevant refunds, errors and
support costs. Use [experimentation](experimentation.md) when comparing variants;
input-type folklore and another store's abandonment percentages are hypotheses,
not forecasts for this audience.
