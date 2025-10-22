// controllers/users.js
import { response } from "express";

export const usersGet = (req, res = response) => {
  res.status(200).json({
    msg: "GET API - controlador",
  });
};

export const usersPost = (req, res = response) => {
  res.status(201).json({
    msg: "Post API - controlador",
  });
};

export const usersPut = (req, res = response) => {
  res.status(200).json({
    msg: "Put API - controlador",
  });
};

export const usersPatch = (req, res = response) => {
  res.status(200).json({
    msg: "Patch API - controlador",
  });
};

export const usersDelete = (req, res = response) => {
  res.status(200).json({
    msg: "Delete API - controlador",
  });
};
