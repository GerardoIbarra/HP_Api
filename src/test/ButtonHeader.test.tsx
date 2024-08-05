import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonHeader } from "@/components/ButtonHeader";
import * as favoriteActions from "@/store/personajes/favorite";
import { FavoriteState } from "@/interface";

jest.mock("@/store/personajes/favorite", () => ({
  toggleFavorite: jest.fn(),
}));

describe("ButtonHeader", () => {
  const mockDispatch = jest.fn();
  const mockFavoriteState = {
    "harry-potter": {
      name: "Harry Potter",
      image: "https://example.com/harry.jpg",
    },
    "hermione-granger": {
      name: "Hermione Granger",
      image: "https://example.com/hermione.jpg",
    },
  };

  jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
    useSelector: (selector: (state: { favorite: FavoriteState }) => any) =>
      selector({ favorite: mockFavoriteState }),
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe mostrar la lista de favoritos cuando se hace clic en el botón de favoritos", () => {
    render(<ButtonHeader />);

    const favButton = screen.getByRole("button", { name: /favoritos/i });
    fireEvent.click(favButton);

    expect(
      screen.getByText(/personajes favoritos: 2 \/ 5/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/harry potter/i)).toBeInTheDocument();
    expect(screen.getByText(/hermione granger/i)).toBeInTheDocument();
  });

  it("debe abrir el modal de agregar cuando se hace clic en el botón de agregar", () => {
    render(<ButtonHeader />);

    const addButton = screen.getByRole("button", { name: /agregar/i });
    fireEvent.click(addButton);

    expect(screen.getByText(/agrega un personaje/i)).toBeInTheDocument();
  });

  it("debe eliminar un favorito cuando se hace clic en el botón de eliminar", () => {
    render(<ButtonHeader />);

    const favButton = screen.getByRole("button", { name: /favoritos/i });
    fireEvent.click(favButton);

    const deleteButton = screen.getAllByRole("button")[2];
    fireEvent.click(deleteButton);

    expect(favoriteActions.toggleFavorite).toHaveBeenCalledWith({
      name: "Harry Potter",
      image: "https://example.com/harry.jpg",
    });
  });
});
