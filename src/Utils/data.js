import React from "react";
import {BsCreditCard , BsBriefcase} from 'react-icons/bs'
import {FiLayers} from 'react-icons/fi'

const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <BsCreditCard/>, url: "/products" },
      { label: "terminal", icon: <BsCreditCard/> , url: "/products" },
      { label: "connect", icon:<BsCreditCard/> , url: "/products" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <BsBriefcase/> , url: "/products" },
      { label: "libraries", icon: <BsBriefcase/> , url: "/products" },
      { label: "help", icon: <BsBriefcase/> , url: "/products" },
      { label: "billing", icon: <BsBriefcase/>, url: "/products" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <FiLayers/> , url: "/products" },
      { label: "customers", icon: <FiLayers/> , url: "/products" },
    ],
  },
];

export default sublinks;
