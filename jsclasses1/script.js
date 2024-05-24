class HtmlElement {
  constructor(tagName, textContent, attributes, styles, innerElements) {
    this.tagName = tagName;
    this.textContent = textContent;
    this.attributes = attributes;
    this.styles = styles;
    this.innerElements = innerElements || []; // Ensure innerElements is an array
  }

  render() {
    let element = document.createElement(this.tagName);
    element.textContent = this.textContent;

    for (let key in this.attributes) {
      element.setAttribute(key, this.attributes[key]);
    }

    for (let key in this.styles) {
      element.style[key] = this.styles[key];
    }


    if (this.innerElements.length) {
      this.innerElements.forEach((innEl) => {
        element.appendChild(innEl);
      });
    }
    return element;
  }
}

// Первый элемент для первого задания
// let element = new HtmlElement('div', '', {
//     id: 'wrapper'
//   }, {
//     display: 'flex'
//   },
//   [new HtmlElement('div', '', {}, {
//       width: '100px',
//       margin: '10px'
//     },
//     [new HtmlElement('h3', 'What is Lorem Ipsum Dolor').render(),
//       new HtmlElement('img', '', {
//         alt: 'Lorem Ipsum',
//         src: 'lipsum.jpg'
//       }, {
//         textAlign: 'justify'
//       }).render(),
//       new HtmlElement('p', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", {}, {},
//         [
//           new HtmlElement('a', '...more', {
//             href: 'www.google.com',
//             target: '_black'
//           }, {}).render()
//         ]).render()
//     ]).render(), ]).render();
// // document.body.appendChild(element);









// Второй элемент для четвёртого
let element2 = new  HtmlElement('div', '', {
  id: 'wrapper',
  class:'wrap'
}, {},
[new HtmlElement('div', '', {class:'block'}, {},
  [new HtmlElement('h3', 'What is Lorem Ipsum Dolor').render(),
    new HtmlElement('img', '', {
      class:'img',
      alt: 'Lorem Ipsum',
      src: 'lipsum.jpg'
    }, {}).render(),
    new HtmlElement('p', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", {class: 'text'}, {},
      [
        new HtmlElement('a', '...more', {
          href: 'www.google.com',
          target: '_black'
        }, {}).render()]).render()]).render(),
        new HtmlElement('div', '', {class:'block'}, {},
  [new HtmlElement('h3', 'What is Lorem Ipsum Dolor').render(),
    new HtmlElement('img', '', {
      class:'img',
      alt: 'Lorem Ipsum',
      src: 'lipsum.jpg'
    }, {}).render(),
    new HtmlElement('p', "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", {class: 'text'}, {},
      [
        new HtmlElement('a', '...more', {
          href: 'www.google.com',
          target: '_black'
        }, {}).render()]).render()]).render()
      ]).render()
        



class CssClass {
  constructor(name, styles) {
    this.name = name;
    this.styles = {};
    for (let key in styles) {
      if (this.checkKey(key)) {
        this.styles[key] = styles[key];
      }
    }
    // console.log(this.styles)
  }
  checkKey(key) { // проверяет сущуествовует ли по такому ключу стиль
    const style = document.body.style;
    return key in style;
  }

  setStyle(key, value) { // добовляет новый стиль к объекту
    if (!this.checkKey(key)) {
      return;
    }
    this.styles[key] = value;
    console.log(this.styles)
  }
  unsetStyle(key) { // удаляет стиль по ключу
    delete this.styles[key];
  }

  getStyle(key) { // возвращает значение по ключу
    return this.styles[key];
  }

  getCss() { // превращает класс со стилями в строку
    return `.${this.name}${JSON.stringify(this.styles).replace(/\,/g, "; \n").replace(/"/g, "")}`;
  }
}

let clas = new CssClass("wrap", {
  display: 'flex'
});
let clas2 = new CssClass("block", {
  width: '300px',
  margin: '10px'
})
let clas3 = new CssClass("img", {
  width: '100%'
})
let clas4 = new CssClass("text", {
  textAlign: 'justify'
})





class HtmlBlock {
  constructor(collCssClass, htmlElem) {
    this.collCssClass = new Set([...collCssClass])
    this.htmlElem = htmlElem
  }


  genHtml() {
    let style = document.createElement('style')
    let textContent = ''
    this.collCssClass.forEach(element => {
      textContent += ` ${element.getCss()}`
    });
    style.textContent = textContent
    document.body.appendChild(style)
    document.body.appendChild(element2);
  }
}

let htmlBlock = new HtmlBlock([clas, clas2, clas3, clas4], element2)
htmlBlock.genHtml()









































// genHtmlStyle(){
//   let style
//       if(document.body.getElementsByTagName('style').length<1){
//         console.log('Нет стайла')
//         style = document.createElement('style')
//         let newCss = this.getCss()
//         style.textContent = newCss
//         console.log(style)
//         document.body.prepend(style)

//       }else{
//         console.log('Есть стаил')
//         style = document.body.getElementsByTagName('style')
//         let newCss = this.getCss()
//         // style.innerHTML = newCss
//         document.styleSheets[0].insertRule(newCss, 0);
//         console.log(style)
//       }
//     }