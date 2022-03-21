const MainHeader = class MainHeader {
    constructor(){
        this.isMobileMenuOpened = false;
    }
    toogleMobileMenu() {
        this.isMobileMenuOpened = !this.isMobileMenuOpened;
    }
    closeMobileMenu() {
        this.isMobileMenuOpened = false;
    }
    setEventListener() {
        if (!document.querySelector('.button--burger')) return;
        document.querySelector('.button--burger').addEventListener('click', () => {
            this.toogleMobileMenu();
        }) 
        if (document.querySelector('.button--closed')) {
            document.querySelector('.button--closed').addEventListener('click', () => {
                this.closeMobileMenu();
            }) 
        }
        document.addEventListener('click', (event) => {
            if (event.target.closest('.burger-body') || event.target.closest('.button--burger')) return;
            this.closeMobileMenu();
        }) 

    }
    init() {
        this.setEventListener();
    }
}

export default MainHeader;