import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react'
import { act } from "react-dom/test-utils";

import Listings from '../pages/listings';
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it ("renders with or without a name", async () => {
  const fakeUser = {
    profile_picture: 
    "https://cdn-icons-png.flaticon.com/512/4775/4775505.png",
    title: "Experienced Gardener Wanted for Vegetable Garden Maintenance",
    rating: 3,
    username: "AEdmunds299",
    location: "TS26 8JA",
    crop_name: "White Mushrooms",
    plot_size: 17,
    description: "Seeking an experienced gardener for regular vegetable garden maintenance. Contact for details.",
    user_email: "Amina@Edmunds.com"    
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    }))
  await act(async() => {
    render(<Listings />, container);
  });
  expect(container.textContent).toBe("Search");
});
