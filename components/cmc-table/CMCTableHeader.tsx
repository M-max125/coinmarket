import React from "react";
import ChevronDown from "../../assets/svg/chevronDown";
import Info from "../../assets/svg/info";

const CMCTableHeader = () => {
  return (
    <tbody>
      <tr>
        <th></th>
        <th className="flex items-center">
          <strong># &nbsp;</strong>
          <ChevronDown fill="#fff" />
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>24h %</th>
        <th>7d %</th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Market Cap</p>
            <Info />
          </div>
        </th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Volume</p>
            <Info />
          </div>
        </th>
        <th>
          <div className="flex items-center">
            <p className="mr-2">Circulating Supply</p>
            <Info />
          </div>
        </th>

        <th>Last 7 days</th>
      </tr>
    </tbody>
  );
};

export default CMCTableHeader;
