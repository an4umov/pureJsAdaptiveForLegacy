function preloaderMech(){
    // console.warn('preloader working right now');

    let intViewportWidth = window.innerWidth;
    console.warn('Switcher view port:');
    console.log(intViewportWidth);

    if(intViewportWidth < 950){

        let body = document.querySelector('body');
        // body.style.display = 'none';

        let pagePreloader = document.createElement('section'); 
        pagePreloader.classList.add('pagePreloader');
        pagePreloader.innerHTML =`<div class="pagePreloader__wrapper">
                                    <div class="pagePreloader__logo">
                                        <svg width="144" height="179" viewBox="0 0 144 179" fill="none" >
                                            <g clip-path="url(#clip0)">
                                            <path d="M115.651 89.1378C115.651 84.8693 117.392 80.7748 120.493 77.7522C123.594 74.7294 127.802 73.0255 132.193 73.0133V13.4953C132.191 10.6703 131.036 7.96156 128.98 5.96398C126.925 3.96636 124.139 2.84324 121.232 2.84125H13.5495C10.6349 2.84324 7.84024 3.96954 5.77934 5.97281C3.71841 7.97605 2.55966 10.6925 2.55762 13.5255V165.482C2.55762 168.314 3.71488 171.029 5.77478 173.032C7.83469 175.034 10.6285 176.159 13.5417 176.159H121.248C124.149 176.159 126.932 175.039 128.985 173.045C131.037 171.052 132.191 168.348 132.193 165.527V105.262C127.802 105.25 123.594 103.546 120.493 100.524C117.392 97.501 115.651 93.4065 115.651 89.1378Z" stroke="#EE7203" stroke-width="2"/>
                                            <path d="M90.546 50.9283H85.3527V35.4604C92.7971 35.2944 95.9953 35.634 95.9953 43.1113C95.9953 46.9746 94.9551 50.9283 90.5614 50.9283H90.546ZM103.548 56.0516V55.8857C109.945 53.0336 111.59 48.2347 111.59 41.5495C111.59 29.0317 105.38 24.1951 92.9135 24.1951H70.6814V87.0482H85.8885V62.2692H90.903C94.4505 62.5258 95.6616 65.0457 96.0884 68.909C96.1971 69.8901 96.1971 77.8277 96.1894 82.921C96.1891 83.104 96.2127 83.2867 96.2592 83.4642C96.397 84.4584 96.9087 85.3682 97.6956 86.0174C98.4827 86.6666 99.4891 87.0099 100.521 86.9803H111.093V64.2007C111.093 59.7263 107.763 56.9722 103.525 56.0516" fill="#EE7203"/>
                                            <path d="M65.0144 78.6264C65.0103 77.503 64.5477 76.4273 63.7284 75.6349C62.9088 74.8427 61.7998 74.3989 60.644 74.4009H39.7626V28.0573C39.7636 27.5206 39.6557 26.9889 39.4452 26.4928C39.2345 25.9967 38.9254 25.5458 38.5354 25.166C38.1452 24.7861 37.6818 24.4847 37.1719 24.2791C36.6618 24.0735 36.1151 23.9677 35.563 23.9677H24.5479V86.9942H65.022V78.6264H65.0144Z" fill="#EE7203"/>
                                            <path d="M44.9556 118.632H39.7703V103.195C47.207 103.021 50.3972 103.353 50.3972 110.838C50.3972 114.709 49.3649 118.655 44.9636 118.655L44.9556 118.632ZM57.3836 123.771V123.567C63.7957 120.73 65.4335 115.939 65.4335 109.231C65.4335 96.7132 59.2235 91.8765 46.7646 91.8765H24.5479V154.918H39.7703V130.019H44.7851C48.3247 130.267 49.5358 132.795 49.9705 136.658C50.0712 137.632 50.0712 145.569 50.0635 150.67C50.0653 150.851 50.0917 151.031 50.1413 151.206C50.2689 152.219 50.7703 153.153 51.5526 153.835C52.3348 154.516 53.3449 154.898 54.3951 154.911H64.929V131.905C64.929 127.189 61.6377 124.676 57.4069 123.748" fill="#EE7203"/>
                                            <path d="M100.366 91.8239C99.2572 91.8338 98.1978 92.2694 97.4184 93.0354C96.639 93.8014 96.2027 94.8359 96.205 95.9133C96.205 95.9963 96.205 96.0718 96.205 96.1548V138.96C96.205 141.646 95.0016 144.996 91.0506 144.996C86.75 144.996 85.8031 142.393 85.8031 139.36V95.9059C85.799 94.8291 85.3581 93.7971 84.5761 93.0345C83.7944 92.2716 82.7345 91.8392 81.6267 91.8312H70.6814V137.451C70.6814 150.399 78.1569 156.359 90.9728 156.359C106.436 156.359 111.342 148.127 111.342 137.451V91.8239H100.366Z" fill="#EE7203"/>
                                            <path d="M132.241 99.7913C138.294 99.7913 143.202 95.0214 143.202 89.1371C143.202 83.2531 138.294 78.4832 132.241 78.4832C126.187 78.4832 121.28 83.2531 121.28 89.1371C121.28 95.0214 126.187 99.7913 132.241 99.7913Z" fill="#EE7203"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0">
                                            <rect width="143.2" height="179" fill="white"/>
                                            </clipPath>
                                            </defs>
                                            </svg>
                                    </div>

                                    <div class="pagePreloader__text">
                                        Загрузка..
                                    </div>
                                </div>
    `;
        body.classList.add('page-body__no-scroll');
        body.after(pagePreloader);

        function jumpToPreloader(){
            pagePreloader.scrollIntoView();
        }

        jumpToPreloader();
        
        
        
    } else {
        // console.warn('desktop!');
    }
    
}

preloaderMech();

document.addEventListener("DOMContentLoaded", (event) => {

    // Header
    function headerAdaptive(){
        let headerPhantom = document.querySelector('.header-top__phantom');
        let header = headerPhantom.parentElement;
        let headerContainer = header.querySelector('.container');
        let headerSpan16 = header.querySelectorAll('.span16');
        let headerSeparators = header.querySelectorAll('.separator-list');
        let headerFirstSpan16 = header.querySelector('.span16');
        let headerLeftSide = header.querySelector('.left-side');
        let headeLeftSidePhone = header.querySelector('.phone');
        let headerRightSide = header.querySelector('.right-side');
        let headerSearchInput = header.querySelector('.search');

        let headerMenu = header.querySelector('.menu');
        let headerSearchWrapper = header.querySelector('.search-wrap');

        let headerBottomSearchCatalogBtn = header.querySelector('.jq-selectbox-wrapper select');

        let searchBottomParent = header.querySelector('.jq-selectbox__select');
        let searchBottomChild = header.querySelector('.jq-selectbox__select-text');
        let searchBottomBtn = header.querySelector('button');

        let headerBottom = header.querySelector('.header-bottom');
        let headerTop = header.querySelector('.header-top');
        
        console.warn(headerBottom);
        console.warn(headerTop);

        let headerBottomRect = headerBottom.getBoundingClientRect();
        let headerBottomWidth = headerBottomRect.width;

        console.warn(headerBottomWidth);

        headerTop.style.width = headerBottomWidth + 'px';
        headerBottom.style.width = '102%';




        if(headerPhantom === null){
            // console.warn('no header on the page');
        } else{

            let headerWidth = header.getBoundingClientRect();
            // console.warn(headerWidth);
            if(headerWidth.width < 610){
                // console.warn('мобила!');

                headerBottomSearchCatalogBtn.style.width = '120px';
                headerBottomSearchCatalogBtn.style.padding = '0 2em 0 0';

                headerPhantom.style.height = '118px';

                headerSpan16.forEach(item => {
                    item.style.display = 'flex';
                    item.style.flexDirection = 'column';
                    item.style.padding = '0 0 0 1em';
                    item.style.alignItems = 'flex-start';
                });

                headerSeparators.forEach(item => {
                    item.style.alignSelf = 'flex-end';
                });

                headerFirstSpan16.style.paddingLeft = '70px';
                headerFirstSpan16.style.alignItems = 'flex-end';

                headerLeftSide.style.textAlign = 'right';
                headeLeftSidePhone.style.paddingRight = '10px';
                headerRightSide.style.display = 'flex';
                headerRightSide.style.flexDirection = 'column';
                headerRightSide.style.justifyContent = 'flex-end';
                headerRightSide.style.minWidth = '10em';

                headerMenu.style.display = 'flex';
                headerMenu.style.minWidth = '185px';
                headerMenu.style.minWidth = '300px';
                headerMenu.style.maxWidth = '300px';
                headerMenu.style.justifyContent = 'center';
                headerMenu.style.flexDirection = 'column';
                headerMenu.style.textAlign = 'center';
                headerMenu.style.alignSelf = 'center';

                headerSearchWrapper.style.display = 'flex';
                headerSearchWrapper.style.justifyContent = 'flex-end';
                headerSearchWrapper.style.alignSelf = 'center';
                headerSearchWrapper.style.marginLeft = '15px';
                headerSearchWrapper.style.marginBottom = '40px';
                headerSearchWrapper.style.paddingLeft = '0';
                headerSearchWrapper.style.paddingRight = '0';
                headerSearchWrapper.style.marginRight = '10px';

                headerSearchInput.style.minWidth = '250px';
                searchBottomParent.style.width = '100%';
                searchBottomParent.style.paddingLeft = '0';
                searchBottomChild.style.width = '95px';

                searchBottomBtn.style.top = '35px';
                searchBottomBtn.style.right = '5%';
                
                // console.warn(searchBottomBtn)

                



            }else {
                // console.warn('планшет!');
                // console.warn(headerWidth);

                headerPhantom.style.height = '85px';

                headerSpan16.forEach(item => {
                    item.style.display = 'flex';
                    item.style.flexDirection = 'column';
                    item.style.alignItems = 'flex-start';
                    item.style.paddingLeft = '65px';
                });

                headerFirstSpan16.style.paddingLeft = '70px';
                headerFirstSpan16.style.alignItems = 'flex-end';

                headerLeftSide.style.textAlign = 'right';
                headeLeftSidePhone.style.paddingRight = '10px';
                headerRightSide.style.display = 'flex';
                headerRightSide.style.alignSelf = 'flex-end';
                headerRightSide.style.minWidth = '30em';

                headerMenu.style.display = 'flex';
                headerMenu.style.justifyContent = 'flex-end';

                headerSearchWrapper.style.display = 'flex';
                headerSearchWrapper.style.justifyContent = 'flex-end';
                headerSearchWrapper.style.marginBottom = '10px';
                headerSearchWrapper.style.paddingLeft = '0';
                headerSearchWrapper.style.marginRight = '10px';
            }
        }
    }

    // Hello Block | Paralax
    function helloParalaxBlock(){
        let helloBlock = document.querySelector('.hello-block');
        let helloBlockPeoples = document.querySelector('.desk-background');

        if(helloBlock === null){
            // console.log('No peoples around!');
        } else{
            let intViewportWidthParalax = helloBlock.getBoundingClientRect();
            // console.warn('Paralax view port:');
            // console.log(intViewportWidthParalax.width);
            // if(intViewportWidth < 1140)

            if(intViewportWidthParalax.width < 800){

                
                // console.warn('мобила!');

                // helloBlock.style.height = '15.5em';
                
                
                // helloBlockPeoples.classList.add('desk-background--mobile');

                helloBlock.style.display = 'none';
            }else {
                // console.warn('планшет!');

                // helloBlockPeoples.style.left = '-260px';

                helloBlock.style.display = 'none';
            }
        }
    }

     //Adaptive for contentBlockOnHomePage
    function contentBlockHome(){
        let contentParent = document.querySelector('#content');
        let headerPhantom = document.querySelector('.header-top__phantom');


        let contentBlock = document.querySelector('.content-block');
        let contentBlocksSpan8 = contentBlock.querySelectorAll('.span8');
        let categoryTitles = contentBlock.querySelectorAll('.category-title');
        let postPrevS = contentBlock.querySelectorAll('.post-prev');


        // console.log(contentBlock);
        // console.log(categoryTitle);

        if(contentParent === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 620){
                //NewsCard adaptive mobile
                contentBlock.classList.remove('span12');
                contentBlock.classList.add('span16');

                contentBlocksSpan8.forEach(item => {
                    item.classList.remove('span8');
                    item.classList.add('span16');
                });

                categoryTitles.forEach(item => {
                    item.style.padding = '0 0 0 0.71em';
                });
                
                for(let i = 0; i < postPrevS.length; i++){
                    let currentTitle = postPrevS[i].querySelector('.title');
                    let currentImage = postPrevS[i].querySelector('.featured-image');
                    let currentReadMore = postPrevS[i].querySelector('.read-more');


                    postPrevS[i].style.height = 'auto';
                    postPrevS[i].style.margin = '20px 20px 0 1em';
                    currentTitle.style.fontSize = '1.5em';
                    currentImage.style.height = '100px';
                    currentImage.style.overflow = 'hidden';
                    currentReadMore.style.textAlign = 'center';
                    currentReadMore.style.marginBottom = '20px';
                }
            }else {
            
                categoryTitles.forEach(item => {
                    item.style.fontSize = '3.0em';
                });
            
                for(let i = 0; i < postPrevS.length; i++){
                    let currentTitle = postPrevS[i].querySelector('.title');
                    let currentImage = postPrevS[i].querySelector('.featured-image');
                    let currentReadMore = postPrevS[i].querySelector('.read-more');


                    postPrevS[i].style.height = 'auto';
                    currentTitle.style.fontSize = '1.5em';
                    currentImage.style.height = '110px';
                    currentImage.style.overflow = 'hidden';
                    
                    currentReadMore.style.marginBottom = '20px';
                }
            }
        } 
    }

    //Adaptive for footerBlock
    function legacyFooterBlock(){
        let footer = document.querySelector('#footer');
        // console.log(footer);


        if(footer === null){
            // console.log('No footer on the page!');
        } else{
            let footerContainer = footer.querySelector('.container');
            footerContainer.style.padding = '0 0';
            let footerSpan5 = footer.querySelector('.span5');
            let footerSpan3 = footer.querySelector('.span3');
            let footerSpan3Widgets = footer.querySelectorAll('.widget');
            
            let footerSpan4 = footer.querySelectorAll('.span4');
            
            let inputSubParent = footer.querySelector('#SubscribeForm');
            let inputSub = inputSubParent.querySelector('input');

            let feedBackBlock = footer.querySelector('.footer_feedback');
            let feedBackBlockTitle = feedBackBlock.querySelector('.title');
            let feedBackBlockLink = feedBackBlock.querySelector('a');
            let socialBlock = footer.querySelector('.in-social');
            

            let intViewportWidthfooter = footer.getBoundingClientRect();
            
            // console.log(intViewportWidthfooter.width);
            // if(intViewportWidth < 1140)

            //delete subscribe block
            for(let i = 0; i < footerSpan3Widgets.length; i++){
                footerSpan3Widgets[1].style.display = 'none';
            }

            if(intViewportWidthfooter.width < 610){
                // console.warn('мобила!');
                footer.style.paddingLeft = '10px';
                footerSpan5.style.textAlign = 'right';
                footerSpan5.style.padding = '0 1.5em 0 0';
                footerSpan5.style.paddingLeft = '10px';
                footerSpan5.classList.remove('span5');
                footerSpan5.classList.add('span16');
               
                

                footerSpan3.classList.remove('span3');
                footerSpan3.classList.add('span16');

                footerSpan4.forEach(item => {
                    item.classList.remove('span4');
                    item.classList.add('span16');
                });

                let newSpan16List = footer.querySelectorAll('.span16');
                // console.warn(newSpan16List);

                for(let i = 0; i < newSpan16List.length; i++){
                    // console.log('1');
                    // console.warn(newSpan16List[1]);
                    //first span 16 in footer 
                    newSpan16List[1].style.textAlign = 'center';
                    newSpan16List[1].style.marginTop = '20px';
                    newSpan16List[1].style.paddingLeft = '10px';

                    //second span 16 in footer 

                    newSpan16List[2].style.textAlign = 'center';

                    // console.warn(footerSpan3Widget);
                   
                    
                    let socialsParent = footer.querySelector('.in-social');
                    socialsParent.style.display = 'flex';
                    socialsParent.style.justifyContent = 'center';

                    
                    
                    
                    inputSubParent.style.display = 'flex';
                    inputSubParent.style.justifyContent = 'center';
                    inputSubParent.style.paddingLeft = '20px';

                    feedBackBlock.style.paddingLeft = '0';
                    feedBackBlock.style.paddingRight = '20px';
                    feedBackBlock.style.display = 'flex';
                    feedBackBlock.style.flexDirection = 'column';
                    feedBackBlock.style.alignItems = 'flex-end';
                    feedBackBlock.style.marginTop = '20px';

                    feedBackBlockLink.style.paddingRight = '0';
                    feedBackBlockTitle.style.fontSize = '1.1em';
                
                
                }

            }else {
                // console.warn('планшет!');
            
                
                footerSpan3.style.fontSize = '0.8em';
                footerSpan3.style.marginLeft = '0';
                footerSpan3.style.textAlign = 'center';
                socialBlock.style.textAlign = 'center';

                footerSpan4.forEach(item => {
                    item.style.fontSize = '0.8em';
                    item.style.marginLeft = '0';
                });

                feedBackBlock.style.backgroundSize = '50px';
                feedBackBlock.style.backgroundPosition = ' 95% 50%';
                feedBackBlock.style.paddingLeft = '0';
                

                inputSub.style.width = '14em';

            }
        }
    }

    //Switch numbers on page
    function numbersSwitcherHeader(){
        let headerPhantom = document.querySelector('.header-top__phantom');

        if(headerPhantom === null){
            // console.warn('no header on the page');
        } else{
            let header = headerPhantom.parentElement;
            let mainNumber = header.querySelector('.phone');
            let modalWithNumbersParent =  header.querySelector('.separator-list-sub');
            let numbersBlock =  modalWithNumbersParent.querySelectorAll('b');
            let firstNumberBlock =  modalWithNumbersParent.querySelector('b');
        
            mainNumber.innerHTML = `<a href="tel:+74956496060">7 (495) 649 60 60</a>`
        
            numbersBlock.forEach(item => {
                item.innerHTML = `<a href="tel:+74956490202">7 (495) 649 02 02</a>`;
            });
        
            firstNumberBlock.innerHTML = `<a href="tel:+74953696060">7 (495) 369 60 60</a>`;
        
        
        }

    }

    //Adaptive for sidebarBlock on HOME page
    function sideBarAdativeForHome(){
        let contentParent = document.querySelector('#content');
        let headerPhantom = document.querySelector('.header-top__phantom');

        let sideBar = document.querySelector('.sidebar');
        let sideBarMenu = sideBar.querySelector('.menu');
        let sideBarMenuLink = sideBarMenu.querySelectorAll('a');



        sideBar.style.zIndex = '10';

        // console.log(contentBlock);
        // console.log(categoryTitle);

        if(contentParent === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);
            sideBar.style.zIndex = '10';
            // if(intViewportWidth < 1140)

            if(intViewportWidthContent.width < 650){

                //Side bar mobile mech
                sideBarMenu.style.display = 'flex';
                sideBarMenu.style.flexDirection = 'column';
                sideBarMenu.style.textAlign = 'center';
                sideBarMenu.style.border = '2px solid #0076a3';
                sideBarMenu.style.borderRadius = '5px';
                sideBar.style.position = 'relative';
                sideBar.style.zIndex = '10';
                 // debugger;

                //Generate Open btn
                let firstOpenItemInMenu = document.createElement('li');
                sideBarMenu.appendChild(firstOpenItemInMenu);
                firstOpenItemInMenu.innerHTML = `<a style="color: #555555 !important">Меню
                <svg
                aria-hidden="true" focusable="false" width="18px" height="22px"
                style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                preserveAspectRatio="xMidYMid meet"
                viewBox="3 0 18 16"><path d="M18.414 10.656a2 2 0 0 0-2.828 0L14 12.242V5a2 2 0 0 0-4 0v7.242l-1.586-1.586a2 2 0 1 0-2.828 2.828L12 19.898l6.414-6.414a2 2 0 0 0 0-2.828z" fill="#626262"/>
                </svg></a>`;
                firstOpenItemInMenu.style.order = '-1';
                firstOpenItemInMenu.classList.add('sideBarOpener');

                firstOpenItemInMenu.addEventListener('click', function(){
                    contentParent.scrollIntoView({behavior: "smooth"});
                    sideBarMenu.style.paddingTop = '90px';
                    sideBarMenuLink.forEach(item => {
                        let liOfa = item.parentElement;
                        liOfa.style.display = 'block';
                    });

                    this.style.display = 'none';
                    lastCloseItemInMenu.style.display = 'block';
                });

                    
                //Generate Close btn

                let lastCloseItemInMenu = document.createElement('li');
                sideBarMenu.appendChild(lastCloseItemInMenu);
                lastCloseItemInMenu.innerHTML = `<a style="color: #555555 !important">Свернуть меню
                <svg
                aria-hidden="true" focusable="false" width="18px" height="22px"
                style="-ms-transform: rotate(180deg); -webkit-transform: rotate(180deg); transform: rotate(180deg);"
                preserveAspectRatio="xMidYMid meet"
                viewBox="3 5 18 16"><path d="M18.414 10.656a2 2 0 0 0-2.828 0L14 12.242V5a2 2 0 0 0-4 0v7.242l-1.586-1.586a2 2 0 1 0-2.828 2.828L12 19.898l6.414-6.414a2 2 0 0 0 0-2.828z" fill="#626262"/>
                </svg></a>`;
                
                lastCloseItemInMenu.classList.add('sideBarClose');
                lastCloseItemInMenu.style.display = 'none';
                lastCloseItemInMenu.style.border = '2px solid #0076a3';
                lastCloseItemInMenu.style.borderRadius = '5px';

                lastCloseItemInMenu.addEventListener('click', function(){
                    sideBarMenu.style.paddingTop = '0';
                    headerPhantom.scrollIntoView({behavior: "smooth"});
                    sideBarMenuLink.forEach(item => {
                        let liOfa = item.parentElement;
                        liOfa.style.display = 'none';
                    });

                    this.style.display = 'none';
                    firstOpenItemInMenu.style.display = 'block';
                });

                //sideBar styles
                sideBar.classList.remove('span4');
                sideBar.classList.add('span16');

                sideBarMenuLink.forEach(item => {
                    let liOfa = item.parentElement;
                    liOfa.style.display = 'none';
                });

                sideBarMenu.style.padding = '0.5em 1em 1em 1em';
                sideBar.style.height = '65px';
 
            } else {
                // console.warn('планшет!');
                sideBarMenuLink.forEach(item => {
                    item.style.fontSize = '1.3em';
                });

            }
        } 
    }

    //Adaptive for sidebarBlock on HOME page
    function sideBarAdativeForShop(){
        let contentParent = document.querySelector('#content');
        let headerPhantom = document.querySelector('.header-top__phantom');

        let sideBar = document.querySelector('.sidebar');
        let sideBarMenu = sideBar.querySelector('.menu');
        let sideBarMenuLink = sideBarMenu.querySelectorAll('a');


        let contentBlock = document.querySelector('.content-block');

        let contentBlockTitle = contentParent.querySelector('.category-title');
        let textFromTitle = contentBlockTitle.textContent;

        sideBar.style.zIndex = '10';

        // console.log(contentBlock);
        // console.log(categoryTitle);

        if(contentParent === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);
            sideBar.style.zIndex = '10';
            // if(intViewportWidth < 1140)

            if(intViewportWidthContent.width < 760){
                // console.warn('мобила!');

                //Side bar mobile mech
                sideBarMenu.style.display = 'flex';
                sideBarMenu.style.flexDirection = 'column';
                sideBarMenu.style.textAlign = 'center';
                sideBarMenu.style.border = '2px solid #0076a3';
                sideBarMenu.style.borderRadius = '5px';
                sideBar.style.position = 'relative';
                sideBar.style.zIndex = '10';
                sideBar.style.marginBottom = '25px';

                console.warn(textFromTitle);
                let currentItem = sideBar.querySelector('.current');
                let textFromCurrentItem = currentItem.textContent;
                
                if(textFromTitle === textFromCurrentItem){
                    // debugger;

                    contentBlockTitle.style.display = 'none';

                    //Generate Open btn
                    let firstOpenItemInMenu = document.createElement('li');
                    sideBarMenu.appendChild(firstOpenItemInMenu);
                    firstOpenItemInMenu.innerHTML = `<a style="color: #555555 !important">${textFromTitle}
                    <svg
                    aria-hidden="true" focusable="false" width="18px" height="22px"
                    style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="3 0 18 16"><path d="M18.414 10.656a2 2 0 0 0-2.828 0L14 12.242V5a2 2 0 0 0-4 0v7.242l-1.586-1.586a2 2 0 1 0-2.828 2.828L12 19.898l6.414-6.414a2 2 0 0 0 0-2.828z" fill="#626262"/>
                    </svg></a>`;
                    firstOpenItemInMenu.style.order = '-1';
                    firstOpenItemInMenu.classList.add('sideBarOpener');

                    firstOpenItemInMenu.addEventListener('click', function(){
                        contentParent.scrollIntoView({behavior: "smooth"});
                        sideBarMenu.style.paddingTop = '90px';
                        sideBarMenuLink.forEach(item => {
                            let liOfa = item.parentElement;
                            liOfa.style.display = 'block';
                        });

                        this.style.display = 'none';
                        lastCloseItemInMenu.style.display = 'block';
                    });

                        
                    //Generate Close btn

                    let lastCloseItemInMenu = document.createElement('li');
                    sideBarMenu.appendChild(lastCloseItemInMenu);
                    lastCloseItemInMenu.innerHTML = `<a style="color: #555555 !important">Свернуть меню
                    <svg
                    aria-hidden="true" focusable="false" width="18px" height="22px"
                    style="-ms-transform: rotate(180deg); -webkit-transform: rotate(180deg); transform: rotate(180deg);"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="3 5 18 16"><path d="M18.414 10.656a2 2 0 0 0-2.828 0L14 12.242V5a2 2 0 0 0-4 0v7.242l-1.586-1.586a2 2 0 1 0-2.828 2.828L12 19.898l6.414-6.414a2 2 0 0 0 0-2.828z" fill="#626262"/>
                    </svg></a>`;
                    
                    lastCloseItemInMenu.classList.add('sideBarClose');
                    lastCloseItemInMenu.style.display = 'none';
                    lastCloseItemInMenu.style.border = '2px solid #0076a3';
                    lastCloseItemInMenu.style.borderRadius = '5px';

                    lastCloseItemInMenu.addEventListener('click', function(){
                        sideBarMenu.style.paddingTop = '0';
                        headerPhantom.scrollIntoView({behavior: "smooth"});
                        sideBarMenuLink.forEach(item => {
                            let liOfa = item.parentElement;
                            liOfa.style.display = 'none';
                        });

                        this.style.display = 'none';
                        firstOpenItemInMenu.style.display = 'block';
                    });

                    //sideBar styles
                    sideBar.classList.remove('span4');
                    sideBar.classList.add('span16');

                    sideBarMenuLink.forEach(item => {
                        let liOfa = item.parentElement;
                        liOfa.style.display = 'none';
                    });

                    sideBarMenu.style.padding = '0.5em 1em 1em 1em';
                    sideBar.style.height = '65px';

    

                }

            }else {
                // console.warn('планшет!');
                sideBarMenuLink.forEach(item => {
                    item.style.fontSize = '1.3em';
                });

                
                contentBlockTitle.style.fontSize = '2.4em';
                
            }
        } 

    }

    //Adaptive for /shop
    function contentBlockShop(){
        let contentParent = document.querySelector('#content');
        let headerPhantom = document.querySelector('.header-top__phantom');


        let shopItemParent = contentParent.querySelector('.items');
        let shopItemsList = shopItemParent.querySelectorAll('.col-sm-4');
        let shopItemsImg = contentParent.querySelectorAll('.b-model_image');
        let shopItemsBlockMinHeight = contentParent.querySelectorAll('.b-model_image-thumbnail');
        let shopItemsBlockMinHeightv2 = contentParent.querySelectorAll('.b-model_image-thumbnail_2');

        let contentBlock = document.querySelector('.content-block');

        let contentBlockTitle = contentParent.querySelector('.category-title');
        let textFromTitle = contentBlockTitle.textContent;
 

        // console.log(contentBlock);
        // console.log(categoryTitle);

        if(contentParent === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 760){
                // console.warn('мобила!');  
                
                //NewsCard adaptive mobile
                
                contentBlock.classList.remove('span12');
                contentBlock.classList.add('span16');


            }else {
                // console.warn('планшет!');                
                contentBlockTitle.style.fontSize = '2.4em';
                
                //Adaptive shop catalog items blocks
                for(let i = 0; i < shopItemsImg.length;i++){
                    // console.warn(shopItemsImg[i]);
        
                    shopItemsImg[i].style.width = '100%';
                }

                shopItemsList.forEach(item => {
                    item.style.height = '225px';
                });
        
                shopItemsBlockMinHeight.forEach(item => {
                    let firstDivWithMinHeight = item.querySelector('div');
                    // console.warn(firstDivWithMinHeight);
        
                    firstDivWithMinHeight.style.minHeight = '130px';
                });
        
                shopItemsBlockMinHeightv2.forEach(item => {
                    let firstDivWithMinHeight = item.querySelector('div');
                    // console.warn(firstDivWithMinHeight);
        
                    firstDivWithMinHeight.style.minHeight = '130px';
                });
            }
        } 
    }   

    //Adaptive for /shop/type only phablet
    function contentBlockShopType(){
        let contentParent = document.querySelector('#content');
        let headerPhantom = document.querySelector('.header-top__phantom');

        let contentBlock = contentParent.querySelector('.content-block');

        let breadcrumbsList = contentParent.querySelector('.b-breadcrumb__list');
        let listOfBreadItems = document.querySelectorAll('.b-breadcrumb__item');
        let lastBreadcrumb = listOfBreadItems[listOfBreadItems.length - 1];

        let bCatalogFull = contentBlock.querySelector('.b-catalog-full');

        if(contentParent === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 760){
                 // console.warn('мобила!');  
                
                //NewsCard adaptive mobile
                contentParent.style.paddingLeft = '10px';
                contentBlock.classList.remove('span12');
                contentBlock.classList.add('span16');

                bCatalogFull.style.display = 'flex';
                bCatalogFull.style.flexDirection = 'column';
            }
        }
    }

    //Adaptive for breadcrumbsBlock
    function breadCrumbMobile(){
        let contentParent = document.querySelector('#content');
        let breadcrumbsList = contentParent.querySelector('.b-breadcrumb__list');
        let listOfBreadItems = document.querySelectorAll('.b-breadcrumb__item');
        let lastBreadcrumb = listOfBreadItems[listOfBreadItems.length - 1];

        if(breadcrumbsList === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 1140){
                 // console.warn('мобила!');  
                
                //NewsCard adaptive mobile
                breadcrumbsList.style.display = 'flex';
                breadcrumbsList.style.position = 'relative';
                breadcrumbsList.style.overflowX = 'scroll';
                breadcrumbsList.style.overflowY = 'none';
                breadcrumbsList.style.whiteSpace = 'nowrap';
                breadcrumbsList.style.marginTop = '20px';

                function lastItemScroll(){
                    lastBreadcrumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }
                setTimeout(lastItemScroll, 3000);



            }else {
                // console.warn('планшет!');  
            }
        }
    }
    
    //Adaptive for /shop/code
    function contentBlockShopCodeOffers(){
        let priceTable = document.querySelectorAll('.b-price');

        if(priceTable === null){
            console.log('no offer tables on the PAGE!')
        } else{
            let contentParent = document.querySelector('#content');
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 1100){

                

                for(let i = 0; i < priceTable.length; i++){

                    let offerTabBlockToInject = priceTable[i].closest('.tab-pane');
        
                    let tableTitle = priceTable[i].querySelector('.b-price__title');
                    // console.log(tableTitle);   
                    let tableTitleText = tableTitle.innerHTML;                  
                    
        
                    if(tableTitleText === 'В наличии на складе'){
                       
                        // console.log(tableTitle);
                        let offerRowsParent = priceTable[i].querySelector(".b-price__items");
                        let offerRowsInTable = offerRowsParent.querySelectorAll('tr');
        

                        //create title for virtual adaptive block
                        let offerListTitleMeta = document.createElement('div');
                        offerListTitleMeta.classList.add('offer-card-mobile__list-title');
                        offerListTitleMeta.innerHTML = `В наличии на складе`;
                        offerTabBlockToInject.appendChild(offerListTitleMeta);
        
                        for(let i = 0; i < offerRowsInTable.length; i++){
                            // console.log(offerRowsInTable[i]);
                            let offersListOfItems = offerRowsInTable[i].querySelectorAll('td');
        
                            let lastOffersRow = offerRowsInTable[offerRowsInTable.length - 1];
                            // console.log(offersListOfItems);
                            // console.log(offersListOfItems[0]);
                            // console.log(offersListOfItems[1]);
                            let offerItemCode = offersListOfItems[0].innerHTML;
                            let offerItemManufactor = offersListOfItems[1].innerHTML;
                            let offerItemQuantity = offersListOfItems[2].innerHTML;
                            let offerItemPrice = offersListOfItems[3].innerHTML;
                            let offerItemQuality = offersListOfItems[4].innerHTML;
                            let offerItemCartBtn = offersListOfItems[5].innerHTML;

                            
        
        
                            //create virtual adaptive block
                            let offerListMeta = document.createElement('div'); 
                            offerListMeta.classList.add('offer-card-mobile__list');
                            offerListMeta.innerHTML = `<div class="offer-card-mobile__item">
                                            
                                                                <div class="offer-card-mobile__properties mobile-properties">
                                            
                                                                    <div class="mobile-properties__manufactor">
                                                                        ${offerItemManufactor}
                                                                    </div>
                                            
                                                                    <div class="mobile-properties__offer-code">
                                                                        ${offerItemCode}
                                                                    </div>
                                            
                                                                    <!-- <div class="mobile-properties__replacement">
                                            
                                                                    </div>  -->
        
                                                                    <div class="mobile-properties__quality">
                                                                        ${offerItemQuality}
                                                                    </div> 
                                            
                                                                </div>
                                            
                                                                <div class="offer-card-mobile__description mobile-description">
                                            
                                                                    <div class="mobile-description__delivery">
                                            
                                                                    </div>
                                            
                                                                    <div class="mobile-description__quantity">
                                                                        Наличие: ${offerItemQuantity} шт.
                                                                    </div>
                                            
                                                                </div>
                                            
                                                                <div class="offer-card-mobile__buy mobile-buy">
                                            
                                                                    <div class="mobile-buy__price">
                                                                        ${offerItemPrice} ₽
                                                                    </div>
                                            
                                                                    <div class="mobile-buy__btn">
                                                                        ${offerItemCartBtn}
                                                                    </div>
                                            
                                                                </div>
                                            
                                                            </div>`;
                           
                            //update styles after render virual html
                            let priceSpan = offerListMeta.querySelector('.b-price__icon'); 
                            priceSpan.style.width = 'auto';

                            let buyBtnBlock = offerListMeta.querySelector('.mobile-buy__btn');
                            let buyBtn = buyBtnBlock.querySelector('button');
                            buyBtn.style.width = '115px';
                            // buyBtn.style.backgroundPosition = '90% 0%';
                            // buyBtn.innerHTML = ' ';

                            offerTabBlockToInject.appendChild(offerListMeta);                    
                        }
        
                        priceTable[i].remove();
                        
                        
                      
                    } else if(tableTitleText === 'Поставка на заказ'){
                        
                        // console.log(tableTitle);
                        // console.warn('Поставка на заказ Title');
        
                        let offerRowsParent = priceTable[i].querySelector(".b-price__items");
                        let offerRowsInTable = offerRowsParent.querySelectorAll('tr');
        
                        //create title for virtual adaptive block
                        let offerListTitleMeta = document.createElement('div');
                        offerListTitleMeta.classList.add('offer-card-mobile__list-title');
                        offerListTitleMeta.innerHTML = `Поставка на заказ`;
                        offerTabBlockToInject.appendChild(offerListTitleMeta);
        
                        for(let i = 0; i < offerRowsInTable.length; i++){
                            // console.log(offerRowsInTable[i]);
                            let offersListOfItems = offerRowsInTable[i].querySelectorAll('td');
        
                            let lastOffersRow = offerRowsInTable[offerRowsInTable.length - 1];
                            // console.log(offersListOfItems);
                            // console.log(offersListOfItems[0]);
                            // console.log(offersListOfItems[1]);
        
                            let offerItemDelivery = offersListOfItems[0].innerText;
                            let offerItemCode = offersListOfItems[1].innerHTML;
                            let offerItemManufactor = offersListOfItems[2].innerHTML;
                            let offerItemPrice = offersListOfItems[3].innerHTML;
                            let offerItemQuality = offersListOfItems[4].innerHTML;
                            let offerItemCartBtn = offersListOfItems[5].innerHTML;

                            
        
        
                            //create virtual adaptive block
                            let offerListMeta = document.createElement('div'); 
                            offerListMeta.classList.add('offer-card-mobile__list');
                            offerListMeta.innerHTML = `<div class="offer-card-mobile__item">
                                            
                                                                <div class="offer-card-mobile__properties mobile-properties">
                                            
                                                                    <div class="mobile-properties__manufactor">
                                                                        ${offerItemManufactor}
                                                                    </div>
                                            
                                                                    <div class="mobile-properties__offer-code">
                                                                        ${offerItemCode}
                                                                    </div>
                                            
                                                                    <!-- <div class="mobile-properties__replacement">
                                            
                                                                    </div>  -->
        
                                                                    <div class="mobile-properties__quality">
                                                                        ${offerItemQuality}
                                                                    </div> 
                                            
                                                                </div>
                                            
                                                                <div class="offer-card-mobile__description mobile-description">
                                            
                                                                    <div class="mobile-description__delivery">
                                                                        Поставка: ${offerItemDelivery}                               
                                                                    </div>
                                            
                                                                    <div class="mobile-description__quantity">
                                                                       
                                                                    </div>
                                            
                                                                </div>
                                            
                                                                <div class="offer-card-mobile__buy mobile-buy">
                                            
                                                                    <div class="mobile-buy__price">
                                                                        ${offerItemPrice} ₽
                                                                    </div>
                                            
                                                                    <div class="mobile-buy__btn">
                                                                        ${offerItemCartBtn}
                                                                    </div>
                                            
                                                                </div>
                                            
                                                            </div>`;
                            

                            let priceSpan = offerListMeta.querySelector('.b-price__icon'); 
                            priceSpan.style.width = 'auto';

                            let buyBtnBlock = offerListMeta.querySelector('.mobile-buy__btn');
                            let buyBtn = buyBtnBlock.querySelector('button');
                            buyBtn.style.width = '115px';

                            offerTabBlockToInject.appendChild(offerListMeta);                    
                        }
        
                        priceTable[i].remove();
        
                    } else{
        
                        let offerRowsParent = priceTable[i].querySelector(".b-price__items");
                        let offerRowsInTable = offerRowsParent.querySelectorAll('tr');
        
                        //create title for virtual adaptive block
                        let offerListTitleMeta = document.createElement('div');
                        offerListTitleMeta.classList.add('offer-card-mobile__list-title');
                        offerListTitleMeta.innerHTML = `В наличии на складе (замены и аналоги)`;
                        offerTabBlockToInject.appendChild(offerListTitleMeta);
        
                        for(let i = 0; i < offerRowsInTable.length; i++){
                            // console.log(offerRowsInTable[i]);
                            let offersListOfItems = offerRowsInTable[i].querySelectorAll('td');
        
                            let lastOffersRow = offerRowsInTable[offerRowsInTable.length - 1];
                            // console.log(offersListOfItems);
                            // console.log(offersListOfItems[0]);
                            // console.log(offersListOfItems[1]);
                            let offerItemManufactor = offersListOfItems[0].innerHTML;
                            let offerItemQuantity = offersListOfItems[1].innerHTML;
                            let offerItemPrice = offersListOfItems[2].innerHTML;
                            let offerItemQuality = offersListOfItems[3].innerHTML;
                            let offerItemReplacement = offersListOfItems[4].innerHTML;
                            let offerItemCartBtn = offersListOfItems[5].innerHTML;

                        
        
        
                            //create virtual adaptive block
                            let offerListMeta = document.createElement('div'); 
                            offerListMeta.classList.add('offer-card-mobile__list');
                            offerListMeta.innerHTML = `<div class="offer-card-mobile__item">
                                            
                                                                <div class="offer-card-mobile__properties mobile-properties">
                                            
                                                                    <div class="mobile-properties__manufactor">
                                                                        ${offerItemManufactor}
                                                                    </div>
                                                                                
                                                                    <div class="mobile-properties__replacement">
                                                                        ${offerItemReplacement}
                                                                    </div>
        
                                                                    <div class="mobile-properties__quality">
                                                                        ${offerItemQuality}
                                                                    </div> 
                                            
                                                                </div>
                                            
                                                                <div class="offer-card-mobile__description mobile-description">
                                            
                                                                    <div class="mobile-description__delivery">
                                            
                                                                    </div>
                                            
                                                                    <div class="mobile-description__quantity">
                                                                        Наличие: ${offerItemQuantity} шт.
                                                                    </div>
                                            
                                                                </div>
                                            
                                                                <div class="offer-card-mobile__buy mobile-buy">
                                            
                                                                    <div class="mobile-buy__price">
                                                                        ${offerItemPrice} ₽
                                                                    </div>
                                            
                                                                    <div class="mobile-buy__btn">
                                                                        ${offerItemCartBtn}
                                                                    </div>
                                            
                                                                </div>
                                            
                                                            </div>`;
                            
                            let priceSpan = offerListMeta.querySelector('.b-price__icon'); 
                            priceSpan.style.width = 'auto';

                            let buyBtnBlock = offerListMeta.querySelector('.mobile-buy__btn');
                            let buyBtn = buyBtnBlock.querySelector('button');
                            buyBtn.style.width = '115px';
                            
                            offerTabBlockToInject.appendChild(offerListMeta);                    
                        }
                        priceTable[i].remove();
        
                    }
                }
            }   
        }
    }


    function contentBlochShopCodeMobile(){
        let contentParent = document.querySelector('#content');
        let contentBlock = contentParent.querySelector('.content-block');

        let availableFilterChecbox = contentParent.querySelector('.squaredLabel');

        let offerCardItemFull = contentBlock.querySelectorAll('.b-item-full');
        

        let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 650){
                contentParent.style.paddingLeft = '10px';

                contentBlock.classList.remove('span12');
                contentBlock.classList.add('span16');
                contentBlock.style.marginLeft = '0';

                availableFilterChecbox.style.width = '230px';
                availableFilterChecbox.style.fontSize = '11px';


                for(let i = 0; i < offerCardItemFull.length; i++){
                    offerCardItemFull[i].style.display = 'flex';
                    offerCardItemFull[i].style.flexDirection = 'column';

                    let offerPreviewBlock = offerCardItemFull[i].querySelector('.b-item-full__preview');
                    offerPreviewBlock.style.alignSelf = 'center';
                }
           
            }  
    }

    //Adaptive for /shop/product
    function contentBlockShopProductOffers(){
        let priceTable = document.querySelectorAll('.b-price');

        if(priceTable === null){
            console.log('no offer tables on the PAGE!')
        } else{
            let contentParent = document.querySelector('#content');
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 1100){

                for(let i = 0; i < priceTable.length; i++){
                    

                    //block to rendering data on shop/product
                    let offerParentForShopProduct = document.createElement('div'); 
                    offerParentForShopProduct.classList.add('product-page-offer__container');
                    priceTable[i].after(offerParentForShopProduct);
        
                    let tableTitleProductPage = priceTable[i].querySelector('.b-price__title');
                    if(tableTitleProductPage === null){
                        console.log('this is not offer');
                    }else{
                        let tableTitleText = tableTitleProductPage.innerHTML;          
                    
                        // console.log(tabsContainerOfOffer);   
            
                        if(tableTitleText === 'В наличии на складе'){
                           
                            // console.log(tableTitle);
                            let offerRowsParent = priceTable[i].querySelector(".b-price__items");
                            let offerRowsInTable = offerRowsParent.querySelectorAll('tr');
            
                            //create title for virtual adaptive block
                            let offerListTitleMeta = document.createElement('div');
                            offerListTitleMeta.classList.add('offer-card-mobile__list-title');
                            offerListTitleMeta.innerHTML = `В наличии на складе`;
                            offerParentForShopProduct.appendChild(offerListTitleMeta);
            
                            for(let i = 0; i < offerRowsInTable.length; i++){
                                // console.log(offerRowsInTable[i]);
                                let offersListOfItems = offerRowsInTable[i].querySelectorAll('td');
            
                                let lastOffersRow = offerRowsInTable[offerRowsInTable.length - 1];
                                // console.log(offersListOfItems);
                                // console.log(offersListOfItems[0]);
                                // console.log(offersListOfItems[1]);
                                let offerItemCode = offersListOfItems[0].innerHTML;
                                let offerItemManufactor = offersListOfItems[1].innerHTML;
                                let offerItemQuantity = offersListOfItems[2].innerHTML;
                                let offerItemPrice = offersListOfItems[3].innerHTML;
                                let offerItemQuality = offersListOfItems[4].innerHTML;
                                let offerItemCartBtn = offersListOfItems[5].innerHTML;
    
                                
            
            
                                //create virtual adaptive block
                                let offerListMeta = document.createElement('div'); 
                                offerListMeta.classList.add('offer-card-mobile__list');
                                offerListMeta.innerHTML = `<div class="offer-card-mobile__item">
                                                
                                                                    <div class="offer-card-mobile__properties mobile-properties">
                                                
                                                                        <div class="mobile-properties__manufactor">
                                                                            ${offerItemManufactor}
                                                                        </div>
                                                
                                                                        <div class="mobile-properties__offer-code">
                                                                            ${offerItemCode}
                                                                        </div>
                                                
                                                                        <!-- <div class="mobile-properties__replacement">
                                                
                                                                        </div>  -->
            
                                                                        <div class="mobile-properties__quality">
                                                                            ${offerItemQuality}
                                                                        </div> 
                                                
                                                                    </div>
                                                
                                                                    <div class="offer-card-mobile__description mobile-description">
                                                
                                                                        <div class="mobile-description__delivery">
                                                
                                                                        </div>
                                                
                                                                        <div class="mobile-description__quantity">
                                                                            Наличие: ${offerItemQuantity} шт.
                                                                        </div>
                                                
                                                                    </div>
                                                
                                                                    <div class="offer-card-mobile__buy mobile-buy">
                                                
                                                                        <div class="mobile-buy__price">
                                                                            ${offerItemPrice} ₽
                                                                        </div>
                                                
                                                                        <div class="mobile-buy__btn">
                                                                            ${offerItemCartBtn}
                                                                        </div>
                                                
                                                                    </div>
                                                
                                                                </div>`;
                               
                                //update styles after render virual html
                                let priceSpan = offerListMeta.querySelector('.b-price__icon'); 
                                priceSpan.style.width = 'auto';
    
                                let buyBtnBlock = offerListMeta.querySelector('.mobile-buy__btn');
                                let buyBtn = buyBtnBlock.querySelector('button');
                                buyBtn.style.width = '115px';
                                // buyBtn.style.backgroundPosition = '90% 0%';
                                // buyBtn.innerHTML = ' ';
    
                                offerParentForShopProduct.appendChild(offerListMeta);                    
                            }
            
                            priceTable[i].remove();
                            
                            
                          
                        } else if(tableTitleText === 'Поставка на заказ'){
                            
                            // console.log(tableTitle);
                            // console.warn('Поставка на заказ Title');
            
                            let offerRowsParent = priceTable[i].querySelector(".b-price__items");
                            let offerRowsInTable = offerRowsParent.querySelectorAll('tr');
            
                            //create title for virtual adaptive block
                            let offerListTitleMeta = document.createElement('div');
                            offerListTitleMeta.classList.add('offer-card-mobile__list-title');
                            offerListTitleMeta.innerHTML = `Поставка на заказ`;
                            offerParentForShopProduct.appendChild(offerListTitleMeta);
            
                            for(let i = 0; i < offerRowsInTable.length; i++){
                                // console.log(offerRowsInTable[i]);
                                let offersListOfItems = offerRowsInTable[i].querySelectorAll('td');
            
                                let lastOffersRow = offerRowsInTable[offerRowsInTable.length - 1];
                                // console.log(offersListOfItems);
                                // console.log(offersListOfItems[0]);
                                // console.log(offersListOfItems[1]);
            
                                let offerItemDelivery = offersListOfItems[0].innerText;
                                let offerItemCode = offersListOfItems[1].innerHTML;
                                let offerItemManufactor = offersListOfItems[2].innerHTML;
                                let offerItemPrice = offersListOfItems[3].innerHTML;
                                let offerItemQuality = offersListOfItems[4].innerHTML;
                                let offerItemCartBtn = offersListOfItems[5].innerHTML;
    
                                
            
            
                                //create virtual adaptive block
                                let offerListMeta = document.createElement('div'); 
                                offerListMeta.classList.add('offer-card-mobile__list');
                                offerListMeta.innerHTML = `<div class="offer-card-mobile__item">
                                                
                                                                    <div class="offer-card-mobile__properties mobile-properties">
                                                
                                                                        <div class="mobile-properties__manufactor">
                                                                            ${offerItemManufactor}
                                                                        </div>
                                                
                                                                        <div class="mobile-properties__offer-code">
                                                                            ${offerItemCode}
                                                                        </div>
                                                
                                                                        <!-- <div class="mobile-properties__replacement">
                                                
                                                                        </div>  -->
            
                                                                        <div class="mobile-properties__quality">
                                                                            ${offerItemQuality}
                                                                        </div> 
                                                
                                                                    </div>
                                                
                                                                    <div class="offer-card-mobile__description mobile-description">
                                                
                                                                        <div class="mobile-description__delivery">
                                                                            Поставка: ${offerItemDelivery}                               
                                                                        </div>
                                                
                                                                        <div class="mobile-description__quantity">
                                                                           
                                                                        </div>
                                                
                                                                    </div>
                                                
                                                                    <div class="offer-card-mobile__buy mobile-buy">
                                                
                                                                        <div class="mobile-buy__price">
                                                                            ${offerItemPrice} ₽
                                                                        </div>
                                                
                                                                        <div class="mobile-buy__btn">
                                                                            ${offerItemCartBtn}
                                                                        </div>
                                                
                                                                    </div>
                                                
                                                                </div>`;
                                
    
                                let priceSpan = offerListMeta.querySelector('.b-price__icon'); 
                                priceSpan.style.width = 'auto';
    
                                let buyBtnBlock = offerListMeta.querySelector('.mobile-buy__btn');
                                let buyBtn = buyBtnBlock.querySelector('button');
                                buyBtn.style.width = '115px';
    
                                offerParentForShopProduct.appendChild(offerListMeta);                    
                            }
            
                            priceTable[i].remove();
            
                        } else{
            
                            let offerRowsParent = priceTable[i].querySelector(".b-price__items");
                            let offerRowsInTable = offerRowsParent.querySelectorAll('tr');
            
                            //create title for virtual adaptive block
                            let offerListTitleMeta = document.createElement('div');
                            offerListTitleMeta.classList.add('offer-card-mobile__list-title');
                            offerListTitleMeta.innerHTML = `В наличии на складе (замены и аналоги)`;
                            offerParentForShopProduct.appenChild(offerListTitleMeta);
            
                            for(let i = 0; i < offerRowsInTable.length; i++){
                                // console.log(offerRowsInTable[i]);
                                let offersListOfItems = offerRowsInTable[i].querySelectorAll('td');
            
                                let lastOffersRow = offerRowsInTable[offerRowsInTable.length - 1];
                                // console.log(offersListOfItems);
                                // console.log(offersListOfItems[0]);
                                // console.log(offersListOfItems[1]);
                                let offerItemManufactor = offersListOfItems[0].innerHTML;
                                let offerItemQuantity = offersListOfItems[1].innerHTML;
                                let offerItemPrice = offersListOfItems[2].innerHTML;
                                let offerItemQuality = offersListOfItems[3].innerHTML;
                                let offerItemReplacement = offersListOfItems[4].innerHTML;
                                let offerItemCartBtn = offersListOfItems[5].innerHTML;
    
                            
            
            
                                //create virtual adaptive block
                                let offerListMeta = document.createElement('div'); 
                                offerListMeta.classList.add('offer-card-mobile__list');
                                offerListMeta.innerHTML = `<div class="offer-card-mobile__item">
                                                
                                                                    <div class="offer-card-mobile__properties mobile-properties">
                                                
                                                                        <div class="mobile-properties__manufactor">
                                                                            ${offerItemManufactor}
                                                                        </div>
                                                                                    
                                                                        <div class="mobile-properties__replacement">
                                                                            ${offerItemReplacement}
                                                                        </div>
            
                                                                        <div class="mobile-properties__quality">
                                                                            ${offerItemQuality}
                                                                        </div> 
                                                
                                                                    </div>
                                                
                                                                    <div class="offer-card-mobile__description mobile-description">
                                                
                                                                        <div class="mobile-description__delivery">
                                                
                                                                        </div>
                                                
                                                                        <div class="mobile-description__quantity">
                                                                            Наличие: ${offerItemQuantity} шт.
                                                                        </div>
                                                
                                                                    </div>
                                                
                                                                    <div class="offer-card-mobile__buy mobile-buy">
                                                
                                                                        <div class="mobile-buy__price">
                                                                            ${offerItemPrice} ₽
                                                                        </div>
                                                
                                                                        <div class="mobile-buy__btn">
                                                                            ${offerItemCartBtn}
                                                                        </div>
                                                
                                                                    </div>
                                                
                                                                </div>`;
                                
                                let priceSpan = offerListMeta.querySelector('.b-price__icon'); 
                                priceSpan.style.width = 'auto';
    
                                let buyBtnBlock = offerListMeta.querySelector('.mobile-buy__btn');
                                let buyBtn = buyBtnBlock.querySelector('button');
                                buyBtn.style.width = '115px';
                                
                                offerParentForShopProduct.appendChild(offerListMeta);                    
                            }
                            priceTable[i].remove();
                        }

                    } 
                }
            }   
        }
    }

    function contentBlochShopProductMobile(){
        let contentParent = document.querySelector('#content');
        let contentBlock = contentParent.querySelector('.content-block');

        let intViewportWidthContent = contentParent.getBoundingClientRect();

            if(intViewportWidthContent.width < 650){
                contentParent.style.paddingLeft = '10px';
                contentBlock.classList.remove('span12');
                contentBlock.classList.add('span16');
                contentBlock.style.marginLeft = '0';
            }  
    }

    //Adaptive for /search/type/catalog/??????
    function contentBlockSearchPage(){
        let contentBlock = document.querySelector('.content-block');
        let categoryTitle = contentBlock.querySelector('.category-title');

        if(categoryTitle == null){
            console.warn('No category title on the page!');
            //Search page with the Articles

            contentBlockShopCodeOffers();
            contentBlochShopCodeMobile();


        } else{
            console.warn('Category title on the page!');
            //Search page WITHOUT articles
            contentBlock.classList.remove('span12');
            contentBlock.classList.add('span16');

            let categoryTitle = contentBlock.querySelector('.category-title');
            categoryTitle.style.fontSyze = '2.5em';

            let underCategoryTitleText = contentBlock.querySelectorAll('.row-fluid');
            for(let i = 0; i < underCategoryTitleText; i++){
                underCategoryTitleText[1].style.fontSize = '18px';
            }
            
            let searchForm = contentBlock.querySelector('.span10');

            searchForm.classList.remove('span10');
            searchForm.classList.add('span15');

        }
    }

    
    //Adaptive for /cart
    function contentBlockCart(){
        let contentParent = document.querySelector('#content');
        let sideBar = contentParent.querySelector('.sidebar');
        let contentBlock = contentParent.querySelector('.content-block');
        let quantityBlock = contentParent.querySelectorAll('.cart__table-quantity');
        let orderForm = contentParent.querySelector('#order-form');
        let orderFormParent = orderForm.parentElement;

        console.warn(orderFormParent);

        let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);

            if(intViewportWidthContent.width < 1140){
                sideBar.remove();
                contentBlock.classList.remove('span12');
                contentBlock.classList.add('span16');
                contentParent.style.paddingLeft = '10px';

                for(let i = 0; i < quantityBlock.length; i++){
                    quantityBlock[i].style.minWidth = '100px';
                }

                orderFormParent.classList.remove('span7');
                orderFormParent.classList.add('span16');

            }
    }

    //horizontal scroll fix
    function horizontalScrollBlock(){
        let intViewportWidth = window.innerWidth;
        console.warn('Switcher view port:');
        console.log(intViewportWidth);

        if(intViewportWidth < 950){

            let html = document.querySelector('html');
            // body.style.display = 'none';
            html.style.overflowX = 'hidden !important';
            
        } else {
            // console.warn('desktop!');
        }
    }

    //URL Reader
    function urlReader(){
        let currentUrl 

        if(window.location.toString().includes("https://lr.ru/shop/product")){
            console.warn('This is shop PRODUCT PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();
            breadCrumbMobile();
            helloParalaxBlock();

            contentBlockShopProductOffers();
            contentBlochShopProductMobile();

        } else if(window.location.toString().includes("https://lr.ru/shop/code")){
            console.warn('This is shop CODE PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();
            breadCrumbMobile();
            helloParalaxBlock();

            contentBlockShopCodeOffers();
            contentBlochShopCodeMobile();


        }else if (window.location.toString().includes("https://lr.ru/shop/type")){
            console.warn('This is shop TYPE PAGE URL');
            console.log(window.location.href);

      

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();
            helloParalaxBlock();

            contentBlockShopType();
            breadCrumbMobile();

            // console.log(window.location.hostname);
            // console.log(window.location.pathname);

        }else if(window.location.toString().includes("https://lr.ru/shop")){
            console.warn('This is shop PAGE URL');
            console.log(window.location.href);

      

            headerAdaptive();
            legacyFooterBlock();

            helloParalaxBlock();

            sideBarAdativeForShop();
            contentBlockShop(); 

            // console.log(window.location.hostname);
            // console.log(window.location.pathname);

        }else if(window.location.toString().includes("https://lr.ru/cart")){
            console.warn('This is CART PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            helloParalaxBlock();

            contentBlockCart();
        
            
            
        }else if(window.location.toString().includes("https://lr.ru/search/type/catalog")){
            console.warn('This is Search PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            helloParalaxBlock();

            contentBlockSearchPage();

            sideBarAdativeForHome();
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);
            
        }else if(window.location.toString().includes("https://lr.ru/MyLandRover")){
            console.warn('This is ARTICLE PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            helloParalaxBlock();

            sideBarAdativeForHome();
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);
            
        }else if(window.location.toString().includes("https://lr.ru/contacts")){
            console.warn('This is CONTACTS PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            helloParalaxBlock();

            sideBarAdativeForHome();

            
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);
            
        }else if(window.location.toString().includes("https://lr.ru/page")){
            console.warn('This is Pages from HOME PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            helloParalaxBlock();

            sideBarAdativeForHome();
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);

        }else if(window.location.toString().includes("https://lr.ru/offroad")){
            console.warn('This is DEFENDER Studio PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            helloParalaxBlock();

            sideBarAdativeForHome();
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);
        }else if(window.location.toString().includes("https://lr.ru")){


            console.warn('This is home PAGE URL');
            console.log(window.location.href);
            headerAdaptive();
            legacyFooterBlock();


            sideBarAdativeForHome();
            helloParalaxBlock();

            contentBlockHome();
        }
    }

    function test(){
        this.style.overflowX = 'hidden';
    }

    

    function preloaderMechClose(){
        // console.warn('preloader working right now');
        let body = document.querySelector('body');
    
        let pagePreloader = document.querySelector('.pagePreloader'); 
        
        pagePreloader.style.display = 'none';
        body.style.visibility = 'visible';
        body.classList.remove('page-body__no-scroll');
    }

    //Main adaptive switcher
    function mainApadtiveSwitcherActivate(){
        let intViewportWidth = window.innerWidth;
        console.warn('Switcher view port:');
        console.log(intViewportWidth);
        if(intViewportWidth < 1140){

            urlReader();
            setTimeout(preloaderMechClose, 2000);
            
        } else {
            // console.warn('desktop!');
        }
    }

   
    
    
    numbersSwitcherHeader();
    mainApadtiveSwitcherActivate();
    horizontalScrollBlock();
    

});
