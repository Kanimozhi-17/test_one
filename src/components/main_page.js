import React, { useState } from 'react';
import design from '../styles/design.module.css'

// Component
const SaveSegment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [availableOptions, setAvailableOptions] = useState([
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ]);

  // Show or hide popup
  const togglePopup = () => setShowPopup(!showPopup);

  // Handle segment name input
  const handleSegmentNameChange = (e) => setSegmentName(e.target.value);

  // Add new schema dropdown
  const addNewSchemaDropdown = (selectedOption) => {
    setSelectedSchemas([...selectedSchemas, selectedOption]);
    setAvailableOptions(availableOptions.filter((option) => option.value !== selectedOption.value));
  };

  // Remove schema dropdown if edited
  const handleSchemaChange = (e, index) => {
    const updatedSchemas = [...selectedSchemas];
    const previousOption = updatedSchemas[index];
    const newOption = availableOptions.find((option) => option.value === e.target.value);

    if (newOption) {
      updatedSchemas[index] = newOption;
      setAvailableOptions([...availableOptions, previousOption].filter((option) => option.value !== e.target.value));
      setSelectedSchemas(updatedSchemas);
    }
  };

  // Reset options and submit data
  const saveSegment = () => {
    const data = {
      segment_name: segmentName,
      schema: selectedSchemas.map((schema) => ({ [schema.value]: schema.label })),
    };
    console.log('Data to be sent:', data);

    // Reset fields after saving
    setShowPopup(false);
    setSegmentName('');
    setSelectedSchemas([]);
    setAvailableOptions([
      { label: 'First Name', value: 'first_name' },
      { label: 'Last Name', value: 'last_name' },
      { label: 'Gender', value: 'gender' },
      { label: 'Age', value: 'age' },
      { label: 'Account Name', value: 'account_name' },
      { label: 'City', value: 'city' },
      { label: 'State', value: 'state' },
    ]);
  };

  return (
    <div>
      <button onClick={togglePopup} className={design.save_btn}>Save segment</button>
      {showPopup && (
        <div className={design.popup_pag}>
          <h3>Saving Segment</h3>
          <input
            type="text"
            placeholder="Enter segment name"
            value={segmentName}
            onChange={handleSegmentNameChange}
            className={design.text_box}
          />
          
            <div className={design.blue_box}>
            {selectedSchemas.map((schema, index) => (
              <select
                key={index}
                value={schema.value}
                onChange={(e) => handleSchemaChange(e, index)}
              >
                <option value={schema.value} className={design.drop_down}>{schema.label}</option>
                {availableOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            ))}
          </div>

          <div >
            
            <select
              defaultValue=""
              onChange={(e) =>
                e.target.value && addNewSchemaDropdown(JSON.parse(e.target.value))
              }
              className={design.drop_down}
            >
              <option value="" disabled>Add Schema to segment</option>
              {availableOptions.map((option) => (
                <option key={option.value} value={JSON.stringify(option)}>
                  {option.label}
                </option>
              ))}
            </select>



            <a href="#" onClick={() => addNewSchemaDropdown({})} className={design.add_scheme_btn}>  +Add new schema </a>
          </div>
         
          <button onClick={saveSegment} className={design.last_save_btn}>Save Segment</button>
        </div>
      )}
    </div>
  );
};

export default SaveSegment;