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

                // console.warn(headerContainer);
                // console.warn(headerSpan16);
                // console.warn(headerLeftSide);
                // console.warn(headeLeftSidePhone);
                // console.warn(headerRightSide);
                // console.warn(headerMenu);
                // console.warn(headerSearchWrapper);

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

                helloBlock.style.height = '15.5em';
                
                helloBlockPeoples.classList.add('desk-background--mobile');
            }else {
                // console.warn('планшет!');

                helloBlockPeoples.style.left = '-260px';
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
            let footerSpan3Widget = footer.querySelector('.widget');
            
            let footerSpan4 = footer.querySelectorAll('.span4');
            
            let inputSubParent = footer.querySelector('#SubscribeForm');
            let inputSub = inputSubParent.querySelector('input');

            let feedBackBlock = footer.querySelector('.footer_feedback');
            let feedBackBlockTitle = feedBackBlock.querySelector('.title');
            let feedBackBlockLink = feedBackBlock.querySelector('a');
            let socialBlock = footer.querySelector('.in-social');
            

            let intViewportWidthfooter = footer.getBoundingClientRect();
            // console.warn('Footer view port:');
            // console.log(intViewportWidthfooter.width);
            // if(intViewportWidth < 1140)

            if(intViewportWidthfooter.width < 610){
                // console.warn('мобила!');
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

                    console.warn(footerSpan3Widget);
                    footerSpan3Widget.style.marginBottom = '0';
                    
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



        sideBar.style.zIndex = '1';

        // console.log(contentBlock);
        // console.log(categoryTitle);

        if(contentParent === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);
            sideBar.style.zIndex = '1';
            // if(intViewportWidth < 1140)

            if(intViewportWidthContent.width < 500){

                //Side bar mobile mech
                sideBarMenu.style.display = 'flex';
                sideBarMenu.style.flexDirection = 'column';
                sideBarMenu.style.textAlign = 'center';
                sideBarMenu.style.border = '2px solid #0076a3';
                sideBarMenu.style.borderRadius = '5px';
                sideBar.style.position = 'relative';
                sideBar.style.zIndex = '1';
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

        sideBar.style.zIndex = '1';

        // console.log(contentBlock);
        // console.log(categoryTitle);

        if(contentParent === null){
            // console.log('No sidebars on the page!');
        } else{
            let intViewportWidthContent = contentParent.getBoundingClientRect();
            // console.warn('Content view port:');
            // console.log(intViewportWidthContent.width);
            sideBar.style.zIndex = '1';
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
                sideBar.style.zIndex = '1';

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

            // if(intViewportWidth < 1140)

            if(intViewportWidthContent.width < 760){
    
                
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

    //URL Reader
    function urlReader(){
        let currentUrl 

        if (window.location.toString().includes("https://lr.ru/shop/type")){
            console.warn('This is shop TYPE PAGE URL');
            console.log(window.location.href);

      

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();

            // console.log(window.location.hostname);
            // console.log(window.location.pathname);

        }else if(window.location.toString().includes("https://lr.ru/shop")){
            console.warn('This is shop PAGE URL');
            console.log(window.location.href);

      

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForShop();
            contentBlockShop(); 

            // console.log(window.location.hostname);
            // console.log(window.location.pathname);

        }else if(window.location.toString().includes("https://lr.ru/")){
            console.warn('This is home PAGE URL');
            console.log(window.location.href);
            headerAdaptive();
            legacyFooterBlock();


            sideBarAdativeForHome();
            contentBlockHome();
            helloParalaxBlock();
            
        }else if(window.location.toString().includes("https://lr.ru/MyLandRover")){
            console.warn('This is ARTICLE PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);
            
        }else if(window.location.toString().includes("https://lr.ru/page")){
            console.warn('This is Pages from HOME PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);

        }else if(window.location.toString().includes("https://lr.ru/offroad")){
            console.warn('This is DEFENDER Studio PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();
            // console.log(window.location.hostname);
            // console.log(window.location.pathname);
        }else if(window.location.toString().includes("https://lr.ru/contacts")){
            console.warn('This is CONTACTS PAGE URL');
            console.log(window.location.href);

            headerAdaptive();
            legacyFooterBlock();

            sideBarAdativeForHome();
        }
    }

    //Main adaptive switcher
    function mainApadtiveSwitcherActivate(){
        let intViewportWidth = window.innerWidth;
        console.warn('Switcher view port:');
        console.log(intViewportWidth);
        if(intViewportWidth < 1140){

            urlReader();
            
        } else {
            // console.warn('desktop!');
        }
    }

    numbersSwitcherHeader();
    mainApadtiveSwitcherActivate();
});

