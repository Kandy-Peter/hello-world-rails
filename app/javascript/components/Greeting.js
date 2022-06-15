import React, { useEffect } from "react"
import PropTypes from "prop-types";
import fetchGreetings from "../redux/greetings/greeting";
import { useDispatch, useSelector } from "react-redux";

const Greeting = () => {
  const message = useSelector(({reducer}) => reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <p>Greeting: {message}</p>
    );
  };

  Greeting.propTypes = {
    greeting: PropTypes.string
  };
  export default Greeting;
