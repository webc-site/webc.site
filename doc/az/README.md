# WebC.site

## Bu nədir?

### Bu, yerli veb komponent kitabxanasıdır

[veb komponentləri](https://developer.mozilla.org/docs/Web/API/Web_components) əsasında işlənib hazırlanmışdır, o, iş vaxtından müstəqildir və bütün çərçivələr üçün uyğundur.

Ölçü üçün son dərəcə optimallaşdırılmışdır (oxşar məşhur kitabxanaların onda biri ölçüsü).

75 dili dəstəkləyir. Onlayn istifadə üçün birbaşa js və css idxal edə və ya ikinci dərəcəli inkişaf üçün lazım olduqda layihənizə komponentlər əlavə edə bilərsiniz.

<img src="https://i-01.eu.org/20260604114250265.avif" width="400">

### Bu komponent kitabxana inkişaf çərçivəsidir

Bu, [hekayə kitabı](https://storybook.js.org) statik blog versiyasıdır.

Komponentlər kitabxanasının yaradılması şirkətin daxili inkişaf effektivliyini artıra və texniki dairədə brend imici qura bilər.

[webc.site](https://github.com/webc-site/webc.site) əsasında komandalar asanlıqla öz komponent kitabxanalarını yarada və onları [github page](https://pages.github.com), [cloudflare page](https://pages.cloudflare.com) və s.-də dərc edə bilərlər. Dərc edilmiş komponentlər [codepen.io](https://codepen.io) və [jsfiddle](https://jsfiddle.net) üzərindən onlayn olaraq sazlana bilər.

Eyni zamanda, daxili tərcümə çərçivəsi komponentlərin və sənədlərin beynəlmiləlləşdirilməsini tez bir zamanda həyata keçirə bilər ki, məhsul auditoriyanız artıq dillə bağlı qalmasın.

### Bu, süni intellekt dövrü üçün qabaqcıl inkişafın yeni paradiqmasıdır

Çərçivə daxili `.agents/skills`dir və süni intellektə ən yaxşı təcrübələrə uyğun olaraq bir kliklə yeni komponentlər hazırlamağa kömək etmək imkanı verir.

<img src="https://i-01.eu.org/20260604121408079.avif" width="400">

İcazə verin ki, front-end kodu davamlı olmayan zibil dağından atmosfer proqramlaşdırmasından uzun müddət ərzində saxlanıla və təkrarlanan təkamül edilə bilən standart hissəyə çevrilsin.

Süni intellektin köməyi ilə inkişafın xüsusiyyətlərini nəzərə alaraq, biz yeni bir ön inkişaf paradiqmasını təklif etdik və dizayn etdik:

1. **Hər şey veb komponentidir**
2. **Komponent arxa məlumat keçidindən müstəqil olmalıdır və məlumat interfeysi geri çağırış funksiyası kimi təqdim olunur**

Bu yolla, süni intellekt saxta məlumatlar yarada və demo səhifəsində komponentlərin müxtəlif vəziyyətlərini göstərə bilər.

[webc.site komponent çərçivəsi](https://github.com/webc-site/webc.site) ilə birlikdə komponent inkişafı və məlumat interfeysinin ayrılması Digər əsas xüsusiyyət:

**Hər bir komponent müstəqil olaraq inkişaf serverinə başlaya və demo səhifəsində inkişaf etdirə və sazlaya bilər**.

<img src="https://i-01.eu.org/webcSiteDemo.svg" width="400">
<img src="https://i-01.eu.org/20260604112614499.avif" width="400">

Bu, hər bir komponentin inkişafı və sazlanması üçün ön uç linkini `0` səviyyəsinə endirir.

Bu yolla, süni intellektlə dəstəklənən inkişaf alətləri ([Claude Code](https://code.claude.com), [OpenAI Codex](https://openai.com), [Google Antigravity](https://antigravity.google), [Kursor](https://cursor.com), [Windsurf](https://windsurf.com), [Devin](https://devin.ai), [OpenHands](https://github.com/All-Hands-AI/OpenHands) və s. qarışıq amillər (backend məlumatları, giriş statusu, marşrut marşrutu və s.).

Əgər süni intellektə nəzarət etmək və xərcləri azaltmaq və səmərəliliyi artırmaq istəyirsinizsə, hər bir komponentin inkişafını və sazlama mühitini minimuma endirən yeni paradiqmaya ehtiyacınız var.

---

# Mən hələ TODO yazmağa başlamamışam

### Veb komponentlər kitabxanası

#### Son ölçü optimallaşdırması

Məsələn, virtual sürüşmə çubuğu komponenti üçün məşhur [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) skriptinin ölçüsünü və `gz`-dən sonra üslubunu aşağıdakı cədvəldə göstərildiyi kimi müqayisə edin:

|                   |   js    |  css   |     total      |
| :---------------- | :-----: | :----: | :------------: |
| overlayscrollbars | 14520 B | 2584 B | 17104 B (9.1X) |
| Scroll            | 1159 B  | 721 B  |   ⭐ 1880 B    |

`webc.site` virtual sürüşdürmə çubuğu komponenti yalnız `OverlayScrollbars`-nin `10%`-dir.

#### İcra zamanı müstəqil

[Web Components](https://developer.mozilla.org/docs/Web/API/Web_components) standartları əsasında qurulmuş webc.site komponent kitabxanası təbii olaraq işləmə müddətinə aqnostikdir. İstər React, Vue, Angular, Svelte, istərsə də ənənəvi təmiz HTML/JS layihəsindən istifadə etməyinizdən asılı olmayaraq, bütün komponentlər konkret çərçivə üçün ikinci dərəcəli qablaşdırmaya ehtiyac olmadan birbaşa brauzerdə yerli HTML teqləri kimi işləyə bilər.

##### Shadcn ilə müqayisə

[shadcn/ui](https://ui.shadcn.com) komponent kodunu birbaşa öz layihənizə köçürməyinizi tələb edən kod paylama rejimini qəbul edir. O, React ekosisteminə və xüsusi tikinti alətləri zəncirlərinə (məsələn, Tailwind CSS) möhkəm bağlıdır və çərçivələr arasında istifadə oluna bilməz. Layihə mühəndisliyi konfiqurasiyası üçün də müəyyən tələblərə malikdir.

Və `webc.site` komponenti:
- **Çərçivələr arası universal**: Bir dəfə yazın və birbaşa təqdim oluna və istənilən front-end çərçivədə işlədilə bilər (hətta çərçivəsiz mühit).
- **Ətraf mühitin sıfır asılılığı**: Heç bir xüsusi qablaşdırma alətləri və ya CSS preprosessorları tələb olunmur, sadəcə tərtib edilmiş statik faylları idxal edin və o, qutudan kənarda istifadə oluna bilər.

## Avtomatlaşdırılmış inkişaf və sazlama

### Yerli inkişaf və sazlama

Hər bir veb səhifə komponenti minimal inkişaf və sazlama mühitini təmin edərək inkişaf serverinin müstəqil şəkildə işə salınmasını dəstəkləyir:

- **Yeni komponent yaradın**: Komponent inkişaf skeletini (demo səhifəsi və beynəlmiləlləşdirmə konfiqurasiyası daxil olmaqla) cəld yaratmaq üçün `./sh/new.js [css|js] [komponent adı]`-nı işə salın.
- **Müstəqil sazlama**: Vite inkişaf serverini işə salmaq və avtomatik olaraq brauzerdə komponentin demo səhifəsini açmaq üçün `./dev.js [komponent adı]` (və ya birbaşa `./dev.js` çalıştırın) işə salın. Komponent isti yeniləməni (HMR) dəstəkləyir. İnkişaf və məlumat bağlantıları ayrıldığından, tam avtomatik inkişafa və brauzerin sazlanmasına kömək etmək üçün AI (məsələn, Claude Code, Google Antigravity və s.) üçün çox uyğun olan sıfır inkişaf cəbhəsi bağlantısı mövcuddur.

### Komponentlər kitabxanasını dərc edin

#### webc dist

Qablaşdırma və nəşr prosesi yüksək səviyyədə avtomatlaşdırılıb:
- **Statik resurs qablaşdırması**: `./sh/dist.js` işə salınması (yəni `webc dist` tapşırığını yerinə yetirmək) `src/` altında bütün veb-səhifə komponentlərini avtomatik skan edə, kompilyasiya edə, sıxışdıra və `dist/` kataloquna çıxara bilər. Bu kataloq istehsalın paylanması üçün JS/CSS fayllarını, GitHub Səhifələrində və ya Cloudflare Səhifələrində yerləşdirməyə hazır olan demo saytını və avtomatik olaraq yaradılan `_redirects` və `404.html` marşrut fayllarını ehtiva edir.
- **NPM Publish**: `./sh/npmDist.js` işə salın, skript komponentdən asılılıqları avtomatik idarə edəcək, paket versiya nömrəsini artıracaq və komponent kitabxanasını NPM-də dərc etmək üçün qablaşdırma tamamlandıqdan sonra bir kliklə `npm publish` yerinə yetirəcək.

### Platforma tərcüməyə cavabdehdir

Çərçivə daxili avtomatlaşdırılmış tərcümə proseslərinə malikdir:
1. Layihənin kök kataloqunda `tran.yml`-də tərcümə qaydalarını (mənbə dili, hədəf dil və tərcümə ediləcək kataloq kimi) konfiqurasiya edin.
2. Kodunuzda birdən çox dili kodlaşdırmadan komponentlərdə və ya sənədlərdə yer tutuculardan istifadə edin.
3. `./sh/tran.js` işə salın və tərcümə mühərriki avtomatik olaraq mətni çıxaracaq və WebC tərcümə xidmətini emal üçün çağıracaq, avtomatik olaraq müxtəlif dillərdə YAML tərcümə qeydlərini və README sənədlərini yaradacaq.

### mühit dəyişənləri

Avtomatlaşdırılmış tərcüməni həyata keçirərkən, tərcümə API-yə girişə icazə vermək üçün aşağıdakı mühit dəyişənlərini konfiqurasiya etməlisiniz:

- **`WEBC_SITE_TOKEN`** (və ya **`WEBC_TOKEN`**): `webc.site` Avtomatlaşdırılmış Tərcümə API-sinə daxil olmaq üçün istifadə edilən doğrulama açarı. Mühit dəyişəni kimi yeridilə və ya yerli istifadəçinin ev kataloqunda `~/.config/webc.site.yml` konfiqurasiya faylına `token` yazıla bilər.