import React from "react";
import Pagination from "react-js-pagination";
import "./Paginations.css";

class Paginations extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
        <div>
          <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
              innerClass="PaginationInner"
              itemClass="PaginationItems"
              linkClass="PaginationLink"
              activeLinkClass="PaginationActive"
              hideDisabled={true}
              lastPageText={false}
          />
        </div>
    );
  }
}

export default Paginations;