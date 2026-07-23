# רכיב ניווט בספריות

- פריסת Flex אנכית
- תמיכה במילון להעברת נתוני ספרייה
- לחץ כדי לטעון אוטומטית טקסט Markdown
- תצוגת מצב טעינה Ing אנימציה

## השתמש בהדגמה

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "השתמש ברכיבים"
};
</script>
```

## מִמְשָׁק

### מאפיינים ושיטות

- `toc.li`: מגדיר אובייקט ספרייה או רשימה של ערכים, כגון `{ key: title }`
- `toc.mdUrl`: הגדר את פונקציית יצירת כתובת האתר של בקשה `(key, lang) => url` או מחרוזת קידומת
- `toc.target`: הגדר או שייך את צומת תוכן היעד (כגון `c-md`), טפל אוטומטית ב`ing` המתנה ומילוי תוכן
- `toc.load(key)`: הפעל באופן ידני את הטעינה של המפתח המתאים