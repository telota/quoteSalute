xquery version "3.0";
(: FLOWR for let order where return :)

declare namespace tei="http://www.tei-c.org/ns/1.0";
declare namespace output="http://www.w3.org/2010/xslt-xquery-serialization";

declare option exist:serialize "media-type=application/json";

declare variable $type := request:get-parameter('type', ());
declare variable $sender := request:get-parameter('sender', ());
declare variable $receiver := request:get-parameter('receiver', ());
declare variable $language := request:get-parameter('language', ());

declare function local:clean-up($nodes as node()*) as xs:string* {
    for $node in $nodes
    return
        typeswitch($node)
            case element(tei:lb)|element(tei:abbr)|element(tei:reg)|element(tei:note)
                return
                ()
            case element()
                return
                local:clean-up($node/node())
            case text()
                return
                $node
            default
                return
                local:clean-up($node/node())
    };



let $data := "/db/projects/correspSearch/web/salute/data"

let $language-contains :=
    for $item in tokenize($language, 'X')
        return concat('contains(.//@xml:lang, "', $item, '")')
        

let $filter-language :=
     if (count($language) >= 1) then
        let $containQuery := string-join($language-contains, ' or ')
        return concat('[', $containQuery, ']')
     else () 



let $type-contains :=
    for $item in tokenize($type, 'X')
        let $contain := concat("#", $item)
        return concat('contains(.//@ana, "', $contain, '")')
        

let $filter-type :=
     if (count($type) >= 1) then
        let $containQuery := string-join($type-contains, ' or ')
        return concat('[', $containQuery, ']')
     else () 
     

let $sender-contains :=
    for $item in tokenize($sender, 'X')
        let $contain := concat("#", $item)
        return concat('contains(.//@ana, "', $contain, '")')
        

let $filter-sender :=
     if (count($sender) >= 1) then
        let $containQuery := string-join($sender-contains, ' or ')
        return concat('[', $containQuery, ']')
     else () 
     
let $receiver-contains :=
    for $item in tokenize($receiver, 'X')
        let $contain := concat("#", $item)
        return concat('contains(.//@ana, "', $contain, '")')
        

let $filter-receiver :=
     if (count($receiver) >= 1) then
        let $containQuery := string-join($receiver-contains, ' or ')
        return concat('[', $containQuery, ']')
     else () 


let $query := ('$y//tei:cit'||$filter-type||$filter-sender||$filter-receiver||$filter-language)

let $listelements :=
    element root {
        for $y in collection($data)//tei:TEI
        return
        for $x in util:eval($query)
            let $quote := element quote {normalize-space(string-join(local:clean-up($x/tei:quote))) }
            let $edition := element edition { normalize-space($x//tei:title[@type='edition']) }
            let $title := element title { normalize-space($x//tei:title[@type='letter']) }
            let $language := element language { normalize-space($x//tei:quote/@xml:lang) }
            let $url := element url { $x//tei:bibl/tei:ref/@target/data(.) }
            let $licence := element licence { $y//tei:licence/@target/data(.) }
        return
        element cit {$quote,$edition,$title,$url,$language,$licence}
    }

let $random := util:random(count($listelements//cit))

let $cleanRandom :=
    if ($random >= 1)
    then $random
    else 1
   
let $randomcit :=
    for $cit in $listelements//cit[position()=$cleanRandom]
    return 
    $cit
    
    
let $params :=
<output:serialization-parameters
        xmlns:output="http://www.w3.org/2010/xslt-xquery-serialization">
    <output:method value="json"/>
    <output:media-type value="application/json"/>
   <output:json-ignore-whitespace-text-nodes value="yes"/>
</output:serialization-parameters>


return 
serialize($randomcit, $params)
