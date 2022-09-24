import React from 'react';
const ImageTextOverlay = () => {
    return (
        <div className="bg-white shadow-xl rounded-xl mb-10">
            <div className="banner-home text-white p-32 md:p-32 px-4 xl:px-12">
                <div className="text-center">
                    <h1 className="font-extrabold text-5xl md:text-7xl">
                        New Collection
                    </h1>
                    <p className="text-lg mb-8">
                        Welcome to your custom storefront. Let’s get building.
                    </p>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-white border-white uppercase">
                        <a
                            href="/collections/frontpage"
                            target="_self"
                            className="border-white border py-2 px-5 rounded-full inline-flex items-center hover:bg-black hover:border-black"
                        >
                            Shop Collection
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ImageTextOverlay;
