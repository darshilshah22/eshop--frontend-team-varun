import React from "react";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div class="bg-purple main">
        <div class="stars">
          <div class="central-body">
            <img
              class="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
              alt=""
            />
            <a href="/" class="btn-go-home" target="">
              GO BACK HOME
            </a>
          </div>
          <div class="objects">
            <img
              class="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
              alt=""
            />
            <div class="earth-moon">
              <img
                class="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
                alt=""
              />
              <img
                class="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
                alt=""
              />
            </div>
            <div class="box_astronaut">
              <img
                class="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
                alt=""
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
