import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovies } from "../../action/action-movies";
import ImageCard from "./ImageCard";

class ContainerImageCard extends Component {
  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <ImageCard
        movies={this.props.movies}
        navigation={this.props.navigation}
        details={this.props.details}
      />
    );
  }
}

const mapStateToProps = state => ({
  movies: state.allmovies.movies
});

export default connect(mapStateToProps, { getMovies })(ContainerImageCard);
