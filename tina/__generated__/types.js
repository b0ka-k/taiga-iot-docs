export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const Badge_LwPartsFragmentDoc = gql`
    fragment Badge_lwParts on Badge_lw {
  __typename
  title
  sidebar_position
  body
}
    `;
export const FirmwarePartsFragmentDoc = gql`
    fragment FirmwareParts on Firmware {
  __typename
  title
  sidebar_position
  body
}
    `;
export const Badge_LwDocument = gql`
    query badge_lw($relativePath: String!) {
  badge_lw(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...Badge_lwParts
  }
}
    ${Badge_LwPartsFragmentDoc}`;
export const Badge_LwConnectionDocument = gql`
    query badge_lwConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: Badge_lwFilter) {
  badge_lwConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...Badge_lwParts
      }
    }
  }
}
    ${Badge_LwPartsFragmentDoc}`;
export const FirmwareDocument = gql`
    query firmware($relativePath: String!) {
  firmware(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FirmwareParts
  }
}
    ${FirmwarePartsFragmentDoc}`;
export const FirmwareConnectionDocument = gql`
    query firmwareConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FirmwareFilter) {
  firmwareConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FirmwareParts
      }
    }
  }
}
    ${FirmwarePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    badge_lw(variables, options) {
      return requester(Badge_LwDocument, variables, options);
    },
    badge_lwConnection(variables, options) {
      return requester(Badge_LwConnectionDocument, variables, options);
    },
    firmware(variables, options) {
      return requester(FirmwareDocument, variables, options);
    },
    firmwareConnection(variables, options) {
      return requester(FirmwareConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/75be3df1-a527-4bf8-9650-4aa2341e962d/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
