import * as util from "../src/domik";

document.addEventListener("DOMContentLoaded", (event)=>{
    let container = util.$("#container");
    let mySpan = util.bake("span", {
        text: "I am simple span",
    });

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

    appendChildren(container, [wrapper, mySpan])
})
