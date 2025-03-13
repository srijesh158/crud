import {applyMiddleware, createStore } from "redux";
import bookreducer from "./bookReducer";
import logger from "redux-logger";

const store = createStore(bookreducer , applyMiddleware(logger));
export default store;
