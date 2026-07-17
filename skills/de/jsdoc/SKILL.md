---
name: jsdoc
description: src/js-Dokument automatisch generiert
---

## Schritte ausführen

1. Führen Sie `./sh/jsDoc.js` aus, um Funktionen mit fehlender Dokumentation anzuzeigen (wenn keine Ausgabe vorhanden ist, muss diese nicht hinzugefügt werden).
2. Lesen Sie gemäß der Liste der Ausgabedateien die vorhandenen Dokumente und Codes einzeln und vervollständigen Sie sie (verarbeiten Sie sie der Reihe nach und unterbrechen Sie sie einzeln).

## Dokumentationsanforderungen

Wenn der Export eine Funktion ist, schreiben Sie
- Parameter und Rückgabewerte:
  - Schreiben Sie entsprechende Beschreibungen nur, wenn Parameter oder Rückgabewerte vorhanden sind, andernfalls schreiben Sie diese nicht.
  - Parameter werden mithilfe ungeordneter Listen eingeführt.
  - Wenn der Rückgabewert ein Array ist, verwenden Sie eine ungeordnete Liste, um ihn einzeln zu beschreiben (andernfalls schreiben Sie direkt `Rückgabewert: Beschreibung`, nur eine Zeile).
  - Wenn es sich bei den Parametern oder dem Rückgabewert um Funktionen handelt, verwenden Sie untergeordnete Listen, um die Parameter und Rückgabewerte zu beschreiben (falls keine, schreiben Sie sie nicht).

Wenn es sich bei dem Export um eine Konstante handelt, geben Sie das ein, was es ist, nur eine Zeile

- Verwenden Sie eine prägnante, professionelle Sprache und vermeiden Sie die Verwendung von Adjektiven.
- Überarbeiten Sie ein vorhandenes Dokument, schreiben Sie es nicht vollständig neu

## Formatvorlage

Schreiben Sie jeden Namen nur einmal, um Doppelungen zu vermeiden, und versuchen Sie, ihn klar in einer Zeile auszudrücken. Das Referenzformat ist wie folgt

```
# Dateiname

## Funktionsname (Parameter)

Nutzungsbeschreibung

Parameter:
- `xx`: Zweck
  - Parameter
    - `a`: Zweck
  - Rückgabewert: Beschreibung

Rückgabewert: Beschreibung
```