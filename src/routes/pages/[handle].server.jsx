import {useShop, useShopQuery, Seo, gql} from '@shopify/hydrogen';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';

export default function Page({params}) {
  const {languageCode} = useShop();

  const {handle} = params;
  const {data} = useShopQuery({
    query: QUERY,
    variables: {language: languageCode, handle},
  });

  if (!data.pageByHandle) {
    return <NotFound />;
  }

  const page = data.pageByHandle;

  return (
    <Layout>
      <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8">
        <Seo type="page" data={page} />
        <h1 className="text-2xl font-bold">{page.title}</h1>
        <div
          dangerouslySetInnerHTML={{__html: page.body}}
          className="prose1 mt-8"
        />
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    pageByHandle(handle: $handle) {
      title
      body
      title
      seo {
        description
        title
      }
    }
  }
`;
