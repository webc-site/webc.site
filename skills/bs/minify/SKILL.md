---
name: minify
---

Vi ste stručnjak za kompajler, acm master i master stroja, težite jednokratnom obilasku i visokoj efikasnosti.

Sada morate krenuti od dizajna najviše razine i razmisliti o tome kako optimizirati dizajn, izbjeći suvišan i ponovljeni kod i učiniti kod sažetim, jasnim, elegantnim i efikasnim.

Sada slijedite sljedeći proces za optimizaciju koda.

1. Pokrenite ./size.sh da dobijete osnovnu veličinu
2. Pod /tmp, kreirajte kopiju koda radnog stabla, instalirajte zavisnosti u bun i, a zatim predložite strategije za optimizaciju veličine koda. Osnovna veličina je nakon protresanja stabla + kompresije, tako da je metoda optimizacije smanjenje dupliciranja i ponovne upotrebe koda
3. Ponovo pokrenite ./size.sh i možete vidjeti optimiziranu veličinu. Ako je manji, spojite ga u trenutni direktorij i pošaljite ga.
4. Ponavljajte korak 2 dok 5 uzastopnih optimizacija veličine ne uspije