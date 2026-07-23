# hashActive.js

Hervorhebung von Navigationslinks basierend auf URL-Ankern und Scrollen im Ansichtsfenster

## default(link_li, cls)

Markieren Sie automatisch Navigationslinks, die dem aktuell sichtbaren Bereich entsprechen, basierend auf Änderungen der Seitenscrollposition und des URL-Ankerpunkts.

Parameter:
- `link_li`: Navigationslink-DOM-Elementliste
- `cls`: Name der aktiven CSS-Klasse, Standard `"A"`

Rückgabewert: Alle Listening-Bereinigungsfunktionen abbrechen