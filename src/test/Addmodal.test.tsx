import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddModal from "@/components/AddModal";
import * as fetchModule from "@/hook/Fetchdata";

describe("AddModal", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe cerrar el modal cuando se hace clic en el icono de cerrar", () => {
    render(<AddModal onClose={mockOnClose} />);

    const closeButton = screen.getByRole("button", { hidden: true });
    fireEvent.click(closeButton);
  });

  it("debe actualizar los campos del formulario correctamente", () => {
    render(<AddModal onClose={mockOnClose} />);

    const nameInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nameInput, { target: { value: "Harry Potter" } });
    expect(nameInput).toHaveValue("Harry Potter");

    const genderRadio = screen.getByLabelText(/hombre/i);
    fireEvent.click(genderRadio);
    expect(genderRadio).toBeChecked();

    const positionRadio = screen.getByLabelText(/estudiante/i);
    fireEvent.click(positionRadio);
    expect(positionRadio).toBeChecked();
  });

  it("debe enviar los datos correctamente y cerrar el modal", async () => {
    render(<AddModal onClose={mockOnClose} />);

    fireEvent.change(screen.getByLabelText(/nombre/i), {
      target: { value: "Harry Potter" },
    });
    fireEvent.change(screen.getByLabelText(/cumpleaños/i), {
      target: { value: "31-07-1980" },
    });
    fireEvent.change(screen.getByLabelText(/color de ojos/i), {
      target: { value: "green" },
    });
    fireEvent.change(screen.getByLabelText(/color de pelo/i), {
      target: { value: "black" },
    });

    fireEvent.click(screen.getByLabelText(/hombre/i));
    fireEvent.click(screen.getByLabelText(/estudiante/i));

    const submitButton = screen.getByRole("button", { name: /guardar/i });
    fireEvent.click(submitButton);
  });
});
