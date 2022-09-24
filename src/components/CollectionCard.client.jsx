import {Link, Image} from '@shopify/hydrogen';
import {useEffect, useState} from 'react';
import CountrySelector from './CountrySelector.client';
import MobileNavigation from './MobileNavigation.client';
/**
 * A client component that defines the navigation for a web storefront
 */
export default function CollectionCard({collections}) {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
              
            </Link>
            <Image className='w-20px' data={collection.image} alt= {collection.title} width="20px" height="20px"  />
          </li>
        ))}
      </ul>
    </nav>
  );
}
