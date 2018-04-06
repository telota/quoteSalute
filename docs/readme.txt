DAS PROJEKT

saluteSig ist eine Webanwendung, die inspirierende Grußformeln für ihre Korrespondenz bietet. Enstanden in einem Studierendenprojekt der TELOTA Initiative, schöpft saluteSig aus aktuellen digitalen Briefeditionen und schafft so einen spielerischen Zugang in die Welt digitaler Briefe.

TEXTKORPUS

saluteSig wertet XML-Dateien im TEI-Format aus. Die Anwendung basiert auf einemlokalen und kuratierten Textkorpus. Für jede Editionen liegt eine XML-Datei vor. Diese beinhaltet eine Liste, bestehend aus den Grußformeln sowie dazugehörige bibliographische Angaben. Bei der Kuratierung wurden die Daten (1) von Wiederholungen, unpassenden Inhalten und sehr kurzen Grußformeln bereinigt und (2) mit einem eigenen Tagging versehen, um ein späteres Filtern der Grußformlen zu ermöglichen. Die Grußformeln wurden nach zwei Kriterien getaggt. Zum einen wurde festgestellt, ob die Grußformel inhaltlich eher formal oder freundschaftlich anmutet. Zum anderen wurde verzeichnet, ob das Geschlecht von Sender*in oder Empfänger*in aus dem Sinnzusammenhang deutlich wird. Dieses tagging ermöglicht die spätere Filterfunktion und macht, zusammen mit der o.g. Bereinigung, eine Kuratierung der Daten notwendig.

Derzeit werden folgende Briefeditionen verwendet:

edition humboldt digital (http://edition-humboldt.de/index.xql)
Jean Paul (noch nicht online)
August Wilhelm Ifflands dramaturgisches und administratives Archiv (http://iffland.bbaw.de/index.xql)
Berlin-Brandenburgische Akademie der Wissenschaften (Hg.): Wilhelm von Humboldt - Spachwissenschaftliche Korrepondenz (https://xmldev.bbaw.de/expath/apps/WvH/Briefe?section=all)
Aloys Hirt – Briefwechsel 1787–1837 (http://aloys-hirt.bbaw.de/index.xql)
Lebenswelten, Erfahrungsräume und politische Horizonte der ostpreußischen Adelsfamilie Lehndorff vom 18. bis in das 20.Jahrhundert (http://lebenswelten-lehndorff.bbaw.de/index.xql)

MITMACHEN

Sie arbeiten an einer Digitalen Briefedition und finden die Grußformeln Ihrer Korrespondenz sollten auch dabei sein? Gerne möchten wir den saluteSig-Bestand erweitern. Jede digitale Briefedition, die auf dem TEI-Format basiert, kann partizipieren. Mehr Infos finden Sie in der Dokumentation (https://github.com/telota/salutesig/blob/master/docs/documentation-de.xml).

TECHNOLOGIEN
Das Generieren der Grußformeln wurde in einer Webapplikation umgesetzt. Diese wurde mit HTML, CSS und Javascript realisiert. Zusätzlich benutzen wir das Front-End-Framework VueJS für die Verarbeitung der Daten und für den dynamischen Austausch von HTML-Elementen und ziehen Bootstrap zur einheitlichen Darstellung auf der Website zur Hilfe. Als Datenbank nutzen wir eXist db, die Datenbankabfrage erfolgt mittels XQuery und die Response-Daten werden im JSON-Format ausgegeben.
