"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f4f8;
    color: #444;
    line-height: 1.6;
  }

  h1 {
    font-size: 2.5rem;
    color: #222;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  input, button {
    padding: 12px 15px;
    margin: 8px 0;
    border-radius: 8px;
    border: 1px solid #ccc;
    transition: all 0.3s ease;
  }

  input:focus {
    border-color: #0070f3;
    outline: none;
  }

  button {
    background-color: #0070f3;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    background-color: #005bb5;
    transform: translateY(-2px);
  }

  .container {
    max-width: 600px;
    margin: 60px auto;
    padding: 30px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  form {
    display: flex;
    flex-direction: column;
  }
`;
