 
# Über das Projekt

quoteSalute bietet inspirierende Grußformeln aus digitalen Briefeditionen für Ihre E-Mail-Korrespondenz. Die Anwendung schafft so einen spielerischen Zugang in die Welt historischer Korrespondenzen und ermöglicht die Einbindung wissenschaftlicher Editionsarbeit in Ihre Alltagskommunikation.

Entstanden ist quoteSalute durch ein studentisches Projekt von Lou Klappenbach, Marvin Kullick und Louisa Philipp, betreut von Stefan Dumont, Frederike Neuber und Oliver Pohl im Rahmen der Digital Humanities-Arbeitsgruppe [TELOTA](http://www.bbaw.de/telota) und dem Projekt [“correspSearch - Briefeditionen vernetzen”](http:/correspSearch.net?l=de) an der Berlin-Brandenburgischen Akademie der Wissenschaften.

# Grußformeln suchen

Auf der Webseite können Sie direkt nach Grußformeln stöbern. Wenn Ihnen die angezeigte Grußformel nicht gefällt, generieren Sie sich einfach mit Klick auf den orangenen Refresh-Button eine andere. Mit Filtern können Sie die Suchanfrage außerdem nach Ihren Wünschen einschränken. Haben Sie die passende Grußformel gefunden, können Sie sie mit dem Copy-Button ganz einfach kopieren. Öffnen Sie das E-Mail-Programm Ihrer Wahl und dann einfach in die nächste Mail einfügen und versenden!

# Textkorpus

Ein kuratiertes Korpus aus Grußformeln verschiedener digitaler Briefeditionen ist die Grundlage von quoteSalute. Dafür wurden <salute>-Elemente aus den TEI/XML-Daten der Editionen automatisiert extrahiert und für jede Edition eine TEI/XML-Datei erstellt, die eine Liste der Grußformeln sowie dazugehörige bibliographische Angaben enthält. Bei der Kuratierung wurden die Daten (1) von Wiederholungen, unpassenden Inhalten und sehr kurzen Grußformeln bereinigt und (2) mit einem eigenen Tagging versehen, um ein späteres Filtern der Grußformeln zu ermöglichen. Die Grußformeln wurden nach drei Kriterien getaggt. Zum einen wurde festgestellt, ob die Grußformel inhaltlich eher formal oder freundschaftlich anmutet. Zum anderen wurde verzeichnet, ob das Geschlecht von Sender*in oder Empfänger*in aus dem Sinnzusammenhang deutlich wird. Und schließlich wurde die jeweilige Sprache ausgezeichnet. Dieses Tagging ermöglicht die Filterfunktion und macht, zusammen mit der o.g. Bereinigung, eine Kuratierung der Daten notwendig.

Der Textkorpus wird derzeit von folgenden digitalen Briefeditionen gespeist: 

* Aloys Hirt – Briefwechsel 1787–1837, ed. by Uta Motschmann. Berlin-Brandenburgische Akademie der Wissenschaften, Berlin. URL: [https://aloys-hirt.bbaw.de](https://aloys-hirt.bbaw.de/)
* August Wilhelm Ifflands dramaturgisches und administratives Archiv. Digitale Edition hrsg. Von Klaus Gerlach. Berlin-Brandenburgische Akademie der Wissenschaften, Berlin. URL: [https://iffland.bbaw.de](http://iffland.bbaw.de/)
* Briefe und Texte aus dem intellektuellen Berlin um 1800“. Hrsg. v. Anne Baillot. Berlin: Humboldt-Universität zu Berlin. URL: [www.berliner-intellektuelle.eu/](http://www.berliner-intellektuelle.eu/)
* Briefwechsel Daniel Sanders im Deutschen Textarchiv, hg. v. Sebastian Göttel. Berlin 2017-2018. URL: [http://www.deutschestextarchiv.de/sanders-briefe](http://www.deutschestextarchiv.de/sanders-briefe)
* Carl-Maria-von-Weber-Gesamtausgabe, Digitale Edition. URL: [http://www.weber-gesamtausgabe.de](http://www.weber-gesamtausgabe.de)
* Digitale Edition der Briefe Erdmuthe Benignas von Reuß-Ebersdorf (1670-1732), hg. V. Prell, Martin u. Schmidt-Funke, Julia. Jena 2017 [Work in Progress]. URL: [http://erdmuthe.thulb.uni-jena.de](http://erdmuthe.thulb.uni-jena.de/)
* edition humboldt digital, hg. v. Ottmar Ette. Berlin-Brandenburgische Akademie der Wissenschaften, Berlin. URL: [http://edition-humboldt.de](http://edition-humboldt.de/)
* Jean Paul Briefwechsel, Digitale Edition (basierend auf der III. Abteilung der Historisch-kritischen Ausgabe, hg. v. Eduard Berend), Berlin-Brandenburgische Akademie der Wissenschaften, Berlin 2018 [[Veröffentlichung demnächst]](http://www.bbaw.de/forschung/jean_paul/).
* Lebenswelten, Erfahrungsräume und politische Horizonte der ostpreußischen Adelsfamilie Lehndorff vom 18. bis in das 20.Jahrhundert, ed. by Gaby Huch. Berlin-Brandenburgische Akademie der Wissenschaften, Berlin. URL: [https://lebenswelten-lehndorff.bbaw.de/](http://lebenswelten-lehndorff.bbaw.de/)
* Marx-Engels-Gesamtausgabe digital, hg. von der Internationalen Marx-Engels-Stiftung. Berlin-Brandenburgische Akademie der Wissenschaften, Berlin. URL: [http://megadigital.bbaw.de/](http://megadigital.bbaw.de/)
* Wilhelm von Humboldt - Sprachwissenschaftliche Korrespondenz. Hg. von der Berlin-Brandenburgische Akademie der Wissenschaften, Berlin. URL: [https://wvh-briefe.bbaw.de](https://wvh-briefe.bbaw.de/)

# Technologien

Das Generieren der Grußformeln wurde in einer Webapplikation umgesetzt. Diese wurde mit HTML, CSS und Javascript realisiert. Zusätzlich benutzen wir das Front-End-Framework VueJS für die Verarbeitung der Daten und für den dynamischen Austausch von HTML-Elementen und ziehen Bootstrap zur einheitlichen Darstellung auf der Website zur Hilfe. Als Datenbank nutzen wir eXist db, die Datenbankabfrage erfolgt mittels XQuery und die Response-Daten werden im JSON-Format ausgegeben.

# Mitmachen

Sie arbeiten an einer Digitalen Briefedition und finden die Grußformeln Ihrer Korrespondenz sollten auch in quoteSalute mit dabei sein? Gerne möchten wir unseren Datenbestand erweitern. Jede digitale Briefedition, die auf dem TEI-Format basiert, kommt grundsätzlich für eine Integration in quoteSalute in Frage.

Für eine Beteiligung Ihres Projektes benötigen wir eine TEI-XML-Datei mit den Grußformeln Ihrer digitalen Briefedition. Damit Sie diese möglichst einfach generieren können, stellen wir Ihnen eine [Beispieldatei](../examples/example.xml) und eine leere [template-Datei](../templates/template.xml) zur Verfügung. Ihre Datei sollte neben den Grußformeln auch zugehörige bibliographische Angaben (Titel der Edition, Titel des Briefs) und einen Link zur Webansicht des jeweiligen Briefes in der digitalen Edition enthalten. Technische Details zur Erstellung der quoteSalute-konformen TEI-XML-Datei entnehmen Sie bitte der untenstehenden Tabelle, in der die TEI-Elemente und ihre Funktion aufgelistet sind sowie den Kommentaren in der Template- und Beispieldatei.

# Filtern ermöglichen

Wenn Sie möchten, dass Ihre Grußformeln mit der Filterfunktion durchsuchbar sind, müssen Sie die Grußformeln inhaltlich prüfen. Dabei erhält jede Grußformel ein Attribut @ana, mit dem verzeichnet wird, ob (1) aus dem Sinnzusammenhang der Grußformel das Geschlecht von Sender*in und/oder Empfänger*in deutlich wird und ob (2) das Zitat formal oder freundschaftlich zu verstehen ist. Zudem sollten Sie die Sprache der Grußformel auszeichnen. Ansonsten werden Ihre Grußformeln nur dann angezeigt, wenn keine Filter gesetzt sind!

# Kodierung

Die folgenden Tabellen bieten detaillierte Informationen über die Struktur der benötigten TEI XML Datei, die für eine Einbindung Ihrer Grußformeln in quoteSalute erforderlich ist.

|XPath (relativ zu //teiHeader)|Beschreibung|Wert(e) und Beispiel(e)|
| --- | --- | --- |
|/fileDesc/titleStmt/title|Das ist der Titel der Datei. Er sollte den Namen Ihrer Edition enthalten.|E.g. `<salute>-elements of "edition humboldt digital"`|
|/fileDesc/titleStmt/respStmt|Spezifizierung der Verantwortlichkeit in <note>, das <respStmt>-Element sollte dann weitere <persName<-Elemente mit dem/n Namen der Ersteller*innen enthalten.|E.g. `Collection and curation of data`|
|/fileDesc/noteStmt/note/@type="data_integration"|Angabe, wann Daten aus der Edition entnommen wurden und dass eine Auswahl erfolgte.|E.g. `The data was taken over from <ref target="https://edition-humboldt.de"> https://edition-humboldt.de</ref> on 15.3.2018. Later published contents of the edition may be added in the future.`|
|/fileDesc/noteStmt/note/@type="selection"|Angabe, dass die Grußformeln aus der Edition kuratiert und aufbereitet wurden.|E.g. `For quoteSalute, those salutes were selected that are relevant for the application in terms of content, form and length.`|
|/fileDesc/sourceDesc/bibl|Hier ist die vollständige Quellenagabe der Edition einzufügen.|E.g. `edition humboldt digital, ed. by Ottmar Ette. Berlin-Brandenburgische Akademie der Wissenschaften, Berlin.`|
|/encodingDesc|Im teiHeader muss die vorgegebene encodingDescription eingefügt werden, das die möglichen Werte für @ana deklariert. Diese Taxonomy wird im Template vorgegeben und kann ohne Änderungen direkt übernommen werden. Weitere Informationen in untenstehender Tabelle.|E.g. ``|

|XPath (Relativ zu //text)|Beschreibung|Wert(e) und Beispiel(e)|
| --- | --- | --- |
|/div[@type="included"]|Dieses div besteht aus der Liste der Grußformeln und den zugehörigen bibliographischen Angaben.||
|/div[@type="excluded"]/listRef/ref/@target|Diese Liste besteht aus den Links der Briefe, deren Grußformeln nicht im Korpus aufgenommen werden sollen (z.B. weil sie zu kurz sind).|E.g. `"edition-humboldt.de/H0015080"`|
|/div/cit|Ein oder mehrere <cit>-Elemente, die die Grußformeln und die entsprechenden bibliographischen Angaben enthalten||
|/div/cit/quote|Die Grußformel als einfacher Text, ohne Anführungszeichen||
|/div/cit/quote/@ana|Hier wird das Tagging zu sprechendem und angesprochenem Geschlecht und Formalitätsgrad vorgenommen. Siehe dazu auch unten die Taxonomie.|E.g. `"#informal #s-f #r-m"`|
|/div/cit/quote/@xml:lang|Hier wird die Sprache der Grußformel verzeichnet nach [ISO-Code 639-3](https://iso639-3.sil.org/code_tables/639/data/d).|E.g. `"deu"`|
|/div/cit/title[@type="letter"]|Titel des Briefs aus der die Grußformel stammt, so wie er in der jeweiligen Edition angegeben ist.||
|/div/cit/title[@type="edition"]|Titel der Edition aus der die Grußformel stammt.||
|/div/cit/bibl/ref/@target|Das @target enthält die URL, die auf den Brief in der digitalen Edition verlinkt.|E.g. `"http://edition-humboldt.de/H0002656"`|

## Taxonomien

### Formalität

Je nachdem, ob die Grußformel eher formellen oder eher informellen Charakter hat, kann einer der folgenden Werte gesetzt werden:

|Wert|Beschreibung|
| --- | --- |
|#formal|Grußformel ist förmlich.|
|#informal|Grußformel ist freundschaftlich.|

### Geschlecht

Für das im Text abgebildete Geschlecht der Sprechenden bzw. Angesprochenen kann jeweils einer der folgenden Werte gesetzt werden:

|Wert|Beschreibung|
| --- | --- |
|#s-m|Grußformel impliziert einen männlichen Absender|
|#s-f|Grußformel impliziert eine weibliche Absenderin|
|#s-n|Grußformel impliziert kein Geschlecht der Abersenderin/des Absenders|
|#r-m|Grußformel impliziert einen männlichen Empfänger|
|#r-f|Grußformel impliziert eine weibliche Empfängerin|
|#r-n|Grußformel impliziert kein Geschlecht der Empfängerin/des Empfängers|

Ebenfalls eine Filtermöglichkeit stellt die Sprache dar, in der die Grußformel verfasst ist. Sie wird in `quote/@xml:id` notiert (siehe [oben](#note-language)).

### Beispiele für die Annotation

#### Beispiel 1

Grußformel ist in deutscher Sprache, von formellem Charakter und impliziert sowohl für Sender und Empfänger kein erkennbares Geschlecht.

`<quote xml:lang="deu" ana="#formal #s-n #r-n">Bis dahin empfiehlt sich Ihrem Wohlwollen hochachtungsvoll</quote>`

#### Beispiel 2

Grußformel ist in deutscher Sprache, von informellem Charakter und impliziert, dass der Sender männlich ist und für den Empfänger kein Geschlecht spezifiziert werden kann.

`<quote xml:lang="deu" ana="#informal #s-m #r-n">Ihr treuer Diener</quote>`

#### Beispiel 3

Grußformel ist in lateinischer Sprache, von formellem Charakter und impliziert, dass der Sender männlichen und die Empfängerin weiblichen Geschlechts ist.

`<quote xml:lang="lat" ana="#formal #s-m #r-f">Gottes Segen über Sie, meine teure Mutter</quote>`
