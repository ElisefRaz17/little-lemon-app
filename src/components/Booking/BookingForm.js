import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingForm = (props) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset className="fields">
            <div>
              <label htmlFor="book-fName">First Name</label>
              <input
                id="book-fName"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                type="text"
                required
                minLength={2}
                maxLength={50}
              />
            </div>
            <div>
              <label htmlFor="book-email">Email Address</label>
              <input
                id="book-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                minLength={4}
                maxLength={200}
              />
            </div>
            <div>
              <label htmlFor="book-phone">Phone Number</label>
              <input
                id="book-phone"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                type="tel"
                placeholder="(xxx)-xxx-xxxx"
                minLength={10}
                maxLength={25}
                required
              />
            </div>
            <div>
              <label htmlFor="book-lName">Last Name</label>
              <input
                id="book-lName"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <input
                type="time"
                value={times}
                onChange={(e) => {
                  setTimes(e.currentTarget.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                value={guests}
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
              </select>
            </div>
            <div>
                <label htmlFor="comments">Additional Comments</label>
                <textarea
                    id="comments"
                    rows={8}
                    cols={50}
                    placeholder="Additional Comments"
                    value={comments}
                    onChange={(e)=>setComments(e.target.value)}
                >
                </textarea>
            </div>
            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
