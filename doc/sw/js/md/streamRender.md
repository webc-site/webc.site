# md/streamRender.js

Utoaji wa kutiririsha Markdown

## default(container, source)

Kutiririsha uwasilishaji wa maandishi ya Markdown kwenye kontena maalum ya DOM, inayoauni athari za kishale cha taipureta na kusogeza kiotomatiki.

kigezo:
- `container` : Kipengele cha kontena cha DOM kupangisha maudhui yaliyotolewa
- `source` : Chanzo cha data ya maandishi ya ReadableStream

Thamani ya kurejesha:

- `cancel` : Kazi ya kukomesha uwasilishaji na usomaji wa mtiririko wa data
- `setStop` : Kazi ya kuweka kama kusitisha kusogeza kiotomatiki
  - kigezo
    - `val` : Thamani ya boolean iwe ya kusitisha au la