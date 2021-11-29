import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeOneByOneAction } from "../../redux/actions";

// const mapStateToProps = (state) => ({
//   favorites: state.favoritesList.list,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeOneAtTime: function (itemToRemove) {
//     dispatch({
//       type: REMOVE_ONE_BY_ONE, //this is imported form the reducer file
//       payload: itemToRemove,
//     });
//   },
// });

const Favorites = () => {
  const favorites = useSelector((state) => state.favoritesList); // this is a hook that comes from redux and it returns a object of all defined store
  const dispatch = useDispatch(); // with this hook we can call action function as its perimeter

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="[ col-xs-12 col-sm-offset-2 col-sm-8 ]">
            <ul className="event-list">
              {favorites?.list &&
                favorites.list.map((company, i) => (
                  <>
                    <div>
                      <Button
                        variant="danger"
                        onClick={() => dispatch(removeOneByOneAction(i))}
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

export default Favorites;
