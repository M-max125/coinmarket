import { Backdrop, Box, Button, Grid, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { CoinMarketCapContext } from "../../context/context";
import CustomSelectMUI from "../common/CustomSelectMUI";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TokenList = ["ETH", "Dogecoin", "Dai", "Link", "Usdc"];

const CMCSwapCryptoModal = () => {
  const {
    openSwapCryptoModal,
    setOpenSwapCryptoModal,
    mint,
    coins,
    loadingCoins,
    amount,
    setAmount,
    fromToken,
    setFromToken,
    toToken,
    setToToken,
  } = useContext(CoinMarketCapContext);

  console.log("fromToken", fromToken);
  console.log("toToken", toToken);
  console.log("amount", amount);

  const handleModalClose = () => {
    setOpenSwapCryptoModal?.(false);
    setAmount?.("");
    setFromToken?.("");
    setToToken?.("");
  };



  return (
    <>
      <Modal
        open={openSwapCryptoModal!}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 250 }}
      >
        <Box sx={style}>
          <div className="relative">
            {/**Close button  */}
            <button
              className="border border-transparent focus:border-blue trans-all-linear absolute top-0 right-0"
              type="button"
              onClick={handleModalClose}
            >
              <svg
                className="w-4 h-4 text-grey hover:text-grey-dark"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </button>
            {/**SWAP ICON */}
            <div className="flex items-center">
              <div className="mr-3">
                <svg
                  className="w-10 h-10"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#6188FF"
                    d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18M3,12C3,14.61 4.67,16.83 7,17.65V19.74C3.55,18.85 1,15.73 1,12C1,8.27 3.55,5.15 7,4.26V6.35C4.67,7.17 3,9.39 3,12Z"
                  />
                </svg>
              </div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Swap Crypto Tokens
              </Typography>
            </div>
            {/**Swap SELECT FROM */}

            <CustomSelectMUI
              itemsList={TokenList}
              handleChange={(e) => setFromToken?.(e.target.value)}
              itemValueName={fromToken!}
              inputLabel="From"
            />
          
            {/**Swap SELECT TO */}

            <CustomSelectMUI
              itemsList={TokenList}
              handleChange={(e) => setToToken?.(e.target.value)}
              itemValueName={toToken!}
              inputLabel="To"
            />
            {/**Swap AMOUNT */}

            <FormControl variant="standard" sx={{ m: 1, width: 300 }}>
              <TextField
                id="standard-basic"
                label="Amount"
                variant="standard"
                value={amount}
                onChange={(e) => setAmount?.(e.target.value)}
                placeholder="0.00"
              />
            </FormControl>

            {/**Swap BUTTON TO MINT TOKENS */}
            <div className="flex items-center justify-center mt-3">
              <Button
                variant="contained"
                style={{ backgroundColor: "#6188FF" }}
                onClick={mint}
              >
                Swap
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default CMCSwapCryptoModal;
