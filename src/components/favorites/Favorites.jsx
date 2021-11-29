import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  removeFromFavoritesOneByOne,
  REMOVE_ONE_BY_ONE,
} from "../../redux/actions";

const mapStateToProps = (state) => ({
  favorites: state.favoritesList.list,
});

// const mapDispatchToProps = (dispatch) => ({
//   removeOneAtTime: (itemToRemove) => {
//     dispatch(removeFromFavoritesOneByOne(itemToRemove));
//   },
// });

const mapDispatchToProps = (dispatch) => ({
  removeOneAtTime: function (itemToRemove) {
    dispatch({
      type: REMOVE_ONE_BY_ONE, //this is imported form the reducer file
      payload: itemToRemove,
    });
  },
});

const Favorites = (props) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="[ col-xs-12 col-sm-offset-2 col-sm-8 ]">
            <ul className="event-list">
              {props?.favorites &&
                props.favorites.map((company, i) => (
                  <>
                    <div>
                      <Button
                        variant="danger"
                        onClick={() => props.removeOneAtTime(i)}
                      >
                        Remove
                      </Button>
                    </div>
                    <li key={i}>
                      <time dateTime="2021-07-20 0000">
                        <span className="day">{i + 1}</span>
                      </time>
                      <div className="info">
                        <Link to={`jobLists/${company.company_name}`}>
                          <h2 className="title">{company.title}</h2>
                        </Link>
                        <p className="title">{company.company_name}</p>
                        <p className="desc">
                          {company.candidate_required_location}
                        </p>
                      </div>
                    </li>
                  </>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
