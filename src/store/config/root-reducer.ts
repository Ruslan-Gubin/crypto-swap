'use client';
import { cryptoReducer } from "@/entities/crypto/model";
import { menuReducer } from "@/features/menu";
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
  menu: menuReducer,
  crypto: cryptoReducer
});
