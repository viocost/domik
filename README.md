# Description

DOM-manipulating API in pure Javascriptn is verbose and pain to write in. JQuery partially solves
this problem, but who wants to have another bulky dependency? domik is a tiny toolbox of DOM-manipulating helpers written in pure
javacript, that allows creating complex DOM element structures in declarative
fashion with significantly less code. It uses concise clear API inspired by
JQuery, but manipulates native DOM elements without any extra wrappers.


<a id="org1e2110e"></a>

# Basic usage

Import the entire module:

    import * as util from "domik";


<a id="org370ada8"></a>

# API


<a id="org74f57b5"></a>

## bake(name, recipe)

Bakes DOM element according to recipe in a declarative fashion.

-   name (string) Required. Type of the created element.
-   recipe (object) Optional JSON object that describes created element.
    can have following properties:
    -   id - string id to be set
    -   classes - string or array. Single class or array of classes to be set
    -   attributes - object of attributes key vaule pairs. Any valid html attributes
        can be passed
    -   html - inner html
    -   text - inner text
    -   val  - value
    -   style - css string inline style for the element
    -   children - single DOM element or array of DOM elements that will be appended as children
    -   listeners - JSON object with keys - events types, vaules - event handlers


<a id="org583f7ed"></a>

### Code example:

```js
    import * as util from "domik";
    
    //baking simple span
    let mySpan = util.bake("span", {
        text: "I am simple span",
    });
    
    //baking complex DOM structure
    let wrapper = util.bake("div", {
        classes: "wrapper",
        style: "width: 100px; display: flex;",
        listeners: {
            "click": ()=>{ alert("Hello world") }
        },
        children: [
            mySpan,
            util.bake("div", {
                style: "border: 1px solid grey; border-radius: 5px",
                children: util.bake("h1", {
                    html: "Hello World",
                    style: "color: green",
                    listeners: {
                        "click": ()=>{ alert("Hello hello!") }
                    }
                })
            })
        ]
    })

```



<a id="org2a2b8f1"></a>

## $(selector)

-   selector (string) Query selector

This is alias for native document.querySelector method


<a id="org5936365"></a>

## $$(selector)

-   selector (string) Query selector

This is alias for native document.querySelectorAll method


<a id="org13c7ae8"></a>

## appendChiledren(parent, children)

-   parent (DOM element)
-   children (DOM element or array of DOM elements)

Appends child or all children to a parent


<a id="orgbb19217"></a>

## show(element)

-   element (string or DOM element)

Alias in jquery style for display: block


<a id="org31d0062"></a>

## hide(element)

-   element (string or DOM element)

Alias in jquery style for display: none


<a id="org4a64777"></a>

## flex(element)

-   element (string or DOM element)

Alias in jquery style for display: flex


<a id="org8d86a0e"></a>

## val(element, value)

-   element (string or DOM element)
-   value (string)

Sets value for given element


<a id="orgc9cabd3"></a>

## html(element, html)

-   element (string or DOM element)
-   html (string)

Sets innerHTML for given element


<a id="org5829d66"></a>

## text(element, text)

-   element (string or DOM element)
-   text (string)

Sets innerText for given element


<a id="orgc653b4c"></a>

## addClass(element, class)

-   element (string or DOM element)
-   class (string) css class

Adds class to element&rsquo;s classlist


<a id="org914a229"></a>

## removeClass(element, class)

-   element (string or DOM element)
-   class (string) css class

Removes class from element&rsquo;s classlist


<a id="orgdafdd3b"></a>

## generateRandomId(length, prefix, postfix)

-   length (number) Length of generated id not including prefix and postfix
-   prefix (string) Optional prefix string
-   postfix (string) Optional postfix string

Generates and returns random id of a given length in form of:
   &ldquo;prefix-random<sub>id</sub>-postfix&rdquo;

