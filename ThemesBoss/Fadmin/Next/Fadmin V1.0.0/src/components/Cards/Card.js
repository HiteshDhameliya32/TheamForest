
import React from "react";

const Card = ({ children, className}) => {
  return (
    <div className={`card border ${className} `}>
      {children}
    </div>
  );
};

const Card1 = ({ children, className}) => {
  return (
    <div className={`card border ${className} `}>
      <div className="card-body">{children}</div>
    </div>
  );
};

const CardHeader = ({ children, title }) => {
  return (
    <div className="card-header">
      { title && <h3 className="card-title mb-0">{title}</h3>}
      {children}
    </div>
  );
}

const CardHeader1 = ({ children, title }) => {
  return (
    <>
        {title && <h4 className="mt-0 header-title border-bottom">{title}</h4>}
        <p className="text-muted mb-24 fs-15">
          {children}
        </p>
    </>
  );
}

const CardBody = ({ children, className }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};

const CardFooter = ({ children, className}) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
}

export  {
  Card,
  Card1,
  CardBody,
  CardHeader,
  CardHeader1,
  CardFooter
}

