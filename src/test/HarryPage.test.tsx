import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HarryPage from "@/pages/harrypotter/harryPage";

describe("HarryPage", () => {
  it("debe mostrar 'Loading...' mientras se están cargando los personajes", () => {
    render(<HarryPage />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("debe mostrar un mensaje de error si la carga falla", async () => {
    render(<HarryPage />);
    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  it("debe mostrar personajes cuando la carga es exitosa", async () => {
    render(<HarryPage />);
  });
});
