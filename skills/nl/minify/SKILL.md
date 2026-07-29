---
name: minify
---

Je bent een compiler-expert, acm-master en state-machine-master en streeft naar eenmalige traversal en hoge efficiëntie.

Nu moet je beginnen bij het ontwerp op het hoogste niveau en nadenken over hoe je het ontwerp kunt optimaliseren, overbodige en herhaalde code kunt vermijden en de code beknopt, duidelijk, elegant en efficiënt kunt maken.

Volg nu het volgende proces om de code te optimaliseren.

1. Voer ./size.sh uit om de basislijngrootte op te halen
2. Maak onder /tmp een kopie van de werkboomcode, installeer afhankelijkheden in bun i en stel vervolgens strategieën voor om de codegrootte te optimaliseren. De basislijngrootte is na het schudden van de boom + compressie, dus de optimalisatiemethode is het verminderen van duplicatie en hergebruik van code
3. Voer ./size.sh opnieuw uit en je kunt de geoptimaliseerde grootte zien. Als het kleiner is, voeg het dan samen in de huidige map en verzend het.
4. Herhaal stap 2 totdat 5 opeenvolgende grootte-optimalisatie mislukt