// @flow
import React from "react";
import { isEqual } from "lodash";
import { Page, Filters, Table } from "components";
import Pagination from "somewhere";

class Offers extends React.PureComponent {
  fetchFilteredOffers = (params) => this.props.fetchOffers(params)

  render() {
    return (
      <Page>
        <Filters
          onChange={this.props.updateFilters}
        />
        <Table items={this.props.offers} />
        <Pagination
          current={this.props.page}
          onSelect={this.props.updatePage}
        />
      </Page>
    );
  }
}

class Filters extends React.PureComponent {
  render() {
    return (
      <>
        <LocationFilter onChange={this.props.updateFilter} />,
        <CategoryFilter onChange={this.props.updateFilter} />
      </>
    )
  }
}

// move state into redux or to Offers component
const store = {
  locations: [],
  categories: []
};

// const RESET_FILTER_ACTION = 'reset_filter';
// const resetFilter = () => ({...})

// reset page to 0 when changing filters
// const UPDATE_FILTER_ACTION = 'updte_filter';
// const setFilter = () => ({...})

// preserve filters when updating page
// const UPDATE_PAGE = 'update_page';
// const updatePage = () => ({...})

// const RESET_PAGE = 'reset_page';
// const resetPage = () => ({...})

const buildParams = state => ({
  locations: state.locations,
  categories: state.categories,
  page: state.currentPage
});


const updateFilter = filters => (dispatch, getState) => {
  dispatch(setFilter(filters));
  dispatch(fetchOffers(buildParams(getState)));
};

const selectPage = page => (dispatch, getState) => {
  dispatch(updatePage(page));
  dispatch(fetchOffers(buildParams(getState)));
};
