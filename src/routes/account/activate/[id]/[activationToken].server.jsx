import {useRouteParams, Seo} from '@shopify/hydrogen';

import Layout from '../../../../components/Layout.server';
import AccountActivateForm from '../../../../components/account/AccountActivateForm.client';

/**
 * This page shows a form for the user to activate an account.
 * It should only be accessed by a link emailed to the user.
 */
export default function Reset() {
  const {id, activationToken} = useRouteParams();

  return (
    <Layout>
      <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8">
        <Seo type="noindex" data={{title: 'Activate account'}} />
        <AccountActivateForm id={id} activationToken={activationToken} />
      </div>
    </Layout>
  );
}
