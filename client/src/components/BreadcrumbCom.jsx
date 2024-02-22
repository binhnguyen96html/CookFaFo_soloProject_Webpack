import React from "react";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

const BreadcrumbCom = ({ category }) => {
  return (
    <>
      <Breadcrumb aria-label="Default breadcrumb example">
        <Link to="/">
          <BreadcrumbItem icon={HiHome}>Home</BreadcrumbItem>
        </Link>

        <BreadcrumbItem>
          <Link to="cook-list">{category}</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbCom;
