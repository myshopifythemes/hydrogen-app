import React from 'react';
const GridBanner = () => {

    return (
        <div className="bg-white p-12 shadow-xl rounded-xl mb-10">
            <div className="collection-list-wrapper page-width isolate section-{{ section.id }}-padding">
                <div class="flex justify-between items-center mb-8 text-md font-medium"><span class="text-black uppercase">Custom Collection List</span><span class="hidden md:inline-flex"><a class="text-blue-600 hover:underline" href="/collections/frontpage">Shop all</a></span></div>           
                <slider-component className="slider-mobile-gutter">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 home-collection-list collection-list grid grid--1-col"
                    id="Slider-{{ section.id }}"
                    role="list"
                >
                    <li id="Slide-id" className="collection-list__item grid__item">
                        <div className="card-wrapper animate-arrow">
                            <div className="relative home-5-cat-list card
                                card--standard
                                card--media" >
                                <div className="card__inner color-background-2 ratio" >
                                    <div className="card__media">
                                        <div className="media media--transparent media--hover-effect">                                    
                                            <img src="https://cdn.shopify.com/s/files/1/0613/5693/3319/files/pre-fall-accesories_1400x_d1e25352-8748-42b1-af23-48319b07db16_1500x.jpg" 
                                             alt="SHOES" height="428" width="350" loading="lazy" className="motion-reduce" />                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-1 left-2 card__content ">
                                    <div className="card__information">
                                        <h5 className="sub-head">
                                            Best Clothes Online
                                        </h5>
                                        <h3 className="card__heading">
                                            <a href="/collections/shoes" className="full-unstyled-link">
                                            NEW STYLE
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                    <li id="Slide-id" className="collection-list__item grid__item">
                        <div className="card-wrapper animate-arrow">
                            <div className="relative home-5-cat-list card
                                card--standard
                                card--media" >
                                <div className="card__inner color-background-2 ratio" >
                                    <div className="card__media">
                                        <div className="media media--transparent media--hover-effect">                                    
                                            <img src="//cdn.shopify.com/s/files/1/0613/5693/3319/files/new-styles_1400x_4d999a72-f983-40f6-bd3b-c46f232e52ff_1500x.jpg?v=1648047242" sizes="
                                            (min-width: 1200px) 366px,
                                            (min-width: 750px) calc((100vw - 10rem) / 2),
                                            calc(100vw - 3rem)" alt="SHOES" height="428" width="350" loading="lazy" className="motion-reduce" />                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-1 right-2 card__content">
                                    <div className="card__information">
                                        <h5 className="sub-head">
                                            Best Clothes Online
                                        </h5>
                                        <h3 className="card__heading">
                                            <a href="/collections/shoes" className="full-unstyled-link">
                                            NEW STYLE
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                    <li id="Slide-id" className="collection-list__item grid__item">
                        <div className="card-wrapper animate-arrow">
                            <div className="relative home-5-cat-list card
                                card--standard
                                card--media" >
                                <div className="card__inner color-background-2 ratio" >
                                    <div className="card__media">
                                        <div className="media media--transparent media--hover-effect">                                    
                                            <img src="https://cdn.shopify.com/s/files/1/0613/5693/3319/files/gant-shoes_800x_339169c1-4ea0-49f9-a91a-032f123d34d5_1500x.jpg" alt="SHOES" height="428" width="350" loading="lazy" className="motion-reduce" />                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-1 right-2 card__content">
                                    <div className="card__information">
                                        <h5 className="sub-head">
                                            Best Clothes Online
                                        </h5>
                                        <h3 className="card__heading">
                                            <a href="/collections/shoes" className="full-unstyled-link">
                                            NEW STYLE
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                </ul>
            
                    {/* <div className="slider-buttons no-js-hidden">
                    <button type="button" className="slider-button slider-button--prev" name="previous" aria-label="">Preview</button>
                    <div className="slider-counter caption">
                        <span className="slider-counter--current"></span>
                        <span aria-hidden="true"> / </span>
                        <span className="slider-counter--total"></span>
                    </div>
                    <button type="button" className="slider-button slider-button--next" name="next" >Next</button>
                    </div> */}
                </slider-component>
            </div>
        </div>
    );
};
export default GridBanner;
