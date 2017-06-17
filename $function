function $(tagMain, contentMain = '') {
  return {
    tags: [{ tagName: tagMain, content: contentMain }],
    add(tagName, content = ''){
      //this.tags.push({tagName: tagName, content: content});
      this.tags.push({ tagName, content });

      return this;
    },
    render(){
      const beginArr = [];
      const endArr =[];
      this.tags.forEach((tag) => {
        beginArr.push(`<${tag.tagName}>${tag.content}`);
        endArr.unshift(`</${tag.tagName}>`);
      });
      this.tags = [];

      return console.log(beginArr.concat(endArr).join(''));
    }
  }
}

// $('body').add('div').add('span', 'hi').render();
//$('body').render();
