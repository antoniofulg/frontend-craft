# Motion vocabulary and reverse lookup

Read when someone describes a visual effect without knowing its name, asks what
an animation is called, or needs precise language for a design brief. Match the
observed behavior, not an isolated adjective. Answer with the best term and one
short explanation. When ambiguous, give one or two alternatives and the visible
difference; label an approximate match instead of inventing an exact name.

For naming alone, stop after answering. An effect can combine terms, such as a
staggered entrance with a scale and fade. These are descriptive terms, properties
and concepts, not interchangeable library APIs or instructions to add motion.
An unfamiliar effect can require a more specific verified term outside this list.

When implementation or review is requested, use [motion](motion.md) for purpose,
precedents, gesture behavior, interruption and reduced-motion alternatives. Use
[performance](performance.md) for measured rendering claims. A name does not
establish accessibility, browser support or runtime cost.

## Appearance and removal

| Term | Observed behavior or meaning |
| --- | --- |
| **Fade in / Fade out** | Visibility changes through opacity while the element need not move. |
| **Slide in** | A surface enters through positional movement, often from an edge. |
| **Scale in** | An entrance changes apparent size toward the final scale; opacity can change independently. |
| **Pop in** | An entrance briefly exceeds its resting size or position before settling. |
| **Reveal** | More content becomes visible through an opening region, wipe, clip or mask. |
| **Enter / Exit** | The appearance/removal phases of a component; the words do not specify their visual effect. |

## Coordination and playback

| Term | Observed behavior or meaning |
| --- | --- |
| **Keyframes** | Selected states along a timeline define the values animation passes through. |
| **Interpolation / Tween** | Intermediate values connect specified states when the value types support interpolation. |
| **Stagger** | Related items begin their animations at successive offsets rather than together. |
| **Orchestration** | Multiple effects are coordinated into an intentional sequence or relationship. |
| **Delay** | An offset before an effect starts; it differs from the time spent playing it. |
| **Duration** | Playback time for a specified animation segment or iteration. |
| **Fill mode** | Rules determine whether animation styles apply before or after the active playback interval. |
| **Stepped animation** | Progress advances in discrete increments rather than smoothly through every intermediate value. |

## Geometry and anchoring

| Term | Observed behavior or meaning |
| --- | --- |
| **Translate** | Apparent position shifts along an axis. |
| **Scale** | Apparent dimensions grow or shrink relative to an anchor. |
| **Rotate** | Orientation changes around an axis or point. |
| **Skew** | A shape shears so its edges appear slanted. |
| **3D tilt / Flip** | Rotation in depth makes a face angle toward, away from or around the viewer. |
| **Perspective** | Depth projection makes nearer and farther parts appear at different scales. |
| **Transform origin** | The reference point around which a transform such as scale or rotation operates. |
| **Origin-aware animation** | Movement appears connected to the initiating control or location, rather than an unrelated anchor. |

## Connections between states

| Term | Observed behavior or meaning |
| --- | --- |
| **Crossfade** | One visual representation loses opacity while another gains it; their shapes need not interpolate. |
| **Continuity transition** | Visual identity or spatial relationships connect the old and new states so the change can be followed. |
| **Morph** | A contour or shape changes into another contour or shape. |
| **Shared element transition** | A recognizable object connects two compositions by moving, resizing or changing appearance between them. |
| **Layout animation** | Changes in arranged size or position are visually connected instead of appearing as an immediate jump. |
| **Accordion / Collapse** | A region opens or closes to expose content; the control pattern exists independently of any height animation. |
| **Direction-aware transition** | The direction of movement communicates a relationship such as advancing versus returning. |

## Scrolling and navigation

| Term | Observed behavior or meaning |
| --- | --- |
| **Scroll reveal** | Entering a viewport or threshold triggers an appearance effect, which can then play on its own timeline. |
| **Scroll-driven animation** | Scroll progress controls animation progress rather than merely starting playback. |
| **Parallax** | Layers move by different amounts relative to scrolling or viewpoint movement, suggesting depth. |
| **Page transition** | A visual connection accompanies navigation between pages or routes, using any suitable mechanism. |
| **View transition** | In the browser API sense, before/after view representations animate through a browser-managed transition. It need not morph shapes or use shared elements. |

## Direct interaction and feedback

| Term | Observed behavior or meaning |
| --- | --- |
| **Hover effect** | Pointer presence changes appearance; the effect may be static or animated. |
| **Press / Tap feedback** | A visual response acknowledges activation, such as a temporary size or color change. |
| **Hold to confirm** | A sustained input reaches a confirmation threshold, often visualized with progress. It is an interaction contract, not just a fill animation. |
| **Drag** | An object follows a tracked pointer/contact movement. |
| **Drag to reorder** | Dragging changes an item's position in a collection, with surrounding items indicating the destination. |
| **Swipe to dismiss** | A directional gesture requests removal or closure; cancellation and a non-gesture path remain separate requirements. |
| **Rubber-banding** | Movement resists travel beyond a boundary and returns toward its allowed range. |
| **Shake / Wiggle** | Brief oscillating movement draws attention or signals a rejected action; the reason still needs understandable feedback. |
| **Ripple** | A wave or expanding mark spreads outward from an interaction location. |

## Timing curves

| Term | Observed behavior or meaning |
| --- | --- |
| **Easing** | The mapping between timeline progress and changing values determines acceleration or deceleration. |
| **Ease-out** | Progress decelerates toward the end of the motion. |
| **Ease-in** | Progress accelerates from a slower beginning. |
| **Ease-in-out** | Progress accelerates early and decelerates later. |
| **Linear** | Values advance at a constant rate with respect to timeline progress. |
| **Cubic-bezier** | Control points describe a timing curve; its shape governs progress, not the object's spatial path. |
| **Asymmetric easing** | Acceleration and deceleration use unequal timing or curve shapes. |

These names describe behavior rather than universal recommendations. Choose
timing through the existing motion contract and the actual task.

## Springs and continuous motion

| Term | Observed behavior or meaning |
| --- | --- |
| **Spring** | A simulation or spring-like response pulls a value toward a target and may oscillate before settling. |
| **Stiffness / Tension** | The restoring force toward the target is stronger or weaker in a physical spring model. |
| **Damping** | Energy loss reduces oscillation and affects settling. |
| **Mass** | Inertia affects the response to forces in a physical model. |
| **Bounce** | Motion overshoots and returns, possibly repeatedly; an entrance called pop in can use this behavior. |
| **Perceptual duration** | A practical measure of when motion appears substantially finished, which may precede full numerical settling. Check any library-specific meaning. |
| **Momentum** | Existing movement continues after the initiating input ends unless resistance or another force changes it. |
| **Velocity** | The rate and direction of position change; retaining it can connect a gesture to subsequent settling. |
| **Interruptible animation** | New input can redirect or reverse an effect before its original completion. |

## Repetition and idle effects

| Term | Observed behavior or meaning |
| --- | --- |
| **Marquee** | Content travels along a repeated scrolling path. |
| **Loop** | Playback repeats for a specified count or until stopped. |
| **Alternate (yoyo)** | Successive iterations reverse playback direction. |
| **Orbit** | An object follows a path around another point or object. |
| **Pulse** | A repeated expansion, fade or similar change emphasizes an element. |
| **Float** | Small repeated displacement suggests drifting or suspension. |
| **Idle animation** | Motion continues while no direct interaction is occurring. |

## Reveals, media and changing text

| Term | Observed behavior or meaning |
| --- | --- |
| **Blur** | Filtering softens visible detail; it can be static or change over time. |
| **Clip-path** | A geometric clipping boundary determines which region is shown. |
| **Mask** | Alpha or luminance controls visibility, including partial transparency and soft transitions. |
| **Before / after slider** | A movable comparison boundary exposes different portions of overlapping representations. |
| **Line drawing** | A path progressively appears as though being traced. |
| **Text morph** | A change between text representations uses glyph/shape, position or other coordinated transitions; describe the observed mechanism when precision matters. |
| **Skeleton / Shimmer** | A skeleton reserves a pending-content representation; shimmer is an optional moving highlight. A skeleton can remain static. |
| **Number ticker** | A number change uses rolling digits, counting or another visible transition toward the new value. |
| **Tabular numbers** | Font figures share digit advance widths; this is typesetting, not animation. See [numeric alignment](visual-details.md#opentype-and-numeric-alignment). |
| **Typewriter** | Text becomes visible incrementally, commonly one character at a time. |

## Rendering and performance language

| Term | Observed behavior or meaning |
| --- | --- |
| **Frame rate (FPS)** | The number of displayed/generated frames per second; relate measurements to device refresh, workload and actual deadlines. |
| **Jank** | Visible unevenness or stalls in updates, scrolling or movement; the word describes a symptom rather than its cause. |
| **Dropped frame** | An intended update misses its presentation opportunity; inspect timing to identify the responsible work. |
| **Compositing** | Rendered layers are combined into the final image; some updates can reuse painted content instead of repeating layout/paint. |
| **will-change** | A CSS optimization hint describing expected changes. It does not force layer promotion or guarantee smoothness, and excess hints can increase resource cost. |
| **Layout thrashing** | Repeated forced layout, often caused by interleaving geometry reads with changes that invalidate layout. Animating a layout-affecting property alone does not establish thrashing. |

## Purpose and perception

| Term | Observed behavior or meaning |
| --- | --- |
| **Purposeful animation** | Motion communicates a useful relationship, outcome or state for the task. |
| **Anticipation** | A preparatory movement signals the main action that follows. |
| **Follow-through** | Secondary movement continues after the main action stops. |
| **Squash & stretch** | Deformation suggests flexibility, force or weight. |
| **Perceived performance** | How responsive or fast a system feels, distinct from measured completion time. |
| **Frequency of use** | How often the user encounters an effect, influencing whether its delay or emphasis remains useful. |
| **Spatial consistency** | Locations and movement preserve understandable relationships across states. |
| **Hardware acceleration** | Rendering work uses specialized hardware where the browser/platform chooses; transform or opacity usage is not proof of acceleration or acceptable performance. |
| **Reduced motion** | A preference calls for reducing unnecessary movement while preserving the information and usable outcome; follow [motion alternatives](motion.md#handle-interruption-and-alternatives). |

## Resolve close matches

An image changing to another could be a crossfade, morph or shared element
transition. Distinguish opacity replacement, a changing outline and a recognizable
object moving between compositions. A shared transition may combine mechanisms.

A sharp moving reveal boundary suggests clipping; a reveal with graded transparency
suggests masking. A growing anchored surface can be origin-aware without bouncing.
Pop in describes an entrance; bounce describes overshoot behavior. Layout animation
describes a visible transition; layout thrashing describes repeated forced work.

Browser terms should match current documentation and supported targets when used
for implementation. Relevant primary references are MDN's
[masking introduction](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Masking/Introduction),
[View Transition API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API),
[will-change](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/will-change)
and [forced style/layout timing](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration).
Measure causes through the performance guide rather than prescribing a universal
frame rate or compositor hint from the vocabulary alone.
