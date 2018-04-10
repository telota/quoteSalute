xquery version "3.0";
(: FLOWR for let order where return :)

declare namespace tei="http://www.tei-c.org/ns/1.0";
declare namespace output="http://www.w3.org/2010/xslt-xquery-serialization";

declare option exist:serialize "media-type=application/json";

declare variable $type := request:get-parameter('type', ());
declare variable $sender := request:get-parameter('sender', ());
declare variable $receiver := request:get-parameter('receiver', ());

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



let $data := "collection('/db/apps/salute-demo/data')//tei:cit"

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

(:
let $filter-receiver :=
    if ($receiver)
    then '[matches(.//@ana, concat("#", $receiver))]'
    else ()
    :)


let $query := ($data||$filter-type||$filter-sender||$filter-receiver)


(: let $urlbase := :)

let $listelements :=
    element root {
        for $x in util:eval($query)
            let $quote := element quote {normalize-space(string-join(local:clean-up($x/tei:quote))) }
            let $edition := element edition { normalize-space($x//tei:edition) }
            let $title := element title { normalize-space($x//tei:title) }
            let $urlbase := $x/parent::tei:div/@xml:base/data(.)
            let $urltail := $x//tei:bibl/@corresp
            let $url := element url { concat($urlbase, $urltail) } (:let $url := $x//tei:bibl/tei:ref/@target:)
        return
        element cit {$quote,$edition,$title, $url }
    }

let $max := 
    if ($listelements//cit)
    then count($listelements//cit)
    else 1
    
let $random := util:random($max)

let $randomcit :=
    for $cit in $listelements//cit[position()=$random]
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
