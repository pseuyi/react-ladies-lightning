import React from 'react';
import { isEqual } from 'lodash';
import { Page, Filters, Table } from 'components';

class Offers extends React.PureComponent {
  fetchFilteredOffers = (params) => this.props.fetchOffers(params)

  render() {
    return (
      <Page>
        <Filters
          fetchFilteredOffers={this.fetchFilteredOffers}
        />
        <Table
          items={this.props.offers}
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

  componentDidUpdate = (prevProps, prevState) => {
    const filtersChange = !isEqual(prevState, this.state);
    if(filtersChange) this.props.fetchFilteredOffers(this.state);
  }

  onLocationChange = locations => this.setState({ locations })
  onCategoryChange = categories => this.setSate({ categories })

  render() {
    return(
      [
        <LocationFilter onChange={this.onLocationChange} />,
        <CategoryFilter onChange={this.onCategoryChange} />
      ]
    )
  }
}
