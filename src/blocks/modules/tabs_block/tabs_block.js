const TabsBlock = class TabsBlock {
    constructor({buttonsArray}){
        this.selected = 'all';
        this.buttonsArray = buttonsArray;
    }
    setSelected(selected) {
        this.selected = selected;
        app.cards.mountSlider();
    }
}

export default TabsBlock;