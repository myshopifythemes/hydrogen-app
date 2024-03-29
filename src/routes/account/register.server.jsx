import {NoStore, Seo, gql} from '@shopify/hydrogen';

import Layout from '../../components/Layout.server';
import AccountCreateForm from '../../components/account/AccountCreateForm.client';

export default function Register({response}) {
  response.cache(NoStore());

  return (
    <Layout>
      <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8">
        <Seo type="noindex" data={{title: 'Register'}} />
        <AccountCreateForm />
      </div>
    </Layout>
  );
}

export async function api(request, {queryShop}) {
  const jsonBody = await request.json();

  if (
    !jsonBody.email ||
    jsonBody.email === '' ||
    !jsonBody.password ||
    jsonBody.password === ''
  ) {
    return new Response(
      JSON.stringify({error: 'Email and password are required'}),
      {status: 400},
    );
  }

  const {data, errors} = await queryShop({
    query: MUTATION,
    variables: {
      input: {
        email: jsonBody.email,
        password: jsonBody.password,
        firstName: jsonBody.firstName,
        lastName: jsonBody.lastName,
      },
    },
    cache: NoStore(),
  });

  const errorMessage = getErrorMessage(data, errors);

  if (
    !errorMessage &&
    data &&
    data.customerCreate &&
    data.customerCreate.customer &&
    data.customerCreate.customer.id
  ) {
    return new Response(null, {
      status: 200,
    });
  } else {
    return new Response(
      JSON.stringify({
        error: errorMessage ?? 'Unknown error',
      }),
      {status: 401},
    );
  }
}

const MUTATION = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

function getErrorMessage(data, errors) {
  if (errors?.length) return errors[0].message ?? errors[0];
  if (data?.customerCreate?.customerUserErrors?.length)
    return data.customerCreate.customerUserErrors[0].message;
  return null;
}
