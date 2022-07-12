import React, { useState, useCallback, useContext, useEffect } from "react";
import { ApiTopTenCoins, CoinMarketCapContext } from "../../context/context";
import CMCTableHeader from "./CMCTableHeader";
import CMCTableRow from "./CMCTableRow";
import btc from "../../assets/btc.png";
import ReactPaginate from "react-paginate";

const styles = {
  tableWrapper: `bg-[#323546] text-white text-xs md:text-base font-bold overflow-auto mx-4 rounded-`,
};

const CMCTable = () => {
  const contextData = useContext(CoinMarketCapContext);

  // == PAGINATION ==
  const [currentItems, setCurrentItems] = useState<ApiTopTenCoins[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  console.log(currentItems);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(contextData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(contextData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, contextData]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % contextData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={styles.tableWrapper}>
        <div className="mx-auto max-w-screen-2xl">
          <table className="w-full">
            <CMCTableHeader />
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((coin, index) => {
                return (
                  <CMCTableRow
                    key={index}
                    starNumber={coin.cmc_rank}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    coinIcon={btc}
                    showBuy={true}
                    hRate={coin.quote.USD.percent_change_24h}
                    dRate={coin.quote.USD.percent_change_7d}
                    hRateIsIncrement={true}
                    dRateIsIncrement={false}
                    price={coin.quote.USD.price}
                    marketCapValue={coin.quote.USD.market_cap}
                    volumeCryptoValue={coin.quote.USD.volume_24h}
                    volumeValue={coin.quote.USD.volume_24h}
                    circulatingSupply={coin.circulating_supply}
                  />
                );
              })
            ) : (
              <></>
            )}
          </table>
        </div>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        containerClassName="mx-auto w-full md:w-2/5 py-3 text-xs flex flex-wrap items-center justify-between px-0 sm:px-6"
        pageLinkClassName="border-gray-300 text-gray-500 hover:text-white hover:bg-gray-700 inline-flex relative items-center px-2 md:px-4 py-2 border text-sm font-medium cursor-pointer"
        previousLinkClassName=" text-gray-500   inline-flex relative items-center px-2 md:px-4 py-2  text-sm font-medium"
        nextLinkClassName=" text-gray-500  inline-flex relative items-center px-2 md:px-4 py-2 text-sm font-medium"
        activeClassName="text-white bg-gray-700"
      />
    </>
  );
};

export default CMCTable;
