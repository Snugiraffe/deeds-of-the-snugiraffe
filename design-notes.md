Deeds of the Snugiraffe
Design Notes
Philosophy
This project should be pleasant to maintain.
Readability is more important than cleverness.
Explicit is better than implicit.
If a piece of code can be understood at a glance, that's a success.
The ideal is that future edits feel like editing an InDesign document with paragraph styles rather than debugging software.
________________________________________
Visual Identity
Background
•	Site-wide static background image
•	Warm yellow (#FFDB61)
•	Contains:
o	Meeples
o	Tarot cards
o	Translation die
•	Should remain fixed across all pages
The background is atmosphere, not content.
________________________________________
Colour Palette
Primary Background
#FFDB61
Primary Text / Accent
#001AE6
Additional colours should be introduced sparingly.
________________________________________
Typography
Display Font
Peralta
Used for:
•	Site title
•	Major headings
•	Navigation buttons
•	Project titles
Should feel decorative and distinctive.
Body Font
(Current experiment)
Architects Daughter
Alternative candidates may be explored.
Body text should prioritise readability while preserving personality.
________________________________________
General Tone
Warm.
Slightly whimsical.
Quietly playful.
Not corporate.
Not minimalist for its own sake.
Should feel like browsing the notebook of someone who genuinely enjoys board games and languages.
________________________________________
Code Philosophy
Prefer names like:
•	page-title
•	intro-text
•	nav-button
•	project-card
over names that encode presentation.
The code should read naturally.
Example:
<h1 className="page-title">
is preferred over:
<h1 className="text-6xl font-black mb-8">
Presentation details belong in CSS.
________________________________________
Layout Philosophy
The homepage should remain visually calm.
Large areas of empty space are acceptable.
The background artwork should breathe.
Avoid unnecessary panels or boxes unless they clearly improve readability.
________________________________________
Content Philosophy
The portfolio exists to showcase translation work.
It should be easy to add a project.
Adding a project should feel like filling in a form, not building a web page.
Long-term goal:
•	one file per project
•	English and German versions side by side
•	no database
•	no CMS
•	no WordPress
________________________________________
Rule for Future Changes
Whenever possible:
1.	Make the obvious change.
2.	Make it readable.
3.	Make it easy to find again.
Optimise for Future Ben.

