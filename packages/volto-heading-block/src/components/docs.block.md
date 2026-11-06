---
block: heading
---

Shows a heading, a short title that introduces a part of the page.

The text of the heading is stored as plain text, without markup.
The level of the heading is stored in `tag`, and it is one of the levels the site allows.

### Fields

- `heading`: the text of the heading, as a string.
- `tag`: the level of the heading, one of {{allowed_headings}}. When it is missing, the heading uses {{default_tag}}.
- `alignment`: the alignment of the text, `left`, `center` or `right`. The block stores it, and it only applies when the site shows the alignment setting, which is {{show_alignment}} here.

### Example

```json
{
  "@type": "heading",
  "heading": "Our services",
  "tag": "h2",
  "alignment": "left"
}
```
