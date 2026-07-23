# مكون التنقل في الدليل

- تخطيط فليكس عمودي
- دعم القاموس لتمرير بيانات الدليل
- انقر لتحميل نص Markdown تلقائيًا
- تحميل عرض حالة الرسوم المتحركة جي

## استخدم العرض التوضيحي

```html
<c-toc></c-toc>

<script type="module">
import "webc.site/Toc.js";

const toc = document.querySelector("c-toc");
toc.mdUrl = (key, lang) => "/doc/" + lang + "/" + key + ".md";
toc.li = {
  "README": "WebC.site",
  "doc/use": "استخدام المكونات"
};
</script>
```

## واجهة

### الخصائص والأساليب

- `toc.li`: تعيين كائن دليل أو قائمة إدخالات، مثل `{ key: title }`
- `toc.mdUrl`: تعيين وظيفة إنشاء عنوان URL للطلب `(key, lang) => url` أو سلسلة البادئة
- `toc.target`: قم بتعيين أو ربط عقدة المحتوى الهدف (مثل `c-md`)، والتعامل تلقائيًا مع `ing` وتعبئة المحتوى.
- `toc.load(key)`: قم بتشغيل تحميل المفتاح المقابل يدويًا