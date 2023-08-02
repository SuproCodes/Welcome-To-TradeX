import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'sticky',
    top: 0,
    zIndex: 1,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px',
  };
  return (
    <div style={headerStyle}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/" style={linkStyle}>Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges" style={linkStyle}>Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins" style={linkStyle}>Coins</Link>
      </Button>
    </div>
  );
};

export default Header;
