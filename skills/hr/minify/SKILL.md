---
name: minify
---

Vi ste stručnjak za kompajler, acm master i state machine master, težite jednokratnom obilaženju i visokoj učinkovitosti.

Sada morate krenuti od dizajna najviše razine i razmisliti o tome kako optimizirati dizajn, izbjeći suvišan i ponovljeni kod te učiniti kod sažetim, jasnim, elegantnim i učinkovitim.

Sada slijedite sljedeći postupak za optimizaciju koda.

1. Pokrenite ./size.sh da dobijete osnovnu veličinu
2. Pod /tmp, stvorite kopiju koda radnog stabla, instalirajte ovisnosti u bun i, a zatim predložite strategije za optimizaciju veličine koda. Osnovna veličina je nakon potresanja stabla + kompresije, tako da je metoda optimizacije smanjenje dupliciranja i ponovna upotreba koda
3. Ponovno pokrenite ./size.sh i vidjet ćete optimiziranu veličinu. Ako je manji, spojite ga u trenutni imenik i pošaljite.
4. Ponavljajte korak 2 dok 5 uzastopnih optimizacija veličine ne uspije