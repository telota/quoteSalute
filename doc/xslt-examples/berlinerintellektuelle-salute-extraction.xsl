<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xpath-default-namespace="http://www.tei-c.org/ns/1.0" exclude-result-prefixes="xs" version="2.0">
    <!-- XSLT-Skript anzuwenden auf berlinerintellektuelle-xml;
        Author: Frederike Neuber -->
    <xsl:output omit-xml-declaration="yes" indent="yes"/>
    <xsl:template match="/">
        <TEI xmlns="http://www.tei-c.org/ns/1.0">
            <teiHeader>
                <fileDesc>
                    <titleStmt>
                        <title>&lt;salute&gt;-elements of "Briefe und Texte aus dem intellektuellen
                            Berlin um 1800"</title>
                        <respStmt>
                            <resp>
                                <note>Collection, curation and processing of data</note>
                            </resp>
                            <persName ref="http://d-nb.info/gnd/1034877364">
                                <surname>Dumont</surname>
                                <forename>Stefan</forename>
                            </persName>
                            <persName>
                                <surname>Klappenbach</surname>
                                <forename>Lou</forename>
                            </persName>
                            <persName>
                                <surname>Kullick</surname>
                                <forename>Marvin</forename>
                            </persName>
                            <persName ref="http://d-nb.info/gnd/1121508855">
                                <surname>Neuber</surname>
                                <forename>Frederike</forename>
                            </persName>
                            <persName>
                                <surname>Philipp</surname>
                                <forename>Luisa</forename>
                            </persName>
                            <persName>
                                <surname>Pohl</surname>
                                <forename>Oliver</forename>
                            </persName>
                        </respStmt>
                        <respStmt>
                            <resp>
                                <note>Hosting and provision of data and application</note>
                            </resp>
                            <orgName ref="http://www.bbaw.de/telota">TELOTA - The Electronic Life of
                                the Academy</orgName>
                        </respStmt>
                    </titleStmt>
                    <publicationStmt>
                        <publisher>
                            <orgName>Berlin-Brandenburg Academy of Sciences and Humanities</orgName>
                            <orgName>TELOTA</orgName>
                            <email>telota@bbaw.de</email>
                            <address>
                                <addrLine>Jägerstr. 22/23, 10117 Berlin</addrLine>
                                <country>Germany</country>
                            </address>
                        </publisher>
                        <pubPlace>Berlin</pubPlace>
                        <date>2018-04-18</date>
                        <availability>
                            <licence target="https://creativecommons.org/licenses/by/4.0/">
                                <p>Distributed under the Creative Commons Attribution - 4.0
                                    International license (CC BY 4.0)</p>
                            </licence>
                        </availability>
                    </publicationStmt>
                    <notesStmt>
                        <note type="data_integration">The data was taken over from <ref
                                target="www.berliner-intellektuelle.eu/"
                                >www.berliner-intellektuelle.eu/</ref> on 12.4.2018. Later published
                            contents of the edition may be added in the future.</note>
                        <note type="selection">For quoteSalute, those salutes were selected that are
                            relevant for the application in terms of content, form and length. More
                            information on selection and tagging can be found in the <ref
                                target="https://correspsearch.net/salute/dokumentation"
                                >documentation of the project</ref>.</note>
                    </notesStmt>
                    <sourceDesc>
                        <bibl>„Briefe und Texte aus dem intellektuellen Berlin um 1800“. Hrsg. v.
                            Anne Baillot. Berlin: Humboldt-Universität zu Berlin.</bibl>
                    </sourceDesc>
                </fileDesc>
                <encodingDesc>
                    <classDecl>
                        <taxonomy>
                            <category>
                                <catDesc>Type</catDesc>
                                <category xml:id="formal">
                                    <catDesc>formal</catDesc>
                                </category>
                                <category xml:id="informal">
                                    <catDesc>informal</catDesc>
                                </category>
                            </category>
                            <category>
                                <catDesc>Relation</catDesc>
                                <category xml:id="s-m">
                                    <catDesc>content implies male sender</catDesc>
                                </category>
                                <category xml:id="s-f">
                                    <catDesc>content implies female sender</catDesc>
                                </category>
                                <category xml:id="s-n">
                                    <catDesc>content implies neutral sender</catDesc>
                                </category>
                                <category xml:id="r-f">
                                    <catDesc>content implies female receiver</catDesc>
                                </category>
                                <category xml:id="r-m">
                                    <catDesc>content implies male receiver</catDesc>
                                </category>
                                <category xml:id="r-n">
                                    <catDesc>content implies neutral receiver</catDesc>
                                </category>
                            </category>
                        </taxonomy>
                    </classDecl>
                </encodingDesc>
            </teiHeader>
            <text>
                <body>
                    <div type="include">
                        <!-- Wählt aus der collection überhaupt nur die Dateien aus, die "salute" beinhalten -->
                        <xsl:for-each
                            select="collection('berlinerintellektuelle-xml')/TEI/text//closer/salute">
                            <cit>
                                <!-- Filter müssen sukzessive manuell ausgefüllt werden -->
                                <quote xml:lang="#" ana="#">
                                    <!-- kopiert Inhalt von "salute" samt Elemente -->
                                    <xsl:copy-of select="./node()"/>
                                </quote>
                                <bibl>
                                    <title type="edition">
                                        <!-- Titel der Edition -->
                                        <xsl:value-of
                                            select="preceding::teiHeader/fileDesc/seriesStmt/title[@type = 'main']"
                                        />
                                    </title>
                                    <title type="letter">
                                        <!-- Titel des Briefes -->
                                        <xsl:value-of
                                            select="preceding::teiHeader/fileDesc/titleStmt/title[@xml:lang = 'de']"
                                        />
                                    </title>
                                    <ref>
                                        <xsl:attribute name="target">
                                            <!-- URL der Briefe, setzt sich zusammen aus base-Url "http://www.berliner-intellektuelle.eu/manuscript?" und dem Dateinamen -->
                                            <xsl:value-of
                                                select="concat('http://www.berliner-intellektuelle.eu/manuscript?', substring-before(substring-after(base-uri(), 'berlinerintellektuelle-xml/'), '.xml'))"
                                            />
                                        </xsl:attribute>
                                    </ref>
                                </bibl>
                            </cit>
                        </xsl:for-each>
                    </div>
                </body>
            </text>
        </TEI>
    </xsl:template>

</xsl:stylesheet>
