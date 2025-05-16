import React, { useState } from "react";

const JobApplicationForm = () => {
  const [step, setStep] = useState(1); // Step Tracker
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null); // Store Submitted Data

  const validate = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
    setStep(1); // Reset form to Step 1
    setFormData({ name: "", email: "", experience: "", resume: null });
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <div>
          <h2>Step 1: Personal Details</h2>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Experience</h2>
          <input type="text" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} />
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Upload Resume</h2>
          <input type="file" name="resume" onChange={handleFileChange} />
          <button onClick={handleBack}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}

      {/* Show Submitted Data */}
      {submittedData && (
        <div className="submitted-data">
          <h2>✅ Application Submitted</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Experience:</strong> {submittedData.experience}</p>
          <p><strong>Resume:</strong> {submittedData.resume ? submittedData.resume.name : "Not Uploaded"}</p>
        </div>
      )}
    </div>
  );
};

export default JobApplicationForm;
