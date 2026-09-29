import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BookingForm from "../../components/BookingForm";

export default function Reservar() {
  return (
    <>
      <Header />
      <main className="booking">
        <section className="bookingIntro">
          <p className="micro">RESERVAS</p>
          <h1>Contanos qué querés trabajar.</h1>
          <p>
            No hace falta que sepas qué tratamiento elegir. Con esta información podemos
            orientarte antes de coordinar.
          </p>
        </section>
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
