export const NASA_SEARCH_QUERY = `
query NASASearchQuery {
  search(q: "apollo 11") {
    __typename
    pages
    currentPage
    images {
      href
      title
      description
    }
  }
}
`;
