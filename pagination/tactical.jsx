// @flow
import React from 'react';
import { isEqual } from 'lodash';
import { Page, Filters, Table } from 'components';
import Pagination from 'somewhere';

class Offers extends React.PureComponent {
  fetchFilteredOffers = (params) => this.props.fetchOffers(params)

  render() {
    return (
      <Page>
        <Filters
          fetchFilteredOffers={this.fetchFilteredOffers}
          page={this.props.page}
          resetPagination={this.props.resetPage}
        />
        <Table
          items={this.props.offers}
        />
        <Pagination
          current={this.props.page}
          onSelect={this.props.updatePage}
        />
      </Page>
    )
  }
}

class Filters extends React.PureComponent {
  state = {
    locations: [],
    categories: []
  }

  componentDidUpdate(prevProps, prevState) {
    const filtersChange = !isEqual(prevState, this.state);
    const pageChanges = this.props.page !== prevProps.page;
    if (pageChanges) {
      this.props.fetchFilteredOffers({page: this.props.page, ...this.state})
    }
    if (filtersChange && !pageChanges) {
      this.props.resetPagination();
      this.props.fetchFilteredOffers({page: this.props.page, ...this.state})
    }
  }

  onLocationChange = locations => this.setState({ locations })
  onCategoryChange = categories => this.setSate({ categories })

  render() {
    return(
      <>
        <LocationFilter onChange={this.onLocationChange} />,
        <CategoryFilter onChange={this.onCategoryChange} />
      </>
    )
  }
}
