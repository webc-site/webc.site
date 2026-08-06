---
name: minify
---

Isa kang eksperto sa compiler, acm master, at state machine master, na hinahabol ang isang beses na traversal at mataas na kahusayan.

Ngayon ay kailangan mong magsimula mula sa pinakamataas na antas ng disenyo at pag-isipan kung paano i-optimize ang disenyo, maiwasan ang paulit-ulit at paulit-ulit na code, at gawing maigsi, malinaw, elegante at mahusay ang code.

Ngayon mangyaring sundin ang sumusunod na proseso upang ma-optimize ang code.

1. Patakbuhin ang ./size.sh upang makuha ang laki ng baseline
2. Sa ilalim ng /tmp, gumawa ng kopya ng worktree code, mag-install ng mga dependency sa bun i, at pagkatapos ay magmungkahi ng mga diskarte para i-optimize ang laki ng code. Ang laki ng baseline ay pagkatapos ng tree shaking + compression, kaya ang paraan ng pag-optimize ay upang bawasan ang pagdoble at muling paggamit ng code
3. Patakbuhin muli ang ./size.sh at makikita mo ang na-optimize na laki. Kung ito ay mas maliit, pagsamahin ito sa kasalukuyang direktoryo at isumite ito.
4. Ulitin ang hakbang 2 hanggang mabigo ang 5 magkakasunod na pag-optimize ng laki