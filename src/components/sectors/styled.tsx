import React from 'react';
import styled from 'styled-components';

export const StyledMain = styled.div`

  font-family: "Roboto", sans-serif;
  text-transform: uppercase;

main {
  display: flex;

  flex-direction: column;
  margin: 50px 30px;
}
.header-logo {
  width: 127px;
  height: 106px;
  background-color: #ff7426;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header-logo p {
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
}
.img-logo {
  width: 22px;
  height: 25px;
  align-self: center;
}

.mainSection {
  display: flex;
  gap: 20px;
  padding-top: 30px;
}
.sectors {
  width: 477px;
  height: 757px;
  background-color: #272727;
  border-radius: 7px;
}
.sectors h1 {
  color: #ff792e;
  text-align: center;
  font-size: 36px;
  font-weight: 100;
  padding-top: 23px;
}
.addSector {
  width: 842px;
  height: 757px;
  background-color: #ff792e;
  border-radius: 7px;
}
.addSector h1 {
  text-align: center;
  font-size: 36px;
  font-weight: 100;
  padding-top: 23px;
}
`;





