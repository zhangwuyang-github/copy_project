import React from "react";
import "./Header.css";
import { Button, Input } from "antd";

const Header: React.FC = () => {
  const { Search } = Input;

  const onSearch = (value: any) => console.log(value);

  return (
    <div style={styles.container} className="borderbox">
      <div style={styles.topView} className="topView">
        <div className="borderbox inlineBox">
          <div style={styles.flexMore}>
            <img
              src="https://www.toyotapartsdeal.com/common-uiasset/images/TPD/header_logo.png"
              alt=""
              style={styles.imgOne}
            ></img>
            <img
              src="https://www.toyotapartsdeal.com/common-uiasset/images/TPD/header_logo_by.png"
              alt=""
              style={styles.imgTwo}
            ></img>
          </div>
          <div>
            <span>
              Customer Support :
              <a href="s" className="a">
                Live Chat
              </a>
              &nbsp;or&nbsp;
              <a href="s" className="a">
                1-888-888-8888
              </a>
            </span>
          </div>
        </div>
        <div className="inlineBox">
          <div style={styles.flexMore}>
            Parts for：{" "}
            <a href="s" className="a">
              {" "}
              Toyota
            </a>
            <a href="s" className="a">
              {" "}
              Scion
            </a>
            <a href="s" className="a">
              {" "}
              Accessories
            </a>
          </div>
          <div>
            <a href="s" className="righta">
              Login/Register{" "}
            </a>
            <div className="line"></div>
            <a href="s" className="righta">
              {" "}
              My Account{" "}
            </a>
            <div className="line"></div>
            <a href="s" className="righta">
              {" "}
              Track Order{" "}
            </a>
            <div className="line"></div>
            <a href="s" className="righta">
              {" "}
              Help Center
            </a>
          </div>
        </div>
      </div>
      <div className="borderbox inlineBox">
        <div style={styles.flexMore}>
          <Search
            placeholder="Search by Part Number or Keywords"
            style={{ width: 600 }}
            onSearch={onSearch}
          />
        </div>
        <div>
          <Button size="large" style={styles.MyCart}>My Cart</Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "137px",
    backgroundColor: "#f0f0f0",
    paddingLeft: "70px",
    paddingRight: "70px",
  },
  topView: {
    borderBottom: "1px solid #CCC",
    height: "60%",
    width: "100%",
    paddingTop: "10px",
  },
  imgOne: {
    width: "252px",
    height: "28px",
  },
  imgTwo: {
    width: "183px",
    height: "20px",
  },
  flexMore: {
    flex: 1,
  },
  MyCart: {
      width: '180px',
      height: '50px'
  }
};

export default Header;
