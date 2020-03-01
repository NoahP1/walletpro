import React, { Component } from "react";
import "./SearchResults.scss";
import Spinner from "./Spinner";
var scraperapiClient = require("scraperapi-sdk")("63765a79f16fb0c89109e867e5ad022e");

export class SearchResults extends Component {
  state = {
    ads: [],
    amazons_choice: [],
    explore_more_items: [],
    pagination: [],
    results: []
  };
  componentDidMount() {
    (async () => {
      /* The following paramenters can be used:
      /s?k=            eg: nintendo       <-- Search keywords
      &currency=       eg: EUR            <-- Currency to display
      &page=           eg: 4              <-- Page to display
      &language=       eg: en_US          <-- Language to display
    */
      const result = await scraperapiClient.get("https://www.amazon.com/s?k=" + this.props.searchQuery);
      /* result contains:
      ads: [],
      amazons_choice: [],
      results: [],
      explore_more_items: [],
      pagination: []
      */

      this.setState(JSON.parse(result));
    })();
  }

  render() {
    /* result format:
    type: "search_product"
    name: "Garmin Approach S20, GPS Golf Watch with Step Tracking, Preloaded Courses, Black"
    image: "https://m.media-amazon.com/images/I/71xQn-AqJQL.jpg"
    has_prime: true
    is_best_seller: true
    is_amazon_choice: false
    is_limited_deal: false
    stars: 4.5
    total_reviews: 2559
    url: "https://www.amazon.com/Garmin-Approach-Tracking-Preloaded-Courses/dp/B01AX444EK/ref=sr_1_1?keywords=golf&qid=1583056191&sr=8-1"
    availability_quantity: null
    spec: {}
    price_string: "$139.99"
    price_symbol: "$"
    price: 139.99
    */
    return (
      <div className="container">
        {!this.state.results.length ? (
          <Spinner />
        ) : (
          <div className="search-results">
            <h2>Results for: "{this.props.searchQuery}"</h2>
            {this.state.results.map(({ name, image, stars, total_reviews, url, price_string }, index) => {
              return (
                <div key={index} className="result-item">
                  <h3>{name}</h3>
                  <img src={image} alt={name} />
                  <h4>Price: {price_string}</h4>
                  <p>Stars: {stars}</p>
                  <p>Reviews: {total_reviews}</p>
                  <p>
                    <a href={url}>Link</a>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default SearchResults;
