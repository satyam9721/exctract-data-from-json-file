const fs = require('fs');

// Input JSON data
const inputData = [
  
];



const extractedData = inputData.map(entry => {
  const { email, phone_number,account_number} = entry;
  return {email, phone_number,account_number};
});

// Convert the extracted data to JSON format
const jsonData = JSON.stringify(extractedData, null, 2);

// Write the JSON data to a new file
fs.writeFileSync('./store/kiebit.json', jsonData, 'utf-8');

console.log('Extraction completed. The extracted data is stored in "extracted_data.json".');
