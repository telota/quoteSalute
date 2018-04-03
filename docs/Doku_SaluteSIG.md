![Telota Logo](https://pbs.twimg.com/profile_images/661615298462765056/Ga3OHVTz_400x400.png "Telota Logo")

# SaluteSig TechSprint Dokumentation

*(19.03-23.03.2018)*

----------

## Montag

### Textkorpus erstellen, Daten holen

----------

**XQuery Abfrage und Transformation in TEI XML Dateien:** 1 pro Vorhaben

- [x] Jean Paul
- [x] Iffland
- [x] Humboldt
- [x] Lehndorff

**Noch ausstehend:**

- [x] Hirth
- [x] AvHR
- [x] MEGA

----------

## Dienstag

### Textkorpus bearbeiten, bereinigen

----------

```
<quote type="[Typ]" n="[Beziehung]"></>
```

- **Typ**
	- formal,
	- informal
	
- **Beziehung**
	- m-m, m-f, m-n,
	- f-f, f-m, f-n,
	- n-n, n-m, n-f

1. Quotes taggen
1. Unpassendes, sexistisches, rasistisches raus
1. Dopplungen weitestgehend raus
1. Zu kurzes oder sinnloses raus

----------

## Mittwoch

### Webframe bauen

----------


#### 1. Webansicht/Ausgabe beginnen

- JQuery Viewer Einführung von Oli
- Rumbasteln

**Snippit**

- Abfrage (vielleicht am Donnerstag mit Stefan)
- refresh/random button
- Copy button (Quote + Link zur Edition)
- Filer: Gender, NSFW
- Quote
- Quelle: Edition + Zitationsangabe (von, an, Datum)

**Geschafft**

- [x] - HTML Skelett gebaut
- [x] - Einbinden von VueJS (mit Dummy-Daten)
- [x] - Erstellung eiegener Daten-Struktur
- [x] - dynamisches Überprüfen von gesetzten Filtern

#### 2. Wenn möglich: Textkorpus restliche (Hirth, AvHR) bearbeiten

----------

## Donnerstag

### Abfrage anbinden, alles zum Laufen bringen

----------

- Datenbankanbindung: XQuery Abfrage, Einführung mit Stefan, danach rumbasteln
- Korpus nachbearbeiten: Attributvergabe für Filter anpassen. Für Sender- und Empfändgergeschlecht eigenes Kürzel #s-f #r-m
- JS Objekt aus gelieferten Daten erstellen (die Felder mit den "passenden" Daten befüllen)  

[//]: <> (was war hier mit "Daten in JS bearbeiten" gemeint?)

----------

## Freitag
### Präsentation
----------

- XQuery Abfrage: Filter
- Copy button
- auf correspSearch Webseite einbinden

## Offen geblieben
--------
- Funktionabilität:
	- URL zu avhr: da stimmt noch was nicht (mit dem Encoding)
	- URL zu Jean Paul: DE noch nicht online...
	- Filterfunktion prüfen

- Usability/CSS:
	- Refresh button zu klein und zu weit unten positioniert (Überlegung eines zweiten "go buttons" )
	- Filter immer offen, nicht intuitiv, dass man dann nochmal auf den refresh button klicken muss
	- Farbliche Hervorhebungen? 
	- Zitat hervorheben durch farbigen Hintergrund?

- Erklärungstext fehlt noch
- Was tun, wenn andere Vorhaben partizipieren möchten? Wie bieten wir das an? Welche Form von XML Daten brauchen wir von denen? 
- Name "SaluteSig" ist irreführend. Was könnten alternativen sein? 
	- correspSalute
	- saluteSearch
	- SaluteFinder
	- SaluteAdd
	- Salute
	- schönerGrüßen
	- Grußgenerator
	- salutecrate
	- ...
	- Wörter, die irgendwas damit zu tun haben: create, find, connect, search, correspond, write, goodbye, greet, catch
- Git repo noch privat
- Infobutton leer (brauchen wir den überhaupt?)
- Doku vervollständigen (mehr technische Details!)



## Beschreibungstext
----------

- studentisches Projekt der Telota Initiative
- kuratierter Datenkorpus
- TEI Standard
- Partizipationsmöglichkeiten
- bisher verwendete Editionen

### Grußformeln suchen

Salute ist eine Anwendung, die inspirierende Grußformeln für ihre Korrespondenz bietet. Enstanden in einem studentischen Projekt der TELOTA Initiative, schöpft Salute aus aktuellen digitalen Briefeditionen und schafft so einen spielerischen Zugang in die Welt digitaler Briefe. 

Salute wertet Dateien im TEI-Format aus. Die Anwendung basiert derzeit auf einem lokalen und kuratierten Textkorpus.

### Mitmachen

Sie arbeiten an einer Digitalen Briefedition und finden die Grußformeln dieser Briefe sollen auch dabei sein? 

Gerne möchten wir den Bestand erweitern. Jede digitale Briefedition, die auf dem TEI-Format basiert, kann partizipieren. Mehr Infos hier.


### Technologien



### Schnittstelle


