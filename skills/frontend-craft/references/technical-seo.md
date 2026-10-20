# Technical SEO and discovery

Read for public content rendering, metadata, indexing, canonical URLs, discovery
endpoints or AI search access. Use only the affected sections for a small repair;
this is not a mandatory site-wide audit. For a public redesign, preserve the
[public contracts](landing-pages.md#public-redesign-contracts). Existing project
instructions, publication/auth owners and deployment authority remain in force.

Check current official documentation for changeable crawler or framework claims.
Use Context7 first for library/framework APIs, then the project's documented
fallback; choose implementation hooks from the actual stack. The sources below
were checked on 2026-10-20, not frozen as permanent vendor policy.

## Establish the public route contract

Trace intended indexable pages, private flows, publication states, current and
retired slugs, canonical origin, redirects and missing/error responses. Reuse the
existing public projection, publication reader and authorization decisions for
page content, metadata and discovery. Generating metadata must not bypass access
control or leak private fields. Preserve the actual visibility of unpublished
content rather than introducing a new publication policy through SEO work.

Choose indexing and cache behavior from the project's contract for each affected
route/state and production versus preview host. A particular origin, slug scheme,
publication enum or blanket `no-store` policy is a project choice, not a universal
SEO rule. Derive canonical origins through the trusted project configuration;
avoid reflecting an arbitrary request host into public metadata.

## Verify useful initial HTML

Fetch the document or disable JavaScript and inspect useful public content and
links. Parse the response, exclude scripts/serialized loader data, and assert the
required text in the intended visible content region. A name in the raw response
string may exist only in serialization; successful hydration can conceal a broken
server render. Parse metadata and JSON-LD separately from visible-content checks.
Google can render JavaScript, but not every crawler can; useful initial HTML
reduces that dependency. See [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

Before enabling SSR, trace browser-only descendants and their initialization,
including browser globals used during rendering. Keep interactive live data
behind an appropriate boundary with a truthful static fallback composed from the
existing public components. The fallback must not imply current prices,
availability or actions that have not resolved. Verify both initial output and
hydrated navigation/interaction relevant to the change; an SSR repair must
preserve the existing product behavior.

Check essential public content, links, indexing metadata and structured data in
mobile and desktop rendering, including any separately served mobile version.
Keep primary indexable content available without clicks, swipes or typing to fetch it; a
collapsed section whose content is already present differs from an unfetched
section. Allow crawling of the public scripts, styles and media needed to render
that content. Verify lazy-loaded content in the rendered page rather than
assuming an empty placeholder will be indexed. See [mobile-first guidance](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing)
and [lazy-loading guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/lazy-loading).

## Align URL discovery and publication

Keep canonical tags, crawlable internal links, sitemap entries and redirects
aligned on the intended public URL. Sitemap membership follows current canonical,
published, public content: exclude drafts, retired slugs, private flows and
duplicate query variants. Preserve genuinely distinct query-defined pages when
the project explicitly treats them as canonical content. Verify publication and
slug transitions against both page responses and discovery output. Canonical
signals express a preference; search engines still select their canonical.
See [canonical URL guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

Make public navigation discoverable through actual `<a href>` destinations and
descriptive link text; click handlers alone do not establish crawlable links.
Check that important indexable pages have relevant internal links rather than
relying only on a sitemap. When paginated, Load more or infinite-scroll public
collections need item discovery, provide independently reachable page URLs
linked in crawlable markup. Distinct pagination pages keep their own canonical URL rather than all
pointing to page one. See [crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
and [pagination](https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading).

When filters or calendars generate large URL spaces, decide which combinations
need indexing and bound unnecessary crawling. Canonical tags alone do not stop
fetching every variant. Keep crawl controls consistent with any required readable
`noindex` directive. See [faceted navigation](https://developers.google.com/crawling/docs/faceted-navigation).

Use genuine significant modification dates when available; omit `lastmod` rather
than inventing a date or refreshing it on every request. Respect the selected
format's size limits. If a discovery dependency fails, return an honest failure
according to the endpoint contract rather than presenting an incomplete or empty
result as successful discovery. A documented cache strategy may serve an existing
valid snapshot, but must respect publication/privacy changes and its freshness
contract. See [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

Add `hreflang` only with a real localized-URL contract: independently reachable
language versions, correct canonicals and reciprocal alternates including each
page itself. A preference toggle changing language at one URL does not establish
separate language URLs. Preserve existing locale ownership. See
[localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions).

## Check indexing and caching through real HTTP

Inspect status, indexing directives and cache headers together for affected
success, private, unpublished, missing and error states. Check production and
preview-host behavior separately; a deliberately nonindexable preview cannot
prove production indexing configuration. Preserve authentication and tenant
authorization: `robots.txt` and `noindex` provide no access control.

Match HTTP status to the actual route state. Missing or removed public content
without a replacement normally returns `404`/`410`; temporary server failures
return an appropriate `5xx`, rather than a `200` error shell or blank page that
can become a soft 404. A permanent move uses an appropriate permanent redirect
(such as `301`/`308`) to a relevant replacement; distinguish temporary redirects.
Check final destinations, loops and unnecessary redirect chains. Preserve
existing access-control and unpublished-content contracts rather than mapping
every inaccessible route to the same error or home page. See [HTTP status handling](https://developers.google.com/crawling/docs/troubleshooting/http-status-codes)
and [redirect guidance](https://developers.google.com/search/docs/crawling-indexing/301-redirects).

Place required error-response indexing and cache headers at a response boundary
that still runs when runtime or database initialization fails. Route middleware
that decorates only after fallible setup leaves an uncovered failure path.
Exercise the actual HTTP transport with a safely isolated initialization failure,
and assert both the required `noindex` directive and the intended cache policy.
Helper tests alone do not prove the framework's returned response has either.
Identify the failure actually reached; an earlier configuration failure is not
proof that a database outage path was exercised.

Ensure crawlers can fetch any response whose `noindex` directive they need to
read; a robots disallow can prevent that read. Keep private data protected by its
existing guards while serving truthful indexing directives on reachable
responses. See [robots meta and HTTP directives](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag).

## Publish truthful metadata

Derive titles, descriptions, social previews and structured data from
authoritative public content. Match the visible entity, offer and publication
state; use the existing metadata owner to keep output coherent. Follow the
[claim inventory](landing-pages.md#commercial-brief-and-claim-inventory) when
commercial facts need support. Never invent reviews, ratings, offers, venue facts
or capabilities to satisfy a schema validator.

Serialize JSON-LD safely for its HTML script context. Plain JSON serialization
does not by itself prevent an embedded closing script tag from ending the
element; reuse a safe serializer or escape HTML-significant input and verify
hostile text remains inert and parses back correctly. See the
[HTML script-content rules](https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements).

Distinguish descriptive Schema.org markup from eligibility for a particular
search rich result. Check that feature's current requirements when claiming
eligibility; correct syntax alone guarantees neither eligibility nor appearance.
See [structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Treat AI discovery as public discovery

Useful, accurate public content, readable text, internal links and crawlability
remain the foundation. Do not promise rankings, citations or special AI SEO
outcomes. `llms.txt` is an optional convenience, not a ranking mechanism or a
substitute for public HTML and a sitemap. Maintain it only when useful and keep
its links and claims truthful. Google's AI search guidance requires no special
AI text file or schema. See [AI features and websites](https://developers.google.com/search/docs/appearance/ai-features)
and the [llms.txt proposal](https://llmstxt.org/).

Keep search-crawler access and model-training policy as separate owner decisions.
Check current vendor tokens and purposes rather than treating all AI bots as
equivalent; for example, [OpenAI documents separate search and training crawlers](https://developers.openai.com/api/docs/bots).
Inspect CDN/WAF policy independently of robots rules. A spoofed user-agent probe
can test a response branch but cannot prove requests from real vendor networks
pass a challenge. Use vendor verification guidance and deployment observations
for that claim; see [verifying Google crawlers](https://developers.google.com/search/docs/crawling-indexing/verifying-googlebot).

## Report the evidence boundary

Keep implementation checks, deployed HTTP behavior and search-engine acceptance
separate. Report revisions/environments checked, untested states and external
actions still needed, such as verified webmaster-account access, sitemap
submission, URL inspection or CDN policy changes. Local metadata and sitemap
tests do not prove deployment, indexing, rich results or crawler access.

For loading, responsiveness or layout-shift findings, use the existing
[performance evidence](performance.md#identify-the-evidence) owner. Good Core Web
Vitals support a useful page experience; a lab score or passing field metrics
does not guarantee rankings. See [page experience](https://developers.google.com/search/docs/appearance/page-experience).

Measure useful search traffic and downstream product outcomes: relevant
impressions/clicks, qualified signups, completed setup or purchases as applicable.
Crawler visits and assistant requests are diagnostic signals, not conversions.
Use [experimentation](experimentation.md) for outcome claims; do not attribute
commercial improvement to SEO changes without supporting measurement.
