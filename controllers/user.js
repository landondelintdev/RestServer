// controllers/users.js
import e, { request, response } from "express";

export const usersGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

  res.status(200).json({
    msg: "GET API - controlador",
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

export const usersPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(201).json({
    msg: "Post API - controlador",
    nombre,
    edad,
  });
};

export const usersPut = (req, res = response) => {
  const id = req.params.id;

  res.status(200).json({
    msg: "Put API - controlador",
    id,
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
