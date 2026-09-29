function Form() {
  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;