import React, {useState} from 'react'; //useState is imported from react
import {useParams, useNavigate} from 'react-router-dom'; //useParam, useLocation, Link, useNavigate de react-dom
import useGlobalReducer from '../hooks/useGlobalReducer'; 
import { createSignup} from '../service/APIservice';



const handleFormInput = (e) => {
    e.preventDefault();
  
    //navigate("/login");
  };
  