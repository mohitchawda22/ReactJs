function customRender(reactElement,container){
    /*
    const domElemet=document.createElement(reactElement.type)
    domElemet.innerHTML=reactElement.children
    domElemet.setAttribute('href',reactElement.props.href)
    domElemet.setAttribute('target',reactElement.props.target)
    container.appendChild(domElemet)
    */

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTMl=reactElement.children
    for (const prop in reactElement.props) {
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}


const mainContainer=document.querySelector('#root' )
customRender(reactElement,mainContainer)