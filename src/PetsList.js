import React, { Component } from 'react';
import PetsList from './PetsList.js';

export default class UserBookList extends Component {
  componentDidMount() {
    const cats = this.props.cats;
    const dogs = this.props.dogs;
  }
}